
import { Server } from "socket.io"

let io;

export function initSocket(httpServer) {
    io = new Server(httpServer, {
        cors: {
            origin: "http://localhost:5173",
            credentials: true,
        }
    })

    console.log("Socket io server is running");
    
    io.on("connetion", (socket) => {
        console.log("A user connected : " + socket.id);

    })
}

export function getIO() {

    if (!io) {
        throw new Error("socket.io not initialized")
    }

    return io
}