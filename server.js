const express = require('express')
const mongoose = require('mongoose')
const Genre = require('./models/movieGenreModel')
const app = express()
const port = 3000

app.use(express.json());

app.get('/', async(req, res) => {
  console.log('meh');
})

app.get('/genre', async(req, res) => {
    try {
        const genre = await Genre.find({});
        res.status(200).json(genre);
        
    } catch (error) {
        res.status(500).json({message: message.error});
    }
})

app.post('/genre', async(req, res) => {
    try {

        const genre = await Genre.create(req.body);
        res.status(200).json(genre);
        
      } catch (error) {
        console.log(error.message);
        res.status(500).json({message: message.error});
      }
})



mongoose.connect('mongodb+srv://robertaskask:oDvt6WZ2J03xwjT9@movie-api.mwodpzw.mongodb.net/movie-API?retryWrites=true&w=majority&appName=movie-api')
.then(() =>{

    console.log("Connected to the MongoDB")

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
}).catch(() =>{
    console.log(error)
})