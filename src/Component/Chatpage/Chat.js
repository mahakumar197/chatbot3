import React, { useState, useRef, useEffect } from "react";
import Message from "./Message";
import { analyze } from "./Utils";
import TypingLoader from "./TypingLoader";
// import TypingLoader from "./TypingLoader"; // Import the TypingLoader component

export default function Chat() {
  const [message, setMessage] = useState([
    {
      message: "Hello, Welcome to Sword!!! may I know your name?",
    },
  ]);
  const [text, setText] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false); // New state variable
  const lastMessageRef = useRef(null);

  const handleOnSend = () => {
    let updatedList = [...message, { message: text, user: true }];
    if (updatedList.length > 2) {
      {
        isBotTyping && <TypingLoader text="Bot is typing..." speed={100} />;
      }
      setIsBotTyping(true);
      console.log("loader is working");
      const reply = analyze(text);
      setIsBotTyping(false);

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

    // Scroll to the last message with a timeout to ensure it happens after DOM update
    setTimeout(() => {
      scrollToBottom();
    }, 0);
  };

  const scrollToBottom = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView();
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [message]);

  return (
    <div>
      <div className="">
        <div className="chat-body">
          {message.length > 0 &&
            message.map((data, index) => (
              <Message
                key={index}
                ref={index === message.length - 1 ? lastMessageRef : null}
                {...data}
              />
            ))}

          {/* Display typing loader when the bot is typing */}
          <div className=" d-flex ">
            <input
              type="text"
              className="form-control"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-primary ms-2 sticky-bottom"
              onClick={handleOnSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
