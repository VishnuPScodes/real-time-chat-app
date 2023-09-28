
import './chat.css';
import React from 'react'
import { BsLink45Deg } from 'react-icons/bs'
import { IoSend } from 'react-icons/io5'
import io from 'socket.io-client';
import { useState, useEffect } from 'react';
import axios from 'axios'
function Chat() {
    const [socket, setSocket] = useState(null);
    const [recipientId, setRecipientId] = useState(''); // Replace with the recipient's user ID
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState('');


    useEffect(() => {
        axios.get('http://localhost:3003').then((res) => {
            setRecipientId(res.data._id);
        })
        // Connect to the Socket.io server
        const newSocket = io('http://localhost:3003'); // Replace with your server's URL
        setSocket(newSocket);

        return () => {
            // Disconnect the socket when the component unmounts
            if (newSocket) {
                newSocket.disconnect();
            }
        };
    }, []);

    const handleSendMessage = () => {
        if (socket && recipientId && message) {
            socket.emit('private-message', { recipientId, message });
            setMessage('');
        }
    };

    // useEffect(() => {
    //     if (socket) {
    //         socket.on('private-message', (data) => {
    //             setMessages([...messages, data]);
    //         });
    //     }
    // }, [socket, messages]);
    return (
        <div className='chat-container'>
            <div className="message_box">
                <div className="attatchment">
                    <BsLink45Deg className='icon' />
                </div>
                <input onChange={(e) => setMessage(e.target.value)} type="text" name="" placeholder='Type a message' id="" />
                <div className="send_btn" onClick={handleSendMessage}>
                    <IoSend className='send-icon' />
                </div>
            </div>
        </div>
    )
}

export default Chat