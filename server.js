const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const db = require("./models");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({
  extended: true
}));

app.listen(PORT, () => {
    console.log(`APP is running on local host`);
  });

app.use(express.json());

app.use(express.static('public'));


app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/exercise', (req,res) => {
  res.sendFile(path.join(__dirname + '/public/exercise.html'));
});

app.get('api/workouts', (req,res) => {
  db.Workout.find({}).then(data => {
    res.json(data);
  });
});

app.get('/stats', (req,res) => {
  res.sendFile(path.join(__dirname + '/public/stats.html'));
});

app.get('api/workouts/range', (req,res) => {
  db.Workout.find({}).then(data => {
    res.json(data);
  }).catch(err => {
    res.json(err);
  })
})

app.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(
  req.params.id,
    {
      $push: {
      exercises: req.body
      }
    }
  ).then(data => {
    res.json(data)
  });
});

app.post("/api/workouts", ({body}, res) => {
  db.Workout.create(body).then(data => {
    res.json(data)
  });
});

