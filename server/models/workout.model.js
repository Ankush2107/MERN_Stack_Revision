import { Schema, model } from "mongoose";

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        requiredL: true
    }
}, {timestamps: true});

const Workout = model('Workout', workoutSchema);
export default Workout;