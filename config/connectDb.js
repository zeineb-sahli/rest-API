const mongoose = require('mongoose')
require('dotenv').config()
const url = process.env.Url || 'mongodb://localhost:27017'


const connectDb = async () => {
    try {
        await mongoose.connect(url)
        console.log('connceted successfully to data base')
    } catch (error) {
        console.log(error)
    }

}

module.exports = connectDb