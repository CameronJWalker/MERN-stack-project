// import React from 'react';
// import ReactDOM from 'react-dom/client';

// export default function Nutrition() {
//         const [inputs, setInputs] = useState({});

//         const handleChange = (event) => {
//             const name = event.target.name;
//             const value = event.target.value;6
//             setInputs(values => ({...values, [name]: value}))
//           }
       
//           const handleSubmit = (event) => {
//             event.preventDefault();
//             alert(inputs);
//           }
   
//         return (
//             <form onSubmit={handleSubmit}>
//                 <label>Enter your Meal
//                     <input 
//                         type="text" 
//                         name="workoutname" 
//                         value={inputs.workoutname || ""} 
//                         onChange={handleChange}
//                    />
//                </label>
//                <label> Grams of Protein
//                    <input 
//                        type="text" 
//                        name="cOs" 
//                        value={inputs.cOs || ""} 
//                        onChange={handleChange}
//                    />
//                </label>
//                <label> Grams of Fat
//                    <input 
//                        type="number" 
//                        name="sets" 
//                        value={inputs.sets || ""} 
//                        onChange={handleChange}
//                    />
//                </label>
//                <label> Grams of Carbs
//                    <input 
//                        type="number" 
//                        name="reps" 
//                        value={inputs.reps || ""} 
//                        onChange={handleChange}
//                    />
//                </label>
//             <input type="submit" />
//         </form>
//         );
//     }
// //     //dont understand this part entirely
// //     const root = ReactDOM.createRoot(document.getElementById('root'));
// //     root.render(<newWorkout />);
// //         <p>
// //             New Calories Log
// //        </p>
// //     );
// // }
