const mongoose = require('mongoose')

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

module.exports = User =  mongoose.model('users', userSchema)