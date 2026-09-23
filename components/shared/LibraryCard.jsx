import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LibraryCard({ workoutData }) {
  return (
    <Link href={`/workouts/${workoutData.id}`}>
      <section className="contaianer mx-auto my-auto">
        <div className=" border-2 rounded-3xl border-black bg-gray-800 p-5 ">
          {/* image */}
          <div>
            <Image
              src={workoutData.image}
              width={400}
              height={100}
              className=""
            />
          </div>
          {/* muscleGroups */}
          <div className="flex gap-2 mt-4 mb-4">
            {workoutData.muscleGroups.map((muscle) => (
              <span className="rounded-full bg-lime-500 px-3 py-1 text-sm text-black">
                {muscle}
              </span>
            ))}
          </div>
          {/* name */}
          <div className="font-bold text-2xl mb-3">{workoutData.name}</div>
          {/* equipment */}
          <div className="text-gray-200  mb-4">{workoutData.equipment}</div>
          {/* duration */}
          <div className="border-t-2 border-gray-700  flex justify-between items-center">
            <div className="gap-y-3">{workoutData.duration} min</div>
            {/* caloriesBurned */}
            <div>{workoutData.caloriesBurned} kcal</div>
            {/* rating */}
            <div>{workoutData.rating}</div>
          </div>
        </div>
      </section>
    </Link>
  );
}
