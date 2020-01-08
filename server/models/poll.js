const mongoose = require('mongoose')

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
        ref:'User'
    },
    voted:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }]
})

module.exports = Poll = mongoose.model('Poll',pollSchema)