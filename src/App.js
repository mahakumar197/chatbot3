import React from "react";
import logo from "./images.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <div className="main">
          hi
          <div className="chat-body d-flex flex-column">
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
              <label
                for="exampleFormControlInput1"
                className="footer-content  "
              >
                Welcome to Chat Bot!!!!!
              </label>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
