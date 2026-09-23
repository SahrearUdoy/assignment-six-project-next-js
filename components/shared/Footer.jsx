import footerLogo from "@/public/assets/logo.png";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="flex justify-between p-5">
      <div className="flex justify-between gap-2">
        <Image src={footerLogo} /> <p className="font-extrabold">FITLOG</p>
      </div>
      <div className="text-gray-600">
        © 2026 FitLog — Workout Library. Train hard, log honest.
      </div>
    </section>
  );
}
