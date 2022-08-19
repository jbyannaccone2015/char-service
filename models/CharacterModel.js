const mongoose = require('mongoose')

const charSchema = new mongoose.Schema({
    user: String,
    firstName: String,
    lastName: String,
    charClass: String,
})

const Character = mongoose.model('characters', charSchema)

module.exports = Character; 