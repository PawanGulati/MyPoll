const mongoose = require('mongoose')
const db = require('../models')

const optionSchema = new mongoose.Schema({
    option:String,
    votes:{
        type:Number,
        default:0
    }
})

const pollSchema = new mongoose.Schema({
    question: String,
    options:[optionSchema],
    createdAt:{
        type:Date,
        default:Date.now
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    voted:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    }]
},{ usePushEach: true })

module.exports = Poll =  mongoose.model('polls',pollSchema)