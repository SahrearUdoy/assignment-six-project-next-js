import React from "react";
import logo from "@/public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <section className="">
      <div className=" flex justify-between  border-b-2 border-gray-700 bg-black p-2 ">
        {/* Left */}
        <div className="flex gap-2 items-center">
          <Image src={logo} />
          <h2 className="font font-extrabold">FITLOG</h2>
        </div>

        {/* Center */}
        <div className="flex justify-between gap-2 items-center">
          <div className="font-semibold border-5 p-1 rounded-2xl border-black bg-green-600 text-lime-900">
            <Link href="/workouts">Workouts</Link>
          </div>
          <div>
            <Link href="/my-plans">My Plan</Link>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-between gap-2">
          <Link href="/added-plans">Plan</Link>
          <Link href="/saved-workouts">Saved</Link>
        </div>
      </div>
    </section>
  );
}
