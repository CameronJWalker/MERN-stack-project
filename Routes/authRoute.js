const Auth = require ("../Modules/authSchema");
const express = require("express");
const NewAuthRouter = express.Router();
const jwt = require('jsonwebtoken');


NewAuthRouter.post("/signup", (req, res, next) => {
    Auth.findOne({ username:req.body.usrename.toLowerCase()}, (err,user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(user) {
            res.status(403)
            return next(new Error('Username Already Exists'))
        }
    })
    const newAuth = new Auth(req.body)
    newAuth.save((err, savedAuth) => {
        if(err){
            res.status(500)
        }
        const token = jwt.sign(savedAuth.withoutPassword(), process.env.SECRET)
        return res.status(201).send({ token, user: savedAuth.withoutPassword() })
    })
})
NewAuthRouter.post("/login", (req, res, next) => {
    
    })
module.exports = NewAuthRouter;
