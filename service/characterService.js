const Character = require('../models/CharacterModel')
const { ObjectId } = require('mongodb')


exports.createCharacter = async (charInfo) => {
    const { user, firstName, lastName, charClass } = charInfo

    const newChar = new Character({
        user,
        firstName,
        lastName,
        charClass
    })

    return await newChar.save()
}

exports.getCharacters = async (charUser) => {
    const charList = await Character.find({user: {$all: [charUser] }}, {user: 0, __v: 0})

    return charList
}

exports.getOneCharacter = async (charId) => {
    const returnedCharacter = await Character.findById(new ObjectId(charId))

    if(!returnedCharacter) {
        console.log("That character does not exist!")   
    }

    return returnedCharacter
}

exports.deleteCharacter = async (charId) => {
    const removedCharacter = await Character.findByIdAndDelete(ObjectId(charId))

    if(!removedCharacter) {
        console.log("That character does not exist!")
    }

    return removedCharacter
}

exports.updateCharacter = async (charId, updates) => {
    const characterUpdated = await Character.findByIdAndUpdate(ObjectId(charId), updates)

    if(!characterUpdated) {
        console.log("That character does not exist!")
    }

    return characterUpdated
}