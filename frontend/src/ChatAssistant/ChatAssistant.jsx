import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../ChatBot/config.jsx";
import MessageParser from "../ChatBot/MessageParser";
import ActionProvider from "../ChatBot/ActionProvider";
import "./ChatAssistant.css";
import React, { useState, useRef, useEffect } from "react";
import chatbotLogo from "../assets/chatbotLogo.jpeg";

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatbotRef = useRef(null);

  // Handling the outside click to close the chatbot
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [chatbotRef]);

  // Toggle chatbot visibility
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot" ref={chatbotRef}>
      {/* Render the chatbot component only if isOpen is true */}
      {isOpen && (
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      )}
      {/* Render the chatbot logo only if isOpen is false */}
      {!isOpen && (
        <img
          className="Logo"
          src={chatbotLogo}
          alt="Logo"
          onClick={toggleChatbot}
        />
      )}
    </div>
  );
};

export default ChatAssistant;
