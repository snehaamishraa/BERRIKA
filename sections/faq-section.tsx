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
      className="relative overflow-hidden py-32 scroll-mt-32"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#F48FB1]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center rounded-full border border-[#F48FB1]/20 bg-white/80 px-5 py-2 backdrop-blur-md shadow-sm">
          <span className="mr-2 text-[#C2185B]">✦</span>

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C2185B]">
            FAQ
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-5xl font-bold text-[#4A2040] md:text-7xl">
          Honest answers.
        </h2>

        <p className="mt-6 max-w-2xl text-xl text-[#7A5A70]">
          Everything you need to know before getting started with Berrika.
        </p>

        {/* FAQ Cards */}
        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                overflow-hidden
                rounded-[30px]
                border border-[#F48FB1]/15
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
                  px-8
                  py-7
                  text-left
                "
              >
                <span className="text-xl font-semibold text-[#4A2040]">
                  {faq.question}
                </span>

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#FFF8F5]
                    text-2xl
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
                <p className="px-8 pb-8 text-lg leading-relaxed text-[#7A5A70]">
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