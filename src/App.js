import ChatApp from "./ChatApp";
import { Row, Col } from "react-bootstrap";
import "./App.css";

function App() {
  const ollamaModel = "llama3.2"; // Récupéré dynamiquement du ChatApp

  return (
    <div className="App" style={{ margin: "20px", padding: "20px" }}>
      <ChatApp model={ollamaModel} />

      <Row className="mt-4">
        <Col md={12}>
          <small>🧠 Base Model: {ollamaModel}</small>
        </Col>
      </Row>
    </div>
  );
}

export default App;
