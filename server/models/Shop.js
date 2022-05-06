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
    creatorId:String,
    imgFile:String,
    description:String,
    rating:String,
    createdAt:{
        type:Date,
        default: new Date(),
    },
    allReviews: [Schema.Types.Mixed]
}, {collection: 'shops'})

module.exports = mongoose.model('Shop', Shop);