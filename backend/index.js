import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import { connectToMongoDB } from './configs/db.js';
import registerUserController from './routes/reg.routes.js';

configDotenv();

const app = express();
const PORT = process.env.PORT;
app.use(express.json())
app.use(cors());
app.use('/register', registerUserController);
app.listen(PORT, async () => {
    try {
        await connectToMongoDB();
        console.log('Listening to the port', PORT);

    } catch (error) {
        console.log('some errror', error)
    }

});
