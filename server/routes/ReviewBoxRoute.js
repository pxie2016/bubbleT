const express = require('express');
const app = express();

const ReviewBoxRoute = express.Router();

let ReviewBox = require('../models/ReviewBox');

ReviewBoxRoute.route("/create").post(async (req, res) => {
    let reviewBox = req.body
    const newReviewBox = new ReviewBox({
        ...reviewBox,
        createdAt: new Date().toISOString()
    })
    try {
        await newReviewBox.save()
        res.status(201).json(newReviewBox)
    } catch (err) {
        res.status(404).json({message: "something went wrong when posting reviewBox"})
    }
})

ReviewBoxRoute.route("/get").get(async (req, res) => {
    try {
        const reviewBox = await ReviewBox.find()

        res.status(200).json(reviewBox)
    } catch (err) {
        res.status(404).json({message: "something went wrong when getting reviewBox"})
    }
})

module.exports = ReviewBoxRoute;