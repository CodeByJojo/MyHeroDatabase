const express = require('express')
const app = express()




require('dotenv').config({path: './config/.env'})



app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())













app.listen(process.env.PORT || 5555, (req, res) => {
    console.log(`Dude! The server is running on port 1992!`)
})
