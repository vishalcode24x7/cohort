import { Router } from 'express';
import { register } from '../controllers/auth.controller.js';
import { registerValidate } from '../validators/auth.validator.js';

const authRouter = Router();

authRouter.post('/register', registerValidate, register);

export default authRouter;