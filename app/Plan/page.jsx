"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";

export default function AddedPlan() {
  const { plan, saved } = useContext(WorkoutContext);
  const totalDuration = plan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );
  const totalCaloriesBurned = plan.reduce(
    (totalCalorie, workout) => totalCalorie + workout.caloriesBurned,
    0,
  );

  return (
    <section>
      <div>
        <h1>MY PLAN</h1>
      </div>

      <p>Cap of five lifts for today. Finish them, thhen load more.</p>

      <div>
        <div>Exercise {plan.length}</div>
        <p>Minutes {totalDuration}</p>
        <p>Calories {totalCaloriesBurned}</p>
      </div>

      <div>
        <div>
          <div>Today's Plan</div>
          <div>Saved</div>
        </div>
        <div>
          <div>Sort By</div>
          <div>Duration</div>
        </div>
      </div>

      <div>
        {plan.map((workout) => (
          <div key={workout.id}>
            <img src={workout.image} alt="" />
            <div>
              <h2>{workout.image}</h2>
              <p>{workout.equipment}</p>
              <div>
                <div>{workout.duration} min</div>
                <div>{workout.caloriesBurned}kcal</div>
                <div>{workout.rating}</div>
              </div>
            </div>

            <div>
              <button>View Details</button>
              <button>Mark as Done</button>
              <button>×</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
