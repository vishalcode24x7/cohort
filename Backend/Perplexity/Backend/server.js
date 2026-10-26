import 'dotenv/config';
import app from './src/app.js';
import { connectDatabase } from './src/config/database.js';
import { generateResponse } from './src/services/ai.service.js';
import http from 'http';
import { initSocket } from './src/sockets/server.socket.js';

const port = Number(process.env.PORT ?? 3000);

const httpServer = http.createServer(app);

initSocket(httpServer)

try {
  await connectDatabase();

  httpServer.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
} catch (error) {
  console.error('Failed to start server:', error);
  process.exitCode = 1;
}

// testAi();Suman0325