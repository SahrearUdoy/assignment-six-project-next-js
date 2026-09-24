import Image from "next/image";
import React from "react";
import bannerImage from "@/public/assets/banner.png";

export default function Banner() {
  return (
    <section className="container mx-auto mt-7 rounded-3xl border-2 border-gray-700 bg-gray-900">
      <div className="mx-5 mt-7 flex flex-col items-center gap-6 border-gray-700 md:flex-row md:justify-between">
        {/* Left */}
        <div className="ml-0 py-6 md:ml-7">
          <p className="text-lime-400">WORKOUT LIBRARY</p>

          <h1 className="mt-5 mb-5 text-3xl font-extrabold sm:text-4xl">
            TRAIN WITH INTENT. LOG <br /> EVERY SET.
          </h1>

          <p className="mb-5 text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
            <br className="hidden sm:block" /> into today's plan, and watch the
            week's work add up.
          </p>

          <a
            href="#library"
            className="inline-block rounded-[6px] bg-lime-400 p-3 font-semibold text-black"
          >
            BROWSE WORKOUTS
          </a>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2">
          <Image
            src={bannerImage}
            alt="FitLog workout banner"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
