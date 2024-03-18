import { Router } from 'express';
import { createWorkout, getWorkouts, getWorkout }  from "../controllers/workout.controller.js";

const router = Router();

// Get all workouts
router.get("/", getWorkouts);

// Get a single workout
router.get("/:id", getWorkout);

// Post a new workout
router.post("/", createWorkout);

// delete a workout
router.delete("/:id", (req, res) => {
    res.json({mesg: 'delete a workout'})
})

// Update a workout
router.patch("/:id", (req, res) => {
    res.json({mesg: 'update a workout'})
})

export default router;