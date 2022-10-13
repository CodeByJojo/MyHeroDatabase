const express = require('express')
const router = express.Router()
const heroesController = require('../controllers/heroes')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, heroesController.getHeroes)

router.post('/createHero', heroesController.createHero)

router.delete('/deleteHero', heroesController.deleteHero)

module.exports = router