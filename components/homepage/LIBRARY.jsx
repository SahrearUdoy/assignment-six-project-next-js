import React from "react";

const getWorkoutData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

export default async function Library() {
  const workoutDatas = await getWorkoutData();

  return (
    <section>
      <h3>THE LIBRARY</h3>
      <p>Twelve lifts covering every major muscle group.</p>
      {/* CARDS */}

      {workoutDatas.map((workoutData) => {
        return <div key={workoutData.id}>{workoutData.name}</div>;
      })}
    </section>
  );
}
