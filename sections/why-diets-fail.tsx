"use client";

export default function WhyDietsFail() {
const cards = [
{
number: "01",
icon: "🛒",
title: "You got a diet chart.",
desc: "But who buys the ingredients?",
},
{
number: "02",
icon: "👨‍🍳",
title: "You have a cook.",
desc: "But who ensures they follow the diet?",
},
{
number: "03",
icon: "♡",
title: "You try to stay consistent.",
desc: "But life gets in the way.",
},
];

return ( <section className="relative overflow-hidden py-32">

```
  {/* Grid Background */}
  <div
    className="absolute inset-0"
    style={{
      backgroundColor: "#FFF8F5",
      backgroundImage: `
        linear-gradient(to right, rgba(194,24,91,0.08) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(194,24,91,0.08) 1px, transparent 1px)
      `,
      backgroundSize: "48px 48px",
    }}
  />

  {/* Pink Glow */}
  <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#F48FB1]/10 blur-[140px]" />

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Badge */}
    <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-[#C2185B]">
      THE REAL PROBLEM
    </p>

    {/* Heading */}
    <h2 className="max-w-4xl text-5xl font-bold leading-tight text-[#4A2040] md:text-7xl">
      Why most diets fail.
    </h2>

    {/* Description */}
    <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[#7A5A70]">
      Diet charts are a plan. Health is an outcome.
      Between them sits the hardest part — daily execution.
    </p>

    {/* Cards */}
    <div className="mt-20 grid gap-8 lg:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.number}
          className="
            group
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-[#F48FB1]/20
            bg-white/85
            p-10
            backdrop-blur-md
            shadow-[0_10px_40px_rgba(194,24,91,0.08)]
            transition-all
            duration-500
            hover:-translate-y-3
            hover:shadow-[0_25px_60px_rgba(194,24,91,0.15)]
          "
        >
          {/* Card Glow */}
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F48FB1]/10 blur-3xl" />

          {/* Number */}
          <span className="absolute right-8 top-4 text-8xl font-bold text-[#F6E9EF]">
            {card.number}
          </span>

          {/* Icon */}
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C2185B] to-[#F48FB1] text-2xl text-white shadow-xl">
            {card.icon}
          </div>

          {/* Title */}
          <h3 className="mb-4 text-3xl font-bold leading-tight text-[#4A2040]">
            {card.title}
          </h3>

          {/* Description */}
          <p className="text-lg text-[#7A5A70]">
            {card.desc}
          </p>
        </div>
      ))}
    </div>

    {/* Bottom Statement */}
    <div className="mt-28 text-center">
      <h3 className="text-4xl font-bold leading-tight text-[#4A2040] md:text-6xl">
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
