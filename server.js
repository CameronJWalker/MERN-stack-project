// const morgan = require("morgan");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
require('dotenv').config();
const cors = require("cors");
const PRLogRouter = require('./Routes/PRLogPosts');
const NewWorkoutRouter = require('./Routes/newWorkoutPosts');
const NutritionRouter = require('./Routes/nutritionPosts');
const path = require("path");
require("dotenv").config();

// Middleware
app.use(express.json());
// app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.resolve(__dirname, './frontend/build')));

main().catch(err => console.log(err));
async function main(){
    await mongoose.connect(process.env.dburi),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    };
    console.log("Connected to the DB");
};

// Route
app.use('/prlog', PRLogRouter)
app.use('/newworkout', NewWorkoutRouter)
app.use('/nutrition', NutritionRouter)

// Error Handler
  app.use((err, req, res, next) => {
  console.log(err)
   return res.status(400).send({ errMsg: err.message})
});
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './frontend/build', 'index.html'));
});
app.listen(process.env.PORT || 3001, () => {
    console.log("The App is running at port 3001")
});


