import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

import workoutRoutes from "./routes/workouts.route.js";

// express app
const app = express();

// port
const PORT = process.env.PORT;

// middleware
app.use(express.json());

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
        app.listen(PORT, () => {
            console.log(`Connected to database and Server is listening on http://localhost:${PORT}...`)
        })
    })
    .catch((error) => {
        console.log(error);
    })

