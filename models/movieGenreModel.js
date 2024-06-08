const { Int32 } = require('mongodb')
const mongoose = require('mongoose')

const genreSchema = mongoose.Schema(
    {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }
)

const genre = mongoose.model('Genre', genreSchema)

module.exports = genre;