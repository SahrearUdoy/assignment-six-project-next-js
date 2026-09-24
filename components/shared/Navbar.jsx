"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/assets/logo.png";
import { WorkoutContext } from "@/context/WorkoutContext";

export default function Navbar() {
  const { plan, saved } = useContext(WorkoutContext);
  const pathname = usePathname();

  return (
    <section>
      <div className="flex flex-col gap-4 border-b-2 border-gray-700 bg-black p-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Fitlog logo" />
          <h2 className="font-extrabold">FITLOG</h2>
        </Link>

        <div className="flex items-center justify-center gap-4">
          <div
            className={`font-semibold ${
              pathname.startsWith("/workouts") ? "text-lime-400" : "text-white"
            }`}
          >
            <Link href="/workouts">Workouts</Link>
          </div>

          <div
            className={`font-semibold ${
              pathname.startsWith("/my-plans") ? "text-lime-400" : "text-white"
            }`}
          >
            <Link href="/my-plans">My Plan</Link>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
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
