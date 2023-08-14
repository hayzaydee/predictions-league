const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const https = require("https");
const _ = require("lodash");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


mongoose.connect("mongodb+srv://hayzaydee:YYFkTD2B8kyhCk0i@serverlessinstance0.okowapw.mongodb.net/?retryWrites=true&w=majority");

const predictionSchema = new Schema({
    team1: String,
    team2: String,
    team1Score: Number,
    team2Score: Number,
    team1Scorers: [{scorerT1:String}],
    team2Scorers: [{scorerT2:String}]
});

const userSchema = new Schema({
    user: String,
    predicition: [predictionSchema],
});

const User = mongoose.model('User', userSchema);
const Prediction = mongoose.model('Prediction', predictionSchema);



app.listen(process.env.PORT || 3000, () => {
    console.log("Server started on port 3000!")
});