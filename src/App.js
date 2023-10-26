import React from "react";
import logo from "./images.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bootstrap";
import Chat from "./Component/Chatpage/Chat";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        hi
      </header>
      <Chat />
    </div>
  );
}

export default App;
