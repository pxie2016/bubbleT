import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import User from "../models/User"

const secret = "test"
export const signup = async (req, res) => {
    const {email, password, username} = req.body;
    try{
        const oldUser = await User.findOne({email});
        if(oldUser){
            return res.status(400).jason({message:"user already exist"})
        }

        const hashedPassword = await bcrypt.hash(password,12);

        const result = await User.create({
            username:username,
            email,
            password: hashedPassword,
            
        })
        const token = jwt.sign({email:result.email, id: result._id}, secret,{expiresIn:"1h"})
        res.status(201).jason({result, token});

    }catch(error) {
        res.status(500).json({message:"something went wrong"});
        console.log(error)
    }
}