import app from './src/app.js'
import {createServer} from 'http'
import { Server } from 'socket.io';

const httpServer = createServer(app)
const io = new Server(httpServer, );

io.on("connection", (Socket) =>{
    console.log("new connection created");
    
    Socket.on("message", (msg) => {
        console.log("user fired message event");
        console.log(msg);
        io.emit("abc", msg)
    })
}) 

httpServer.listen(3000, ()=>{
    console.log("Server is running on port no 3000");
    
})


//task
//socket.emit()
//socket.broadcast().emit()
//io.emit()