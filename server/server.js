import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors';
dotenv.config();

import workoutRoutes from "./routes/workouts.route.js";

// express app
const app = express();

// middleware
app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workout", workoutRoutes);

// connect to database
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        // listen to request
        app.listen(process.env.PORT, () => {
            console.log(`Connected to database and Server is listening on http://localhost:${process.env.PORT}...`)
        })
    })
    .catch((error) => {
        console.error(error);
    })

