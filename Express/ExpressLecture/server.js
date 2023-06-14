// import express and store express in a variable called express
const express = require("express");

const app = express();

// Give a port the express app will be listening for.
const port = 8000;
// port 21 - ftp
// port 22 - ssh
// port 80 - http
// port 443 - https
// total ports: 65535

// Allow the application to parse our information via json
app.use(express.json())

app.use(express.urlencoded({extended:true}))

const menuItems = [,
    {name:'Calamari',price:15.00},
    {name:'Maine Lobster Roll',price:19.00},
    {name:'Lasagna',price:20},
    {name:'Pizza',price:10},
    {name:'A5 Japanese Wagyu',price:99},
    {name:'Burger',price:12},
    {name:'Pepperoni Pizza',price:15.00},
    {name:'Sushi',price:19},
    {name:'Spaghetti',price:20},
]

//http://localhost:8000/api
app.get('/api',(request,response)=>response.json({message:"Hola!!"}))

app.get('/api/menu',(req,res)=>res.json({count:menuItems.length,results:menuItems}))

app.listen(port,()=>console.log(`Welcome to the Jungle`))