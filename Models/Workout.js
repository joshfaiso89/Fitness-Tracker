

import { Schema } from "mongoose";

const db = mongoose.createConnection('mongodb://host/db')
  , fitnessTracker = db.model('fitnessTracker');

const LastWorkout = Schema.LastWorkout({
     LastWorkout = new LastWorkout {
        name: String,

    }
})