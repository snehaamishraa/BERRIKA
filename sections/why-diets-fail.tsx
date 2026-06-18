"use client";

import { AlertCircle } from "lucide-react";

export default function WhyDietsFail() {
const cards = [
{
number: "01",
title: "You got a diet chart.",
desc: "But who buys the ingredients?",
},
{
number: "02",
title: "You have a cook.",
desc: "But who ensures they follow the diet?",
},
{
number: "03",
title: "You try to stay consistent.",
desc: "But life gets in the way.",
},
];

return ( <section className="relative overflow-hidden py-10 md:py-14">
{/* Grid Background */}
<div
className="absolute inset-0"
style={{
backgroundColor: "#FFF8F5",
backgroundImage: `             linear-gradient(to right, rgba(194,24,91,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(194,24,91,0.08) 1px, transparent 1px)
          `,
backgroundSize: "48px 48px",
}}
/>

  {/* Glow */}
  <div className="absolute left-1/2 top-20 h-[260px] w-[260px] md:h-[340px] md:w-[340px] -translate-x-1/2 rounded-full bg-[#F48FB1]/10 blur-[100px]" />

  <div className="relative mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
    {/* Badge */}
    <div className="mb-3 inline-flex items-center rounded-full border border-[#F48FB1]/20 bg-white/80 px-4 py-2 backdrop-blur-md shadow-sm">
      <AlertCircle
        size={14}
        strokeWidth={2.5}
        className="mr-2 text-[#C2185B]"
      />

      <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C2185B]">
        THE REAL PROBLEM
      </span>
    </div>

    {/* Heading */}
    <h2 className="max-w-3xl text-3xl md:text-5xl font-bold leading-tight text-[#4A2040]">
      Why most diets fail.
    </h2>

    {/* Description */}
    <p className="mt-3 max-w-2xl text-sm md:text-base leading-7 text-[#7A5A70]">
      Diet charts are a plan. Health is an outcome.
      Between them sits the hardest part — daily execution.
    </p>

    {/* Cards */}
    <div className="mt-8 grid gap-3 md:gap-4 lg:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.number}
          className="
            group
            relative
            overflow-hidden
            rounded-[20px]
            border
            border-[#F48FB1]/15
            bg-white/90
            p-4
            md:p-5
            backdrop-blur-md
            shadow-[0_6px_20px_rgba(194,24,91,0.05)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_12px_24px_rgba(194,24,91,0.10)]
          "
        >
          <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#F48FB1]/10 blur-2xl" />

          <span className="absolute right-3 top-2 text-4xl md:text-5xl font-bold text-[#F8EDF2]">
            {card.number}
          </span>

          <h3 className="text-lg md:text-xl font-bold leading-tight text-[#4A2040]">
            {card.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#7A5A70]">
            {card.desc}
          </p>
        </div>
      ))}
    </div>

    {/* Bottom Statement */}
    <div className="mt-10 md:mt-12 text-center">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-[#4A2040]">
        Berrika solves all three.
        <br />

        We are the{" "}
        <span className="bg-gradient-to-r from-[#C2185B] to-[#F48FB1] bg-clip-text italic text-transparent">
          project manager
        </span>{" "}
        for your health.
      </h3>
    </div>
  </div>
</section>

);
}
