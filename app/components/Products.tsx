
import Link from "next/link";

const goldProducts = [
  {
    title: "Gold Bars & Bullion",
    description: "Gold bullion and eligible precious metal products.",
    icon: "✦",
  },
  {
    title: "Silver Products",
    description: "Silver products and precious metal trading.",
    icon: "◈",
  },
  {
    title: "Precious Metals Trading",
    description: "Sourcing and trade coordination.",
    icon: "◆",
  },
  {
    title: "Gold & Silver Import Export",
    description: "Domestic and international trade opportunities.",
    icon: "↗",
  },
];

const pharmaProducts = [
  {
    title: "Generic Medicines",
    description: "Approved pharmaceutical formulations.",
    icon: "✚",
  },
  {
    title: "Active Pharmaceutical Ingredients",
    description: "API and raw material sourcing.",
    icon: "⚕",
  },
  {
    title: "Pharmaceutical Formulations",
    description: "Tablets, capsules and other dosage forms.",
    icon: "▤",
  },
  {
    title: "Healthcare Products",
    description: "Eligible medical and healthcare supplies.",
    icon: "♡",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#f7f9fb] px-[5%] py-16 sm:px-[6%] md:py-20 lg:px-[7%] lg:py-24"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#b68b31]/[0.07] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-10 h-96 w-96 rounded-full bg-[#00875a]/[0.06] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1250px]">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e7ecf1] bg-white px-4 py-2 text-[10px] font-extrabold tracking-[0.18em] text-[#00875a] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#00875a]" />
            OUR PRODUCT PORTFOLIO
          </span>

          <h2 className="font-['Manrope'] text-3xl font-extrabold leading-tight tracking-tight text-[#102b46] sm:text-4xl lg:text-[44px]">
            Products Across{" "}
            <span className="text-[#00875a]">Two Business Sectors</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#718096] sm:text-base">
            Explore our core product categories and contact our team for
            specific product availability and business enquiries.
          </p>
        </div>

        {/* Product divisions */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-8">
          {/* Gold Division */}
          <div className="group relative overflow-hidden rounded-2xl border border-[#eadfc8] bg-white shadow-[0_8px_35px_rgba(9,28,48,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(9,28,48,0.10)]">
            {/* Top accent */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#8e6924] via-[#d7b45b] to-[#b68b31]" />

            <div className="p-6 sm:p-8 lg:p-9">
              {/* Division heading */}
              <div className="mb-8 flex items-center gap-4">
                <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-xl bg-[#fbf5e9] text-3xl text-[#b68b31]">
                  ✦
                </div>

                <div>
                  <span className="text-[9px] font-extrabold tracking-[0.2em] text-[#b68b31]">
                    DIVISION 01
                  </span>
                  <h3 className="mt-1 font-['Manrope'] text-xl font-extrabold text-[#102b46] sm:text-2xl">
                    Gold & Precious Metals
                  </h3>
                </div>
              </div>

              {/* Gold products */}
              <div className="space-y-3">
                {goldProducts.map((product, index) => (
                  <div
                    key={product.title}
                    className="group/item flex gap-4 rounded-xl border border-[#f0ede6] bg-[#fdfcf9] p-4 transition-all duration-200 hover:border-[#d7b45b] hover:bg-[#fbf5e9]/70"
                  >
                    <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-[#fbf5e9] font-['Manrope'] text-sm font-extrabold text-[#b68b31] transition-colors group-hover/item:bg-[#b68b31] group-hover/item:text-white">
                      {product.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <span className="text-[9px] font-bold text-[#b68b31]">
                          0{index + 1}
                        </span>
                        <h4 className="text-sm font-bold text-[#102b46] sm:text-[15px]">
                          {product.title}
                        </h4>
                      </div>

                      <p className="text-xs leading-relaxed text-[#718096]">
                        {product.description}
                      </p>
                    </div>

                    <span className="self-center text-lg text-[#b68b31] opacity-0 transition-all group-hover/item:translate-x-1 group-hover/item:opacity-100">
                      →
                    </span>
                  </div>
                ))}
              </div>

              {/* Gold link */}
              <Link
                href="/gold-precious-metals"
                className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#102b46] px-5 py-3 text-xs font-extrabold text-white transition-all duration-300 hover:bg-[#b68b31] sm:w-auto sm:min-w-[220px]"
              >
                Explore Gold Division
                <span className="text-base">↗</span>
              </Link>
            </div>
          </div>

          {/* Pharma Division */}
          <div className="group relative overflow-hidden rounded-2xl border border-[#d8ebe2] bg-white shadow-[0_8px_35px_rgba(9,28,48,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(9,28,48,0.10)]">
            {/* Top accent */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#006b46] via-[#20aa79] to-[#00875a]" />

            <div className="p-6 sm:p-8 lg:p-9">
              {/* Division heading */}
              <div className="mb-8 flex items-center gap-4">
                <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-xl bg-[#eaf7f1] text-3xl text-[#00875a]">
                  ✚
                </div>

                <div>
                  <span className="text-[9px] font-extrabold tracking-[0.2em] text-[#00875a]">
                    DIVISION 02
                  </span>
                  <h3 className="mt-1 font-['Manrope'] text-xl font-extrabold text-[#102b46] sm:text-2xl">
                    Pharmaceutical & Healthcare
                  </h3>
                </div>
              </div>

              {/* Pharma products */}
              <div className="space-y-3">
                {pharmaProducts.map((product, index) => (
                  <div
                    key={product.title}
                    className="group/item flex gap-4 rounded-xl border border-[#e5f0ea] bg-[#fbfefc] p-4 transition-all duration-200 hover:border-[#8bc9aa] hover:bg-[#eaf7f1]/70"
                  >
                    <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-[#eaf7f1] font-['Manrope'] text-sm font-extrabold text-[#00875a] transition-colors group-hover/item:bg-[#00875a] group-hover/item:text-white">
                      {product.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <span className="text-[9px] font-bold text-[#00875a]">
                          0{index + 1}
                        </span>
                        <h4 className="text-sm font-bold text-[#102b46] sm:text-[15px]">
                          {product.title}
                        </h4>
                      </div>

                      <p className="text-xs leading-relaxed text-[#718096]">
                        {product.description}
                      </p>
                    </div>

                    <span className="self-center text-lg text-[#00875a] opacity-0 transition-all group-hover/item:translate-x-1 group-hover/item:opacity-100">
                      →
                    </span>
                  </div>
                ))}
              </div>

              {/* Pharma link */}
              <Link
                href="/pharmaceuticals"
                className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#00875a] px-5 py-3 text-xs font-extrabold text-white transition-all duration-300 hover:bg-[#006b46] sm:w-auto sm:min-w-[220px]"
              >
                Explore Pharma Division
                <span className="text-base">↗</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom information banner */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[#e7ecf1] bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            <div className="max-w-2xl">
              <span className="text-[10px] font-extrabold tracking-[0.18em] text-[#00875a]">
                BUSINESS ENQUIRIES
              </span>

              <h3 className="mt-2 font-['Manrope'] text-lg font-extrabold text-[#102b46] sm:text-xl">
                Looking for a specific product?
              </h3>

              <p className="mt-2 text-xs leading-6 text-[#718096] sm:text-sm">
                Contact our team with your product specifications, quantity
                and destination market to discuss sourcing and trade
                requirements.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-12 w-full flex-shrink-0 items-center justify-center gap-2 rounded-lg bg-[#102b46] px-7 py-3 text-xs font-bold text-white transition-all hover:bg-[#00875a] sm:w-auto"
            >
              Contact Our Team
              <span className="text-base">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
