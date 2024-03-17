import express from 'express';
import dotenv from 'dotenv'
dotenv.config();

// express app
const app = express();

// port
const PORT = process.env.PORT;

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.get('/', (req, res) => {
    res.json({mesg: 'Welcome to the app'})
})

// listen to request
app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}...`);
})