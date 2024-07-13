import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from "../ChatAssistant/Avatar";
import UserAvatar from "../ChatAssistant/UserAvatar"
import "../ChatAssistant/ChatAssistant.css";

const config = {
    botName: "DevLabs ChatBot",
    initialMessages: [createChatBotMessage(`Welcome to DevLabs! Explore our Website 🙌`)],
    customComponents:{
        botAvatar: (props) => <Avatar {...props} />,
        userAvatar: (props) => <UserAvatar {...props} />,
        header: () => <div className="chatbot-header" style={{ backgroundColor: '#8b5cf6', 
        padding: "12px", 
        borderRadius: "15px 15px 5px 5px",
        textAlign:"center" ,
        fontWeight: '20px',
        height:"50px",
        display:"flex" }}>
            <p>DevLabs ChatBot</p>
        </div>
    },
}
export default config;