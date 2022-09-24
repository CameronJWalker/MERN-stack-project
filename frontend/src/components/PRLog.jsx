import React, { useState } from 'react';

export default function PRLog() {
  const [inputs, setInputs] = useState({});

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return(
    <div className = "newPR">
      <form onSubmit={handleSubmit}>
        <label>Enter Workout Name:
          <input 
            type="text" 
            name="workoutName" 
            value={inputs.workoutName || ""} 
            onChange={handleChange}/>
        </label>
        <label>Enter your PR Weight:
          <input 
            type="number" 
            name="weight" 
            value={inputs.weight || ""} 
            onChange={handleChange}/>
          </label>
        <input type="submit" />
      </form>
    </div>
  )
}