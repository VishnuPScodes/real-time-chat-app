import express from 'express';
import { userSignIn } from '../controllers/login.controller.js';


const router = express.Router();


router.post('/', userSignIn);

export default router;