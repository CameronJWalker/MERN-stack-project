import mongoose from 'mongoose';

const postSchema = mongoose.Schema({

    workoutName: String,
    weight: String,
});

const postPRLog = mongoose.model('PostPRLog', postSchema)

export default postPRLog;6