
import './chat.css';
import React, { useId, useRef } from 'react'
import { BsLink45Deg } from 'react-icons/bs'
import { IoSend } from 'react-icons/io5'
import { io } from 'socket.io-client';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux';
// export const socketRef.current = io('http://localhost:3003', {
//     autoConnect: false
// });
function Chat() {
    // const [socketRef.current, setSocket] = useState(null);
    const [recipientId, setRecipientId] = useState(''); // Replace with the recipient's user ID
    const [message, setMessage] = useState('');
    const socketRef = useRef();
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
    const userMongooseID = useSelector((state) => state.userId);
    //getting user's past messages
    useEffect(() => {
        axios.get(`http://localhost:3003/messages/${userMongooseID}`);
    }, [])
    useEffect(() => {
        // axios.get('http://localhost:3003').then((res) => {
        //     setRecipientId(res.data._id);
        // })
        // Connect to the Socket.io server
        const newSocket = io('http://localhost:3003');
        socketRef.current = newSocket// Replace with your server's URL

        return () => {
            // Disconnect the socketRef.current when the component unmounts
            socketRef.current.disconnect();
        };
    }, []);
    useEffect(() => {
        console.log({ x: socketRef.current })
    }, [socketRef?.current])
    useEffect(() => {
        console.log({ we: "ewew", sid: socketRef.current.id })
        socketRef.current.on("recieved", (data) => {
            setMyMessages([...myMessages, { user: 1, message: data?.content }])
            console.log('recieved', data)
        });
    }, [socketRef.current]);
    // console.log('meesssage', myMessages);
    const handleSendMessage = () => {
        let datatosend = {
            content: message,
            sender: "650d4cc1bea399dae5ea7ed8",
            reciever: "650d4cc1bea399dae5ea7ed8",
            recipientId,
            attatchments: [],
            chat: "650d4cc1bea399dae5ea7ed8"
        }
        socketRef.current.emit('message', datatosend);
        setMessage('');
        setSend(!send);
        // alert('message sent');
        if (socketRef.current && recipientId && message) {
        }
    };
    // useEffect(() => {
    //     if (socketRef.current) {
    //         socketRef.current.on('private-message', (data) => {
    //             setMessages([...messages, data]);
    //         });
    //     }
    // }, [socketRef.current, messages]);
    return (
        <div className='chat-container' ref={socketRef}>
            <div className="header_nav">ee</div>
            <div className="message_display">
                {myMessages.map((e) => {
                    if (e.user == 1) {
                        return <div key={e.message} className="single_message">{e.message}</div>
                    }
                    return <div key={e.message} className="single_message2">{e.message}</div>
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