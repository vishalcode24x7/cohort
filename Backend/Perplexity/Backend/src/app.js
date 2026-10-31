import cookieParser from 'cookie-parser';
import express from 'express';
import authRouter from './routes/auth.routes.js';
import chatRouter from './routes/chat.routes.js';
import morgan from "morgan"
import cors from 'cors'
import { corsOrigin } from './config/cors.js'

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"));

app.use(cors({
  origin: corsOrigin,
  credentials: true
}))

app.use(express.static("./public"))

app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

app.use("/api/auth", authRouter)
app.use("/api/chats", chatRouter)

export default app;
