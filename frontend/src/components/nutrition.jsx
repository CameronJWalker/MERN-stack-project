import React, { useState } from 'react';
// import postNutrition from '../Server/Models/postNutrition';

export default function Nutrition() {
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
   
    return (
        <div className = "newNutrition">
            <form onSubmit={handleSubmit}>
                <label>Enter your Meal
                    <input 
                        type="text" 
                        name="mealname" 
                        value={inputs.workoutname || ""} 
                        onChange={handleChange}
                   />
               </label>
               <label> Serving Size
                    <input 
                        type="number" 
                        name="servsize" 
                        value={inputs.servsize || ""} 
                        onChange={handleChange}
                    />
                </label>
                <label> Calories
                   <input 
                       type="number" 
                       name="cal" 
                       value={inputs.cal || ""} 
                       onChange={handleChange}
                   />
                </label>
                <label> Fat(g)
                   <input 
                       type="number" 
                       name="fat" 
                       value={inputs.fat || ""} 
                       onChange={handleChange}
                   />
                </label>
                <label>Carbs(g)
                   <input 
                       type="number" 
                       name="carbs" 
                       value={inputs.carbs || ""} 
                       onChange={handleChange}
                   />
                </label>
                <label> Protein(g)
                   <input 
                       type="number" 
                       name="protein" 
                       value={inputs.protein || ""} 
                       onChange={handleChange}
                   />
                </label>
                <input type="submit" />
            </form>
        </div>
    );
}