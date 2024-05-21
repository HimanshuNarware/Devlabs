import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleHello=() => {
    const message = createChatBotMessage('Hello , I am DevLabs ChatBot , Type your query..');
    updateState(message,handleHello);
  }

  const websiteDetails = () => {
    const message = createChatBotMessage('DevLabs is a website where you can search for free tools that are useful for your daily needs. This application is created by the incredible open-source community. For Further Details visit to our About Us section.');
    updateState(message,websiteDetails);
  }

  const contactUs=()=>{
    const message = createChatBotMessage('Contact details can be viewed on our Contact Section which is available in footer section, Feel free to Contact us.');
    updateState(message,contactUs);
  }

  const contribute=()=>{
    const message = createChatBotMessage('Contribution details can be viewed on our Open Source Section which is available in footer section, Feel free to Contribute in our Project.');
    updateState(message,contribute);
  }

  const greeting=()=>{
    const message = createChatBotMessage('Happy to help you. Visit again to our webite. Thank You!!');
    updateState(message,greeting);
  }

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