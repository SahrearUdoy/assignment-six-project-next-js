"use client";

import React, { createContext, useState } from "react";

export const WorkoutContext = createContext({});

export default function WorkoutProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [done, setDone] = useState([]);

  function addToSaved(workout) {
    setSaved([...saved, workout]);
  }

  const sharedData = {
    plan,
    setPlan,
    saved,
    setSaved,
    addToSaved,
    done,
    setDone,
  };

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
}
