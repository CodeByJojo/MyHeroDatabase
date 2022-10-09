const Hero = require('../models/Hero')

module.exports = {
    getHeroes: async (req, res)=>{
        try{
            const heroItems = await Hero.find()
            res.render('heroes.ejs', {heroes: heroItems} )   
        }catch(err){
            console.log(err)
        }
    },
    createHero: async (req, res)=> {
        try{
            await Hero.create({
                name: req.body.name,
                heroName: req.body.heroName,
                quirk: req.body.quirk,
                age: req.body.age,})
                
            console.log('A hero has been born!')
            res.redirect('/heroes')
        }catch(err){
            console.log(err)
            console.log('This is an error')
        }
    },

    // Add Delete Here
}