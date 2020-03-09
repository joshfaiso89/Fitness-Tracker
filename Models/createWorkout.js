const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createWorkout = new Schema({
    title: String,
    type: String
});

const workout = mongoose.model("Workout", createWorkout);

module.exports = workout;