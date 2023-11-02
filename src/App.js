import React from "react";
import logo from "./6.png";
import Chat from "./Component/Chatpage/Chat";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header d-flex justify-content-center">
        {/* <span className="chat-bot-label">ChatBot</span> */}
        <img src={logo} className="App-logo mt-5" alt="logo" />
      </header>

      <Chat />
    </div>
  );
}

export default App;
