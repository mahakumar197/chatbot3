import React from "react";
import logo from "../Chatpage/8.jpg";
import logoRobot from "../Chatpage/9.jpg";
// import { ChatDots, PersonFill } from "react-bootstrap-icons";

export default function Message(props, text) {
  console.log(props.text, ":pro");
  return (
    <div className={`d-flex mb-4 ${props.user && "justify-content-end"}`}>
      {props.user ? (
        <span className="message-right">
          <span className="message-text">{props.message}</span>
          {/* <PersonFill className="b-icons" /> */}
          <img src={logoRobot} className="App-logo1" alt="logo" />
        </span>
      ) : (
        <span className="message-left">
          {/* <ChatDots className="b-icons" /> */}
          <img src={logo} className="App-logo1" alt="logo" />
          <span className="message-text">{props.message}</span>
        </span>
      )}
    </div>
  );
}
