const express = require('express')
const app = express()
const cors = require('cors')

const { getMovies } = require('./controller')

app.use(express.json())
app.use(cors())

app.get('/api/movies', getMovies);

const port = process.env.PORT || 4004

app.listen(port, () => console.log(`Server listening on port ${port}`))