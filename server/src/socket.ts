import { Server, Socket } from 'socket.io';

const socketConnect = (io: Server) => {

    io.on('connection', (socket: Socket) => {
        socket.on('disconnect', () => {
            console.log("Socket is disconnected");
        })
        
    })

}

export default socketConnect