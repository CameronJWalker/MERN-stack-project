import React, { useState } from 'react';
import axios from 'axios';
// import postNewWorkout from '../Server/Models/postNewWorkout';

export default function NewWorkout() {
    const initInputs = {
        workoutname: "",
        cOs: "",
        sets: "",
        reps: "",
        weight: "",
        duration: "",
        burned: ""
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
        axios.post("/newworkout", inputs)
            .then(res => {
                return res.data
            })
            .catch(err => console.log(err.response.data.errMsg))
        setInputs(initInputs)
    }

    const {workoutname, cOs, sets, reps, weight, duration, burned} = inputs
    return (
            <form onSubmit={handleSubmit} className="newWorkout">
                <label class ="workoutName">Enter your Workout Name
                    <input 
                        type="text" 
                        name="workoutname" 
                        value={workoutname} 
                        onChange={handleChange}/>
                </label>
                <label class = "cOs"> Cardio or Strength
                    <input 
                        type="text" 
                        name="cOs" 
                        value={cOs} 
                        onChange={handleChange}/>
                </label>
                <label class = "numberOfSets"># of Sets
                    <input 
                        type="number" 
                        name="sets" 
                        value={sets} 
                        onChange={handleChange}/>
                </label>
                <label class = "numberOfReps"># of Reps
                    <input 
                        type="number" 
                        name="reps" 
                        value={reps} 
                        onChange={handleChange}/>
                </label>
                <label class = "weight"> Weight
                    <input 
                        type="number" 
                        name="weight" 
                        value={weight} 
                        onChange={handleChange}/>
                </label>
                <label class = "workoutDuration"> Workout Duration
                    <input 
                        type="number" 
                        name="duration" 
                        value={duration} 
                        onChange={handleChange}/>
                </label>
                <label class = "caloriesBurned"> Est. Calories Burned
                    <input 
                        type="number" 
                        name="burned" 
                        value={burned} 
                        onChange={handleChange}/>
                </label>
                <button>Submit</button>
            </form>
    );
}