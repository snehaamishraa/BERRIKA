
"use client";

import Image from "next/image";

export default function CookTraining() {
  return (
    <section
      id="cook-training"
      className="relative pt-4 pb-16 md:pb-20 scroll-mt-24"
    >
      {/* Background Glow */}
      <div className="absolute right-10 top-24 h-[350px] w-[350px] md:h-[450px] md:w-[450px] rounded-full bg-[#F48FB1]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">

        {/* Badge */}
        <div className="mb-3 inline-flex items-center rounded-full border border-[#F48FB1]/20 bg-white/80 px-4 py-2 backdrop-blur-md shadow-sm">
          <span className="mr-2 text-[#C2185B]">✦</span>

          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C2185B]">
            THE SHOWSTOPPER
          </span>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">

          {/* LEFT CONTENT */}
          <div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#4A2040]">
              We don&apos;t replace
              <br />
              your cook.
              <br />

              <span className="italic text-[#C2185B]">
                We upgrade them.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base md:text-lg leading-7 md:leading-8 text-[#7A5A70]">
              Your cook is the most important person in your
              diet journey. Berrika trains them, supports them,
              and sets them up to succeed — so the kitchen runs
              on autopilot.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-5">

              {[
                {
                  title: "WhatsApp Instructions",
                  desc: "Daily menus + voice notes in Hindi, Kannada and English.",
                },
                {
                  title: "Recipe Cards",
                  desc: "Step-by-step with portions, oil, salt and substitutes.",
                },
                {
                  title: "Short Video Guidance",
                  desc: "2-minute videos for every new technique.",
                },
                {
                  title: "Cook Onboarding",
                  desc: "A dedicated coach trains your cook in week one.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">

                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E8F5E9] text-[#66BB6A]">
                    ✓
                  </div>

                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-[#4A2040]">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-[#7A5A70]">
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <div className="overflow-hidden rounded-[28px] md:rounded-[32px] border border-[#F48FB1]/10 bg-white shadow-[0_20px_50px_rgba(74,32,64,0.06)]">

              <Image
                src="/images/berrika-06.png"
                alt="Cook Training"
                width={650}
                height={700}
                className="h-[380px] md:h-[500px] lg:h-[560px] w-full object-cover"
              />

            </div>

            {/* Floating Card 1 */}
            <div className="hidden md:block absolute -left-4 top-10 rounded-2xl border border-white/40 bg-white/90 px-5 py-3 backdrop-blur-md shadow-xl">

              <p className="text-xs text-[#7A5A70]">
                Cook
              </p>

              <h4 className="text-sm font-semibold text-[#4A2040]">
                Day 1 · Cook Onboarded
              </h4>

            </div>

            {/* Floating Card 2 */}
            <div className="hidden md:block absolute -right-4 bottom-10 rounded-2xl border border-white/40 bg-white/90 px-5 py-3 backdrop-blur-md shadow-xl">

              <p className="text-xs text-[#7A5A70]">
                Live Support
              </p>

              <h4 className="text-sm font-semibold text-[#C2185B]">
                Active ✓
              </h4>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
