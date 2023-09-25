import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import { connectToMongoDB } from './configs/db.js';
import registerUserController from './routes/reg.routes.js';
import { Server } from "socket.io";
import { createServer } from 'node:http';

configDotenv();

const app = express();
const PORT = process.env.PORT;
app.use(express.json())
app.use(cors());
app.use('/register', registerUserController);
const server = createServer(app);
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
