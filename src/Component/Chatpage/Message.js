import React from "react";

import { ChatDots, PersonFill } from "react-bootstrap-icons";

export default function Message(props) {
  console.log(props, ":pro");
  return (
    // <div className={'d-flex mb-4 ${props.user && 'justify-content-end'}'}>
    <div className={`d-flex mb-4 ${props.user && "justify-content-end"}`}>
      {props.user ? (
        <span className="message-right">
          <span className="message-text">{props.message}</span>
          <PersonFill className="b-icons" />
        </span>
      ) : (
        <span className="message-left">
          <ChatDots className="b-icons" />
          <span className="message-text">{props.message}</span>
        </span>
      )}
    </div>
  );
}
