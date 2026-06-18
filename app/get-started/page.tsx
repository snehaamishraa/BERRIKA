"use client";

import Link from "next/link";
import { useState } from "react";

export default function GetStartedPage() {
const [submitted, setSubmitted] = useState(false);

return ( <main className="min-h-screen bg-[#FFF8F5] pt-2 md:pt-6 lg:pt-8 pb-8 md:pb-12"> <div className="mx-auto max-w-4xl px-5 md:px-8">

    {/* Back Button */}
    <Link
      href="/"
      className="
        mb-4
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-[#F48FB1]/20
        bg-white/90
        px-4
        py-2.5
        text-[#4A2040]
        backdrop-blur-md
        shadow-sm
        transition-all
        duration-300
        hover:-translate-x-1
      "
    >
      ← Back to Home
    </Link>

    {/* Header */}
    <div className="mx-auto max-w-3xl text-center">

      <div className="mb-3 inline-flex items-center rounded-full border border-[#F48FB1]/20 bg-white px-4 py-2 shadow-sm">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C2185B]">
          GET STARTED
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-[-0.04em] text-[#4A2040]">
        Build your
        <span className="block italic text-[#C2185B]">
          nutrition system.
        </span>
      </h1>

      <p className="mt-3 text-sm md:text-base leading-7 text-[#7A5A70]">
        Tell us about your goals and our team will reach out.
      </p>

    </div>

    {/* Form Card */}
    <div
      className="
        mt-6
        rounded-[24px]
        md:rounded-[32px]
        border
        border-[#F48FB1]/15
        bg-white/90
        p-5
        md:p-7
        backdrop-blur-md
        shadow-[0_15px_50px_rgba(74,32,64,0.06)]
      "
    >

      {!submitted ? (

        <form
          className="space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-2xl border border-[#F48FB1]/20 bg-white px-5 py-3 text-[#4A2040] outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-2xl border border-[#F48FB1]/20 bg-white px-5 py-3 text-[#4A2040] outline-none"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-2xl border border-[#F48FB1]/20 bg-white px-5 py-3 text-[#4A2040] outline-none"
          />

          <input
            type="number"
            placeholder="Age"
            className="w-full rounded-2xl border border-[#F48FB1]/20 bg-white px-5 py-3 text-[#4A2040] outline-none"
          />

          <input
            type="text"
            placeholder="City"
            className="w-full rounded-2xl border border-[#F48FB1]/20 bg-white px-5 py-3 text-[#4A2040] outline-none"
          />

          <select className="w-full rounded-2xl border border-[#F48FB1]/20 bg-white px-5 py-3 text-[#4A2040] outline-none">
            <option>Select Goal</option>
            <option>Weight Loss</option>
            <option>PCOS</option>
            <option>Diabetes</option>
            <option>Muscle Gain</option>
            <option>General Health</option>
          </select>

          <select className="w-full rounded-2xl border border-[#F48FB1]/20 bg-white px-5 py-3 text-[#4A2040] outline-none">
            <option>Do you have a cook?</option>
            <option>Yes</option>
            <option>No</option>
          </select>

          <textarea
            rows={4}
            placeholder="Tell us about your health goals..."
            className="w-full rounded-2xl border border-[#F48FB1]/20 bg-white px-5 py-3 text-[#4A2040] outline-none resize-none"
          />

          <button
            type="submit"
            className="
              w-full
              rounded-2xl
              bg-gradient-to-r
              from-[#C2185B]
              to-[#D81B60]
              py-3.5
              text-base
              font-semibold
              text-white
              shadow-[0_15px_35px_rgba(194,24,91,0.25)]
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            Book Free Consultation →
          </button>

        </form>

      ) : (

        <div className="py-6 md:py-8 text-center">

          <div className="mx-auto flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-[#E8F5E9] text-3xl">
            🎉
          </div>

          <h2 className="mt-4 text-2xl md:text-4xl font-bold text-[#4A2040]">
            You're on the list!
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm md:text-base leading-7 text-[#7A5A70]">
            Thank you for sharing your details.
            Our nutrition team will contact you within 24 hours.
          </p>

          <div className="mt-6 rounded-3xl bg-[#FFF8F5] p-5">
            <p className="text-lg md:text-xl italic text-[#C2185B]">
              “Small daily choices become extraordinary results.”
            </p>

            <p className="mt-3 text-sm text-[#7A5A70]">
              Your health journey starts today.
            </p>
          </div>

          <Link
            href="/"
            className="
              mt-6
              inline-flex
              items-center
              rounded-2xl
              bg-gradient-to-r
              from-[#C2185B]
              to-[#D81B60]
              px-6
              py-3
              font-semibold
              text-white
            "
          >
            Back to Home →
          </Link>

        </div>

      )}

    </div>

  </div>
</main>

);
}
