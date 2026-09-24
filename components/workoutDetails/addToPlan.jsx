"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";
import { toast } from "react-toastify";

export default function AddToTodaysPlan({ workoutDetail }) {
  const { plan, setPlan } = useContext(WorkoutContext);

  function handleAddToTodaysPlan() {
    setPlan([...plan, workoutDetail]);
    toast.success(`'${workoutDetail.name}' Added to Plan!`);
  }

  return (
    <button
      className="btn btn-active btn-success mr-3"
      onClick={() => handleAddToTodaysPlan()}
    >
      Add to todays plan
    </button>
  );
}
