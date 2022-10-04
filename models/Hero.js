const mongoose = require('mongoose')

const HeroSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    heroName: {
        type: String,
        required: true,
    },
    quirk: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('HeroDB', HeroSchema)  // it might not be the DB here