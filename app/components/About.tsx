import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-[7%] py-16 md:py-20 lg:py-24"
    >
      {/* Subtle accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-[#00875a]/5 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* ═══════════ LEFT — IMAGE ═══════════ */}
        <div className="relative order-2 lg:order-1">
          {/* Decorative gold frame */}
          <div
            aria-hidden
            className="absolute -inset-2 rounded-2xl border border-[#b68b31]/20"
          />
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 h-24 w-24 rounded-xl border-2 border-[#00875a]/20"
          />

          {/* Main image */}
          <div
            className="relative min-h-[320px] overflow-hidden rounded-xl bg-cover bg-center shadow-2xl shadow-[#091c30]/25 sm:min-h-[420px] lg:min-h-[520px]"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85")`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#091c30]/80 via-[#091c30]/30 to-transparent" />

            {/* Bottom label */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="mb-1.5 block text-[10px] font-extrabold tracking-[2px] text-[#c9a45a]">
                SINCE 2009
              </span>
              <strong className="mb-1 block font-['Manrope'] text-4xl font-extrabold leading-none md:text-5xl">
                SAV7
              </strong>
              <span className="block text-[10px] font-semibold tracking-widest text-white/80">
                IMPEX PRIVATE LIMITED
              </span>
            </div>
          </div>

          {/* Floating experience badge */}
          <div className="absolute -top-5 right-4 flex items-center gap-3 rounded-lg bg-white p-3.5 shadow-xl shadow-[#102b46]/10 sm:right-6">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#eaf7f1] text-xl">
              🏆
            </span>
            <div>
              <strong className="block font-['Manrope'] text-lg font-extrabold leading-none text-[#102b46]">
                15+
              </strong>
              <small className="mt-1 block text-[9px] font-bold tracking-wider text-[#718096]">
                YEARS TRADE
              </small>
            </div>
          </div>
        </div>

        {/* ═══════════ RIGHT — CONTENT ═══════════ */}
        <div className="order-1 lg:order-2">
          {/* Eyebrow */}
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#eaf7f1] px-3.5 py-1.5 text-[10px] font-extrabold tracking-widest text-[#00875a]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00875a]" />
            ABOUT SAV7 IMPEX
          </span>

          {/* H2 */}
          <h2 className="font-['Manrope'] text-3xl font-extrabold leading-tight tracking-tight text-[#102b46] sm:text-4xl lg:text-[42px]">
            Trusted Partner for{" "}
            <span className="text-[#00875a]">Gold & Pharmaceutical</span> Import Export
          </h2>

          {/* Paragraphs */}
          <div className="mt-5 space-y-4">
            <p className="text-sm leading-relaxed text-[#718096] md:text-[15px]">
              SAV7 IMPEX PRIVATE LIMITED is an India-based{" "}
              <strong className="font-semibold text-[#102b46]">
                gold import export
              </strong>{" "}
              and{" "}
              <strong className="font-semibold text-[#102b46]">
                pharmaceutical export company
              </strong>{" "}
              connecting certified manufacturers, refiners and global buyers across
              40+ countries. We operate with full regulatory compliance, transparent
              pricing and end-to-end responsibility for every shipment.
            </p>
            <p className="text-sm leading-relaxed text-[#718096] md:text-[15px]">
              Our{" "}
              <strong className="font-semibold text-[#102b46]">
                Gold & Precious Metals Division
              </strong>{" "}
              trades LBMA-aligned bullion bars, gold doré, silver products and
              precious metals sourced from audited refineries. Our{" "}
              <strong className="font-semibold text-[#102b46]">
                Pharmaceuticals Division
              </strong>{" "}
              exports WHO-GMP certified generic medicines, APIs, formulations and
              healthcare products with complete COA, COPP, GMP and free-sale
              documentation.
            </p>
            <p className="text-sm leading-relaxed text-[#718096] md:text-[15px]">
              From regulatory paperwork to insured, tracked logistics and secure
              vault storage, SAV7 handles every step of the international trade
              cycle — so partners can scale globally with complete confidence.
            </p>
          </div>

          {/* Feature bullets */}
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "15+ years of proven trade experience",
              "Two specialised divisions",
              "500+ active partners worldwide",
              "ISO 9001:2015 certified QMS",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[12.5px] font-semibold text-[#34485d]"
              >
                <span className="mt-0.5 grid h-4 w-4 flex-shrink-0 place-items-center rounded-full bg-[#00875a]/10">
                  <svg
                    className="h-2.5 w-2.5 text-[#00875a]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* Stats row */}
          <div className="my-7 grid grid-cols-3 gap-4 border-y border-[#e7ecf1] py-6">
            {[
              ["40+", "COUNTRIES"],
              ["500+", "PARTNERS"],
              ["2", "DIVISIONS"],
            ].map(([num, label]) => (
              <div key={label}>
                <strong className="block font-['Manrope'] text-2xl font-extrabold leading-none text-[#00875a] sm:text-3xl">
                  {num}
                </strong>
                <span className="mt-1.5 block text-[9px] font-bold tracking-wider text-[#718096]">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/about"
              className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-[#00875a] px-5 text-xs font-bold text-white shadow-lg shadow-[#00875a]/20 transition hover:-translate-y-0.5 hover:bg-[#102b46] hover:shadow-xl"
            >
              Learn About Us
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md border border-[#e7ecf1] bg-white px-5 text-xs font-bold text-[#102b46] transition hover:border-[#00875a] hover:text-[#00875a]"
            >
              Talk to Trade Desk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}