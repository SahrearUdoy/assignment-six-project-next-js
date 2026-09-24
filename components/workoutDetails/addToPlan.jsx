"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";

export default function AddToTodaysPlan({ workOutDetail }) {
  const { plan, setPlan } = useContext(WorkoutContext);

  function handleAddToTodaysPlan() {
    setPlan([...plan, workOutDetail]);
    alert(`You have read '${workOutDetail.name}'`);
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
