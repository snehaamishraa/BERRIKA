"use client";

const stories = [
  {
    name: "Anjali R.",
    condition: "PCOS · Bangalore",
    image: "https://i.pravatar.cc/150?img=32",
    problem: "PCOS for 6 years. Tried 3 diets, all failed.",
    execution: "Berrika trained Lakshmi on PCOS-friendly meals.",
    result: "Cycle regular in 11 weeks. Lost 5.2kg.",
  },
  {
    name: "Karthik S.",
    condition: "Weight Loss · Whitefield",
    image: "https://i.pravatar.cc/150?img=12",
    problem: "Sedentary tech lead. 14kg overweight.",
    execution:
      "Daily WhatsApp menus + portion training for our cook.",
    result: "Lost 9kg in 4 months. Energy back.",
  },
  {
    name: "Meera P.",
    condition: "Diabetes Type 2",
    image: "https://i.pravatar.cc/150?img=5",
    problem: "HbA1c at 8.4. Diet charts never worked.",
    execution:
      "Cook coached on low-GI meals. Grocery synced weekly.",
    result: "HbA1c down to 6.1. Off one medication.",
  },
  {
    name: "Ritika M.",
    condition: "Postpartum · HSR",
    image: "https://i.pravatar.cc/150?img=25",
    problem:
      "Post-pregnancy fatigue, no time to plan.",
    execution:
      "Berrika took over entirely. Cook learned 12 new dishes.",
    result:
      "Lost 7kg. Sleeping better. Loving food again.",
  },
  {
    name: "Aditya G.",
    condition: "Cholesterol · Indiranagar",
    image: "https://i.pravatar.cc/150?img=15",
    problem:
      "LDL high. Eating out 5 nights a week.",
    execution:
      "Cook trained. Outside meals planned around home menu.",
    result:
      "LDL normalised in 5 months. No medication.",
  },
];

export default function SuccessStories() {
  return (
    <section
      id="success-stories"
      className="
        relative
        overflow-hidden
        py-32
        bg-gradient-to-b
        from-[#4A2040]
        via-[#5B2550]
        to-[#4A2040]
      "
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C2185B]/20 blur-[160px]" />

      <div className="relative z-10">

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
              px-5
              py-2
              backdrop-blur-md
            "
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F48FB1]">
              Success Stories
            </span>
          </div>

          <h2 className="mt-8 text-5xl font-bold text-white md:text-7xl">
            Real families.
            <br />
            Real outcomes.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-white/70">
            Not testimonials about an app.
            Testimonials about lives that actually changed.
          </p>

        </div>

        {/* Moving Cards */}
        <div className="relative mt-20 overflow-hidden">

          <div className="marquee-track flex gap-8">

            {[...stories, ...stories].map((story, index) => (
              <div
                key={index}
                className="
                  w-[420px]
                  shrink-0
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-xl
                "
              >
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <img
                      src={story.image}
                      alt={story.name}
                      className="h-14 w-14 rounded-full object-cover"
                    />

                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {story.name}
                      </h3>

                      <p className="text-sm text-white/60">
                        {story.condition}
                      </p>
                    </div>

                  </div>

                  <div className="text-[#F48FB1]">
                    ★★★★★
                  </div>

                </div>

                <div className="mt-8 space-y-5">

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#F48FB1]">
                      Problem
                    </p>

                    <p className="mt-2 text-white/80">
                      {story.problem}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#F48FB1]">
                      Execution
                    </p>

                    <p className="mt-2 text-white/80">
                      {story.execution}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#66BB6A]">
                      Result
                    </p>

                    <p className="mt-2 font-medium text-white">
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