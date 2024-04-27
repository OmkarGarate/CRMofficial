const mongoose = require('mongoose')

const feedSchema = mongoose.Schema({
    profilePic:{
        type: String,
        required: true
    },
    name:{
        type: String, 
        required: true
    },
    role: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Feed', feedSchema)