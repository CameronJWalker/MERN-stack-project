import React, { useState } from 'react';
import axios from 'axios';

export default function PRLog() {
  const initInputs = {
    workoutName: "",
    weight: ""
}
  const [inputs, setInputs] = useState(initInputs);

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/prlog", inputs)
            .then(res => {
                return res.data
            })
            .catch(err => console.log(err.response.data.errMsg))
    setInputs(initInputs)
  }

  const {workoutName, weight} = inputs
  return(
      <form onSubmit={handleSubmit} className = "newPR">
        <label>Enter Workout Name:
          <input 
            type="text" 
            name="workoutName" 
            value={workoutName} 
            onChange={handleChange}/>
        </label>
        <label>Enter your PR Weight:
          <input 
            type="number" 
            name="weight" 
            value={weight} 
            onChange={handleChange}/>
          </label>
          <button>Submit</button>
      </form>
  )
}