const mongoose = require('mongoose')
const db = require('../models')

exports.showPolls = async(req,res,next)=>{
    try {
        const polls = await db.Poll.find()
        res.json(polls)
        next()
    } catch (err) {
        next(err)
    }
}

exports.createPolls = async(req,res,next)=>{
    try {
        const {_id} = req.user
        const user = await db.User.findById({_id})

        const {question,options} = req.body
        console.log(question,options);
         
             
        const poll = new db.Poll({
            question,
            options: options.map(option => ({option,votes:0})),
            // owner:user
        })
        
        user.polls.push(poll._id)

        await user.save()
        await poll.save()

        res.status(201).json({
            ...poll._doc,
             owner:_id
        })
        
        next()
    } catch (err) {
        next(err)
    }
}