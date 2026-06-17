"use client";

import {
AlertCircle,
ShoppingCart,
ChefHat,
Heart,
} from "lucide-react";

export default function WhyDietsFail() {
const cards = [
{
number: "01",
icon: <ShoppingCart size={20} strokeWidth={2.2} />,
title: "You got a diet chart.",
desc: "But who buys the ingredients?",
},
{
number: "02",
icon: <ChefHat size={20} strokeWidth={2.2} />,
title: "You have a cook.",
desc: "But who ensures they follow the diet?",
},
{
number: "03",
icon: <Heart size={20} strokeWidth={2.2} />,
title: "You try to stay consistent.",
desc: "But life gets in the way.",
},
];

return ( <section className="relative overflow-hidden py-16 md:py-20">
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

```
  {/* Glow */}
  <div className="absolute left-1/2 top-24 h-[320px] w-[320px] md:h-[420px] md:w-[420px] -translate-x-1/2 rounded-full bg-[#F48FB1]/10 blur-[120px]" />

  <div className="relative mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">

    {/* Badge */}
    <div className="mb-4 inline-flex items-center rounded-full border border-[#F48FB1]/20 bg-white/80 px-4 py-2 backdrop-blur-md shadow-sm">

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
    <h2 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#4A2040]">
      Why most diets fail.
    </h2>

    {/* Description */}
    <p className="mt-4 max-w-3xl text-base md:text-lg leading-7 md:leading-8 text-[#7A5A70]">
      Diet charts are a plan. Health is an outcome.
      Between them sits the hardest part — daily execution.
    </p>

    {/* Cards */}
    <div className="mt-10 grid gap-4 md:gap-5 lg:grid-cols-3">

      {cards.map((card) => (
        <div
          key={card.number}
          className="
            group
            relative
            overflow-hidden
            rounded-[24px]
            border
            border-[#F48FB1]/15
            bg-white/90
            p-5
            md:p-6
            backdrop-blur-md
            shadow-[0_8px_25px_rgba(194,24,91,0.05)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_12px_30px_rgba(194,24,91,0.10)]
          "
        >
          {/* Soft Glow */}
          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#F48FB1]/10 blur-2xl" />

          {/* Number */}
          <span className="absolute right-4 top-2 text-5xl md:text-6xl font-bold text-[#F8EDF2]">
            {card.number}
          </span>

          {/* Icon */}
          <div
            className="
              mb-5
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-[#C2185B]
              to-[#F48FB1]
              text-white
              shadow-[0_8px_20px_rgba(194,24,91,0.18)]
            "
          >
            {card.icon}
          </div>

          {/* Title */}
          <h3 className="mb-2 text-xl md:text-2xl font-bold leading-tight text-[#4A2040]">
            {card.title}
          </h3>

          {/* Description */}
          <p className="text-sm md:text-base leading-6 text-[#7A5A70]">
            {card.desc}
          </p>
        </div>
      ))}

    </div>

    {/* Bottom Statement */}
    <div className="mt-12 md:mt-16 text-center">

      <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#4A2040]">
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
