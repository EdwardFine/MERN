const UserController = require("../controllers/users.controller")

module.exports = (app) =>{
    //API test
    app.get('/api/testing',UserController.apiTest);
    app.get('/api/users',UserController.findAllUsers);
    app.get('/api/users/:id',UserController.fineOneSingleUser);
    app.patch('/api/users/:id',UserController.updateExistingUser);
    app.post('/api/users',UserController.createNewUser);
    app.delete('/api/users/:id',UserController.deleteAnExistingUser);
}