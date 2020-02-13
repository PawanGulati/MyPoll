const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const db = require('../models')

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        trim:true,
        required: 'Enter your userName',
    },
    password: {
        type: String,
        required: "Enter your password",
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    polls:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'polls'
    }]
},{ usePushEach: true })

// userSchema.virtual('polls', {
//     type:mongoose.Schema.Types.ObjectId,
//     ref: 'polls',
//     localField: '_id',
//     foreignField: 'owner'
// }, {
//     timestamps: true
// })

userSchema.pre('save', async function (next) {
    try {
        const user = this
        if (!user.isModified('password')) {
            return next()
        }
        const hashed = await bcrypt.hash(user.password, 10)
        user.password = hashed

        return next()
    } catch (err) {
        return next({ status: 400, message: err.message })
    }
})

userSchema.methods.generateToken = async function () {
    try {
        const user = this
        const {
            _id,
            userName
        } = user

        let payload = {
            _id,
            userName
        }
        const token = jwt.sign(payload, process.env.SECRET_KEY, {
            algorithm: 'HS512',
            expiresIn: 3600*24 //1 DAY
        })

        return token
    } catch (err) {
        return next(Error('No token generated'))
    }
}

userSchema.statics.findByCredentials = async function ({userName,password},next){
    try{
        const user = await db.User.findOne({userName})        

        if(!user){
            throw new Error('No user exists')
        }

        const isValid = await bcrypt.compare(password,user.password)
        
        if(!isValid){
            throw new Error('Password\'s incorrect')
        }

        return user
    }catch(err){
        return next({ status: 400, message: err.message })

    }
}

module.exports = User = mongoose.model('users', userSchema)