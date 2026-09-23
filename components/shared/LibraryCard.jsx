import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LibraryCard({ workoutData }) {
  return (
    <div className="rounded-2xl border border-gray-700 bg-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* image */}
      <div>
        <Image
          src={workoutData.image}
          width={800}
          height={600}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      {/* muscleGroups */}
      <div className="flex gap-2">
        {workoutData.muscleGroups.map((muscle) => (
          <span className="rounded-full bg-lime-500 px-3 py-1 text-sm text-black">
            {muscle}
          </span>
        ))}
      </div>
      {/* name */}
      <div></div>
      {/* equipment */}
      <div></div>
      {/* duration */}
      <div></div>
      {/* caloriesBurned */}
      <div></div>
      {/* rating */}
      <div></div>
    </div>
  );
}
