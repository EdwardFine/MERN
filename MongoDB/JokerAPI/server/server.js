//Step 1- import all dependencies
const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

//Step 2- configure express
app.use(express.json(),express.urlencoded({extended:true}));

require('./config/mongoose.config')

//One Way
const Routes = require("./routes/jokes.routes")
Routes(app)

//Second way
// require('./routes/users.routes')(app)

//Step 4 - listen on a port and provide some feedback
app.listen(port,()=>console.log("Joker API"))