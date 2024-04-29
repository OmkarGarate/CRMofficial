const mongoose = require('mongoose')

const DesignationModel = mongoose.Schema({
    desName: {
        type: String,
        required: true
    },
    desCount: {
        type: String,
        requierd: true
    },
    desType: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Designation', DesignationModel)