const Hero = require('../models/Hero') // you just changed HeroDB to Hero

module.exports = {
    getHeroes: async (req, res)=>{
        try{
            const heroItems = await Hero.find()  // did the same here
            res.render('heroes.ejs', {heroes: heroItems})
        }catch(err){
            console.log(err)
        }
    },
    createHero: async (req, res)=>{
        try{
            await Hero.create({hero: req.body.name})  // and here also changed heroItems
            console.log('A Hero has been born!')
            res.redirect('/heroes') 
        }catch(err) {
            console.log(err)
        }
    },
}

//---------------------COME BACK AND ADD DELETE  