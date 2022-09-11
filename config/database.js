const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_STRING, {
            // useNewURLParser: true,
            // useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
        })

        console.log(`MongoDB is Connected Bro: ${conn.connection.host}`)
        } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB