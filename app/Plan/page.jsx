"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";

export default function AddedPlan() {
  const { plan, saved } = useContext(WorkoutContext);
}
