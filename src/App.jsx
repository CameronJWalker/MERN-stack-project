import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nutrition  from './components/nutrition';
import NewWorkout from './components/newWorkout.jsx';
import PRLog from './components/PRLog'
import Home from './components/Home.jsx';

export default function App() {
     return (
      <>
       <div className="App">
          <header className="App-header">
            <nav>
              Workout App
            </nav>
          </header>
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


