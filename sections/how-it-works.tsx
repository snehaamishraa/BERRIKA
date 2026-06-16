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
return ( <section
   id="how-it-works"
   className="relative overflow-hidden py-32 scroll-mt-32"
 >
{/* Glow */} <div className="absolute left-1/2 top-40 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#F48FB1]/10 blur-[120px]" />

```
  <div className="relative mx-auto max-w-[1400px] px-6">

    {/* Badge */}
    <div className="mb-8">
      <div className="inline-flex items-center rounded-full border border-[#F48FB1]/20 bg-white/80 px-5 py-2 backdrop-blur-md shadow-sm">
        <span className="mr-2 text-[#C2185B]">✦</span>

        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C2185B]">
          HOW IT WORKS
        </span>
      </div>
    </div>

    {/* Heading */}
    <div>

      <h2 className="whitespace-nowrap text-4xl md:text-6xl lg:text-7xl font-extrabold leading-none tracking-[-0.04em] text-[#4A2040]">
        From diet plan{" "}
        <span className="italic text-[#C2185B]">
          to diet followed.
        </span>
      </h2>

      <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[#7A5A70]">
        We don't just give you a diet chart. We make sure it actually
        happens — through cook training, grocery coordination and
        compliance tracking.
      </p>

      <div className="mt-8 h-[4px] w-32 rounded-full bg-gradient-to-r from-[#C2185B] to-[#F48FB1]" />

    </div>

    {/* Timeline */}
    <div className="relative mt-24">

      {/* Vertical Line */}
      <div className="absolute left-8 top-0 hidden h-full w-[2px] bg-gradient-to-b from-[#C2185B] via-[#F48FB1] to-transparent lg:block" />

      <div className="space-y-10">

        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            className="relative lg:ml-24"
          >
            <div
              className="
                rounded-[36px]
                border
                border-[#F48FB1]/15
                bg-white/85
                backdrop-blur-md
                p-10
                shadow-[0_15px_50px_rgba(74,32,64,0.06)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_20px_60px_rgba(194,24,91,0.12)]
              "
            >
              <div className="flex flex-col gap-8 md:flex-row md:items-center">

                {/* Left */}
                <div className="min-w-[220px]">

                  <div className="text-7xl font-bold text-[#C2185B]">
                    {step.number}
                  </div>

                  <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F48FB1]/20 bg-[#FFF8F5] text-lg">
                    {step.icon}
                  </div>

                </div>

                {/* Right */}
                <div>

                  <h3 className="text-4xl font-bold text-[#4A2040]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-xl leading-relaxed text-[#7A5A70]">
                    {step.desc}
                  </p>

                </div>

              </div>
            </div>
          </motion.div>
        ))}

        {/* Closing Statement */}
        <div className="mt-32 text-center">

          <h3 className="text-4xl md:text-6xl font-bold leading-tight text-[#4A2040]">
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
