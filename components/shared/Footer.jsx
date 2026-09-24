import footerLogo from "@/public/assets/logo.png";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-2">
        <Image src={footerLogo} alt="Fitlog logo" />
        <p className="font-extrabold">FITLOG</p>
      </div>

      <div className="text-sm text-gray-600 md:text-base">
        © 2026 FitLog — Workout Library. Train hard, log honest.
      </div>
    </section>
  );
}
