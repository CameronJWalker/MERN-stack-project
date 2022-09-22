const PostNewWorkout = require("../Models/postNewWorkout")
const express = require("express");
const WorkoutRouter = express.Router();

WorkoutRouter.post("/newWorkout/:WorkoutId", (req, res, next) => {

})

// export const getPost = async (req, res) => {
//     try {
//         const postnewWorkouts  = await PostNewWorkout.find();

//         res.status(200).json(postnewWorkouts);
//     } catch (error) {
//         res.status(404).json ({ message: error.message });
//     }
// }

// export const createPost = async (req, res) => {
//     const post = req.body;
//     const newPost= new PostNewWorkout(post);

//     try {
//        await newPost.save();

//         res.status(201).json(newPost);
//     } catch (error) {
//         res.status(409).json({ message: error.message});
//     }
// }