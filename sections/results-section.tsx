import Image from "next/image";
import CountUp from "../components/count-up";

export default function ResultsSection() {
  const features = [
    "Complete day planning",
    "WhatsApp cook guidance",
    "Grocery coordination",
    "Compliance tracking",
    "Personalized health goals",
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F48FB1]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-[36px] border border-[#F48FB1]/10 bg-white shadow-[0_20px_60px_rgba(74,32,64,0.08)]">
              <Image
                src="/images/berrika-02.png"
                alt="Healthy Meals"
                width={700}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 rounded-3xl border border-white/50 bg-white/90 px-6 py-4 backdrop-blur-md shadow-xl">
              <p className="text-sm font-medium text-[#7A5A70]">
                Meals completed today
              </p>
              <p className="text-3xl font-bold text-[#C2185B]">
                4 / 4 ✓
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>

            {/* Premium Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-[#F48FB1]/20 bg-white/80 px-5 py-2 backdrop-blur-md shadow-sm">
              <span className="mr-2 text-[#C2185B]">✦</span>

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C2185B]">
                FOR REAL HEALTH RESULTS
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold leading-[0.95] text-[#4A2040]">
              Breakfast,
              <br />

              lunch,
              <br />

              <span className="italic text-[#C2185B]">
                snacks, dinner —
              </span>

              <br />

              already planned,
              <br />

              already executed.
            </h2>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-[#7A5A70]">
              Berrika doesn&apos;t just create a diet chart.
              It coordinates your meals, guides your cook,
              manages grocery needs, and tracks compliance —
              so your health goals don&apos;t depend on willpower alone.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-4">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8F5E9] text-[#4CAF50]">
                    ✓
                  </div>

                  <span className="text-lg font-medium text-[#4A2040]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="mt-12 rounded-2xl bg-gradient-to-r from-[#C2185B] to-[#D81B60] px-8 py-4 text-lg font-semibold text-white shadow-[0_15px_35px_rgba(194,24,91,0.3)] transition hover:-translate-y-1">
              Plan My Diet →
            </button>
            {/* Results Stats */}
<div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">

  <div className="rounded-[28px] border border-[#F48FB1]/15 bg-white/80 p-6 backdrop-blur-sm shadow-sm">
    <h3 className="text-5xl font-bold text-[#C2185B]">
  <CountUp end={87} suffix="%" />
</h3>

    <p className="mt-2 text-sm font-medium text-[#7A5A70]">
      Diet Compliance
    </p>
  </div>

  <div className="rounded-[28px] border border-[#F48FB1]/15 bg-white/80 p-6 backdrop-blur-sm shadow-sm">
    <h3 className="text-5xl font-bold text-[#C2185B]">
  <CountUp end={4} suffix="kg+" />
</h3>

    <p className="mt-2 text-sm font-medium text-[#7A5A70]">
      Average Progress
    </p>
  </div>

  <div className="rounded-[28px] border border-[#F48FB1]/15 bg-white/80 p-6 backdrop-blur-sm shadow-sm">
    <h3 className="text-5xl font-bold text-[#C2185B]">
  <CountUp end={100} suffix="+" />
</h3>
    <p className="mt-2 text-sm font-medium text-[#7A5A70]">
      Families Supported
    </p>
  </div>

  <div className="rounded-[28px] border border-[#F48FB1]/15 bg-white/80 p-6 backdrop-blur-sm shadow-sm">
    <h3 className="text-5xl font-bold text-[#C2185B]">
  <CountUp end={24} suffix="/7" />
</h3>

    <p className="mt-2 text-sm font-medium text-[#7A5A70]">
      Coach Support
    </p>
  </div>

</div>
          </div>
        </div>
      </div>
    </section>
  );
}
