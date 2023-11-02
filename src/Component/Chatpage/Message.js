import React from "react";
import logo from "../Chatpage/8.jpg";
import logoRobot from "../Chatpage/9.jpg";

export default function Message(props, text) {
  console.log(props.text, ":pro");
  return (
    <div className={`d-flex mb-4 ${props.user && "justify-content-end"}`}>
      {props.user ? (
        <span className="message-right d-flex align-items-center">
          <span className="message-text ms-2">{props.message}</span>

          <img src={logoRobot} className="App-logo1" alt="logo" />
        </span>
      ) : (
        <span className="message-left d-flex align-items-center">
          <img src={logo} className="App-logo1" alt="logo" />
          <span className="message-text ms-2">{props.message}</span>
        </span>
      )}
    </div>
  );
}
