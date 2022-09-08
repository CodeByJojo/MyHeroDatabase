const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const heroController = require('../controllers/hero')
const loginController = require('../controllers/login')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)
router.get('/hero', heroController.getHero)
router.get('/login', loginController.getLogin)

module.exports = router