import React, { useState } from 'react';
import axios from 'axios';
// import postNutrition from '../Server/Models/postNutrition';

export default function Nutrition() {
    const initInputs = {
        mealname: "",
        servsize: "",
        cal: "",
        fat: "",
        carbs: "",
        protein: ""
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
        axios.post("/nutrition", inputs)
            .then(res => {
                return res.data
            })
            .catch(err => console.log(err.response.data.errMsg))
        setInputs(initInputs)
    }
   
    const {mealname, servsize, cal, fat, carbs, protein} = inputs
    return (
            <form onSubmit={handleSubmit} className = "newNutrition">
                <label>Enter your Meal
                    <input 
                        type="text" 
                        name="mealname" 
                        value={mealname} 
                        onChange={handleChange}
                   />
               </label>
               <label> Serving Size
                    <input 
                        type="number" 
                        name="servsize" 
                        value={servsize} 
                        onChange={handleChange}
                    />
                </label>
                <label> Calories
                   <input 
                       type="number" 
                       name="cal" 
                       value={cal} 
                       onChange={handleChange}
                   />
                </label>
                <label> Fat(g)
                   <input 
                       type="number" 
                       name="fat" 
                       value={fat} 
                       onChange={handleChange}
                   />
                </label>
                <label>Carbs(g)
                   <input 
                       type="number" 
                       name="carbs" 
                       value={carbs} 
                       onChange={handleChange}
                   />
                </label>
                <label> Protein(g)
                   <input 
                       type="number" 
                       name="protein" 
                       value={protein} 
                       onChange={handleChange}
                   />
                </label>
                <button>Submit</button>
            </form>
    );
}