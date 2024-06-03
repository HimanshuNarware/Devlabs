import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../ChatBot/config.jsx";
import MessageParser from "../ChatBot/MessageParser";
import ActionProvider from "../ChatBot/ActionProvider";
import "./ChatAssistant.css";
import chatbotLogo from "../assets/chatbotLogo.jpeg";
import chatbotLogo1 from "../assets/logo1.png";

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const closeChatbot = () => {
    setIsOpen(false);
  };

  return (
    <div className='chatbot'>
      <img
        className='Logo'
        src={chatbotLogo}
        alt='Logo'
        onClick={toggleChatbot}
        onMouseEnter={() => (document.querySelector(".Logo").src = chatbotLogo1)}
        onMouseLeave={() => (document.querySelector(".Logo").src = chatbotLogo)}
      />
      {isOpen && (
        <div className='chatbot-wrapper'>
          <button className="close-button" onClick={closeChatbot}>
            X
          </button>
          <div className="chatbot-animation">
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;
