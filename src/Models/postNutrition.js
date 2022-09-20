import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
        mealname: String,
        servsize: String,
        cal: String,
        fat: String,
        carbs: String,
        protein: String,
});

const PostNutrition = mongoose.model('PostNutrition', postSchema)

export default PostNutrition;