const express = require('express');
const app = express();

const ReviewBoxRoute = express.Router();

let ReviewBox = require('../models/ReviewBox');

ReviewBoxRoute.route('/add').post(function (req, res) {
    let reviewBox = new ReviewBox(req.body);
    reviewBox.save()
        .then(post => {
            res.status(200).json(post);
        })
        .catch(err => {
            res.status(400).send("Error in saving to database");
        });
});

ReviewBoxRoute.route('/').get(function (req, res) {
    ReviewBox.find(function (err, shop) {
        if (err) console.log(err);
        else res.json(shop);
    });
});

module.exports = ReviewBoxRoute;