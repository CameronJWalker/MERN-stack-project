const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WorkoutSchema = new Schema({
        workoutname: String,
        cOs: String,
        sets: String,
        reps: String,
        weight: String,
        duration: String,
        burned: String,
});

module.exports = mongoose.model('PostNewWorkout', WorkoutSchema)