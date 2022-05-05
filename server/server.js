const express = require('express');
const path = require('path');
const cors = require('cors')
const mongoose = require('mongoose');

const app = express();

// mongoose.connect("mongodb://localhost:27017/admin")
//     .then(
//         () => {console.log("DB connected")},
//         err => {console.log("DB error" + err)}
//     );
mongoose.connect("mongodb+srv://testuser:123abc@cluster0.p9mg3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(
        () => {console.log("DB connected")},
        err => {console.log("DB error" + err)}
    );

const shoproutes = require('./routes/ShopRoute')
const userroutes = require('./routes/UserRoute')
const reviewboxroutes = require('./routes/ReviewBoxRoute')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/shops', shoproutes);
app.use('/users', userroutes);
app.use('/reviewbox', reviewboxroutes);

let port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('Starting server on port' + port);
});