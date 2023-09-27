
import './chat.css';
import React from 'react'
import { BsLink45Deg } from 'react-icons/bs'
import { IoSend } from 'react-icons/io5'
function Chat() {
    return (
        <div className='chat-container'>
            <div className="message_box">
                <div className="attatchment">
                    <BsLink45Deg className='icon' />
                </div>
                <input type="text" name="" placeholder='Type a message' id="" />
                <div className="send_btn">
                    <IoSend className='send-icon' />
                </div>
            </div>
        </div>
    )
}

export default Chat