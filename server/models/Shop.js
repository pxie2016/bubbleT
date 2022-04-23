const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema for a bubble tea shop
let Shop = new Schema({
    name: String,
    address: String,
    city: String,
    state: String,
    zipcode: String,
    stars: {type: Number, min: 1., max: 5.}
}, {collection: 'shops'})

module.exports = mongoose.model('Shop', Shop);