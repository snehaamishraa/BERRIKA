
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  MessageCircle,
  TrendingUp,
  ShoppingCart,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8F5] pt-20 md:pt-32 lg:pt-36 pb-10 md:pb-16">
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

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
        <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="w-full lg:max-w-[620px]">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center rounded-full border border-[#F48FB1]/20 bg-white px-3 py-2 shadow-sm backdrop-blur-md">
              <span className="mr-2 text-[#C2185B]">✦</span>

              <span className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.15em] md:tracking-[0.22em] text-[#4A2040]">
                INDIA'S FIRST PERSONALIZED NUTRITION PLATFORM
              </span>
            </div>
{/* Desktop */}
<h1 className="hidden md:block leading-[0.88] tracking-[-0.06em]">

  <span className="block text-[56px] lg:text-[64px] font-bold text-[#4A2040]">
    No more
  </span>

  <span className="block text-[72px] lg:text-[88px] font-bold italic text-[#C2185B] leading-[0.88]">
    “diet follow nahi hui”
  </span>

  <span className="block text-[56px] lg:text-[64px] font-bold text-[#4A2040]">
    guilt.
  </span>

</h1>

{/* Mobile */}
<h1 className="block md:hidden leading-[0.9] tracking-[-0.05em]">

  <span className="block text-[28px] font-black text-[#4A2040]">
    No more
  </span>

  <span className="block text-[34px] font-semi bold italic text-[#C2185B] leading-[0.9]">
    “diet follow
    <br />
    nahi hui”
  </span>

  <span className="block text-[32px] font-black text-[#4A2040]">
    guilt.
  </span>

</h1>
            {/* Description */}
            <p className="mt-5 max-w-[520px] text-base md:text-lg leading-7 md:leading-8 text-[#6B4A60]">
              Berrika creates a personalized nutrition plan based on your
              goals, lifestyle, eating habits and body needs.
            </p>

            {/* CTA */}
            <div className="mt-7">
              <Link href="/get-started">
                <button
                  className="
                    group
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#C2185B]
                    to-[#D81B60]
                    px-7
                    py-3.5
                    md:px-8
                    md:py-4
                    text-base
                    md:text-[17px]
                    font-semibold
                    text-white
                    shadow-[0_15px_40px_rgba(194,24,91,0.25)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
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
            <div className="relative w-full max-w-[520px]">
              <Image
                src="/images/berrika-01.png"
                alt="Healthy Food"
                width={520}
                height={600}
                className="
                  h-[420px]
                  md:h-auto
                  w-full
                  rounded-[28px]
                  md:rounded-[32px]
                  object-cover
                  shadow-[0_25px_70px_rgba(74,32,64,0.10)]
                "
              />

              {/* Card 1 */}
              <div className="absolute top-3 left-3 md:-top-5 md:left-2 rounded-2xl border border-white/50 bg-white/95 px-2 py-2 md:px-4 md:py-3 shadow-xl backdrop-blur-md animate-float">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex h-7 w-7 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#66BB6A] text-white">
                    <CheckCircle size={16} />
                  </div>

                  <div>
                    <p className="text-[11px] md:text-base font-semibold text-[#4A2040]">
                      Meal Approved
                    </p>

                    <p className="hidden md:block text-xs text-[#7A5A70]">
                      Dietician Verified
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="absolute top-[25%] right-3 md:top-[30%] md:-right-5 rounded-2xl border border-white/50 bg-white/95 px-2 py-2 md:px-5 md:py-4 shadow-xl backdrop-blur-md animate-float-delayed">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex h-7 w-7 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#C2185B] text-white">
                    <MessageCircle size={16} />
                  </div>

                  <p className="text-[11px] md:text-base font-semibold text-[#4A2040]">
                    Cook WhatsApp
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="absolute bottom-16 left-3 md:bottom-12 md:-left-5 rounded-2xl border border-white/50 bg-white/95 px-2 py-2 md:px-5 md:py-4 shadow-xl backdrop-blur-md animate-float">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex h-7 w-7 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#4A2040] text-white">
                    <TrendingUp size={16} />
                  </div>

                  <p className="text-[11px] md:text-base font-semibold text-[#4A2040]">
                    92% Compliance
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="absolute bottom-3 right-3 md:bottom-0 md:-right-4 rounded-2xl border border-white/50 bg-white/95 px-2 py-2 md:px-5 md:py-4 shadow-xl backdrop-blur-md animate-float-delayed">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex h-7 w-7 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#F48FB1] text-white">
                    <ShoppingCart size={16} />
                  </div>

                  <p className="text-[11px] md:text-base font-semibold text-[#4A2040]">
                    Grocery Ready
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

