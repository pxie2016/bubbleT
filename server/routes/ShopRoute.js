const express = require('express');
const mongodb = require("mongodb");
const app = express();

const ShopRoute = express.Router();

let Shop = require('../models/Shop');

ShopRoute.route("/create").post(async(req, res)=> {
    let shop = req.body
    const newShop = new Shop({
        ...shop,
        createdAt: new Date().toISOString()
    })
    try{
        await newShop.save()
        res.status(201).json(newShop)
    }catch(err){
        res.status(404).json({message:"something went wrong when posting shop"})
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

module.exports = ShopRoute;