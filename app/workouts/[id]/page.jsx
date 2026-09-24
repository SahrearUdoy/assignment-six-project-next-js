import React from "react";
import Image from "next/image";
import AddToTodaysPlan from "@/components/workoutDetails/addToPlan";
import SaveForLater from "@/components/workoutDetails/saveForLaterButton";
import { notFound } from "next/navigation";

const getWorkoutData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

export default async function WorkoutDetailsPage({ params }) {
  const { id } = await params;
  const workoutDetailsData = await getWorkoutData();
  const workoutDetail = workoutDetailsData.find((detail) => detail.id == id);

  if (!workoutDetail) {
    notFound();
  }

  return (
    <div className="container mx-auto flex flex-col gap-6 px-4 py-6 md:flex-row md:justify-between">
      {/* left */}
      <div className="p-4 md:w-1/2">
        <Image
          src={workoutDetail.image}
          width={400}
          height={300}
          className="w-full rounded-2xl object-cover"
          alt={workoutDetail.name}
        />
      </div>

      {/* Right */}
      <div className="md:w-1/2">
        <h2>{workoutDetail.name}</h2>

        <p>{workoutDetail.description}</p>

        {/* muscleGroups */}
        <div className="mt-4 mb-4 flex flex-wrap gap-2">
          {workoutDetail.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-lime-500 px-3 py-1 text-sm text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* card */}
        <div className="bg-gray-800 p-4 rounded-2xl">
          <div className="flex justify-between border-b-1 border-gray-500 p-3">
            <p className="text-sm text-gray-400">EQUIPMENT</p>
            <p className="text-sm">{workoutDetail.equipment}</p>
          </div>

          <div className="flex justify-between border-b-1 border-gray-500 p-3">
            <p className="text-sm text-gray-400">DIFFICULTY</p>
            <p className="text-sm">{workoutDetail.difficulty}</p>
          </div>

          <div className="flex justify-between border-b-1 border-gray-500  p-3">
            <p className="text-sm text-gray-400">SETS</p>
            <p className="text-sm">{workoutDetail.sets}</p>
          </div>

          <div className="flex justify-between border-b-1 border-gray-500  p-3">
            <p className="text-sm text-gray-400">REPS</p>
            <p className="text-sm">{workoutDetail.reps}</p>
          </div>

          <div className="flex justify-between border-b-1 border-gray-500  p-3">
            <p className="text-sm text-gray-400">DURATION</p>
            <p className="text-sm">{workoutDetail.duration} min</p>
          </div>

          <div className="flex justify-between border-b-1 border-gray-500  p-3">
            <p className="text-sm text-gray-400">CALORIES</p>
            <p className="text-sm">{workoutDetail.caloriesBurned} kcal</p>
          </div>

          <div className="flex justify-between p-3">
            <p className="text-sm text-gray-400">RATING</p>
            <p className="text-sm">{workoutDetail.rating}</p>
          </div>
          {/* Instructions */}

          <h2 className="font-bold p-4">Instructions</h2>
          <div className="p-3 ml-2">
            <ol className="list-decimal">
              {workoutDetail.instructions.map((instruction) => (
                <li key={instruction} className="p-2">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          {/* buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <AddToTodaysPlan workoutDetail={workoutDetail}></AddToTodaysPlan>

            <SaveForLater
              className="btn btn-soft"
              workoutDetail={workoutDetail}
            ></SaveForLater>
          </div>
        </div>
      </div>
    </div>
  );
}
