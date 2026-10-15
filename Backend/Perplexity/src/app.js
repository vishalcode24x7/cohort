import cookieParser from 'cookie-parser';
import express from 'express';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

export default app;
