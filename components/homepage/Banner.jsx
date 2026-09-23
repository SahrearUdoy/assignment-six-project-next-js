import Image from "next/image";
import React from "react";
import bannerImage from "@/public/assets/banner.png";

export default function Banner() {
  return (
    <section className="container mx-auto bg-gray-900 border-2 rounded-3xl mt-7 border-gray-700">
      <div className=" flex justify-between  border-gray-700 items-center mt-7 w-auto ml-5 mr-5">
        {/* Left */}
        <div className=" ml-7">
          <p className="text-lime-400 ">WORKOUT LIBRARY</p>
          <h1 className=" mt-5 mb-5 font-extrabold text-4xl">
            TRAIN WITH INTENT. LOG <br /> EVERY SET.
          </h1>

          <p className="mb-5 text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
            <br /> into today's plan, and watch the week's work add up.
          </p>

          <button className="p-3  bg-lime-400 rounded-[6px] text-black font-semibold">
            BROWSE WORKOUTS
          </button>
        </div>
        {/* Right */}
        <div>
          <Image src={bannerImage}></Image>
        </div>
      </div>
    </section>
  );
}
