import React from 'react';
import './App.css';
import Nutrition  from '/components/nutrition';
import newWorkout from './components/newWorkout';
import prLog from './components/prlog'

export default function App() {
     return (
      <>
      < newWorkout />
      < Nutrition />
      < prLog />
      <button> New Workout </button>
      <button> New Nutrition </button>
      <button> New Personal Record </button>
        <div className="App">
          <header className="App-header">
           <p>
               Workout App
          </p>
    </header>
   </div>
   </>
  );
}


