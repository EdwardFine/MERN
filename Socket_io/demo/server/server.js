//Step 1- import all dependencies
const express = require('express');
const cors = require("cors");
require('dotenv').config();
const app = express();
const port = process.env.PORT;

//Step 2- configure express
app.use(express.json(),express.urlencoded({extended:true}),cors());

require('./config/mongoose.config')

//require('./routes/product.routes')(app)

//Step 4 - listen on a port and provide some feedback
const server = app.listen(port,()=>console.log("Socket io lecture"))

const io = require('socket.io')(server,{cors:true})
io.on("connection", socket=>{
    console.log(socket.id)
    socket.on("chat",(client_input)=>{
        console.log("Got a message", client_input);
        io.emit("Post Chat",client_input);
    })
})