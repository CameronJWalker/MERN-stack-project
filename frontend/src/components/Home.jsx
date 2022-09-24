import React, { useState,useEffect } from 'react';
import DisplayWorkouts from './displayWorkout';
import axios from 'axios';

export default function Home() {
  const [repo, setRepo] = useState([]);

  const getRepo = () => {
    axios.get('/newworkout')
      .then(res => {
        const myRepo = res.data;
        setRepo(myRepo)
      })
      .catch(err => console.log(err.response.data.errMsg))}

  useEffect(() => getRepo(), [])
  return (
    <div>
      <header className = "button-container">
        <a href = '/newworkout'><button> New Workout </button></a>
        <a href = '/nutrition'><button> New Nutrition </button></a>
        <a href = '/prlog'><button> New Personal Record </button></a>
      </header>
      <main>
        <DisplayWorkouts repo={repo}/>
      </main>
    </div>
  )
}