const characterService = require('../service/characterService')

exports.createCharacter = async (req, res) => {
    const createdChar = await characterService.createCharacter(req.body)
    res.json(createdChar)
}

exports.deleteCharacter = async (req, res) => {
    const deletedChar = await characterService.deleteCharacter(req.params.id)

    if(!deletedChar) {
        res.status(404).json({error: "That character does not exist!"})
    }

    res.json(deletedChar)
}

exports.getAllCharacters = async (req, res) => {
    const retrievedChars = await characterService.getCharacters(req.email) 

    res.json(retrievedChars)
}

exports.getOneCharacter = async (req, res) => {
    const singleChar = await characterService.getOneCharacter(req.params.id, req.user)

    if(!singleChar) {
        res.status(404).json({error: "That character does not exist!"})
    }

    res.json(singleChar)
}

exports.updateCharacter = async (req, res) => {
    const updatedChar = await characterService.updateCharacter(req.params.id, req.body)

    if(!updatedChar) {
        res.status(404).json({error: "That character does not exist!"})
    }

    res.json(updatedChar)
}