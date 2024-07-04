import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

const ActionProvider = ({ setState, children }) => {
  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleHello = () => {
    const message = createChatBotMessage('Hello, I am DevLabs ChatBot. Type your query..');
    updateState(message);
  };

  const websiteDetails = () => {
    const message = createChatBotMessage('DevLabs is a website where you can search for free tools that are useful for your daily needs. This application is created by the incredible open-source community. For further details, visit our About Us section.');
    updateState(message);
  };

  const contactUs = () => {
    const message = createChatBotMessage('Contact details can be viewed in our Contact section, which is available in the footer section. Feel free to contact us.');
    updateState(message);
  };

  const contribute = () => {
    const message = createChatBotMessage('Contribution details can be viewed in our Open Source section, which is available in the footer section. Feel free to contribute to our project.');
    updateState(message);
  };

  const greeting = () => {
    const message = createChatBotMessage('Happy to help you. Visit again to our website. Thank you!');
    updateState(message);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            websiteDetails,
            contactUs,
            contribute,
            greeting,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
