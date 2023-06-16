//Step 1- import all dependencies
const express = require('express');
const cors = require("cors");
require('dotenv').config();
const app = express();
const port = process.env.PORT;

//Step 2- configure express
app.use(express.json(),express.urlencoded({extended:true}),cors());

require('./config/mongoose.config')

require('./routes/product.routes')(app)

//Step 4 - listen on a port and provide some feedback
app.listen(port,()=>console.log("Product Manager"))