import {useState} from 'react'
import ReactDOM from 'react-dom/client';
// import postNewWorkout from '../Server/Models/postNewWorkout';

 export default function NewWorkout() {
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

     return (
        <div className = "newWorkout">
         <form onSubmit={handleSubmit}>
             <label class ="workoutName">Enter your Workout Name
                 <input 
                     type="text" 
                     name="workoutname" 
                     value={inputs.workoutname || ""} 
                     onChange={handleChange}
                />
            </label>
            <label class = "cOs"> Cardio or Strength
                <input 
                    type="text" 
                    name="cOs" 
                    value={inputs.cOs || ""} 
                    onChange={handleChange}
                />
            </label>
            <label class = "numberOfSets"># of Sets
                <input 
                    type="number" 
                    name="sets" 
                    value={inputs.sets || ""} 
                    onChange={handleChange}
                />
            </label>
            <label class = "numberOfReps"># of Reps
                <input 
                    type="number" 
                    name="reps" 
                    value={inputs.reps || ""} 
                    onChange={handleChange}
                />
            </label>
            <label class = "weight"> Weight
                <input 
                    type="number" 
                    name="weight" 
                    value={inputs.weight || ""} 
                    onChange={handleChange}
                />
            </label>
            <label class = "workoutDuration"> Workout Duration
                <input 
                    type="number" 
                    name="duration" 
                     value={inputs.duration || ""} 
                     onChange={handleChange}
                 />
             </label>
             <label class = "caloriesBurned"> Est. Calories Burned
                 <input 
                     type="number" 
                     name="burned" 
                     value={inputs.burned || ""} 
                     onChange={handleChange}
                 />
             </label>
         <input class = "submitButton" type="submit" />
     </form>
     </div>
     );
 }
 //dont understand this part entirely
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<NewWorkout />);