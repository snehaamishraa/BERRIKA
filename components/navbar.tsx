
import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-3 md:top-5 left-1/2 z-50 w-[95%] max-w-[1280px] -translate-x-1/2">
      <nav
        className="
          flex
          h-[72px]
          md:h-[84px]
          items-center
          justify-between
          rounded-full
          border
          border-white/60
          bg-white/85
          px-4
          md:px-8
          lg:px-10
          shadow-[0_10px_40px_rgba(74,32,64,0.08)]
          backdrop-blur-xl
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-10
              w-10
              md:h-12
              md:w-12
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-br
              from-[#C2185B]
              to-[#4A2040]
              text-lg
              md:text-xl
              font-bold
              text-white
              shadow-lg
            "
          >
            B
          </div>

          <h1
            className="
              text-xl
              md:text-2xl
              lg:text-3xl
              font-bold
              tracking-tight
              text-[#4A2040]
            "
          >
            Berrika
          </h1>

        </div>

        {/* Desktop Menu */}
        <div
          className="
            hidden
            md:flex
            items-center
            gap-6
            lg:gap-10
          "
        >
          <a
            href="#how-it-works"
            className="text-sm lg:text-[15px] font-medium text-[#4A2040] transition hover:text-[#C2185B]"
          >
            How It Works
          </a>

          <a
            href="#cook-training"
            className="text-sm lg:text-[15px] font-medium text-[#4A2040] transition hover:text-[#C2185B]"
          >
            Cook Training
          </a>

          <a
            href="#success-stories"
            className="text-sm lg:text-[15px] font-medium text-[#4A2040] transition hover:text-[#C2185B]"
          >
            Success Stories
          </a>

          <a
            href="#faq"
            className="text-sm lg:text-[15px] font-medium text-[#4A2040] transition hover:text-[#C2185B]"
          >
            FAQ
          </a>
        </div>

        {/* CTA */}
        <Link href="/get-started">
          <button
            className="
              rounded-xl
              bg-gradient-to-r
              from-[#C2185B]
              to-[#D81B60]
              px-4
              md:px-6
              py-2.5
              md:py-3
              text-sm
              md:text-[15px]
              font-semibold
              text-white
              shadow-[0_10px_30px_rgba(194,24,91,0.25)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_15px_35px_rgba(194,24,91,0.35)]
            "
          >
            <span className="hidden sm:inline">
              Get Started →
            </span>

            <span className="sm:hidden">
              Start
            </span>
          </button>
        </Link>
      </nav>
    </header>
  );
}
