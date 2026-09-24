import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LibraryCard({ workoutData }) {
  return (
    <Link href={`/workouts/${workoutData.id}`}>
      <section className="mx-auto h-full">
        <div className="h-full rounded-3xl border-2 border-black bg-gray-800 p-4 sm:p-5">
          {/* image */}
          <div>
            <Image
              src={workoutData.image}
              width={400}
              height={100}
              className="h-auto w-full rounded-2xl object-cover"
              alt={workoutData.name}
            />
          </div>

          {/* muscleGroups */}
          <div className="mt-4 mb-4 flex flex-wrap gap-2">
            {workoutData.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-lime-500 px-3 py-1 text-sm text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* name */}
          <div className="mb-3 text-xl font-bold sm:text-2xl">
            {workoutData.name}
          </div>

          {/* equipment */}
          <div className="mb-4 text-gray-200">{workoutData.equipment}</div>

          {/* stats */}
          <div className="flex items-center justify-between border-t-2 border-gray-700 pt-3 text-sm sm:text-base">
            <div>{workoutData.duration} min</div>
            <div>{workoutData.caloriesBurned} kcal</div>
            <div>{workoutData.rating}</div>
          </div>
        </div>
      </section>
    </Link>
  );
}
