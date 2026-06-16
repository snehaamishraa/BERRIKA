export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#F48FB1]/10 py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C2185B] to-[#D81B60] text-lg font-bold text-white">
                B
              </div>

              <h3 className="text-3xl font-bold text-[#4A2040]">
                Berrika
              </h3>
            </div>

            <p className="mt-6 max-w-md text-[#7A5A70] leading-relaxed">
              India&apos;s first Diet Execution OS.
              We don&apos;t just create diet plans —
              we make sure they actually happen.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#4A2040]">
              Contact
            </h4>

            <div className="mt-4 space-y-3 text-[#7A5A70]">
              <p>hello@berrika.com</p>
              <p>Bangalore, India</p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#F48FB1]/10 pt-8 md:flex-row">

          <p className="text-sm text-[#7A5A70]">
            © 2026 Berrika. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-[#7A5A70]">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>

        </div>

      </div>
    </footer>
  );
}