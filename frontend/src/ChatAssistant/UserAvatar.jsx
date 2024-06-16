import userAvatar from "../assets/userAvatar.jpg"
import React from 'react'
import "../ChatAssistant/ChatAssistant.css"

export default function Avatar() {
  return (
    <div>
      <img
        className="userAvatar"
        src={userAvatar}
        alt="useravatar_pic"
      />
    </div>
  )
}