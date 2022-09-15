import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

export default function prLog() {
                const [inputs, setInputs] = useState({});

                const handleChange = (event) => {
                const name = event.target.name;
                const value = event.target.value;
                setInputs(values => ({...values, [name]: value}))
                }

                const handleSubmit = (event) => {
                event.preventDefault();
                 alert(inputs);
                }
    return(
        <form onSubmit={handleSubmit}>
        <label>Enter Workout Name:
            <input 
            type="text" 
            name="workoutName" 
          value={inputs.workoutName || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your PR Weight:
          <input 
            type="number" 
            name="weight" 
            value={inputs.weight || ""} 
            onChange={handleChange}
          />
          </label>
          <input type="submit" />
      </form>
    )
  }
//const  = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<prLog />);