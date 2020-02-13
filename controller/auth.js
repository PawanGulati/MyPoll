const mongoose = require('mongoose')
const db = require('../models')

exports.register = async(req,res,next)=>{
    try{
        const user = await new db.User(req.body)
        
        const {_id,userName} = user
        let token = await user.generateToken()
        
        await user.save()
        res.json({
            token,
            _id,
            userName
        })
        next()
    }catch(err){
        if(err.code === 11000) next(Error('Already Exists!!'))
        next({ status: 400, message: err.message })
    }
}

exports.login = async(req,res,next)=>{
    try{
        const user = await db.User.findByCredentials(req.body,next)
        
        if(!user)
            throw new Error('Credentials not matching ')
        
        const {userName,_id} = user

        const token = await user.generateToken() 
        
        res.json({
            token,
            _id,
            userName
        })

        next()
    }catch(err){
        next({ status: 400, message: err.message })
    }
}
