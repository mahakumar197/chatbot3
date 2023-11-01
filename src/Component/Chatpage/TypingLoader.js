import React, { useState, useEffect } from "react";

const TypingLoader = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i <= text.length; i++) {
        setDisplayText(text.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    };

    typeText();
  }, [text, speed]);

  return <div>{displayText}</div>;
};

export default TypingLoader;
