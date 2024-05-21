import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from "../ChatAssistant/Avatar";
import UserAvatar from "../ChatAssistant/UserAvatar"
const config = {
    botName: "DevLabs ChatBot",
    initialMessages: [createChatBotMessage(`Welcome to DevLabs! Explore our Website 🙌`)],
    customComponents:{
        botAvatar: (props) => <Avatar {...props} />,
        userAvatar: (props) => <UserAvatar {...props} />,
        header: () => <div style={{ backgroundColor: 'rgb(153, 189, 230)', 
        padding: "12px", 
        borderRadius: "3px",
        textAlign:"center" ,
        display:"flex" }}>
            DevLabs ChatBot
        </div>
    },
}
export default config;