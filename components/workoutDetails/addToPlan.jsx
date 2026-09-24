"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";
import { toast } from "react-toastify";

export default function AddToTodaysPlan({ workoutDetail }) {
  const { plan, setPlan } = useContext(WorkoutContext);

  function handleAddToTodaysPlan() {
    const alreadyAdded = plan.some(
      (workout) => workout.id === workoutDetail.id,
    );

    if (alreadyAdded) {
      toast.info(`${workoutDetail.name} is already in today's plan`);
      return;
    }

    if (plan.length >= 5) {
      toast.error("Today's plan can have only 5 workouts");
      return;
    }

    setPlan([...plan, workoutDetail]);
    toast.success(`${workoutDetail.name} added to today's plan`);
  }

  return (
    <button
      className="btn btn-active btn-success mr-3"
      onClick={() => handleAddToTodaysPlan()}
    >
      Add to today's plan
    </button>
  );
}
