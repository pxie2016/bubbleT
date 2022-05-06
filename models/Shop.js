const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ReviewSchema = new Schema({ 
    creator: String,
    content:String,
    createdAt:{
        type:Date,
        default: new Date(), 
    }
});
// Define schema for a bubble tea shop
let Shop = new Schema({
    name: String,
    address: String,
    city: String,
    state: String,
    zipcode: String,
    creator:String,
    creatorId:String,
    description:String,
    rating:String,
    createdAt:{
        type:Date,
        default: new Date(),
    },
    allReviews: [ReviewSchema]
}, {collection: 'shops'})

module.exports = mongoose.model('Shop', Shop);