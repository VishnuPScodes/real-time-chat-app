import express from 'express';
import { registerUser, allUsers } from '../controllers/reg.controller.js';
import { regValidator } from '../validators/reg.validator.js';


const router = express.Router();

router.post('/', regValidator, registerUser);
router.get('/', allUsers);
export default router