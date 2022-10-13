const Hero = require('../models/Hero')

module.exports = {
    getHeroes: async (req, res)=>{
        console.log(req.user)
        try{
            const heroItems = await Hero.find()
            res.render('heroes.ejs', {heroes: heroItems, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createHero: async (req,res)=> {
        try{
            await Hero.create({
                name: req.body.name,
                heroName: req.body.heroName,
                quirk: req.body.quirk,
                age: req.body.age,
                userId: req.user.id
            })
            console.log('A hero breathes!')
            res.redirect('/heroes')
        }catch(err){
            console.log(err)
        }
    },
    deleteHero: async (req, res)=>{
        console.log(req.body.heroIdFromJSFile)
        try{
            await Hero.findOneAndDelete({_id:req.body.heroIdFromJSFile})
            console.log('Hero Defeated')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}