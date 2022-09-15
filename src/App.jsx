import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nutrition  from './components/nutrition';
import NewWorkout from './components/newWorkout.jsx';
import PRLog from './components/PRLog'
import Home from './components/Home.jsx';

export default function App() {
     return (
      <>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Emblema+One&family=Exo+2:wght@500&display=swap');
      </style>
  
       <div className="App">
            <nav className = 'navbar'>
              Workout App
            </nav>
        </div>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/newworkout" element = {<NewWorkout/>}/>
        <Route path = "/nutrition" element = {<Nutrition/>}/>
        <Route path = "/prlog" element = {<PRLog/>}/>

      </Routes>
      </>
  );
}


