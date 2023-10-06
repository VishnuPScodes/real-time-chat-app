
import './chat.css';
import React from 'react'
import { BsLink45Deg } from 'react-icons/bs'
import { IoSend } from 'react-icons/io5'
import io from 'socket.io-client';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { UseSelector, useSelector } from 'react-redux';
function Chat() {
    const [socket, setSocket] = useState(null);
    const [recipientId, setRecipientId] = useState(''); // Replace with the recipient's user ID
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState('');
    const userId = useSelector((state) => state?.userId);
    const [send, setSend] = useState(true)
    const [myMessages, setMyMessages] = useState([{
        user: 1,
        message: "hey"
    },
    {
        user: 2,
        message: "how are you ?"
    },
    {
        user: 1,
        message: "Iam fine, what about you?"
    },
    {
        user: 2,
        message: "good"
    }])
    useEffect(() => {
        // axios.get('http://localhost:3003').then((res) => {
        //     setRecipientId(res.data._id);
        // })
        // Connect to the Socket.io server
        console.log('hitt');
        const newSocket = io('http://localhost:3003'); // Replace with your server's URL
        setSocket(newSocket);
        newSocket.on("recieved", (data) => {
            console.log('recieved', data)
        })
        return () => {
            // Disconnect the socket when the component unmounts
            if (newSocket) {
                newSocket.disconnect();
            }
        };
    }, [send]);

    const handleSendMessage = () => {
        socket.emit('message', { recipientId, message });
        setMessage('');
        setSend(!send);
        alert('message sent');
        if (socket && recipientId && message) {
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
            <div className="message_display">
                {myMessages.map((e) => {
                    if (e.user == 1) {
                        return <div className="single_message">{e.message}</div>
                    }
                    return <div className="single_message2">{e.message}</div>
                })}

            </div>
            <div className="message_box">

                <div className="attatchment">
                    <BsLink45Deg className='icon' />
                </div>
                <input onChange={(e) => setMessage(e.target.value)} type="text" value={message} name="" placeholder='Type a message' id="" />
                <div className="send_btn" onClick={handleSendMessage}  >
                    <IoSend className='send-icon' />
                </div>
            </div>
        </div>
    )
}

export default Chat