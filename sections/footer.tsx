
export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#F48FB1]/10 py-10 md:py-12">

      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">

        <div className="grid gap-10 text-center md:grid-cols-3 md:text-left">

          {/* Brand */}
          <div className="md:col-span-2">

            <div className="flex items-center justify-center gap-3 md:justify-start">

              <div className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C2185B] to-[#D81B60] text-sm md:text-base font-bold text-white">
                B
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-[#4A2040]">
                Berrika
              </h3>

            </div>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#7A5A70] md:mx-0">
              India&apos;s first Diet Execution OS.
              We don&apos;t just create diet plans —
              we make sure they actually happen.
            </p>

          </div>

          {/* Contact */}
          <div>

            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#4A2040]">
              Contact
            </h4>

            <div className="mt-4 space-y-2 text-sm text-[#7A5A70]">
              <p>hello@berrika.com</p>
              <p>Bangalore, India</p>
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 md:mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#F48FB1]/10 pt-6 md:flex-row">

          <p className="text-xs text-center text-[#7A5A70]">
            © 2026 Berrika. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs text-[#7A5A70]">

            <a
              href="#"
              className="transition hover:text-[#C2185B]"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-[#C2185B]"
            >
              Terms
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}
