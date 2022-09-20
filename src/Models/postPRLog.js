import mongoose from 'mongoose';

const postSchema = mongoose.Schema({

    workoutName: String,
    weight: String,
});

const PostPRLog = mongoose.model('PostPRLog', postSchema)

export default PostPRLog;