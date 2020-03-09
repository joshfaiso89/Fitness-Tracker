const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const statsWorkout = new Schema({
    name: {
        type: String,
        unique: true
    },
    workout: [
        {
        type: Schema.Types.ObjectId,
        ref: "workout"
    }
]
});

const stats = mongoose.model("stats", statsWorkout);

module.exports = stats;