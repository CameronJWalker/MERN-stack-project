const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({

    workoutName: String,
    weight: String,
});

module.exports = mongoose.model('PostPRLog', postSchema)

