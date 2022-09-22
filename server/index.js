// const morgan = require("morgan");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const PRLogRouter = require('../Routes/PRLogPosts');

// Middleware
app.use(express.json());
// app.use(morgan('dev'));
app.use(cors());

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
app.use('/', PRLogRouter)

// Error Handler
  app.use((err, req, res, next) => {
  console.log(err)
   return res.status(400).send({ errMsg: err.message})
});
app.listen(3001, () => {
    console.log("The App is running at port 3001")
});

