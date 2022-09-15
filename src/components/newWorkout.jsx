import React from 'react';
import {useState} from 'react'
import ReactDOM from 'react-dom/client';

export default function NewWorkout(){
return (
    <p>
        New Workout
    </p>
) 
}
// export default function newWorkout() {
//     const [inputs, setInputs] = useState({});

//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;6
//         setInputs(values => ({...values, [name]: value}))
//       }
    
//       const handleSubmit = (event) => {
//         event.preventDefault();
//         alert(inputs);
//       }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>Enter your Workout Name
//                 <input 
//                     type="text" 
//                     name="workoutname" 
//                     value={inputs.workoutname || ""} 
//                     onChange={handleChange}
//                 />
//             </label>
//             <label> Cardio or Strength
//                 <input 
//                     type="text" 
//                     name="cOs" 
//                     value={inputs.cOs || ""} 
//                     onChange={handleChange}
//                 />
//             </label>
//             <label># of Sets
//                 <input 
//                     type="number" 
//                     name="sets" 
//                     value={inputs.sets || ""} 
//                     onChange={handleChange}
//                 />
//             </label>
//             <label># of Reps
//                 <input 
//                     type="number" 
//                     name="reps" 
//                     value={inputs.reps || ""} 
//                     onChange={handleChange}
//                 />
//             </label>
//             <label> Weight
//                 <input 
//                     type="number" 
//                     name="weight" 
//                     value={inputs.weight || ""} 
//                     onChange={handleChange}
//                 />
//             </label>
//             <label> Workout Duration
//                 <input 
//                     type="number" 
//                     name="duration" 
//                     value={inputs.duration || ""} 
//                     onChange={handleChange}
//                 />
//             </label>
//             <label> Est. Calories Burned
//                 <input 
//                     type="number" 
//                     name="burned" 
//                     value={inputs.burned || ""} 
//                     onChange={handleChange}
//                 />
//             </label>
//         <input type="submit" />
//     </form>
//     );
// }
// //dont understand this part entirely
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<newWorkout />);

