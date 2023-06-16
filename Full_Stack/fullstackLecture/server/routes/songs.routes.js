const SongController = require("../controllers/songs.controller")

module.exports = (app) =>{
    app.post('/api/songs',SongController.createSong);
    app.get('/api/songs',SongController.getAllSongs);
    app.get('/api/songs/:id',SongController.getOneSong);
    app.patch('/api/songs/:id',SongController.updateSong);
    app.delete('/api/songs/:id',SongController.deleteSong);
}