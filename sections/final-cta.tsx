import Link from "next/link";

export default function FinalCTA() {
return ( <section
   id="faq"
   className="relative overflow-hidden py-10 md:py-14"
 >
{/* Glow */} <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] md:h-[420px] md:w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F48FB1]/12 blur-[120px]" />

  <div className="relative mx-auto max-w-[900px] px-5 md:px-8">

    <div
      className="
        rounded-[28px]
        border
        border-[#F48FB1]/15
        bg-white/85
        px-6
        py-8
        md:px-10
        md:py-10
        text-center
        backdrop-blur-md
        shadow-[0_12px_40px_rgba(74,32,64,0.05)]
      "
    >

      {/* Badge */}
      <div className="mb-4 inline-flex items-center rounded-full border border-[#F48FB1]/20 bg-white px-4 py-2 shadow-sm">

        <span className="mr-2 text-[#C2185B]">✦</span>

        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C2185B]">
          READY TO START?
        </span>

      </div>

      {/* Heading */}
      <h2 className="mx-auto max-w-3xl text-3xl md:text-5xl font-bold leading-[1.1] text-[#4A2040]">
        Your health goals deserve
        <br />

        <span className="italic text-[#C2185B]">
          perfect execution.
        </span>
      </h2>

      {/* Description */}
      <p className="mx-auto mt-4 max-w-xl text-sm md:text-base leading-7 text-[#7A5A70]">
        Let Berrika handle planning, groceries, cook training
        and compliance so your diet actually gets followed.
      </p>

      {/* CTA */}
      <div className="mt-6">

        <Link href="/get-started">

          <button
            className="
              rounded-2xl
              bg-gradient-to-r
              from-[#C2185B]
              to-[#D81B60]
              px-7
              py-3.5
              text-sm
              md:text-base
              font-semibold
              text-white
              shadow-[0_15px_35px_rgba(194,24,91,0.22)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_45px_rgba(194,24,91,0.30)]
            "
          >
            Get Started →
          </button>

        </Link>

      </div>

    </div>

  </div>
</section>
);
}
