"use client";

import { useState } from "react";

const faqs = [
{
question: "What if my cook is not tech-savvy?",
answer:
"Our training works through WhatsApp voice notes, simple videos and recipe cards. We personally onboard your cook and provide ongoing support.",
},
{
question: "How is this different from a diet chart?",
answer:
"A diet chart tells you what to eat. Berrika ensures it gets cooked, served and followed through cook training and compliance tracking.",
},
{
question: "Is this similar to HealthifyMe?",
answer:
"No. HealthifyMe focuses on tracking and coaching. Berrika focuses on execution inside your kitchen.",
},
{
question: "What if my cook changes?",
answer:
"We quickly onboard and train your new cook using the same process and support system.",
},
{
question: "Why is this better than meal planning apps?",
answer:
"Meal planning apps stop at planning. Berrika handles execution, accountability and kitchen coordination.",
},
{
question: "Is Berrika available outside Bangalore?",
answer:
"Currently we focus on Bangalore families to maintain service quality. More cities are coming soon.",
},
];

export default function FAQSection() {
const [open, setOpen] = useState<number | null>(0);

return ( <section
   id="faq"
   className="relative overflow-hidden py-10 md:py-14 scroll-mt-24"
 >
{/* Glow */} <div className="absolute left-1/2 top-24 h-[300px] w-[300px] md:h-[380px] md:w-[380px] -translate-x-1/2 rounded-full bg-[#F48FB1]/10 blur-[120px]" />
  <div className="relative mx-auto max-w-[850px] px-5 md:px-8">

    {/* Badge */}
    <div className="mb-4 inline-flex items-center rounded-full border border-[#F48FB1]/20 bg-white/80 px-4 py-2 backdrop-blur-md shadow-sm">
      <span className="mr-2 text-[#C2185B]">✦</span>

      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C2185B]">
        FAQ
      </span>
    </div>

    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-bold text-[#4A2040]">
      Honest answers.
    </h2>

    <p className="mt-3 max-w-xl text-sm md:text-base leading-7 text-[#7A5A70]">
      Everything you need to know before getting started with Berrika.
    </p>

    {/* FAQ List */}
    <div className="mt-6 space-y-3">

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="
            overflow-hidden
            rounded-[20px]
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
              py-4
              text-left
            "
          >
            <span className="text-[15px] md:text-base font-semibold text-[#4A2040]">
              {faq.question}
            </span>

            <div
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#FFF8F5]
                text-lg
                font-medium
                text-[#C2185B]
              "
            >
              {open === index ? "−" : "+"}
            </div>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === index
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="px-5 pb-4 text-sm leading-6 text-[#7A5A70]">
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
