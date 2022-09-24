import React from "react";

export default function DisplayWorkouts({repo}) {
    if (repo.length > 0) {
        return(
            repo.map(r => {
                console.log(r)
                return (
                    <div className="card">
                        <p>Workout: {r.workoutname}</p>
                        <p>Type: {r.cOs}</p>
                        <p>Sets: {r.sets}</p>
                        <p>Reps: {r.reps}</p>
                        <p>Weight: {r.weight}</p>
                        <p>Duration: {r.duration}</p>
                        <p>Calories: {r.burned}</p>
                    </div>
                )
            })
        )
    }
}