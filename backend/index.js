import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';

configDotenv();

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.listen(PORT, () => {
    console.log('Listening to the port', PORT);
});
