
export default function TrustBar() {
  const items = [
    {
      desktop: "Dietitians from Leading Institutions",
      mobile: "Expert Dietitians",
    },
    {
      desktop: "100+ Bangalore Families",
      mobile: "100+ Families",
    },
    {
      desktop: "Cook Training Included",
      mobile: "Cook Training",
    },
    {
      desktop: "Grocery Coordination Included",
      mobile: "Grocery Support",
    },
    {
      desktop: "Compliance Tracking",
      mobile: "Tracking",
    },
  ];

  return (
    <section className="relative py-2 md:py-3 lg:py-4">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">

        <div
          className="
            rounded-3xl
            md:rounded-full
            border
            border-[#F3E5EC]
            bg-white/90
            px-4
            py-3
            md:px-6
            md:py-4
            backdrop-blur-md
            shadow-[0_8px_30px_rgba(74,32,64,0.04)]
          "
        >
          <div
            className="
              flex
              items-center
              justify-start
              md:justify-center
              gap-5
              md:gap-8
              lg:gap-10
              overflow-x-auto
              whitespace-nowrap
              scrollbar-hide
            "
          >
            {items.map((item) => (
              <div
                key={item.desktop}
                className="flex shrink-0 items-center gap-2"
              >
                <span className="text-sm md:text-base font-bold text-[#66BB6A]">
                  ✓
                </span>

                <span
                  className="
                    text-xs
                    sm:text-sm
                    md:text-[15px]
                    lg:text-[16px]
                    font-medium
                    text-[#6B4B63]
                  "
                >
                  {/* Mobile Text */}
                  <span className="md:hidden">
                    {item.mobile}
                  </span>

                  {/* Desktop Text */}
                  <span className="hidden md:inline">
                    {item.desktop}
                  </span>
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
