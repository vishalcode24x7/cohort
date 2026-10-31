
import { Server } from "socket.io"
import { corsOrigin } from "../config/cors.js"

let io;

export function initSocket(httpServer) {
    io = new Server(httpServer, {
        cors: {
            origin: corsOrigin,
            credentials: true,
        }
    })

    console.log("Socket io server is running");
    
    io.on("connection", (socket) => {
        console.log("A user connected : " + socket.id);

    })
}

export function getIO() {

    if (!io) {
        throw new Error("socket.io not initialized")
    }

    return io
}