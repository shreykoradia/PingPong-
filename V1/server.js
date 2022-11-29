const express = require('express');
const path = require("path");
const http = require("http");
const PORT  = process.env.PORT  || 3002
const socketio = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const result = require('./utils');

// setting up the static folder 
app.use(express.static(path.join(__dirname, "public")));
app.get("/" ,(req , res)=>{
    res.sendFile(path.resolve(__dirname ,"public" , "home.html"))
})
app.get(`/play?roomCode=${result}`,(req,res)=>{
    res.sendFile(__dirname , "public" ,'game.html')
})

// creating users in the room
let users = [];

// io connection 
io.on('connection',socket=>{
    socket.on('join',(payload,callback)=>{
        let numberofUsersInRoom = getUsersInRoom(payload.room).length
        const {error , newUser} = addUser({
            id:socket.id,
            name:numberofUsersInRoom===0 ? 'Player 1' : 'Player 2',
            room:roomCode.makeid(4)
        })
        if(error)
        return callback(error)
        socket.join(newUser.room)
        io.to(newUser.room).emit('roomData' ,{room:newUser.room , users:getUsersInRoom(newUser.room)})
        socket.emit('currentUserData', {name:newUser.name})
        callback()
    })

    socket.on('initGameState', gameState => {
        const user = getUser(socket.id)
        if(user)
            io.to(user.room).emit('initGameState', gameState)
    })
    socket.on('updateGameState', gameState => {
        const user = getUser(socket.id)
        if(user)
            io.to(user.room).emit('updateGameState', gameState)
    })
    socket.on('disconnect', () => {
        const user = removeUser(socket.id)
        if(user)
            io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)})
    })
})

// server connection while production 
if(process.env.NODE_env == 'production'){
    //setting up the statid folder
    app.use(express.static(path.join(__dirname,"public")))
    app.get("*",(req , res)=>{
        res.sendFile(path.resolve(__dirname, 'public', "home.html"))
    })
}
// connecting up the server 
server.listen(PORT , ()=>{
    console.log(`server running on ${PORT}`)
})

