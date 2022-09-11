 const Hero = require('../models/Hero')

 module.exports = {
    getHero: async (req, res) => {
        console.log(req)
        try{
            const heroItems = await Hero.find()
            res.render('hero.ejs', {hero: heroItems})
        }catch(err){
            console.log(err)
        }
    },
    createHero: async (req, res) => {
        try{
            await Hero.create({hero: req.body.heroItem})
            console.log('Hero has been added!')
            res.redirect('/hero')
        }catch(err) {
            console.log(err)
        }
    },
    
    
 }