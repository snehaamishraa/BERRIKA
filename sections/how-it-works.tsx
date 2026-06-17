"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: "♡",
    title: "Free Health Audit",
    desc: "A senior dietician audits your goals, lifestyle, and family kitchen — free, on a call.",
  },
  {
    number: "02",
    icon: "📋",
    title: "Personalized Diet Plan",
    desc: "A plan built around what you eat, your cook can cook, and your body needs.",
  },
  {
    number: "03",
    icon: "👨‍🍳",
    title: "Cook Training",
    desc: "We onboard your cook with WhatsApp recipes, portion guides, and short video lessons.",
  },
  {
    number: "04",
    icon: "🛒",
    title: "Grocery Coordination",
    desc: "Ingredients are planned and coordinated so your kitchen stays diet-ready.",
  },
  {
    number: "05",
    icon: "📈",
    title: "Compliance Tracking",
    desc: "We track adherence, solve issues quickly and keep you on course.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden pt-4 pb-16 md:pb-20 scroll-mt-24"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-32 h-[400px] w-[400px] md:h-[500px] md:w-[500px] -translate-x-1/2 rounded-full bg-[#F48FB1]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">

        {/* Badge */}
        <div className="mb-3">
          <div className="inline-flex items-center rounded-full border border-[#F48FB1]/20 bg-white/80 px-4 py-2 backdrop-blur-md shadow-sm">
            <span className="mr-2 text-[#C2185B]">✦</span>

            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C2185B]">
              HOW IT WORKS
            </span>
          </div>
        </div>

        {/* Heading */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-[-0.03em] text-[#4A2040]">
            From diet plan{" "}
            <span className="italic text-[#C2185B]">
              to diet followed.
            </span>
          </h2>

          <p className="mt-5 max-w-3xl text-base md:text-lg leading-7 md:leading-8 text-[#7A5A70]">
            We don't just give you a diet chart. We make sure it actually
            happens — through cook training, grocery coordination and
            compliance tracking.
          </p>

          <div className="mt-6 h-[4px] w-24 rounded-full bg-gradient-to-r from-[#C2185B] to-[#F48FB1]" />
        </div>

        {/* Timeline */}
        <div className="relative mt-8 md:mt-10">

          {/* Vertical Line */}
          <div className="absolute left-10 top-0 hidden h-full w-[2px] bg-gradient-to-b from-[#C2185B] via-[#F48FB1] to-transparent lg:block" />

          <div className="space-y-5 md:space-y-6">

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative lg:ml-20"
              >
                <div
                  className="
                    rounded-[24px]
                    md:rounded-[28px]
                    border
                    border-[#F48FB1]/15
                    bg-white/85
                    backdrop-blur-md
                    p-5
                    md:p-8
                    shadow-[0_10px_35px_rgba(74,32,64,0.05)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_15px_40px_rgba(194,24,91,0.10)]
                  "
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-center">

                    {/* Left */}
                    <div className="min-w-[120px] md:min-w-[160px]">

                      <div className="text-4xl md:text-5xl font-bold text-[#C2185B]">
                        {step.number}
                      </div>

                      <div className="mt-3 flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-2xl border border-[#F48FB1]/20 bg-[#FFF8F5] text-base">
                        {step.icon}
                      </div>

                    </div>

                    {/* Right */}
                    <div>

                      <h3 className="text-xl md:text-3xl font-bold text-[#4A2040]">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm md:text-base leading-6 md:leading-7 text-[#7A5A70]">
                        {step.desc}
                      </p>

                    </div>

                  </div>
                </div>
              </motion.div>
            ))}

            {/* Closing Statement */}
            <div className="mt-12 md:mt-16 text-center">

              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#4A2040]">
                Because a great diet isn&apos;t about planning.
                <br />

                It&apos;s about{" "}
                <span className="bg-gradient-to-r from-[#C2185B] to-[#F48FB1] bg-clip-text italic text-transparent">
                  execution.
                </span>
              </h3>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}