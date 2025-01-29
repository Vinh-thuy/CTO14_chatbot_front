import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ChatApp() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isThinking, setIsThinking] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isThinking]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);
        setIsThinking(false);

        try {
            const response = await fetch("http://127.0.0.1:11434/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    model: "deepseek-r1:1.5b",
                    messages: [...messages, userMessage],
                    stream: true,
                }),
            });

            const reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8");
            let done = false;
            let messageContent = "";
            let reasoningContent = "";
            let chunks = [];
            while (!done) {
                const { value, done: doneReading } = await reader.read();
                done = doneReading;

                const chunkContent = decoder.decode(value, { stream: true });
                const data = JSON.parse(`[${chunkContent.replace(/}{/g, "},{")}]`);
                messageContent += data.map((d) => d.message?.content).join("");

                if (chunkContent.startsWith("<think>")) {
                    setIsThinking(true);
                    reasoningContent += chunkContent.replace("<think>", "");
                } else if (chunkContent.startsWith("</think>")) {
                    setIsThinking(false);
                    reasoningContent += chunkContent.replace("</think>", "");
                } else if (isThinking) {
                    reasoningContent += chunkContent;
                }
            }

            setMessages((prev) => {
                const assistantMessage = {
                    role: "assistant",
                    content: messageContent.replace(/<think>.*?<\/think>/gs, ""),
                    reasoning: reasoningContent,
                };
                return [...prev, assistantMessage];
            });
        } catch (error) {
            console.error("Error streaming response:", error);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <div className="container py-4">
            <h1>
                <i className="bi bi-chat-dots-fill"></i> Chat with your Custom agent 🤖
            </h1>

            <Card className="shadow-sm mb-4" style={{ maxHeight: "40vh", overflowY: "auto", minHeight: "40vh" }}>
                <Card.Body>
                    {messages.map((msg, index) => (
                        <motion.div
                            key={index}
                            className={`d-flex mb-3 ${msg.role === "user" ? "justify-content-end" : "justify-content-start"}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card
                                className={`p-3 rounded shadow-sm ${msg.role === "user" ? "bg-primary text-white" : "bg-light text-dark"}`}
                                style={{ maxWidth: "70%" }}
                            >
                                <p>{msg.content}</p>
                                {msg.reasoning && <p className="text-secondary"><i className="bi bi-brain"></i> {msg.reasoning}</p>}
                            </Card>
                        </motion.div>
                    ))}
                    {isTyping && (
                        <motion.div
                            className="d-flex justify-content-start mb-3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="p-3 rounded bg-light shadow-sm text-secondary">
                                <i className="bi bi-three-dots"></i> Typing...
                            </Card>
                        </motion.div>
                    )}
                    {isThinking && (
                        <motion.div
                            className="d-flex justify-content-start mb-3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="p-3 rounded bg-light shadow-sm text-secondary">
                                <i className="bi bi-brain"></i> Thinking...
                            </Card>
                        </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                </Card.Body>
            </Card>

            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button
                    className="btn btn-primary"
                    onClick={sendMessage}
                    disabled={!input.trim()}
                >
                    <i className="bi bi-send"></i>
                </button>
            </div>
        </div>
    );
}
