import Image from "next/image";

export default function CookTraining() {
return ( <section
  id="cook-training"
  className="relative py-32"
>

```
  {/* Background Glow */}
  <div className="absolute right-20 top-40 h-[500px] w-[500px] rounded-full bg-[#F48FB1]/10 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Badge */}
    <div className="mb-8 inline-flex items-center rounded-full border border-[#F48FB1]/20 bg-white/80 px-5 py-2 backdrop-blur-md shadow-sm">
      <span className="mr-2 text-[#C2185B]">✦</span>

      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C2185B]">
        THE SHOWSTOPPER
      </span>
    </div>

    <div className="grid items-center gap-20 lg:grid-cols-2">

      {/* LEFT CONTENT */}
      <div>

        <h2 className="text-5xl font-bold leading-[0.95] text-[#4A2040] md:text-7xl">
          We don&apos;t replace
          <br />

          your cook.

          <br />

          <span className="italic text-[#C2185B]">
            We upgrade them.
          </span>
        </h2>

        <p className="mt-8 max-w-xl text-xl leading-relaxed text-[#7A5A70]">
          Your cook is the most important person in your
          diet journey. Berrika trains them, supports them,
          and sets them up to succeed — so the kitchen runs
          on autopilot.
        </p>

        {/* Features */}
        <div className="mt-12 space-y-6">

          <div className="flex gap-4">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#E8F5E9] text-[#66BB6A]">
              ✓
            </div>

            <div>
              <h4 className="text-xl font-semibold text-[#4A2040]">
                WhatsApp Instructions
              </h4>

              <p className="mt-1 text-[#7A5A70]">
                Daily menus + voice notes in Hindi,
                Kannada and English.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#E8F5E9] text-[#66BB6A]">
              ✓
            </div>

            <div>
              <h4 className="text-xl font-semibold text-[#4A2040]">
                Recipe Cards
              </h4>

              <p className="mt-1 text-[#7A5A70]">
                Step-by-step with portions, oil,
                salt and substitutes.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#E8F5E9] text-[#66BB6A]">
              ✓
            </div>

            <div>
              <h4 className="text-xl font-semibold text-[#4A2040]">
                Short Video Guidance
              </h4>

              <p className="mt-1 text-[#7A5A70]">
                2-minute videos for every
                new technique.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#E8F5E9] text-[#66BB6A]">
              ✓
            </div>

            <div>
              <h4 className="text-xl font-semibold text-[#4A2040]">
                Cook Onboarding
              </h4>

              <p className="mt-1 text-[#7A5A70]">
                A dedicated coach trains your
                cook in week one.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE MOCKUP */}
      <div className="relative">

        <div className="overflow-hidden rounded-[40px] border border-[#F48FB1]/10 bg-white shadow-[0_20px_60px_rgba(74,32,64,0.08)]">

          <Image
            src="/images/berrika-06.png"
            alt="Cook Training"
            width={700}
            height={800}
            className="h-[700px] w-full object-cover"
          />

        </div>

        {/* Floating Card */}
        <div className="absolute -left-8 top-12 rounded-3xl border border-white/40 bg-white/90 px-6 py-4 backdrop-blur-md shadow-xl">

          <p className="text-sm text-[#7A5A70]">
            Cook
          </p>

          <h4 className="font-semibold text-[#4A2040]">
            Day 1 · Cook Onboarded
          </h4>
        </div>

        {/* Floating Card */}
        <div className="absolute -right-8 bottom-12 rounded-3xl border border-white/40 bg-white/90 px-6 py-4 backdrop-blur-md shadow-xl">

          <p className="text-sm text-[#7A5A70]">
            Live Support
          </p>

          <h4 className="font-semibold text-[#C2185B]">
            Active ✓
          </h4>
        </div>

      </div>

    </div>
  </div>
</section>

);
}
