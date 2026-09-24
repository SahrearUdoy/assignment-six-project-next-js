"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/assets/logo.png";
import { WorkoutContext } from "@/context/WorkoutContext";

export default function Navbar() {
  const { plan, saved } = useContext(WorkoutContext);

  return (
    <section>
      <div className="flex justify-between border-b-2 border-gray-700 bg-black p-2">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Fitlog logo" />
          <h2 className="font-extrabold">FITLOG</h2>
        </Link>

        {/* MIDDLE NAVIGATION */}
        <div className="flex items-center justify-between gap-4">
          <div className="font-semibold">
            <Link href="/workouts">Workouts</Link>
          </div>

          <div>
            <Link href="/my-plans">My Plan</Link>
          </div>
        </div>

        {/* PLAN AND SAVED */}
        <div className="flex items-center gap-2">
          <Link href="/my-plans?tab=plan">
            <div className="rounded-full bg-lime-400 px-4 py-2 text-black">
              Plan {plan.length}
            </div>
          </Link>

          <Link href="/my-plans?tab=saved">
            <div className="rounded-full border border-gray-600 px-4 py-2 text-white">
              Saved {saved.length}
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
