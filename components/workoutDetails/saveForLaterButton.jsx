"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";
import { toast } from "react-toastify";

export default function SaveForLater({ workoutDetail }) {
  const { saved, setSaved } = useContext(WorkoutContext);

  function handleSaveForLater() {
    setSaved([...saved, workoutDetail]);
    toast.success(` '${workoutDetail.name}' Saved for Later!`);
  }

  return (
    <button
      className="btn btn-active btn-success mr-3"
      onClick={() => handleSaveForLater()}
    >
      Save For Later
    </button>
  );
}
