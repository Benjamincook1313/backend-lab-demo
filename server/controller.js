const movies = require('./db.json')

module.exports = {
    
    getMovies: (req, res) => {
        res.status(200).send(movies)
    }
    
};