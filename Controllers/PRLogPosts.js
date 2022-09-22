const PostPRLog = require ("../Models/postPRLog");
const express = require("express");
const PRLogRouter = express.Router();


PRLogRouter.post("/prlog/:PRLogId", (req, res, next) => {
    const PRLogId = req.params.PRLogId
    req.body = PRLogId
    const newPRLog = new PostPRLog(req.body)
    newPRLog.save((err, savedPRLog) => {
        if(err){
          res.status(500)
        }
        return res.status(201).send(savedPRLog)
      })
    
})
PRLogRouter.get("/prlog/:PRLogId", (req, res, next) => {
    const PRLogId = req.params.PRLogId
    req.body = PRLogId
    try {
        PostPRLog.find();

        res.status(200).json(PostPRLog);
    } catch (error) {
        res.status(404).json ({ message: error.message });
    }
})

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