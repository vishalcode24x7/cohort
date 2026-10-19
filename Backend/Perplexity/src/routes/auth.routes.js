import { Router } from 'express';
import { register, verifyEmail, login, getMe } from '../controllers/auth.controller.js';
import { registerValidate, loginValidator } from '../validators/auth.validator.js';
import { authUser } from  '../middleware/auth.middleware.js';

const authRouter = Router();

authRouter.post('/register', registerValidate, register);

authRouter.post('/login', loginValidator, login);

authRouter.get('/get-me', authUser , getMe);

authRouter.get('/verify-email', verifyEmail);

export default authRouter;