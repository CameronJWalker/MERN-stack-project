const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NutritionSchema = new Schema({
        mealname: String,
        servsize: String,
        cal: String,
        fat: String,
        carbs: String,
        protein: String,
});

module.exports = mongoose.model('PostNutrition', NutritionSchema)