
"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What if my cook is not tech-savvy?",
    answer:
      "Our entire training system is built around WhatsApp — voice notes, short videos, and simple recipe cards. We onboard your cook personally in week one and stay on call for the first month.",
  },
  {
    question: "How is this different from a diet chart?",
    answer:
      "A diet chart tells you what to eat. Berrika makes sure it actually gets cooked, served and followed through cook training, grocery coordination and compliance tracking.",
  },
  {
    question: "Is this similar to HealthifyMe?",
    answer:
      "No. HealthifyMe focuses on tracking and coaching. Berrika focuses on execution inside your kitchen by working directly with your cook and ensuring compliance.",
  },
  {
    question: "What if my cook changes?",
    answer:
      "No problem. We can onboard and train your new cook quickly using the same process, recipe library and support system.",
  },
  {
    question: "Why is this better than meal planning apps?",
    answer:
      "Meal planning apps stop at planning. Berrika handles execution, accountability, grocery coordination and cook enablement.",
  },
  {
    question: "Is Berrika available outside Bangalore?",
    answer:
      "Currently we focus on Bangalore families to ensure high-quality support. Expansion to other cities is planned soon.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-16 md:py-20 scroll-mt-24"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-32 h-[350px] w-[350px] md:h-[450px] md:w-[450px] -translate-x-1/2 rounded-full bg-[#F48FB1]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1000px] px-5 md:px-8 lg:px-10">

        {/* Badge */}
        <div className="mb-5 inline-flex items-center rounded-full border border-[#F48FB1]/20 bg-white/80 px-4 py-2 backdrop-blur-md shadow-sm">
          <span className="mr-2 text-[#C2185B]">✦</span>

          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C2185B]">
            FAQ
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A2040]">
          Honest answers.
        </h2>

        <p className="mt-4 max-w-2xl text-base md:text-lg leading-7 md:leading-8 text-[#7A5A70]">
          Everything you need to know before getting started with Berrika.
        </p>

        {/* FAQ Cards */}
        <div className="mt-8 md:mt-10 space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                overflow-hidden
                rounded-[20px]
                md:rounded-[24px]
                border
                border-[#F48FB1]/15
                bg-white/85
                backdrop-blur-md
                shadow-sm
              "
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-4
                  px-5
                  py-5
                  md:px-6
                  text-left
                "
              >
                <span className="text-base md:text-lg font-semibold text-[#4A2040]">
                  {faq.question}
                </span>

                <div
                  className="
                    flex
                    h-8
                    w-8
                    md:h-9
                    md:w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#FFF8F5]
                    text-lg
                    md:text-xl
                    text-[#C2185B]
                  "
                >
                  {open === index ? "−" : "+"}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  open === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 pb-5 md:px-6 md:pb-6 text-sm md:text-base leading-7 text-[#7A5A70]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
