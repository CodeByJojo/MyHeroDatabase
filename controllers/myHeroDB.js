const myHeroDB = require('../models/myHeroDB')

module.exports = {
    getHeroes: async (req,res) => {
        try{
            const heroItems = await myHeroDB.find()
            res.render('myHeroDB.ejs', {})
        }catch(err) {
            console.log(err)
        }
    }
}