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

return ( <section className="relative overflow-hidden py-12 md:py-16">
{/* Glow */} <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F48FB1]/10 blur-[120px]" />
  <div className="relative mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
    <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">

      {/* LEFT IMAGE */}
      <div className="relative self-start">
        <div className="overflow-hidden rounded-[28px] border border-[#F48FB1]/10 bg-white shadow-[0_15px_40px_rgba(74,32,64,0.05)]">
          <Image
            src="/images/berrika-02.png"
            alt="Healthy Meals"
            width={620}
            height={620}
            className="h-[520px] md:h-[620px] w-full object-cover"
          />
        </div>

        <div className="hidden md:block absolute -bottom-3 -right-3 rounded-3xl border border-white/50 bg-white/90 px-4 py-2.5 backdrop-blur-md shadow-xl">
          <p className="text-[11px] font-medium text-[#7A5A70]">
            Meals completed today
          </p>

          <p className="text-xl font-bold text-[#C2185B]">
            4 / 4 ✓
          </p>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="self-start pt-2">

        {/* Badge */}
        <div className="mb-4 inline-flex items-center rounded-full border border-[#F48FB1]/20 bg-white/80 px-4 py-2 backdrop-blur-md shadow-sm">
          <span className="mr-2 text-[#C2185B]">✦</span>

          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C2185B]">
            FOR REAL HEALTH RESULTS
          </span>
        </div>

        {/* Heading */}
        <h2 className="max-w-[620px] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.05] text-[#4A2040]">
          Breakfast, lunch,
          <br />

          <span className="italic text-[#C2185B]">
            snacks & dinner —
          </span>

          <br />

          already planned.
          <br />
          already executed.
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-lg text-base leading-7 text-[#7A5A70]">
          Berrika doesn't just create a diet chart.
          It coordinates your meals, guides your cook,
          manages grocery needs and tracks compliance —
          so your health goals don't depend on willpower.
        </p>

        {/* Features */}
        <div className="mt-6 space-y-3">
          {features.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E8F5E9] text-[#4CAF50] text-sm font-bold">
                ✓
              </div>

              <span className="text-sm md:text-base font-medium text-[#4A2040]">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          className="
            mt-7
            rounded-2xl
            bg-gradient-to-r
            from-[#C2185B]
            to-[#D81B60]
            px-7
            py-3.5
            text-sm
            font-semibold
            text-white
            shadow-[0_15px_35px_rgba(194,24,91,0.25)]
            transition-all
            duration-300
            hover:-translate-y-1
          "
        >
          Plan My Diet →
        </button>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">

          <div className="rounded-[20px] border border-[#F48FB1]/15 bg-white/80 p-3 md:p-4 backdrop-blur-sm shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-[#C2185B]">
              <CountUp end={87} suffix="%" />
            </h3>

            <p className="mt-1 text-[11px] md:text-xs text-[#7A5A70]">
              Diet Compliance
            </p>
          </div>

          <div className="rounded-[20px] border border-[#F48FB1]/15 bg-white/80 p-3 md:p-4 backdrop-blur-sm shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-[#C2185B]">
              <CountUp end={4} suffix="kg+" />
            </h3>

            <p className="mt-1 text-[11px] md:text-xs text-[#7A5A70]">
              Average Progress
            </p>
          </div>

          <div className="rounded-[20px] border border-[#F48FB1]/15 bg-white/80 p-3 md:p-4 backdrop-blur-sm shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-[#C2185B]">
              <CountUp end={100} suffix="+" />
            </h3>

            <p className="mt-1 text-[11px] md:text-xs text-[#7A5A70]">
              Families Supported
            </p>
          </div>

          <div className="rounded-[20px] border border-[#F48FB1]/15 bg-white/80 p-3 md:p-4 backdrop-blur-sm shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-[#C2185B]">
              <CountUp end={24} suffix="/7" />
            </h3>

            <p className="mt-1 text-[11px] md:text-xs text-[#7A5A70]">
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
