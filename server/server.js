const express = require('express');
const path = require('path');
const cors = require('cors')
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb://localhost:27017/admin")
    .then(
        () => {
            console.log("DB connected")
        },
        err => {
            console.log("DB error" + err)
        }
    );

const shoproutes = require('./routes/ShopRoute')
const userroutes = require('./routes/UserRoute')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/shops', shoproutes);
app.use('/users', userroutes);

let port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('Starting server on port' + port);
});