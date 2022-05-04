const express = require('express');
const app = express();

const ShopRoute = express.Router();

let Shop = require('../models/Shop');

// These two API calls are working

ShopRoute.route('/add').post(function (req, res) {
    let shop = new Shop(req.body);
    shop.save()
        .then(post => {
            res.status(200).json(post);
        })
        .catch(err => {
            res.status(400).send("Error in saving to database");
        });
});

ShopRoute.route('/').get(function (req, res) {
    Shop.find(function (err, shop) {
        if (err) console.log(err);
        else res.json(shop);
    });
});


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


module.exports = ShopRoute;