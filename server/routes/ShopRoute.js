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

// TODO: add delete route

module.exports = ShopRoute;