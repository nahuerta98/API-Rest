const mongoose = require('mongoose');

module.exports = mongoose.model("Character", new mongoose.Schema({
    id: Number,
    name: String,
    status: String,
    species: String,
    type: String,
    gender: String,
    origin:{
        name: String,
        url: String
    },
    location:{
        name: String,
        url: String
    },
    image: String,
    episode: [],
    url: String,
    created: String
}), 'Character');