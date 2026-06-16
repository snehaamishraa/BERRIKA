import Link from "next/link";
export function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2">
      <nav className="flex items-center justify-between rounded-full border border-white/60 bg-white/80 px-10 py-4 shadow-xl backdrop-blur-xl">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C2185B] to-[#4A2040] text-2xl font-bold text-white shadow-lg">
            B
          </div>

          <h1 className="text-4xl font-bold text-[#4A2040]">
            Berrika
          </h1>
        </div>

        {/* Menu */}
        <div className="hidden items-center gap-16 md:flex">
        <a
  href="#how-it-works"
  className="transition hover:text-[#C2185B]"
>
  How It Works
</a>

          <a
  href="#cook-training"
  className="transition hover:text-[#C2185B]"
>
  Cook Training
</a>

        <a
  href="#success-stories"
  className="transition hover:text-[#C2185B]"
>
  Success Stories
</a>
  <a href="#faq">FAQ</a>
        </div>

        {/* CTA */}
        <Link href="/get-started">
  <button
    className="
      rounded-xl
      bg-[#C2185B]
      px-6
      py-3
      font-semibold
      text-white
      transition
      hover:bg-[#A80045]
    "
  >
    Get Started
  </button>
</Link>
      </nav>
    </header>
  );
}