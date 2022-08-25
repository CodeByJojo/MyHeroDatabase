const mongoose = require('mongoose')

const myHeroSchema = new mongoose.Schema({
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
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('myHeroDB', myHeroSchema)