const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: { type: Number, required: true }
})

module.exports = mongoose.model('User', userSchema)