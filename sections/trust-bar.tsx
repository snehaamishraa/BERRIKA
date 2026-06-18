"use client";

export default function TrustBar() {
const items = [
"100+ Families",
"Cook Training",
"Grocery Support",
"Daily Tracking",
];

return ( <section className="relative py-6"> <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">


    <div
      className="
        rounded-full
        border
        border-[#EEDBE4]
        bg-white
        px-6
        py-5
        shadow-[0_10px_40px_rgba(74,32,64,0.05)]
      "
    >
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">

        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <div className="h-2 w-2 rounded-full bg-[#C2185B]" />

            <span className="text-sm md:text-base font-semibold text-[#5B3A53]">
              {item}
            </span>
          </div>
        ))}

      </div>
    </div>

  </div>
</section>

);
}
