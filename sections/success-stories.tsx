"use client";

const stories = [
{
name: "Anjali Sharma",
condition: "PCOS · Bangalore",
problem: "PCOS for 6 years. Tried 3 diets, all failed.",
execution: "Berrika trained Lakshmi on PCOS-friendly meals.",
result: "Cycle regular in 11 weeks. Lost 5.2kg.",
},
{
name: "Karthik Singh",
condition: "Weight Loss · Whitefield",
problem: "Sedentary tech lead. 14kg overweight.",
execution: "Daily WhatsApp menus + portion training for our cook.",
result: "Lost 9kg in 4 months. Energy back.",
},
{
name: "Meera Pandey",
condition: "Diabetes Type 2",
problem: "HbA1c at 8.4. Diet charts never worked.",
execution: "Cook coached on low-GI meals. Grocery synced weekly.",
result: "HbA1c down to 6.1. Off one medication.",
},
{
name: "Ritika Mishra",
condition: "Postpartum · HSR",
problem: "Post-pregnancy fatigue, no time to plan.",
execution: "Berrika took over entirely. Cook learned 12 new dishes.",
result: "Lost 7kg. Sleeping better. Loving food again.",
},
{
name: "Aditya Gulati",
condition: "Cholesterol · Indiranagar",
problem: "LDL high. Eating out 5 nights a week.",
execution: "Cook trained. Outside meals planned around home menu.",
result: "LDL normalised in 5 months. No medication.",
},
];

export default function SuccessStories() {
return ( <section
   id="success-stories"
   className="
     relative
     overflow-hidden
     py-14
     md:py-18
     bg-gradient-to-b
     from-[#4A2040]
     via-[#5B2550]
     to-[#4A2040]
   "
 >
{/* Glow */} <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C2185B]/20 blur-[140px]" />

  <div className="relative z-10 mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">

    {/* Heading */}
    <div className="text-center">

      <div
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-white/10
          bg-white/5
          px-4
          py-2
          backdrop-blur-md
        "
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#F48FB1]">
          Success Stories
        </span>
      </div>

      <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
        Real families.
        <br />
        Real outcomes.
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg leading-7 text-white/70">
        Not testimonials about an app.
        Testimonials about lives that actually changed.
      </p>

    </div>

    {/* Stories Slider */}
    <div className="relative mt-10 overflow-hidden">

      <div className="marquee-track flex gap-4 md:gap-5">

        {[...stories, ...stories].map((story, index) => (
          <div
            key={index}
            className="
              w-[290px]
              md:w-[340px]
              shrink-0
              rounded-[24px]
              border
              border-white/10
              bg-white/5
              p-5
              backdrop-blur-xl
              transition-all
              duration-300
              hover:bg-white/8
            "
          >
            {/* Header */}
            <div className="flex items-start justify-between">

              <div>

                <div className="inline-flex rounded-full bg-[#F48FB1]/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#F48FB1]">
                  Verified Client
                </div>

                <h3 className="mt-3 text-lg font-bold text-white">
                  {story.name}
                </h3>

                <p className="text-xs text-white/60">
                  {story.condition}
                </p>

              </div>

              <div className="text-sm text-[#F48FB1]">
                ★★★★★
              </div>

            </div>

            {/* Content */}
            <div className="mt-5 space-y-4">

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#F48FB1]">
                  Problem
                </p>

                <p className="mt-1 text-sm leading-6 text-white/80">
                  {story.problem}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#F48FB1]">
                  Execution
                </p>

                <p className="mt-1 text-sm leading-6 text-white/80">
                  {story.execution}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#66BB6A]">
                  Result
                </p>

                <p className="mt-1 text-sm font-medium leading-6 text-white">
                  {story.result}
                </p>
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>

  </div>
</section>

);
}
