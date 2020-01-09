const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const db = require('../models')

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

userSchema.virtual('polls', {
    ref: 'polls',
    localField: '_id',
    foreignField: 'owner'
}, {
    timestamps: true
})

userSchema.pre('save',async function(next){
    try{
        const user = this
        if(user.isModified('password')){
            return next()
        }
        const hashed = await bcrypt.hash(user.password,10)
        user.password = hashed
        return next()
    }
    catch(err){
        return next(err)
    }
})

userSchema.method.generateToken = async function(){
    try{
        const user = this
        const {_id,userName} = user

        let payload = {_id,userName}
        const token = jwt.sign(payload,process.env.SECRET_KEY,{algorithm:'HS512',expiresIn:3600})

        return token
    }catch(err){
        console.log(err);
        return next(Error('No token generated'))
    }
}

module.exports = User =  mongoose.model('users', userSchema)