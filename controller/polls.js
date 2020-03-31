const mongoose = require('mongoose')
const db = require('../models')

exports.showPolls = async(req,res,next)=>{
    try {
        const polls = await db.Poll.find({},null,{
            limit:parseInt(req.query.limit),
            skip:parseInt(req.query.skip)
        })
        res.json(polls).status('200')
        next()
    } catch (err) {
        next({ status: 400, message: err.message })
    }
}

exports.createPolls = async(req,res,next)=>{
    try {
        const {_id} = req.user
        const user = await db.User.findById({_id})

        const {question,options} = req.body
             
        const poll = new db.Poll({
            question,
            options: options.map(option => ({option,votes:0})),
            owner:user._id
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
        next({ status: 400, message: err.message })
    }
}

exports.userPolls = async(req,res,next)=>{
    try{
        const {_id} = req.user
        const user = await db.User.findById(_id).populate('polls')
        
        if(user.polls.length === 0){
            throw new Error('No Polls created')
        }

        res.status(200).json(user.polls)
        next()
    }catch(err){
        next({ status: 400, message: err.message })
    }
}

exports.showPoll = async(req,res,next) =>{
    try {
        const _id = req.params.id
        const poll = await db.Poll.findById(_id)
        
        if(!poll){
            throw new Error('No poll exists')
        }

        res.status(200).json(poll)

        next()
    } catch (err) {
        next({ status: 400, message: err.message })
    }
}

exports.vote = async(req,res,next) =>{
    try{
        const {answer} = req.body
        if(answer){
            const {_id:userId} = req.user
            const {id:pollId} = req.params

            const poll = await db.Poll.findById(mongoose.Types.ObjectId(pollId))
            if(!poll) throw new Error('Poll not Exists')
            
            const vote = await poll.options.map(option =>{
                if(option.option === answer){
                    let updatedOption = {
                        ...option.toJSON(),
                        votes : option.votes + 1
                    }

                    return updatedOption
                }else{
                    return option
                }
            })

            const valid = poll.voted.every(user => user.toString() !== userId)
            if(!valid) throw new Error('Already Voted')
            
            poll.voted.push(mongoose.Types.ObjectId(userId))
            poll.options = vote
            await poll.save()

            res.status(202).json(poll)

        }else{
            throw new Error('No Answer Provided')
        }
        next()
    }catch(err){
        next({ status: 400, message: err.message })
    }
}

exports.DeletePoll = async(req,res,next)=>{
    try{
        const{_id:userId} = req.user
        const{id:pollId} = req.params

        if(poll.owner.toString() !== userId) throw new Error('Only creator of this poll is Authorized')

        const poll = await db.Poll.findByIdAndRemove(pollId)
        if(!poll) throw new Error('Poll not Found')

        const user = await db.User.findById(userId)
        user.polls = user.polls.filter(poll => poll.toString() !== pollId)
        await user.save()

        res.status(200).json(poll)
        next()
    }catch(err){
        next({ status: 400, message: err.message })
    }
}