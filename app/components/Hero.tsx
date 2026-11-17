import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-[7%] pb-16 pt-12 md:pb-20 md:pt-16 lg:pt-20">
      {/* Subtle background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#00875a]/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#b68b31]/5 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-[1450px] grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* ═══════════ LEFT — CONTENT ═══════════ */}
        <div>
          {/* Top badge */}
          <span className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-[#eaf7f1] px-4 py-2.5 text-[10px] font-extrabold tracking-wider text-[#00875a]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00875a] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00875a]" />
            </span>
            INDIA BASED · GLOBAL TRADE · SINCE 2009
          </span>

          {/* H1 */}
          <h1 className="font-['Manrope'] text-[38px] font-extrabold leading-[1.12] tracking-tight text-[#091c30] sm:text-[44px] md:text-[52px] lg:text-[60px] xl:text-[67px]">
            Connecting Global
            <br className="hidden sm:block" /> Markets Through{" "}
            <span className="text-[#00875a]">Gold, Pharma</span>
            <br className="hidden sm:block" /> &{" "}
            <span className="relative inline-block text-[#00875a]">
              International Trade
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 9C60 4 120 2 180 3C220 4 260 6 298 9"
                  stroke="#b68b31"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </span>
            .
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[600px] text-[15px] leading-relaxed text-[#718096] md:text-base">
            SAV7 IMPEX PRIVATE LIMITED is a diversified India-based import and
            export company connecting global opportunities across{" "}
            <strong className="font-semibold text-[#102b46]">gold bullion</strong>,{" "}
            <strong className="font-semibold text-[#102b46]">silver and precious metals</strong>,{" "}
            <strong className="font-semibold text-[#102b46]">pharmaceuticals</strong> and{" "}
            <strong className="font-semibold text-[#102b46]">healthcare products</strong>{" "}
            — serving 40+ countries with certified, insured and fully compliant trade.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#divisions"
              className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md bg-[#00875a] px-6 text-sm font-bold text-white shadow-lg shadow-[#00875a]/20 transition hover:-translate-y-0.5 hover:bg-[#102b46] hover:shadow-xl"
            >
              Explore Our Businesses
              <span className="transition-transform group-hover:translate-x-0.5">↗</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md border border-[#e7ecf1] bg-white px-6 text-sm font-bold text-[#102b46] transition hover:border-[#00875a] hover:text-[#00875a]"
            >
              Global Business Enquiry
            </Link>
          </div>

          {/* Trust points */}
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2.5">
            {[
              "Gold & Precious Metals",
              "Pharmaceutical & Healthcare",
              "India & Global Markets",
              "WHO-GMP · LBMA Aligned",
            ].map((point) => (
              <span
                key={point}
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#52677a]"
              >
                <svg
                  className="h-3.5 w-3.5 flex-shrink-0 text-[#00875a]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {point}
              </span>
            ))}
          </div>

          {/* Mini stats strip */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#e7ecf1] pt-6 sm:max-w-md">
            {[
              ["40+", "COUNTRIES"],
              ["500+", "PARTNERS"],
              ["15+", "YEARS"],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="font-['Manrope'] text-xl font-extrabold text-[#102b46] sm:text-2xl">
                  {num}
                </div>
                <div className="mt-0.5 text-[9px] font-bold tracking-wider text-[#718096]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════ RIGHT — IMAGE ═══════════ */}
        <div className="relative p-3 lg:p-4">
          {/* Decorative frame */}
          <div
            aria-hidden
            className="absolute -inset-2 rounded-2xl border border-[#b68b31]/20"
          />

          {/* Main photo */}
          <div
            className="relative h-[340px] overflow-hidden rounded-xl bg-cover bg-center shadow-2xl shadow-[#091c30]/25 sm:h-[400px] md:h-[460px] lg:h-[500px]"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1200&q=85")`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#091c30]/70 via-[#091c30]/20 to-transparent" />

            {/* Top-right label */}
            <div className="absolute right-4 top-4 rounded-full bg-white/95 px-3.5 py-1.5 backdrop-blur-sm">
              <span className="text-[9px] font-extrabold tracking-wider text-[#b68b31]">
                LBMA ALIGNED
              </span>
            </div>

            {/* Bottom floating card */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-lg bg-white/95 p-3.5 shadow-xl backdrop-blur-sm sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-[280px] sm:p-4">
              <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-lg bg-[#eaf7f1] text-xl">
                🌐
              </span>
              <div className="min-w-0">
                <strong className="block truncate text-[12px] font-bold text-[#102b46]">
                  Global Business Network
                </strong>
                <small className="mt-0.5 block text-[10px] text-[#718096]">
                  Sourcing · Compliance · Logistics
                </small>
              </div>
            </div>
          </div>

          {/* Caption row */}
          <div className="mt-4 flex items-center justify-between gap-3 text-[9px] font-extrabold tracking-wider text-[#718096]">
            <span className="truncate">GOLD · SILVER · PHARMA · PRECIOUS METALS</span>
            <span className="flex-shrink-0">EST. 2009</span>
          </div>

          {/* Trust badge */}
          <div className="absolute -left-2 top-8 rounded-lg bg-white px-3 py-2 shadow-lg lg:-left-4">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#00875a] text-[11px] text-white">
                ✓
              </span>
              <div>
                <div className="text-[9px] font-extrabold tracking-wider text-[#102b46]">
                  CERTIFIED
                </div>
                <div className="text-[8px] text-[#718096]">WHO-GMP</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════ BOTTOM STRIP ═══════════ */}
      <div className="relative mx-auto mt-16 max-w-[1450px]">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-lg border border-[#e7ecf1] bg-[#f7f9fb] px-5 py-4">
          {[
            "GOLD & PRECIOUS METALS",
            "PHARMACEUTICALS",
            "IMPORT & EXPORT",
            "GLOBAL COMMODITY TRADE",
          ].map((item, i, arr) => (
            <div key={item} className="flex items-center gap-6">
              <span className="text-[9px] font-extrabold tracking-wider text-[#102b46] sm:text-[10px]">
                {item}
              </span>
              {i < arr.length - 1 && (
                <span className="text-sm text-[#b68b31]" aria-hidden>
                  ✳
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}