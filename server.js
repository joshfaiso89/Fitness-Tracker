const express = require('express');
const mongojs = require('mongojs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const databaseUrl = 'fitnessTracker';
const workout = ['workout'];

const db = mongojs(databaseUrl, workout);

db.on("error", error => {
    console.log("Database Error:", error);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/index.html"))
});

app.listen(3000, () => {
    console.log("App running on port 3000!");
});