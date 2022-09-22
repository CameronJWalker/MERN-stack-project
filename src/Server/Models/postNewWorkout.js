import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const postSchema = new Schema({

        workoutname: String,
        cOs: String,
        sets: String,
        reps: String,
        weight: String,
        duration: String,
        burned: String,
});

module.exports = mongoose.model('PostNewWorkout', postSchema)

