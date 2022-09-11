const express = require('express')
const router = express.Router()
const heroController = require('../controllers/hero') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', heroController.getHero)

router.post('/createHero', heroController.createHero)









module.exports = router