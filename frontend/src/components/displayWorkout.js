import React from "react";

export default function DisplayWorkouts({repo}) {
    if (repo.length > 0) {
        return(
            repo.map(r => {
                console.log(r)
                return (
                    <div className="card">
                        <p>{r.workoutname}</p>
                        <p>{r.cOs}</p>
                        <p>{r.sets}</p>
                        <p>{r.reps}</p>
                        <p>{r.weight}</p>
                        <p>{r.duration}</p>
                        <p>{r.burned}</p>
                    </div>
                )
            })
        )
    }
}