import express from 'express';
import { registerUser, allUsers } from '../controllers/reg.controller.js';


const router = express.Router();

router.post('/', registerUser);
router.get('/', allUsers);
export default router