export default function TrustBar() {
  const items = [
    "Dietitians from Leading Institutions",
    "100+ Bangalore Families",
    "Cook Training Included",
    "Grocery Coordination Included",
    "Compliance Tracking",
  ];

  return (
    <section className="relative py-4">
      <div className="mx-auto max-w-[1400px] px-6">
        <div
          className="
            rounded-full
            bg-white/90
            backdrop-blur-md
            border border-[#F3E5EC]
            shadow-[0_10px_40px_rgba(74,32,64,0.04)]
            px-10
            py-5
          "
        >
          <div className="flex items-center justify-center gap-12 overflow-x-auto">
            {items.map((item) => (
              <div
                key={item}
                className="flex shrink-0 items-center gap-2"
              >
                <span className="text-[#66BB6A] font-bold text-lg">
                  ✓
                </span>

                <span className="text-[17px] font-medium text-[#6B4B63] whitespace-nowrap">
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