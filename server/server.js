import express from 'express';
import dotenv from 'dotenv'
dotenv.config();

import workoutRoutes from './routes/workouts.route.js';

// express app
const app = express();

// port
const PORT = process.env.PORT;

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use("/api/workout", workoutRoutes);

// listen to request
app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}...`);
})