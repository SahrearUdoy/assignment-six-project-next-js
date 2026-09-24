import React from "react";
import LibraryCard from "../shared/LibraryCard";

const getWorkoutData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

export default async function Library() {
  const workoutDatas = await getWorkoutData();

  return (
    <section id="library">
      <div className="container mx-auto mt-4 mb-4 pt-6">
        <h1 className="font-extrabold text-2xl mb-2">THE LIBRARY</h1>
        <p className="text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      {/* CARDS */}

      <div className="grid grid-cols-3 gap-2 ">
        {workoutDatas.map((workoutData) => {
          return (
            <LibraryCard
              key={workoutData.id}
              workoutData={workoutData}
            ></LibraryCard>
          );
        })}
      </div>
    </section>
  );
}
