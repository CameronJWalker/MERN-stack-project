import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const postSchema = new Schema({

    workoutName: String,
    weight: String,
});

module.export = mongoose.model('PostPRLog', postSchema)

