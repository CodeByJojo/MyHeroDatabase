const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const myHeroRoutes = require('./routes/myHeroDB')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/myHeroDB', myHeroRoutes)

app.listen(process.env.PORT || 5555, (req, res) => {
    console.log(`Dude! The server is running on port 1992!`)
})










