import express from 'express';
import { addMessage } from '../controllers/messages.controller.js';


const router = express.Router();


router.post('/', addMessage);

export default router;
