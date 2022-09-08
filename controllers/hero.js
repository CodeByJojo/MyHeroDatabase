 const Hero = require('../models/Hero')

 module.exports = {
    getHero: async (req, res) => {
        console.log(req.user)
        try{
            res.render('hero.ejs')
        }catch(err){
            console.log(err)
        }
    },
    
 }