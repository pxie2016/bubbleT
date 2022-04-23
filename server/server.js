const express = require('express');
const path = require('path');
const cors = require('cors')
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb+srv://pxie2016:testPassw0rd@parkerscluster.ue46w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(
        () => {console.log("DB connected")},
        err => {console.log("DB error" + err)}
    );

const shoproutes = require('./routes/ShopRoute')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/shops', shoproutes);

let port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('Starting server on port' + port);
});