const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema for a bubble tea shop
let Shop = new Schema({
    name: String,
    address: String,
    city: String,
    state: String,
    zipcode: String,
    creator:String,
    imgFile:String,
    description:String,
    rating:String,
    createdAt:{
        type:Date,
        default: new Date(),
    },
    stars: {type: Number, min: 1., max: 5.},
    likeCount:{
        type:Number,
        default:0
    }
}, {collection: 'shops'})

module.exports = mongoose.model('Shop', Shop);