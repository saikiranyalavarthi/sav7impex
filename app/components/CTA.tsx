
import Link from "next/link";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#091c30] px-5 py-20 sm:px-8 lg:px-[7%] lg:py-28"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full border border-white/[0.06]" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-[#d2ad5b]/10" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-[#00875a]/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1150px]">

        {/* TOP LABEL */}
        <div className="mb-7 flex justify-center">
          <span className="inline-flex items-center gap-3 rounded-full border border-[#55d6a4]/20 bg-[#00875a]/10 px-5 py-2.5 text-[9px] font-extrabold tracking-[2.5px] text-[#55d6a4] sm:text-[10px]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#55d6a4]" />
            GLOBAL BUSINESS ENQUIRIES
          </span>
        </div>

        {/* CONTENT */}
        <div className="mx-auto max-w-[900px] text-center">

          <h2 className="font-[Manrope] text-3xl font-extrabold leading-[1.2] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[58px]">
            Let's Connect Your Business
            <span className="mt-2 block text-[#d6b86c]">
              To Global Opportunities.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[720px] text-[13px] leading-8 text-[#c0ccd8] sm:text-[15px]">
            Looking for gold and precious metals, pharmaceutical products,
            international sourcing or import-export business partnerships?
            Connect with SAV7 IMPEX and discuss your global trade requirements.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/contact"
              className="group inline-flex min-h-[55px] items-center justify-center gap-4 rounded-md bg-[#00875a] px-8 text-xs font-extrabold text-white shadow-lg shadow-[#00875a]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#009f6a] hover:shadow-xl"
            >
              Send Business Enquiry
              <span className="text-lg text-[#d6b86c] transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>

            <a
              href="https://wa.me/919290934388"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[55px] items-center justify-center gap-3 rounded-md border border-white/20 bg-white px-8 text-xs font-extrabold text-[#102b46] transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-[#d6b86c]"
            >
              <span className="text-lg text-[#00875a]">◉</span>
              WhatsApp Us
              <span className="text-base transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* DIVISION HIGHLIGHTS */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 border-t border-white/10 pt-8">

            <span className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-[#e0c17b]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d2ad5b]" />
              GOLD & PRECIOUS METALS
            </span>

            <span className="hidden h-4 w-px bg-white/20 sm:block" />

            <span className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-[#55d6a4]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#55d6a4]" />
              PHARMACEUTICALS
            </span>

            <span className="hidden h-4 w-px bg-white/20 sm:block" />

            <span className="flex items-center gap-2 text-[10px] font-bold tracking-wider text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              GLOBAL IMPORT & EXPORT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
