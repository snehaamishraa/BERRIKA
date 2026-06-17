import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-5 left-1/2 z-50 w-[92%] max-w-[1280px] -translate-x-1/2">
      <nav
        className="
          flex
          h-[88px]
          items-center
          justify-between
          rounded-full
          border
          border-white/60
          bg-white/85
          px-8
          lg:px-10
          shadow-[0_10px_40px_rgba(74,32,64,0.08)]
          backdrop-blur-xl
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-[#C2185B]
              to-[#4A2040]
              text-2xl
              font-bold
              text-white
              shadow-lg
            "
          >
            B
          </div>

          <h1
            className="
              text-3xl
              font-bold
              tracking-tight
              text-[#4A2040]
            "
          >
            Berrika
          </h1>
        </div>

        {/* Menu */}
        <div
          className="
            hidden
            items-center
            gap-10
            lg:gap-12
            md:flex
          "
        >
          <a
            href="#how-it-works"
            className="
              text-[16px]
              font-medium
              text-[#4A2040]
              transition-colors
              duration-300
              hover:text-[#C2185B]
            "
          >
            How It Works
          </a>

          <a
            href="#cook-training"
            className="
              text-[16px]
              font-medium
              text-[#4A2040]
              transition-colors
              duration-300
              hover:text-[#C2185B]
            "
          >
            Cook Training
          </a>

          <a
            href="#success-stories"
            className="
              text-[16px]
              font-medium
              text-[#4A2040]
              transition-colors
              duration-300
              hover:text-[#C2185B]
            "
          >
            Success Stories
          </a>

          <a
            href="#faq"
            className="
              text-[16px]
              font-medium
              text-[#4A2040]
              transition-colors
              duration-300
              hover:text-[#C2185B]
            "
          >
            FAQ
          </a>
        </div>

        {/* CTA */}
        <Link href="/get-started">
          <button
            className="
              rounded-2xl
              bg-gradient-to-r
              from-[#C2185B]
              to-[#D81B60]
              px-7
              py-3.5
              text-[15px]
              font-semibold
              text-white
              shadow-[0_10px_30px_rgba(194,24,91,0.25)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_15px_35px_rgba(194,24,91,0.35)]
            "
          >
            Get Started →
          </button>
        </Link>
      </nav>
    </header>
  );
}