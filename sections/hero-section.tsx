import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
return ( <section className="relative min-h-screen overflow-hidden bg-[#FFF8F5] pt-36">

```
  {/* Grid Background */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `
        linear-gradient(rgba(194,24,91,0.07) 1px, transparent 1px),
        linear-gradient(90deg, rgba(194,24,91,0.07) 1px, transparent 1px)
      `,
      backgroundSize: "50px 50px",
    }}
  />

  {/* Center Glow */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(circle at center, rgba(194,24,91,0.12) 0%, rgba(244,143,177,0.08) 25%, rgba(255,248,245,0) 70%)",
    }}
  />

  <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-16">

    <div className="grid items-center gap-16 lg:gap-20 md:grid-cols-2">

      {/* LEFT CONTENT */}
      <div>

        {/* Badge */}
        <div className="mb-8 inline-flex items-center rounded-full border border-[#F48FB1]/30 bg-white/80 px-5 py-2 backdrop-blur-md shadow-sm">
          <span className="mr-2 text-[#C2185B]">✦</span>

          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4A2040]">
            India&apos;s First Personalized Nutrition Platform
          </span>
        </div>

        {/* Heading */}
        <h1 className="leading-[0.92]">

          <span className="block text-6xl font-extrabold text-[#4A2040] md:text-7xl lg:text-8xl">
            No more
          </span>

          <span className="block whitespace-nowrap text-4xl font-bold italic text-[#C2185B] md:text-5xl lg:text-6xl">
            “diet follow nahi hui”
          </span>

          <span className="mt-2 block text-6xl font-extrabold text-[#4A2040] md:text-7xl lg:text-8xl">
            guilt.
          </span>

        </h1>

        {/* Description */}
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#6B4A60] md:text-xl">
          Berrika creates a personalized nutrition plan based on your
          goals, lifestyle and body needs.
        </p>

        {/* CTA */}
        <div className="mt-10">

          <Link href="/get-started">
            <button
              className="
                group
                rounded-2xl
                bg-gradient-to-r
                from-[#C2185B]
                to-[#D81B60]
                px-8
                py-4
                text-lg
                font-semibold
                text-white
                shadow-[0_15px_40px_rgba(194,24,91,0.25)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_20px_50px_rgba(194,24,91,0.35)]
              "
            >
              Start Your Journey

              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </Link>

        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div>

        <div className="relative flex justify-center">

          <Image
            src="/images/berrika-01.png"
            alt="Healthy Food"
            width={500}
            height={600}
            className="rounded-[32px] border border-white/40 object-cover shadow-2xl"
          />

          {/* Card 1 */}
          <div className="absolute -left-6 -top-6 rounded-2xl border border-white/50 bg-white/80 px-4 py-3 backdrop-blur-md shadow-xl">
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#66BB6A] text-white">
                ✓
              </div>

              <div>
                <p className="text-sm font-semibold text-[#4A2040]">
                  Meal Approved
                </p>

                <p className="text-xs text-gray-500">
                  Dietician verified
                </p>
              </div>

            </div>
          </div>

          {/* Card 2 */}
          <div className="absolute top-1/3 -right-8 rounded-2xl border border-white/50 bg-white/80 px-4 py-3 backdrop-blur-md shadow-xl">
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C2185B] text-white">
                💬
              </div>

              <div>
                <p className="text-sm font-semibold text-[#4A2040]">
                  Cook WhatsApp
                </p>

                <p className="text-xs text-gray-500">
                  Instructions sent
                </p>
              </div>

            </div>
          </div>

          {/* Card 3 */}
          <div className="absolute bottom-10 -left-8 rounded-2xl border border-white/50 bg-white/80 px-4 py-3 backdrop-blur-md shadow-xl">
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4A2040] text-white">
                📈
              </div>

              <div>
                <p className="text-sm font-semibold text-[#4A2040]">
                  Compliance 92%
                </p>

                <p className="text-xs text-gray-500">
                  On track this week
                </p>
              </div>

            </div>
          </div>

          {/* Card 4 */}
          <div className="absolute bottom-0 right-0 rounded-2xl border border-white/50 bg-white/80 px-4 py-3 backdrop-blur-md shadow-xl">
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F48FB1] text-white">
                🛒
              </div>

              <div>
                <p className="text-sm font-semibold text-[#4A2040]">
                  Grocery Synced
                </p>

                <p className="text-xs text-gray-500">
                  Shopping list ready
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
);
}
