const express = require('express');
const router = express.Router();
const db = require("../models");
router.get("/api/workouts", (req, res) => {
  db.Workout.find()
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);

    })
});
// Route for adding workout 
router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});
// Route for getting workouts in range
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find()
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);

    })
});
// Route for continuing the last workout
router.get("/api/workouts/:id", (req, res) => {

  const { id } = req.params;
  db.Workout.findOne({
    _id: id,
  }).then(dbWorkout => {
    res.json(dbWorkout);
  })
    .catch(err => {
      res.status(400).json
    })
});
router.put("/api/workouts/:id", ({ body, params }, res) => {
  const id = params.id;
  let savedWorkouts = [];

