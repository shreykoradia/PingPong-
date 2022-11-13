const express = require('express');
const path = require("path");
const http = require("http");
const PORT  = process.env.PORT  || 3002
const socketio = require("socket.io");
const { getUsersInRoom } = require('./user');
const app = express();
const server = http.createServer(app);
const io = socketio(server);

// setting up the static folder 
app.use(express.static(path.join(__dirname, "public")));

// connecting up the server 
server.listen(PORT , ()=>{
    console.log(`server running on ${PORT}`)
})

// handling the socket connection 
io.on('connection' , (socket)=>{
    socket.on('join',(playload , callback)=>{
        let numberOfUsersInRoom = getUsersInRoom(playload.room).length 

        const {error , newUser} = addUser({
            id : socket.id,
            name : numberOfUsersInRoom == 0 ? Player1 : Player2,
            room : playload.room
        }) 

        if(error)
        return callback(error)

        socket.join(newUser.room)

        io.to(newUser.room).emit('roomData', {room: newUser.room, users: getUsersInRoom(newUser.room)})
        socket.emit('currentUserData', {name: newUser.name})
        callback()

    })
})