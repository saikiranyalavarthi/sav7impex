import Link from "next/link";

const divisions = [
  {
    number: "01",
    label: "PRECIOUS METALS DIVISION",
    category: "GOLD & PRECIOUS METALS",
    title: "Gold Import & Export",
    description:
      "Complete gold bullion import export services with LBMA-aligned sourcing, assay-verified bars, insured shipping and secure vault storage. We also trade silver, platinum and palladium.",
    products: [
      "LBMA Gold Bullion Bars",
      "Gold Doré & Coins",
      "Silver Bullion & Products",
      "Precious Metals Trading",
    ],
    image:
     "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1000&q=85",
    href: "/gold-import-export",
    accent: "gold" as const,
  },
  {
    number: "02",
    label: "HEALTHCARE DIVISION",
    category: "PHARMACEUTICALS & HEALTHCARE",
    title: "Pharmaceutical Export",
    description:
      "WHO-GMP certified pharmaceutical import export covering generic medicines, APIs, formulations and healthcare products — with complete COA, COPP, GMP and free-sale certificates.",
    products: [
      "Generic Medicines",
      "API & Intermediates",
      "Formulations & OTC",
      "Healthcare Products",
    ],
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1400&q=85",
    href: "/pharmaceuticals",
    accent: "green" as const,
  },
];

export default function BusinessDivisions() {
  return (
    <section
      id="divisions"
      className="relative overflow-hidden bg-[#f7f9fb] px-[7%] py-16 md:py-20 lg:py-24"
    >
      {/* Background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-[400px] w-[400px] rounded-full bg-[#b68b31]/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-10 h-[400px] w-[400px] rounded-full bg-[#00875a]/5 blur-3xl"
      />

      <div className="relative">
        {/* ═══════════ SECTION HEADING ═══════════ */}
        <div className="mx-auto mb-12 max-w-[740px] text-center md:mb-16">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[10px] font-extrabold tracking-widest text-[#00875a] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00875a]" />
            OUR TWO SPECIALISED DIVISIONS
          </span>
          <h2 className="font-['Manrope'] text-3xl font-extrabold leading-tight tracking-tight text-[#102b46] sm:text-4xl lg:text-[42px]">
            Gold & Pharmaceutical{" "}
            <span className="text-[#00875a]">Import Export</span> Services
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-sm leading-relaxed text-[#718096] md:text-[15px]">
            Two dedicated divisions — each with deep regulatory expertise, certified
            supplier networks and complete global logistics support.
          </p>
        </div>

        {/* ═══════════ DIVISION CARDS ═══════════ */}
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
          {divisions.map((d) => {
            const isGold = d.accent === "gold";
            const accentText = isGold ? "text-[#b68b31]" : "text-[#00875a]";
            const accentBg = isGold ? "bg-[#fbf5e9]" : "bg-[#eaf7f1]";
            const accentBorder = isGold ? "border-t-[#b68b31]" : "border-t-[#00875a]";
            const accentHover = isGold
              ? "group-hover:text-[#b68b31]"
              : "group-hover:text-[#00875a]";

            return (
              <article
                key={d.number}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[#e7ecf1] border-t-[4px] ${accentBorder} bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#091c30]/10`}
              >
                {/* ─── IMAGE ─── */}
                <div
                  className="relative h-[240px] bg-cover bg-center sm:h-[280px]"
                  style={{
                    backgroundImage: `linear-gradient(0deg, rgba(9,28,48,0.65), rgba(9,28,48,0.1) 70%), url("${d.image}")`,
                  }}
                >
                  {/* Number badge */}
                  <div className="absolute left-6 top-5 flex items-center gap-2">
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-lg ${accentBg} font-['Manrope'] text-base font-extrabold ${accentText} backdrop-blur-sm`}
                    >
                      {d.number}
                    </span>
                  </div>

                  {/* Division label */}
                  <div className="absolute bottom-5 left-6 right-6">
                    <span className="inline-block rounded-full bg-white/95 px-3 py-1 text-[9px] font-extrabold tracking-widest text-[#102b46] backdrop-blur-sm">
                      {d.label}
                    </span>
                  </div>
                </div>

                {/* ─── CONTENT ─── */}
                <div className="flex flex-1 flex-col p-7 md:p-8">
                  {/* Category */}
                  <span
                    className={`mb-2 inline-block text-[9px] font-extrabold tracking-widest ${accentText}`}
                  >
                    {d.category}
                  </span>

                  {/* Title */}
                  <h3 className="mb-3 font-['Manrope'] text-2xl font-bold leading-tight text-[#102b46] md:text-[26px]">
                    {d.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 text-[13px] leading-relaxed text-[#718096] md:text-sm">
                    {d.description}
                  </p>

                  {/* Product chips */}
                  <div className="mb-6 grid grid-cols-2 gap-2.5">
                    {d.products.map((p) => (
                      <div
                        key={p}
                        className={`flex items-center gap-2 rounded-md ${accentBg} px-3 py-2`}
                      >
                        <span className={`text-[10px] font-bold ${accentText}`}>
                          ✦
                        </span>
                        <span className="text-[11px] font-semibold text-[#34485d]">
                          {p}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA link */}
                  <div className="mt-auto border-t border-[#e7ecf1] pt-5">
                    <Link
                      href={d.href}
                      className={`flex items-center justify-between text-xs font-extrabold text-[#102b46] transition-colors ${accentHover}`}
                    >
                      <span>Explore {isGold ? "Gold" : "Pharma"} Division</span>
                      <span
                        className={`grid h-8 w-8 place-items-center rounded-full ${accentBg} ${accentText} transition-transform group-hover:translate-x-1`}
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ═══════════ BOTTOM CTA STRIP ═══════════ */}
        <div className="mx-auto mt-12 max-w-[1300px]">
          <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-[#e7ecf1] bg-white px-6 py-5 sm:flex-row">
            <div className="text-center sm:text-left">
              <strong className="block text-sm font-bold text-[#102b46]">
                Not sure which division fits your requirement?
              </strong>
              <p className="mt-1 text-xs text-[#718096]">
                Talk to our trade desk — we'll guide you to the right solution.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] flex-shrink-0 items-center justify-center gap-2 rounded-md bg-[#102b46] px-5 text-xs font-bold text-white transition hover:bg-[#00875a]"
            >
              Contact Our Team →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}