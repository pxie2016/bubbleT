const express = require('express');
const app = express();
const jwt=require('jsonwebtoken') 
const ShopRoute = express.Router();

let Shop = require('../models/Shop');
const { default: mongoose } = require('mongoose');
const secret = "test"
ShopRoute.route("/create").post(async (req, res, next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1]
        const isCustomUser = token.length<500
        let decodedData
        if(token&& isCustomUser){
            decodedData = jwt.verify(token, secret)
            req.userId = decodedData?.id
        }
        next()
    } catch(err){
        console.log(err)
    }
}, async(req, res)=> {
    let shop = req.body
    const newShop = new Shop({
        ...shop,
        creatorId: req.userId,
        createdAt: new Date().toISOString()
    })
    try{
        await newShop.save()
        res.status(201).json(newShop)
    }catch(err){
        res.status(404).json({message:"something went wrong when posting shop"})
    }
})

ShopRoute.route("/postReview/:id").post(async(req, res)=> {
    const {id} = req.params;
    const review = req.body;
    try{
        const foundShop = await Shop.findById(id);
        const updatedShop = {
           ...foundShop,
            allReviews: review
        }
        await Shop.findByIdAndUpdate(id, updatedShop,{new:true})
        res.json(updatedShop)
    }catch(err){
        res.status(404).json({message:"something went wrong when posting review" + err})
    }
})

ShopRoute.route("/get").get(async(req, res)=>{
    try{
        const shop = await Shop.find()

        res.status(200).json(shop)
    }catch(err){
        res.status(404).json({message:"something went wrong when getting shop"})
    }
})


ShopRoute.route("/get/:id").get(async (req, res) => {
    try {
        const id = req.params.id;
        const foundShop = await Shop.findOne({_id: id});
        res.status(200).json(foundShop)
    } catch (err) {
        res.status(404).json({message:"this particular shop does not exist"})
    }
})

ShopRoute.route("/get/userShops/:id").get(async (req, res, next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1]
        const isCustomUser = token.length<500
        let decodedData
        if(token&& isCustomUser){
            decodedData = jwt.verify(token, secret)
            req.userId = decodedData?.id
        }
        next()
    } catch(err){
        console.log(err)
    }
}, async (req, res) => {
    const{id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:"user does not exist"})
    }
    const userShops = await Shop.find({creatorId:id})
    res.status(200).json(userShops)
    
})

ShopRoute.route("/get/:id").delete(async (req, res, next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1]
        const isCustomUser = token.length<500
        let decodedData
        if(token&& isCustomUser){
            decodedData = jwt.verify(token, secret)
            req.userId = decodedData?.id
        }
        next()
    } catch(err){
        console.log(err)
    }
}, async(req, res)=>{
    const {id} = req.params
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({message:"shop does not exist"})
        }
        await Shop.findByIdAndRemove(id)
        res.json({message:"shop deleted successfully"})
        
    }catch(err){
        res.status(404).json({message:"something went wrong when deleting shop"})
    }

})
ShopRoute.route("/get/:id").patch(async (req, res, next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1]
        const isCustomUser = token.length<500
        let decodedData
        if(token&& isCustomUser){
            decodedData = jwt.verify(token, secret)
            req.userId = decodedData?.id
        }
        next()
    } catch(err){
        console.log(err)
    }
},async(req, res)=>{
    const {id} = req.params
    const{name,address,city,zipcode,state,description, creator, imgFile,rating} = req.body
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({message:"shop does not exist"})
        }
        const updatedShop = {
            creator,
            name,
            description,
            rating,
            imgFile,
            address,city,zipcode,state,
            _id:id,
            
        }
        await Shop.findByIdAndUpdate(id, updatedShop,{new:true})
        res.json(updatedShop)
        
    }catch(err){
        res.status(404).json({message:"something went wrong when updating shop"})
    }

})

module.exports = ShopRoute;