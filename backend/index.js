import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import { connectToMongoDB } from './configs/db.js';
import registerUserController from './routes/reg.routes.js';
import { Server } from "socket.io";
import { createServer } from 'node:http';
import { ChatMessage } from './models/message.model.js';
import messageController from './routes/message.routes.js   '
import { statfsSync } from 'node:fs';
import { log } from 'node:console';
configDotenv();

const app = express();
const PORT = process.env.PORT;
app.use(express.json())
app.use(cors());
app.use('/register', registerUserController);
app.use('/message', messageController);
const server = createServer(app);
//Integrating socket.io
const io = new Server(server, { cors: { origin: "*" } });
let arr = [{ 'userId': 'ewewew' }];
let number = 0;
let allUsers = {};
io.on('connection', (socket) => {
    number++;
    console.log('number of users', number)
    io.on('disconnect', () => {
        console.log('user disconnected');
    })
    socket.join('room1');
    socket.to('ewewew').emit('weewe');
    console.log('a user connected');
    socket.on('message', (data) => {
        console.log({ data });
        let socketId = socket.id;
        let userId = data.userId;
        let userFound = allUsers[userId];
        if (!userFound) {
            console.log('came here', data);
            allUsers = { ...allUsers, [userId]: socketId };
            userFound = allUsers[userId];
            const message = new ChatMessage({
                sender: data?.userId,
                content: data?.content,
                attachments: data?.attachments,
                chat: data?.chat
            });
            console.log('user found', userFound, data);
            io.to(userFound).emit('recieved', data)
            message.save();
        }
        else {
            console.log('data got', data);
            const message = new ChatMessage({
                sender: data?.userId,
                content: data?.content,
                attachments: data?.attachments,
                chat: data?.chat
            });
            console.log('user found', userFound, data);
            io.to(userFound).emit('recieved', data)
            message.save();
            // socket.emit("recieved", data.data)
            //socket.emit('recieved', data.data);
        }
    })
    let userSocketMap = new Map();
    userSocketMap.set('userId', socket)
    function findSocketByUserID(userId) {
        // Retrieve the socket object associated with the user ID from your data structure (userSocketMap).
        return userSocketMap.get(userId);
    }

    socket.on("private-message", (data) => {
        console.log('message got ', data);
        const recipientSocket = findSocketByUserID(data.recipientId);
        if (recipientSocket) {
            // Send the private message to the recipient.
            const message = new ChatMessage({
                sender: data?.userId,
                content: data?.message,
                attachments: data?.attachments,
                chat: data?.chat
            });
            message.save();
            recipientSocket.emit('private-message', { senderId: data.userId, message: data.message });
        } else {

        }
    })
});



server.listen(PORT, async () => {
    try {
        await connectToMongoDB();
        console.log('Listening to the port', PORT);

    } catch (error) {
        console.log('some errror', error)
    }
    console.log('server running at http://localhost:', PORT);
});

// app.listen(PORT, async () => {


// });
