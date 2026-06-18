"use client";

import Image from "next/image";

export default function CookTraining() {
  const features = [
    {
      title: "WhatsApp Instructions",
      desc: "Daily menus, voice notes and simple guidance in local languages.",
    },
    {
      title: "Recipe Cards",
      desc: "Clear recipes with portions, oil, salt and substitutes.",
    },
    {
      title: "Short Video Guidance",
      desc: "Quick videos for new dishes and cooking techniques.",
    },
    {
      title: "Cook Onboarding",
      desc: "Dedicated support to train your cook from day one.",
    },
  ];

  return (
    <section
      id="cook-training"
      className="relative overflow-hidden py-14 md:py-20 scroll-mt-24"
    >
      {/* Glow */}
      <div className="absolute right-10 top-20 h-[350px] w-[350px] rounded-full bg-[#F48FB1]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">

        {/* Badge */}
        <div className="mb-4 inline-flex items-center rounded-full border border-[#F48FB1]/20 bg-white/80 px-4 py-2 backdrop-blur-md shadow-sm">
          <span className="mr-2 text-[#C2185B]">✦</span>

          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C2185B]">
            THE SHOWSTOPPER
          </span>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* LEFT */}
          <div>
<h2 className="leading-[0.92] tracking-[-0.05em]">

  <span className="bold text-[27px] md:text-[39px] lg:text-[56px] font-extrabold text-[#4A2040]">
    We don't replace your cook.
  </span>
   
  

  <span className="block mt-2 text-[38px] md:text-[50px] lg:text-[56px] font-extrabold italic text-[#C2185B]">
    We upgrade them.
  </span>

</h2>

            <p className="mt-6 max-w-xl text-[15px] md:text-[18px] font-medium leading-8 text-[#7A5A70]">
              Your cook is the most important person in your nutrition
              journey. Berrika trains them, supports them and helps them
              execute your health plan consistently every single day.
            </p>

            <div className="mt-8 space-y-4">

              {features.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E8F5E9] text-[#66BB6A]">
                    ✓
                  </div>

                  <div>
                    <h4 className="text-[17px] md:text-[19px] font-bold text-[#4A2040]">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-[14px] md:text-[15px] leading-6 text-[#7A5A70]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div>

            <div className="overflow-hidden rounded-[32px] border border-[#F48FB1]/10 bg-white shadow-[0_20px_60px_rgba(74,32,64,0.06)]">

              <Image
                src="/images/berrika-06.png"
                alt="Cook Training"
                width={700}
                height={800}
                className="
                  h-[380px]
                  md:h-[500px]
                  lg:h-[620px]
                  w-full
                  object-cover
                "
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}