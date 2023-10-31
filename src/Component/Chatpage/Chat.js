import React, { useState } from "react";
import Message from "./Message";
import { analyze } from "./Utils";

export default function Chat() {
  const [message, setMessage] = useState([
    {
      message: "Hello, Welcome to Sword!!! may i know your name?",
    },
  ]);
  const [text, setText] = useState("");
  const handleOnSend = () => {
    let updatedList = [...message, { message: text, user: true }];
    if (updatedList.length > 2) {
      const reply = analyze(text);
      updatedList = [...updatedList, { message: reply }];
    } else {
      updatedList = [
        ...updatedList,
        {
          message: `hi, ${text}`,
        },
        {
          message: "how may I help you?",
        },
      ];
    }
    setMessage(updatedList);
    setText("");
  };

  // setTimeout(() => {
  //   document.querySelector("").scrollIntoView();
  // }, 1);
  return (
    <div>
      <div className="">
        <div className="chat-body">
          {message.length > 0 && message.map((data) => <Message {...data} />)}
          <div className=" d-flex">
            <input
              type="text"
              className="form-control"
              value={text}
              // onKeyPress={handleKeyPress}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              type="submit"
              class="btn btn-primary ms-2"
              onClick={handleOnSend}
            >
              Send
            </button>
          </div>

          {/* <div className="footer-content">Chat Bot!!!!!</div> */}
        </div>
      </div>
    </div>
  );
}
