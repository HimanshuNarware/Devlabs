import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
import config from '../ChatBot/config.jsx';
import MessageParser from '../ChatBot/MessageParser';
import ActionProvider from '../ChatBot/ActionProvider';
import "./ChatAssistant.css"
import React, { useState } from 'react';
import chatbotLogo from '../assets/chatbotLogo.jpeg'

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };
    return (
      <div className="chatbot">
        <img className="Logo" src={chatbotLogo} alt="Logo" onClick={toggleChatbot} />
      {isOpen && 
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />}
      </div>
    );
  }
  
export default ChatAssistant;