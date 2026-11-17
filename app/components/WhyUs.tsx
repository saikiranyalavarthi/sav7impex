
const benefits = [
  {
    number: "01",
    title: "Diversified Business",
    description:
      "Two dedicated business divisions covering precious metals and pharmaceutical products.",
    icon: "◈",
    label: "TWO BUSINESS DIVISIONS",
    color: "gold",
  },
  {
    number: "02",
    title: "Global Trade Focus",
    description:
      "Domestic and international sourcing, import and export opportunities.",
    icon: "🌍",
    label: "INTERNATIONAL TRADE",
    color: "green",
  },
  {
    number: "03",
    title: "Business Partnerships",
    description:
      "Building transparent, professional relationships with suppliers and buyers.",
    icon: "🤝",
    label: "STRONG PARTNERSHIPS",
    color: "blue",
  },
  {
    number: "04",
    title: "Responsible Operations",
    description:
      "Trade coordination with applicable licensing, documentation and regulatory requirements.",
    icon: "✓",
    label: "RESPONSIBLE TRADE",
    color: "gold",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-[7%] lg:py-28"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#00875a]/[0.035] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#b68b31]/[0.05] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1350px]">

        {/* SECTION HEADING */}
        <div className="mx-auto mb-16 max-w-[760px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#00875a]/15 bg-[#eaf7f1] px-4 py-2 text-[10px] font-extrabold tracking-[2px] text-[#00875a]">
            <span className="h-2 w-2 rounded-full bg-[#00875a]" />
            WHY SAV7 IMPEX
          </span>

          <h2 className="mt-6 font-[Manrope] text-3xl font-extrabold leading-tight tracking-tight text-[#102b46] sm:text-4xl lg:text-[46px]">
            Building Trusted
            <span className="block text-[#00875a]">
              Global Business Relationships
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-sm leading-8 text-[#718096] sm:text-[15px]">
            A diversified approach to international trade with a focus
            on transparent business communication and responsible operations.
          </p>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => {
            const isGreen = benefit.color === "green";
            const isBlue = benefit.color === "blue";

            const accent = isGreen
              ? "#00875a"
              : isBlue
              ? "#287caa"
              : "#b68b31";

            const light = isGreen
              ? "bg-[#eaf7f1]"
              : isBlue
              ? "bg-[#edf5fa]"
              : "bg-[#fbf5e9]";

            return (
              <article
                key={benefit.number}
                className="group relative overflow-hidden rounded-xl border border-[#e7ecf1] bg-white p-7 shadow-[0_8px_30px_rgba(16,43,70,0.035)] transition-all duration-300 hover:-translate-y-2 hover:border-[#00875a]/30 hover:shadow-[0_20px_45px_rgba(16,43,70,0.09)] sm:p-8"
              >
                {/* TOP LINE */}
                <div
                  className="absolute left-0 top-0 h-[3px] w-0 transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: accent }}
                />

                {/* NUMBER AND ICON */}
                <div className="mb-9 flex items-center justify-between">
                  <span
                    className="font-[Manrope] text-4xl font-extrabold tracking-tight transition-colors duration-300"
                    style={{ color: `${accent}35` }}
                  >
                    {benefit.number}
                  </span>

                  <span
                    className={`flex h-[58px] w-[58px] items-center justify-center rounded-xl text-2xl transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 ${light}`}
                    style={{ color: accent }}
                  >
                    {benefit.icon}
                  </span>
                </div>

                {/* LABEL */}
                <span
                  className="text-[9px] font-extrabold tracking-[1.6px]"
                  style={{ color: accent }}
                >
                  {benefit.label}
                </span>

                {/* TITLE */}
                <h3 className="mt-3 min-h-[52px] font-[Manrope] text-lg font-extrabold leading-snug text-[#102b46] transition-colors duration-300 group-hover:text-[#00875a]">
                  {benefit.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 min-h-[105px] text-[12px] leading-[1.9] text-[#718096] sm:text-[13px]">
                  {benefit.description}
                </p>

                {/* BOTTOM */}
                <div className="mt-6 flex items-center justify-between border-t border-[#e7ecf1] pt-5">
                  <span className="text-[9px] font-bold tracking-wider text-[#9aa8b7]">
                    SAV7 IMPEX
                  </span>

                  <span
                    className="text-lg transition-transform duration-300 group-hover:translate-x-2"
                    style={{ color: accent }}
                  >
                    →
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM BUSINESS DIVISIONS */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">

          <div className="flex items-center gap-5 rounded-xl border border-[#b68b31]/20 bg-[#fbf5e9] p-6 sm:p-7">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white text-2xl text-[#b68b31] shadow-sm">
              ◈
            </div>

            <div>
              <span className="text-[9px] font-extrabold tracking-[1.5px] text-[#b68b31]">
                BUSINESS DIVISION 01
              </span>
              <h3 className="mt-1 font-[Manrope] text-base font-extrabold text-[#102b46]">
                Gold & Precious Metals
              </h3>
              <p className="mt-1 text-[11px] text-[#718096]">
                Gold, silver and precious metals trading.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 rounded-xl border border-[#00875a]/20 bg-[#eaf7f1] p-6 sm:p-7">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white text-2xl text-[#00875a] shadow-sm">
              ✚
            </div>

            <div>
              <span className="text-[9px] font-extrabold tracking-[1.5px] text-[#00875a]">
                BUSINESS DIVISION 02
              </span>
              <h3 className="mt-1 font-[Manrope] text-base font-extrabold text-[#102b46]">
                Pharmaceuticals & Healthcare
              </h3>
              <p className="mt-1 text-[11px] text-[#718096]">
                Pharmaceutical products and healthcare supplies.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
