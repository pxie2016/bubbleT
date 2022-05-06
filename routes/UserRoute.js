const express = require('express');
const app = express();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const UserRoute = express.Router();

let User = require('../models/User');
const secret = "test"

UserRoute.route('/signup').post(async (req, res)=> {
    const {email, password, username} = req.body;
    try{
        const oldUser = await User.findOne({email});
        if(oldUser){
            return res.status(400).json({message:"user already exist"})
        }

        const hashedPassword = await bcrypt.hash(password,12);

        const result = await User.create({
            username:username,
            email,
            password: hashedPassword,
            
        })
        const token = jwt.sign({email:result.email, id: result._id}, secret,{expiresIn:"1h"})
        res.status(201).json({result, token});

    }catch(error) {
        res.status(500).json({message:"something went wrong for signup"});
        console.log(error)
    }

})

UserRoute.route('/login').post(async (req, res)=> {
    const {email, password} = req.body;
    try{
        const oldUser = await User.findOne({email});
        if(!oldUser){
            return res.status(400).json({message:"user does not exist"})
        }

        const correctPassword = await bcrypt.compare(password, oldUser.password);

        if(!correctPassword){
            return res.status(400).json({message:"wrong password"})
        }
        
        const token = jwt.sign({email:oldUser.email, id: oldUser._id}, secret,{expiresIn:"1h"})
        res.status(200).json({result:oldUser, token});

    }catch(error) {
        res.status(500).json({message:"something went wrong for login"});
        console.log(error)
    }

})

module.exports = UserRoute;