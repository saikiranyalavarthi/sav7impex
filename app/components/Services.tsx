import Link from "next/link";

const goldProducts = [
  {
    title: "LBMA Gold Bullion Bars",
    description:
      "1 kg, 100 g and 400 oz investment-grade bars with assay certificates and hallmark verification.",
    tags: ["1 kg", "100 g", "400 oz"],
  },
  {
    title: "Gold Doré & Coins",
    description:
      "Certified gold doré from mining partners and sovereign-minted bullion coins in 1 oz, ½ oz and ¼ oz.",
    tags: ["Doré", "1 oz", "½ oz"],
  },
  {
    title: "Silver Bullion & Products",
    description:
      "999 fine silver bars and coins in 1 kg, 100 oz and 1000 oz weights for investors and refiners.",
    tags: ["999 fine", "Bars", "Coins"],
  },
  {
    title: "Precious Metals Trading",
    description:
      "Platinum and palladium bars and sponge sourced from certified refineries for institutional buyers.",
    tags: ["Platinum", "Palladium", "999.5"],
  },
];

const pharmaProducts = [
  {
    title: "Generic Medicines",
    description:
      "Antibiotics, cardiovascular, anti-diabetic, oncology and anti-malarial generics from WHO-GMP plants.",
    tags: ["Tablets", "Capsules", "Injectables"],
  },
  {
    title: "APIs & Intermediates",
    description:
      "Active pharmaceutical ingredients sourced from WHO-GMP certified manufacturers with full COA.",
    tags: ["Bulk", "KG-scale", "Tonne-scale"],
  },
  {
    title: "Formulations & OTC",
    description:
      "Tablets, capsules, syrups, injectables and OTC product lines with private-label options.",
    tags: ["Tablets", "Syrups", "Topicals"],
  },
  {
    title: "Healthcare & Nutraceuticals",
    description:
      "Vitamins, minerals, protein supplements, medical devices, PPE and healthcare consumables.",
    tags: ["Supplements", "Devices", "PPE"],
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#f7f9fb] px-[7%] py-16 md:py-20 lg:py-24"
    >
      {/* Background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-[#b68b31]/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#00875a]/5 blur-3xl"
      />

      <div className="relative">
        {/* ═══════════ SECTION HEADING ═══════════ */}
        <div className="mx-auto mb-12 max-w-[740px] text-center md:mb-16">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[10px] font-extrabold tracking-widest text-[#00875a] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00875a]" />
            PRODUCT PORTFOLIO
          </span>
          <h2 className="font-['Manrope'] text-3xl font-extrabold leading-tight tracking-tight text-[#102b46] sm:text-4xl lg:text-[42px]">
            Products We{" "}
            <span className="text-[#00875a]">Import & Export</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-sm leading-relaxed text-[#718096] md:text-[15px]">
            Explore our gold, silver and pharmaceutical product lines — all sourced
            from certified and fully audited manufacturing partners.
          </p>
        </div>

        {/* ═══════════ PRODUCT COLUMNS ═══════════ */}
        <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
          {/* ─── GOLD PORTFOLIO ─── */}
          <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#e7ecf1] border-t-[4px] border-t-[#b68b31] bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#091c30]/5">
            {/* Header */}
            <div className="flex items-center gap-4 border-b border-[#e7ecf1] bg-gradient-to-br from-[#fbf5e9] to-white p-6 sm:p-7">
              <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-lg bg-[#fbf5e9] text-2xl shadow-sm">
                🥇
              </div>
              <div className="min-w-0">
                <span className="mb-1 block text-[9px] font-extrabold tracking-widest text-[#b68b31]">
                  DIVISION 01 · PRECIOUS METALS
                </span>
                <h3 className="font-['Manrope'] text-lg font-bold leading-tight text-[#102b46] sm:text-xl">
                  Gold & Precious Metals
                </h3>
              </div>
            </div>

            {/* Product list */}
            <div className="flex-1 p-6 sm:p-7">
              {goldProducts.map((p, i) => (
                <div
                  key={p.title}
                  className="flex gap-4 border-b border-[#e7ecf1] py-5 first:pt-0 last:border-0 last:pb-0"
                >
                  <div className="flex-shrink-0">
                    <span className="grid h-9 w-9 place-items-center rounded-md bg-[#fbf5e9] font-['Manrope'] text-[11px] font-extrabold text-[#b68b31]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="mb-1.5 text-[13.5px] font-bold text-[#102b46] sm:text-sm">
                      {p.title}
                    </h4>
                    <p className="mb-2.5 text-[11.5px] leading-relaxed text-[#718096] sm:text-xs">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded bg-[#fbf5e9] px-2 py-0.5 text-[9px] font-extrabold tracking-wide text-[#b68b31]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="border-t border-[#e7ecf1] bg-[#f9fafb] p-5 sm:px-7">
              <Link
                href="/gold-import-export"
                className="group/link flex items-center justify-between text-xs font-extrabold text-[#102b46] transition hover:text-[#b68b31]"
              >
                <span>View Full Gold Division</span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#fbf5e9] text-[#b68b31] transition-transform group-hover/link:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </article>

          {/* ─── PHARMA PORTFOLIO ─── */}
          <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#e7ecf1] border-t-[4px] border-t-[#00875a] bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#091c30]/5">
            {/* Header */}
            <div className="flex items-center gap-4 border-b border-[#e7ecf1] bg-gradient-to-br from-[#eaf7f1] to-white p-6 sm:p-7">
              <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-lg bg-[#eaf7f1] text-2xl shadow-sm">
                💊
              </div>
              <div className="min-w-0">
                <span className="mb-1 block text-[9px] font-extrabold tracking-widest text-[#00875a]">
                  DIVISION 02 · HEALTHCARE
                </span>
                <h3 className="font-['Manrope'] text-lg font-bold leading-tight text-[#102b46] sm:text-xl">
                  Pharmaceuticals
                </h3>
              </div>
            </div>

            {/* Product list */}
            <div className="flex-1 p-6 sm:p-7">
              {pharmaProducts.map((p, i) => (
                <div
                  key={p.title}
                  className="flex gap-4 border-b border-[#e7ecf1] py-5 first:pt-0 last:border-0 last:pb-0"
                >
                  <div className="flex-shrink-0">
                    <span className="grid h-9 w-9 place-items-center rounded-md bg-[#eaf7f1] font-['Manrope'] text-[11px] font-extrabold text-[#00875a]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="mb-1.5 text-[13.5px] font-bold text-[#102b46] sm:text-sm">
                      {p.title}
                    </h4>
                    <p className="mb-2.5 text-[11.5px] leading-relaxed text-[#718096] sm:text-xs">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded bg-[#eaf7f1] px-2 py-0.5 text-[9px] font-extrabold tracking-wide text-[#00875a]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="border-t border-[#e7ecf1] bg-[#f9fafb] p-5 sm:px-7">
              <Link
                href="/pharmaceuticals"
                className="group/link flex items-center justify-between text-xs font-extrabold text-[#102b46] transition hover:text-[#00875a]"
              >
                <span>View Full Pharma Division</span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#eaf7f1] text-[#00875a] transition-transform group-hover/link:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </article>
        </div>

        {/* ═══════════ BOTTOM STRIP ═══════════ */}
        <div className="mx-auto mt-10 max-w-[1250px]">
          <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-[#e7ecf1] bg-white px-6 py-5 sm:flex-row">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <span className="hidden h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-[#00875a]/10 text-base text-[#00875a] sm:grid">
                ✓
              </span>
              <div>
                <strong className="block text-sm font-bold text-[#102b46]">
                  All products certified and fully documented
                </strong>
                <p className="mt-0.5 text-xs text-[#718096]">
                  COA · COPP · GMP · Free-sale · Assay certificates included
                </p>
              </div>
            </div>
            <Link
              href="/products"
              className="inline-flex min-h-[44px] flex-shrink-0 items-center justify-center gap-2 rounded-md bg-[#00875a] px-5 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#102b46]"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}