// import express and store express in a variable called express
const express = require("express");

//Initialize the express application and store it in a variable called 'app'
const app = express();

// Give a port the express app will be listening for, typically 8000.
const port = 8000;
// port 21 - ftp
// port 22 - ssh
// port 80 - http
// port 443 - https
// total ports: 65535

// Allow the application to parse our information via json (form information)
app.use(express.json())

//Allow the application to accept form information
app.use(express.urlencoded({ extended: true }))

const menuItems = [,
    { name: 'Calamari', price: 15.00 },
    { name: 'Maine Lobster Roll', price: 19.00 },
    { name: 'Lasagna', price: 20 },
    { name: 'Pizza', price: 10 },
    { name: 'A5 Japanese Wagyu', price: 99 },
    { name: 'Burger', price: 12 },
    { name: 'Pepperoni Pizza', price: 15.00 },
    { name: 'Sushi', price: 19 },
    { name: 'Spaghetti', price: 20 },
]

// we can hard code some users like this
// later on we will want to store users in a database
const users = [
    { firstName: "Reimu", lastName: "Hakurei" },
    { firstName: "Marisa", lastName: "Kirisame" },
    { firstName: "Sanae", lastName: "Kochiya" },
    { firstName: "Sakuya", lastName: "Izayoi" },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

//get=retrieve all or retrieve one
//post=create something new
//put=update something
//delete=delete something

app.get("/api/users", (req, res) => {
    res.json(users);
});


//http://localhost:8000/api
app.get('/api', (request, response) => response.json({ message: "Hola!!" }))

app.get('/api/menu', (req, res) => res.json({ count: menuItems.length, results: menuItems }))

// if we want to get a user with a specific id, we can make the id a part of the url
// be sure to preface the id variable with a `:` colon
app.get("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    console.log(req.params.id);
    // assuming this id is the index of the users array we could return one user this way
    res.json(users[req.params.id]);
});

//in postman: form data goes into: Body>x-www-form-urlencoded
app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    users.push(req.body);
    // we always need to respond with something
    res.json({ status: "ok" });
});


app.patch("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    console.log(req.params.id, req.body)
    // assuming this id is the index of the users array we can replace the user like so
    users[id] = req.body;
    console.log(users)
    // we always need to respond with something
    res.json({ status: "ok" });
});

app.delete("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can remove the user like so
    users.splice(id, 1);
    console.log(users)
    // we always need to respond with something
    res.json({ status: "ok" });
});



app.listen(port, () => console.log(`Welcome to the Jungle.`))