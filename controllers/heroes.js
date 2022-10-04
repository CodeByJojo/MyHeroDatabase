const HeroDB = require('../models/Hero')

module.exports = {
    getHeroes: async (req, res)=>{
        try{
            const heroItems = await HeroDB.find()
            res.render('heroes.ejs', {hero: heroItems})
        }catch(err){
            console.log(err)
        }
    },
    createHero: async (req, res)=>{
        try{
            await HeroDB.create({hero: req.body.heroItems})
            console.log('A Hero has been born!')
            res.redirect('/heroes') // doublecheck to make sure the url will be this or hero
        }catch(err) {
            console.log(err)
        }
    },
}

//---------------------COME BACK AND ADD DELETE 4 50