import { Router } from 'express';
import Workout from '../models/workout.model.js'

const router = Router();

// Get all workouts
router.get("/", (req, res) => {
    res.json({mesg: 'Get all workouts'})
})

// Get a single workout
router.get("/:id", (req, res) => {
    res.json({mesg: 'Get a single workouts'})
})

// Post a new workout
router.post("/", async (req, res) => {
    const {title, reps, load} = req.body;
    try{
        const workout = await Workout.create({ title, reps, load})
        res.status(200).json(workout)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
})

// delete a workout
router.delete("/:id", (req, res) => {
    res.json({mesg: 'delete a workout'})
})

// Update a workout
router.patch("/:id", (req, res) => {
    res.json({mesg: 'update a workout'})
})

export default router;