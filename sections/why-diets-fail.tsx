
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

  return (
    <section className="relative overflow-hidden py-20">

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

      {/* Glow */}
      <div className="absolute left-1/2 top-24 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#F48FB1]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">

       <div className="mb-5 inline-flex items-center rounded-full border border-[#F48FB1]/20 bg-white/80 px-4 py-2 backdrop-blur-md shadow-sm">
  <span className="mr-2 text-[#C2185B]">✦</span>

  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C2185B]">
    THE REAL PROBLEM
  </span>
</div>

        {/* Heading */}
        <h2 className="max-w-4xl text-4xl font-bold leading-tight text-[#4A2040] md:text-6xl">
          Why most diets fail.
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#7A5A70]">
          Diet charts are a plan. Health is an outcome.
          Between them sits the hardest part — daily execution.
        </p>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          {cards.map((card) => (
            <div
              key={card.number}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#F48FB1]/20
                bg-white/85
                p-8
                backdrop-blur-md
                shadow-[0_10px_30px_rgba(194,24,91,0.06)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_20px_40px_rgba(194,24,91,0.12)]
              "
            >
              {/* Card Glow */}
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#F48FB1]/10 blur-3xl" />

              {/* Number */}
              <span className="absolute right-6 top-3 text-6xl font-bold text-[#F6E9EF]">
                {card.number}
              </span>

              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C2185B] to-[#F48FB1] text-xl text-white shadow-lg">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-2xl font-bold leading-tight text-[#4A2040]">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-base leading-7 text-[#7A5A70]">
                {card.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom Statement */}
        <div className="mt-20 text-center">

          <h3 className="text-3xl font-bold leading-tight text-[#4A2040] md:text-5xl">
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
