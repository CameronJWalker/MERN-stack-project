const PostNewWorkout = require ("../Modules/postNewWorkout");
const express = require("express");
const NewWorkoutRouter = express.Router();


NewWorkoutRouter.post("/", (req, res, next) => {
    const newNewWorkout = new PostNewWorkout(req.body)
    newNewWorkout.save((err, savedWorkout) => {
        if(err){
          res.status(500)
        }
        return res.status(201).send(savedWorkout)
      })
    
})
NewWorkoutRouter.get("/", (req, res, next) => {
    PostNewWorkout.find((err, savedWorkout) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(savedWorkout)
      })
})
// PRLogRouter.put(() => {

// })
NewWorkoutRouter.delete("/:NewWorkoutId",(req, res, next) => {
  PostNewWorkout.findOneAndDelete(
    {_id:req.params.NewWorkoutId},
    (err, deletedWorkout) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted the workout Log: ${deletedWorkout}`)
    }
  )
})

module.exports = NewWorkoutRouter;

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