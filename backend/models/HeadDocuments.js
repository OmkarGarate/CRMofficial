const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const DocSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Head'
    },
    doc1:{
        type: String,
        default: ''
    },
    doc2:{
        type: String,
        default: ''
    },
    doc3:{
        type: String,
        default: ''
    },
    doc4:{
        type: String,
        default: ''
    }
}, {timestamps: true})

module.exports = mongoose.model('HeadDocs', DocSchema)