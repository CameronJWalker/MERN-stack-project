const morgan = require("morgan");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
// const cors = require("cors");

// Middleware
app.use(express.json());
app.use(morgan('dev'));

main().catch(err => console.log(err));
async function main(){
    await mongoose.connect('mongodb://localhost:27017/WorkoutApp'),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    };
    console.log("Connected to the DB");
};

// Route
app.use('/prlog', require('./Models/postPRLog'))