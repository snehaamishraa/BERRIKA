
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8F5] pt-24 lg:pt-28 pb-10">

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

      {/* Glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(194,24,91,0.12) 0%, rgba(244,143,177,0.08) 25%, rgba(255,248,245,0) 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10 py-6">

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

          {/* LEFT CONTENT */}
          <div className="max-w-[600px]">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-[#F48FB1]/20 bg-white px-4 py-2 shadow-sm backdrop-blur-md">
              <span className="mr-2 text-[#C2185B]">✦</span>

              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#4A2040]">
                INDIA'S FIRST PERSONALIZED NUTRITION PLATFORM
              </span>
            </div>

            {/* Heading */}
            <h1 className="leading-[0.92] tracking-[-0.04em]">

              <span className="block text-[64px] font-bold text-[#4A2040] lg:text-[80px]">
                No more
              </span>

              <span className="block text-[38px] font-semibold italic text-[#C2185B] lg:text-[42px]">
                “diet follow nahi hui”
              </span>

              <span className="block text-[64px] font-bold text-[#4A2040] lg:text-[80px]">
                guilt.
              </span>

            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[520px] text-[18px] leading-[1.8] text-[#6B4A60]">
              Berrika creates a personalized nutrition plan based on your
              goals, lifestyle, eating habits and body needs.
            </p>

            {/* CTA */}
            <div className="mt-8">

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
                    text-[17px]
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
          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              <Image
                src="/images/berrika-01.png"
                alt="Healthy Food"
                width={520}
                height={600}
                className="w-full max-w-[520px] rounded-[32px] object-cover shadow-[0_25px_70px_rgba(74,32,64,0.10)]"
              />

              {/* Card 1 */}
              <div className="absolute -top-3 -left-3 rounded-2xl border border-white/50 bg-white px-5 py-4 shadow-xl backdrop-blur-md">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#66BB6A] text-white">
                    ✓
                  </div>

                  <div>
                    <p className="text-[14px] font-semibold text-[#4A2040]">
                      Meal Approved
                    </p>

                    <p className="text-[12px] text-gray-500">
                      Dietician verified
                    </p>
                  </div>

                </div>

              </div>

              {/* Card 2 */}
              <div className="absolute top-1/3 -right-3 rounded-2xl border border-white/50 bg-white px-5 py-4 shadow-xl backdrop-blur-md">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C2185B] text-white">
                    💬
                  </div>

                  <div>
                    <p className="text-[14px] font-semibold text-[#4A2040]">
                      Cook WhatsApp
                    </p>

                    <p className="text-[12px] text-gray-500">
                      Instructions sent
                    </p>
                  </div>

                </div>

              </div>

              {/* Card 3 */}
              <div className="absolute bottom-10 -left-3 rounded-2xl border border-white/50 bg-white px-5 py-4 shadow-xl backdrop-blur-md">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4A2040] text-white">
                    📈
                  </div>

                  <div>
                    <p className="text-[14px] font-semibold text-[#4A2040]">
                      Compliance 92%
                    </p>

                    <p className="text-[12px] text-gray-500">
                      On track this week
                    </p>
                  </div>

                </div>

              </div>

              {/* Card 4 */}
              <div className="absolute bottom-0 right-0 rounded-2xl border border-white/50 bg-white px-5 py-4 shadow-xl backdrop-blur-md">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F48FB1] text-white">
                    🛒
                  </div>

                  <div>
                    <p className="text-[14px] font-semibold text-[#4A2040]">
                      Grocery Synced
                    </p>

                    <p className="text-[12px] text-gray-500">
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
