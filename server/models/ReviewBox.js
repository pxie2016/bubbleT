const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ReviewBox = new Schema({
    username: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
})

module.exports = mongoose.model('ReviewBox', ReviewBox);