const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
})

userSchema.virtual('polls',{
    ref:'Poll',
    localField:'_id',
    foreignField:'owner'
},{
    timestamps:true
})

module.exports = User = new mongoose.model('User',userSchema)