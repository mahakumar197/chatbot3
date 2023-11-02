import React, { useState, useRef, useEffect } from "react";
import Message from "./Message";
import { analyze } from "./Utils";

export default function Chat() {
  const [message, setMessage] = useState([
    {
      message:
        "Welcome to Sword! I'm here to assist you. may I know your name?",
    },
  ]);
  const [text, setText] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const lastMessageRef = useRef(null);

  const handleOnSend = () => {
    let updatedList = [...message, { message: text, user: true }];
    if (updatedList.length > 2) {
      setIsBotTyping(true);
      setTimeout(() => {
        const reply = analyze(text);
        setIsBotTyping(false);
        updatedList = [...updatedList, { message: reply }];
        setMessage(updatedList);
      }, 2000);
    } else {
      updatedList = [
        ...updatedList,
        {
          message: `Hi, ${text}`,
        },
        {
          message: "Im here to help you?",
        },
      ];
    }
    setMessage(updatedList);
    setText("");
  };

  const scrollToBottom = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [message]);

  return (
    <div>
      <div className="chatt">
        <div
          className="chat-body"
          style={{ overflowY: "auto", maxHeight: "650px" }}
        >
          {message.length > 0 &&
            message.map((data, index) => (
              <Message
                key={index}
                ref={index === message.length - 1 ? lastMessageRef : null}
                {...data}
              />
            ))}
          {isBotTyping && (
            // <div className="message-left">
            <div className="typing-indicator">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            // </div>
          )}

          <div className="d-flex mt-3">
            <input
              type="text"
              className="form-control"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-primary ms-2"
              onClick={handleOnSend}
            >
              Send
            </button>
          </div>
          <div ref={lastMessageRef}></div>
        </div>
      </div>
    </div>
  );
}
