
export default function TrustBar() {
  const items = [
    "Dietitians from Leading Institutions",
    "100+ Bangalore Families",
    "Cook Training Included",
    "Grocery Coordination Included",
    "Compliance Tracking",
  ];

  return (
    <section className="relative py-2 lg:py-4">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">

        <div
          className="
            rounded-full
            border
            border-[#F3E5EC]
            bg-white/90
            px-6
            py-4
            backdrop-blur-md
            shadow-[0_8px_30px_rgba(74,32,64,0.04)]
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-8
              lg:gap-10
              overflow-x-auto
              scrollbar-hide
            "
          >
            {items.map((item) => (
              <div
                key={item}
                className="flex shrink-0 items-center gap-2"
              >
                <span className="text-base font-bold text-[#66BB6A]">
                  ✓
                </span>

                <span
                  className="
                    whitespace-nowrap
                    text-[15px]
                    lg:text-[16px]
                    font-medium
                    text-[#6B4B63]
                  "
                >
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
