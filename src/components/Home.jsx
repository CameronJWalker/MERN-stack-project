import React, { Component } from 'react';


export default function Home() {
    return (
        <div className = "button-container">
          <a href = '/newWorkout'><button> New Workout </button></a>
          <a href = '/nutrition'><button> New Nutrition </button></a>
          <a href = '/prlog'><button> New Personal Record </button></a>
        </div>
    )
    }