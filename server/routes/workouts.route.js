import { Router } from 'express';
import { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout }  from "../controllers/workout.controller.js";

const router = Router();

// Get all workouts
router.get("/", getWorkouts);

// Get a single workout
router.get("/:id", getWorkout);

// Post a new workout
router.post("/", createWorkout);

// delete a workout
router.delete("/:id", deleteWorkout);

// Update a workout
router.patch("/:id", updateWorkout);

export default router;