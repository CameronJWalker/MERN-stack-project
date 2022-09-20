import mongoose from 'mongoose';

const postSchema = mongoose.Schema({

        workoutname: String,
        cOs: String,
        sets: String,
        reps: String,
        weight: String,
        duration: String,
        burned: String,
});

const PostNewWorkout = mongoose.model('PostNewWorkout', postSchema)

export default PostNewWorkout;