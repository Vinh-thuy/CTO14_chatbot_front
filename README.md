# 🛠️ React-Powered Local Chatbot with Ollama & LLM

## 🚀 Overview

This project is a real-time chatbot built with **React**, powered by **Ollama** running locally with a Large Language Model (LLM). The entire application, including the LLM model, runs on your local machine, ensuring full control over data and performance.

## 🎯 Features

- 💬 **Real-time Chat** with AI responses
- 🤖 **Dynamic LLM Model** support
- 🧠 **Thinking & Typing Indicators** for better UX
- 🌟 **Smooth Animations** using Framer Motion
- 🎨 **Bootstrap UI** for a modern chat interface
- 🏠 **Runs Fully Locally** – No external API calls required!

---

## ⚡ Setup Guide

### 1️⃣ Install & Set Up Ollama

To run the chatbot locally, you'll need **Ollama**, a lightweight LLM server.

#### 🛠️ Install Ollama

Download Ollama from the official website: 🔗 [https://ollama.com/](https://ollama.com/)

Follow the installation steps based on your OS:

- **Windows**: Run the installer
- **Mac**: Install via `brew install ollama`
- **Linux**: Follow the Linux-specific installation guide

#### 📥 Pull & Serve an LLM Model

Pull and serve a model with:

```bash
ollama pull <model_name>  # e.g., ollama pull llama3.2
ollama serve
```

Once running, Ollama will be available at `http://127.0.0.1:11434/api/chat`.

---

### 2️⃣ Run the React App

#### 📦 Install Dependencies

Ensure you have **Node.js** and **npm** installed. Then, clone the repo and install dependencies:

```bash
git clone <repo-url>
cd <project-directory>
npm install
```

#### ▶️ Start the App

```bash
npm start
```

Your chatbot should now be running at `http://localhost:3000/`!

---

## 🔧 Configuration

- Change the model in `App.js` by modifying the `ollamaModel` variable
- Customize UI elements using Bootstrap classes and Framer Motion for animations

---

## 🎉 Enjoy chatting with your AI assistant, running entirely on your machine! 🚀

<p align="center">
    <img src="https://github.com/Priom7/deekseek-React-Chat-App/blob/main/productUI.png" width="400" alt="working gif">
</p>
