import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../ChatBot/config.jsx";
import MessageParser from "../ChatBot/MessageParser";
import ActionProvider from "../ChatBot/ActionProvider";
import chatbotLogo from "../assets/chatbotLogo.jpeg";
import chatbotLogo1 from "../assets/logo1.png";
import "./ChatAssistant.css";

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='chatbot'>
      <img
        className='Logo'
        src={chatbotLogo}
        alt='Logo'
        onClick={toggleChatbot}
        onMouseEnter={() =>
          (document.querySelector(".Logo").src = chatbotLogo1)
        }
        onMouseLeave={() => (document.querySelector(".Logo").src = chatbotLogo)}
      />
      <div
        className={`${
          isOpen ? "chatbot-animation" : "chatbot-close-animation"
        }`}
      >
        {isOpen && (
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        )}
      </div>
    </div>
  );
};

export default ChatAssistant;
