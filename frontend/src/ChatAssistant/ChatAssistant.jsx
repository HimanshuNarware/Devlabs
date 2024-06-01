import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../ChatBot/config.jsx";
import MessageParser from "../ChatBot/MessageParser";
import ActionProvider from "../ChatBot/ActionProvider";
import "./ChatAssistant.css";
import React, { useState } from "react";
import chatbotLogo from "../assets/chatbotLogo.jpeg";
import chatbotLogo1 from "../assets/logo1.png";

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

        <img className="Logo" src={chatbotLogo} alt="Logo" onClick={toggleChatbot} />}
        <div className={`${isOpen?"chatbot-animation":"chatbot-close-animation"}`}>

  const closeChatbot = () => {
    setIsOpen(false);
  };

  return (
    <div className="chatbot">
      <img
        className="Logo"
        src={chatbotLogo}
        alt="Logo"
        onClick={toggleChatbot}
        onMouseEnter={() =>
          (document.querySelector(".Logo").src = chatbotLogo1)
        }
        onMouseLeave={() => (document.querySelector(".Logo").src = chatbotLogo)}
      />
      {isOpen && (

        <div
          className={`${
            isOpen ? "chatbot-animation" : "chatbot-close-animation"
          }`}
        >
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>

        <div>
          <img
            className="Logo"
            src={chatbotLogo}
            alt="Logo"
            onClick={toggleChatbot}
          />
          <button className="close-button" onClick={closeChatbot}>
            X
          </button>
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

      </div>

    );
  }

  
export default ChatAssistant;

      )}
    </div>
  );
};

export default ChatAssistant;
