import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const postSchema = new Schema({
        mealname: String,
        servsize: String,
        cal: String,
        fat: String,
        carbs: String,
        protein: String,
});

module.exports = mongoose.model('PostNutrition', postSchema)

