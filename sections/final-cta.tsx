
import Link from "next/link";
export default function FinalCTA() {
return ( <section
  id="faq"
  className="relative py-32"
>

```
  {/* Background Glow */}
  <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F48FB1]/15 blur-[150px]" />

  <div className="relative mx-auto max-w-5xl px-6">

    <div className="rounded-[48px] border border-[#F48FB1]/15 bg-white/80 px-10 py-20 text-center backdrop-blur-md shadow-[0_20px_80px_rgba(74,32,64,0.08)]">

      {/* Badge */}
      <div className="mb-8 inline-flex items-center rounded-full border border-[#F48FB1]/20 bg-white px-5 py-2 shadow-sm">
        <span className="mr-2 text-[#C2185B]">✦</span>

        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C2185B]">
          READY TO START?
        </span>
      </div>

      <h2 className="mx-auto max-w-4xl text-5xl font-bold leading-tight text-[#4A2040] md:text-7xl">
        Your health goals deserve
        <br />

        <span className="italic text-[#C2185B]">
          perfect execution.
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-[#7A5A70]">
        Book your onboarding and let Berrika
        manage the execution — from planning
        and groceries to cook training and compliance.
      </p>

      <Link href="/get-started">
  <button
    className="
      mt-12
      rounded-2xl
      bg-gradient-to-r
      from-[#C2185B]
      to-[#D81B60]
      px-10
      py-5
      text-lg
      font-semibold
      text-white
      shadow-[0_20px_50px_rgba(194,24,91,0.30)]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-[0_25px_60px_rgba(194,24,91,0.40)]
    "
  >
    Get Started →
  </button>
</Link>

    </div>

  </div>
</section>
);
}
