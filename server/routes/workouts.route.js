import { Router } from 'express';

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
router.post("/", (req, res) => {
    res.json({mesg: 'Post a new workout'})
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