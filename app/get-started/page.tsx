"use client";

import Link from "next/link";
import { useState } from "react";

export default function GetStartedPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-[#FFF8F5] pt-8 md:pt-12 pb-16 md:pb-20">

      <div className="mx-auto max-w-3xl px-5 md:px-6">

        {/* Back Button */}
        <Link
          href="/"
          className="
            mb-6 md:mb-8
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[#F48FB1]/20
            bg-white/80
            px-5
            py-3
            text-[#4A2040]
            backdrop-blur-md
            shadow-sm
            transition-all
            duration-300
            hover:-translate-x-1
          "
        >
          <span>←</span>
          <span className="font-medium">Back to Home</span>
        </Link>

        {/* Header */}
        <div className="text-center">

          <div className="mb-5 inline-flex items-center rounded-full border border-[#F48FB1]/20 bg-white px-4 py-2 shadow-sm">

            <span className="mr-2 text-[#C2185B]">
              ✦
            </span>

            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C2185B]">
              GET STARTED
            </span>

          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#4A2040]">

            Let&apos;s build your{" "}

            <span className="italic text-[#C2185B]">
              nutrition system.
            </span>

          </h1>

          <p className="mt-4 md:mt-6 text-base md:text-lg leading-7 text-[#7A5A70]">
            Tell us a little about yourself and we&apos;ll reach out.
          </p>

        </div>

        {/* Form Card */}
        <div
          className="
            mt-8
            md:mt-10
            rounded-[28px]
            md:rounded-[40px]
            border
            border-[#F48FB1]/15
            bg-white/80
            p-5
            md:p-10
            backdrop-blur-md
            shadow-[0_20px_60px_rgba(74,32,64,0.08)]
          "
        >

          {!submitted ? (

            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >

              <input
                type="text"
                placeholder="Full Name"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#F48FB1]/20
                  p-4
                  outline-none
                  focus:border-[#C2185B]
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#F48FB1]/20
                  p-4
                  outline-none
                  focus:border-[#C2185B]
                "
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#F48FB1]/20
                  p-4
                  outline-none
                  focus:border-[#C2185B]
                "
              />

              <input
                type="number"
                placeholder="Age"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#F48FB1]/20
                  p-4
                  outline-none
                  focus:border-[#C2185B]
                "
              />

              <input
                type="text"
                placeholder="City"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#F48FB1]/20
                  p-4
                  outline-none
                  focus:border-[#C2185B]
                "
              />

              <select
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#F48FB1]/20
                  p-4
                  outline-none
                  focus:border-[#C2185B]
                "
              >
                <option>Select Goal</option>
                <option>Weight Loss</option>
                <option>PCOS</option>
                <option>Diabetes</option>
                <option>Muscle Gain</option>
                <option>General Health</option>
              </select>

              <select
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#F48FB1]/20
                  p-4
                  outline-none
                  focus:border-[#C2185B]
                "
              >
                <option>Do you have a cook?</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              <textarea
                rows={5}
                placeholder="Tell us about your health goals..."
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#F48FB1]/20
                  p-4
                  outline-none
                  focus:border-[#C2185B]
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#C2185B]
                  to-[#D81B60]
                  py-4
                  text-base
                  md:text-lg
                  font-semibold
                  text-white
                  shadow-[0_15px_40px_rgba(194,24,91,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                Submit Application →
              </button>

            </form>

          ) : (

            <div className="py-8 md:py-12 text-center">

              <div className="mx-auto flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-[#E8F5E9] text-4xl md:text-5xl">
                🎉
              </div>

              <h2 className="mt-6 text-3xl md:text-4xl font-bold text-[#4A2040]">
                Submission Complete!
              </h2>

              <p className="mx-auto mt-4 md:mt-6 max-w-xl text-base md:text-xl leading-7 text-[#7A5A70]">
                Thank you for sharing your details.
                Our nutrition team will contact you within 24 hours.
              </p>

              <div className="mt-8 rounded-3xl bg-[#FFF8F5] p-5 md:p-8">

                <p className="text-xl md:text-2xl italic text-[#C2185B]">
                  “Small daily choices become extraordinary results.”
                </p>

                <p className="mt-4 text-[#7A5A70]">
                  Your health journey starts today. 💖
                </p>

              </div>

              <Link
                href="/"
                className="
                  mt-8
                  inline-flex
                  items-center
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#C2185B]
                  to-[#D81B60]
                  px-8
                  py-4
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