const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PRSchema = new Schema({

    workoutName: String,
    weight: String,
});

module.exports = mongoose.model('PostPRLog', PRSchema)