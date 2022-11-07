const express = require('express');
const path = require("path");
const http = require("http");
const PORT  = process.env.PORT  || 3002
const socketio = require("socket.io");
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
    // console.log("New Connection Found ")
})