import express from 'express';
import { addMessage, getAllMessagesPerUser } from '../controllers/messages.controller.js';


const router = express.Router();

console.log('sender got');
router.post('/', addMessage);
router.get('/:id', getAllMessagesPerUser)
export default router;
