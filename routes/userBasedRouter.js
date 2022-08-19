const { getAllCharacters } = require('../controllers/CharacterController')
const authMiddleware = require('../middleware/auth')

const router = require('express').Router()
router.use(authMiddleware)

router.get('/', getAllCharacters)

module.exports = router