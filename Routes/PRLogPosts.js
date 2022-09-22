const PostPRLog = require ("../Modules/postPRLog");
const express = require("express");
const PRLogRouter = express.Router();


PRLogRouter.post("/", (req, res, next) => {
    const newPRLog = new PostPRLog(req.body)
    newPRLog.save((err, savedPRLog) => {
        if(err){
          res.status(500)
        }
        return res.status(201).send(savedPRLog)
      })
    
})
PRLogRouter.get("/", (req, res, next) => {
    PostPRLog.find((err, savedPRLog) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(savedPRLog)
      })
})
// PRLogRouter.put(() => {

// })
PRLogRouter.delete("/:PRLogId",(req, res, next) => {
  PostPRLog.findOneAndDelete(
    {_id:req.params.PRLogId},
    (err, deletedPRLog) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted the PR Log: ${deletedPRLog}`)
    }
  )
})

module.exports = PRLogRouter;

// export const getPost = async (req, res) => {
//     try {
//         const postPRLog  = await PostPRLog.find();

//         res.status(200).json(postPRLog);
//     } catch (error) {
//         res.status(404).json ({ message: error.message });
//     }
// }

// export const createPost = async (req, res) => {
//     const post = req.body;
//     const newPost= new PostPRLog(post);

//     try {
//        await newPost.save();

//         res.status(201).json(newPost);
//     } catch (error) {
//         res.status(409).json({ message: error.message});
//     }
// }