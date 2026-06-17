
"use client";

import Image from "next/image";

export default function CookTraining() {
  return (
    <section
      id="cook-training"
      className="relative py-20 scroll-mt-24"
    >
      {/* Background Glow */}
      <div className="absolute right-10 top-24 h-[400px] w-[400px] rounded-full bg-[#F48FB1]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">

        {/* Badge */}
        <div className="mb-5 inline-flex items-center rounded-full border border-[#F48FB1]/20 bg-white/80 px-4 py-2 backdrop-blur-md shadow-sm">
          <span className="mr-2 text-[#C2185B]">✦</span>

          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C2185B]">
            THE SHOWSTOPPER
          </span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>

            <h2 className="text-4xl font-bold leading-tight text-[#4A2040] md:text-6xl">
              We don&apos;t replace
              <br />
              your cook.
              <br />

              <span className="italic text-[#C2185B]">
                We upgrade them.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#7A5A70]">
              Your cook is the most important person in your
              diet journey. Berrika trains them, supports them,
              and sets them up to succeed — so the kitchen runs
              on autopilot.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-5">

              <div className="flex gap-3">
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#E8F5E9] text-[#66BB6A]">
                  ✓
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#4A2040]">
                    WhatsApp Instructions
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-[#7A5A70]">
                    Daily menus + voice notes in Hindi,
                    Kannada and English.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#E8F5E9] text-[#66BB6A]">
                  ✓
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#4A2040]">
                    Recipe Cards
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-[#7A5A70]">
                    Step-by-step with portions, oil,
                    salt and substitutes.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#E8F5E9] text-[#66BB6A]">
                  ✓
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#4A2040]">
                    Short Video Guidance
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-[#7A5A70]">
                    2-minute videos for every
                    new technique.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#E8F5E9] text-[#66BB6A]">
                  ✓
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#4A2040]">
                    Cook Onboarding
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-[#7A5A70]">
                    A dedicated coach trains your
                    cook in week one.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <div className="overflow-hidden rounded-[32px] border border-[#F48FB1]/10 bg-white shadow-[0_20px_50px_rgba(74,32,64,0.06)]">

              <Image
                src="/images/berrika-06.png"
                alt="Cook Training"
                width={650}
                height={700}
                className="h-[560px] w-full object-cover"
              />

            </div>

            {/* Floating Card 1 */}
            <div className="absolute -left-4 top-10 rounded-2xl border border-white/40 bg-white/90 px-5 py-3 backdrop-blur-md shadow-xl">

              <p className="text-xs text-[#7A5A70]">
                Cook
              </p>

              <h4 className="text-sm font-semibold text-[#4A2040]">
                Day 1 · Cook Onboarded
              </h4>

            </div>

            {/* Floating Card 2 */}
            <div className="absolute -right-4 bottom-10 rounded-2xl border border-white/40 bg-white/90 px-5 py-3 backdrop-blur-md shadow-xl">

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
