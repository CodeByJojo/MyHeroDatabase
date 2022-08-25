const express = require('express')
const router = express.Router()
const myHeroController = require('../controllers/myHeroDB')

router.get('/', myHeroController.getHeroes)









module.exports = router