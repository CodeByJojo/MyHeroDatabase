const express = require('express')
const router = express.Router()
const heroesController = require('../controllers/heroes')

router.get('/', heroesController.getHeroes)

router.post('/createHero', heroesController.createHero)

//--------------COME BACK TO ADD DELETE

module.exports = router