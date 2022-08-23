const { getAllCharacters } = require('../controllers/CharacterController')
const authMiddleware = require('../middleware/auth')
const corsMiddleware = require('../middleware/cors')

const router = require('express').Router()
router.use(authMiddleware)
router.use(corsMiddleware)

router.get('/', getAllCharacters)

module.exports = router