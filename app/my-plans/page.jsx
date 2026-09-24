"use client";
import { useSearchParams } from "next/navigation";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";

export default function AddedPlan() {
  const { plan, saved, setPlan } = useContext(WorkoutContext);

  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const [activeTab, setActiveTab] = useState("plan");

  useEffect(() => {
    if (tab === "saved") {
      setActiveTab("saved");
    } else {
      setActiveTab("plan");
    }
  }, [tab]);
  const [sortBy, setSortBy] = useState("duration");

  const totalDuration = plan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCaloriesBurned = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  function removeWorkout(id) {
    const remainingWorkout = plan.filter((workout) => workout.id !== id);
    setPlan(remainingWorkout);
  }

  let workouts = activeTab === "plan" ? plan : saved;

  if (sortBy === "duration") {
    workouts = [...workouts].sort((a, b) => a.duration - b.duration);
  }

  if (sortBy === "calories") {
    workouts = [...workouts].sort(
      (a, b) => a.caloriesBurned - b.caloriesBurned,
    );
  }

  if (sortBy === "rating") {
    workouts = [...workouts].sort((a, b) => a.rating - b.rating);
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-white">MY PLAN</h1>

        <p className="mt-2 text-sm text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="mb-8 rounded-2xl border border-gray-700 bg-gray-900 p-6">
        <div className="grid grid-cols-3 text-center">
          <div>
            <p className="text-gray-400">Exercises</p>
            <h2 className="mt-2 text-2xl font-bold">{plan.length}</h2>
          </div>

          <div className="border-x border-gray-700">
            <p className="text-gray-400">Minutes</p>
            <h2 className="mt-2 text-2xl font-bold">{totalDuration}</h2>
          </div>

          <div>
            <p className="text-gray-400">Calories</p>
            <h2 className="mt-2 text-2xl font-bold">{totalCaloriesBurned}</h2>
          </div>
        </div>
      </div>

      <div className="mb-6 flex justify-between items-center">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("plan")}
            className="rounded-md bg-lime-400 px-4 py-2 text-black"
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className="rounded-md border border-gray-600 px-4 py-2 text-white"
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-gray-400">Sort By</p>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-md bg-gray-900 border border-gray-600 p-2"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {workouts.map((workout) => (
          <div
            key={workout.id}
            className="flex items-center justify-between rounded-2xl border border-gray-700 bg-gray-900 p-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={workout.image}
                alt={workout.name}
                className="h-24 w-32 rounded-xl object-cover"
              />

              <div>
                <h2 className="text-xl font-bold">{workout.name}</h2>

                <p className="text-gray-400">{workout.equipment}</p>

                <div className="flex gap-4 mt-3 text-sm text-gray-400">
                  <p>{workout.duration} min</p>

                  <p>{workout.caloriesBurned} kcal</p>

                  <p>{workout.rating}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link href={`/workouts/${workout.id}`}>
                <button className="border border-gray-600 rounded-md px-4 py-2">
                  View Details
                </button>
              </Link>

              <button className="bg-lime-400 text-black rounded-md px-4 py-2">
                Mark as Done
              </button>

              {activeTab === "plan" && (
                <button
                  onClick={() => removeWorkout(workout.id)}
                  className="text-xl px-2"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {workouts.length === 0 && (
        <div className="text-center py-10">
          <h2 className="text-xl font-bold">NOTHING HERE YET</h2>

          <p className="text-gray-400 mt-2">
            Browse the library and add a lift to get today moving.
          </p>

          <Link href="/workouts">
            <button className="mt-4 bg-lime-400 text-black rounded-md px-5 py-2">
              Go to workouts
            </button>
          </Link>
        </div>
      )}
    </section>
  );
}
