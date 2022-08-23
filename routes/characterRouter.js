const { getOneCharacter, deleteCharacter, updateCharacter, createCharacter } = require('../controllers/CharacterController')
const authMiddleware = require('../middleware/auth')

const router = require('express').Router()
router.use(authMiddleware)


router.get('/:id', getOneCharacter)
router.delete('/:id', deleteCharacter)
router.post('/', createCharacter)
router.patch('/:id', updateCharacter)

module.exports = router