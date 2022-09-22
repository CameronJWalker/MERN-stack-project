const postNutrition = require ("../Modules/postNutrition");
const express = require("express");
const NutritionRouter = express.Router();


NutritionRouter.post("/", (req, res, next) => {
    const newNutrition = new postNutrition(req.body)
    newNutrition.save((err, savedNutrition) => {
        if(err){
          res.status(500)
        }
        return res.status(201).send(savedNutrition)
      })
    
})
NutritionRouter.get("/", (req, res, next) => {
    postNutrition.find((err, savedNutrition) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(savedNutrition)
      })
})
// NutritionRouter.put(() => {

// })
NutritionRouter.delete("/:NutritionId",(req, res, next) => {
  postNutrition.findOneAndDelete(
    {_id:req.params.NutritionId},
    (err, deletedNutrition) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted the nutrition Log: ${deletedNutrition}`)
    }
  )
})

module.exports = NutritionRouter;

// export const getPost = async (req, res) => {
//     try {
//         const postNutrition  = await PostNutrition.find();

//         res.status(200).json(postNutrition);
//     } catch (error) {
//         res.status(404).json ({ message: error.message });
//     }
// }

// export const createPost = async (req, res) => {
//     const post = req.body;
//     const newPost= new PostNutrition(post);

//     try {
//        await newPost.save();

//         res.status(201).json(newPost);
//     } catch (error) {
//         res.status(409).json({ message: error.message});
//     }
// }