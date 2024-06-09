require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const axios = require('axios')
const Genre = require('./models/movieGenreModel')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Movies-API');
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
        const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
            params: {
                api_key: process.env.API_KEY
            }
        });

        const genres = response.data.genres;

        await Genre.deleteMany({}); // Clear existing genres

        const savedGenres = await Genre.insertMany(genres);
        res.status(200).json(savedGenres);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }

});

// New endpoint to get movies based on filters

app.get('/discover-movie', async(req, res) =>{
    try {
        const { with_genres, page, vote_average, vote_count, primary_release_date_gte, primary_release_date_lte } = req.query;

        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
            params: {
                api_key: process.env.API_KEY,
                with_genres,
                page,
                'vote_average.gte': vote_average,
                'vote_count.gte': vote_count,
                'primary_release_date.gte': primary_release_date_gte,
                'primary_release_date.lte': primary_release_date_lte
            }
        });

        res.status(200).json(response.data);

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message});
    }
});


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() =>{
    console.log("Connected to the MongoDB");

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}).catch((error) =>{
    console.log(error);
});