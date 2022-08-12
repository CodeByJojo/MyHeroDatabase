const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient





MongoClient.connect('mongodb+srv://joe:maltba92@cluster0.cbzozx4.mongodb.net/?retryWrites=true&w=majority', {useUnifiedTopology: true})
    .then(client => {
        console.log('Connected to that Database man')
        const db = client.db('MyHeroDatabase')
        const myHeroCollection = db.collection('heroCollection')


        app.set('view engine', 'ejs')
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
        app.use(express.static('public'))


        app.get('/', (req, res) => {
            db.collection('heroCollection').find().toArray()
            .then(results => {
                res.render('index.ejs', {heroCollection: results})
            })
            .catch(error => console.error(error))
         })
         
        app.post('/myHeroForm', (req, res) => {
            myHeroCollection.insertOne(req.body)
            .then(result => {
                console.log(result)
                console.log(req.body)
                res.redirect('/')
            })
            .catch(error => console.error(error))
         })

         app.put('/myHeroForm', (req, res) => {
            myHeroCollection.findOneAndUpdate(
                {firstName: 'David'},
                {
                $set: {
                    name: req.body.name,
                    heroName: req.body.heroName,
                    quirk: req.body.quirk,
                    age: req.body.age,
                }
                },
                {
                    upsert: true,
                }
            )
            .then (result => {
                console.log(result)
                res.json('It worked bro!')
            })
            .catch(error => console.error(error))
            console.log(req.body)
         })

         app.delete('/myHeroForm', (req, res) => {
            myHeroCollection.deleteOne(
                {firstName: req.body.firstName},
                
            )
            .then(result => {
                if (result.deletedCount === 0) {
                    return res.json('No more Ganons to delete')
                }
                res.json('Deleted Ganon')
            })
            .catch(error => console.error(error))
         })

        







         
         app.listen(process.env.PORT || 5000, (req, res) => {
             console.log('The server is running bro')
         })
    })
    .catch(error => console.error(error))



























// npm run dev

//  app.post('/myHeroForm', (req, res) => {
        //      console.log('I think its working bro')
        //      console.log(req.body) // This is the line that is actually logging the results
        //  })