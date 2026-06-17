
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      id="faq"
      className="relative py-20"
    >

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F48FB1]/15 blur-[120px]" />

      <div className="relative mx-auto max-w-[1100px] px-6 lg:px-10">

        <div
          className="
            rounded-[36px]
            border
            border-[#F48FB1]/15
            bg-white/80
            px-8
            py-14
            text-center
            backdrop-blur-md
            shadow-[0_15px_50px_rgba(74,32,64,0.06)]
          "
        >

          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-[#F48FB1]/20 bg-white px-4 py-2 shadow-sm">
            <span className="mr-2 text-[#C2185B]">✦</span>

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C2185B]">
              READY TO START?
            </span>
          </div>

          {/* Heading */}
          <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-[#4A2040] md:text-6xl">
            Your health goals deserve
            <br />

            <span className="italic text-[#C2185B]">
              perfect execution.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#7A5A70]">
            Book your onboarding and let Berrika manage the execution —
            from planning and groceries to cook training and compliance.
          </p>

          {/* CTA */}
          <Link href="/get-started">
            <button
              className="
                mt-8
                rounded-2xl
                bg-gradient-to-r
                from-[#C2185B]
                to-[#D81B60]
                px-8
                py-4
                text-base
                font-semibold
                text-white
                shadow-[0_15px_40px_rgba(194,24,91,0.25)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_20px_50px_rgba(194,24,91,0.35)]
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
