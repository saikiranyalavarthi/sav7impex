
const steps = [
  {
    number: "01",
    title: "Business Enquiry",
    description:
      "Share your product requirements, quantity, destination country and import or export needs.",
    icon: "📩",
    color: "gold",
    label: "INITIAL DISCUSSION",
  },
  {
    number: "02",
    title: "Product Sourcing",
    description:
      "Identify suitable suppliers, manufacturers and products across our gold and pharmaceutical divisions.",
    icon: "🔍",
    color: "green",
    label: "SOURCE IDENTIFICATION",
  },
  {
    number: "03",
    title: "Verification & Documentation",
    description:
      "Coordinate product specifications, commercial documents and applicable regulatory requirements.",
    icon: "📋",
    color: "blue",
    label: "DOCUMENTATION",
  },
  {
    number: "04",
    title: "Global Trade Execution",
    description:
      "Coordinate order confirmation, shipping, logistics and delivery documentation.",
    icon: "🌍",
    color: "gold",
    label: "TRADE COORDINATION",
  },
];

export default function TradeProcess() {
  return (
    <section
      id="trade-process"
      className="relative overflow-hidden bg-[#f7f9fb] px-5 py-20 sm:px-8 lg:px-[7%] lg:py-28"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#00875a]/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#b68b31]/[0.06] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1350px]">

        {/* SECTION HEADING */}
        <div className="mx-auto mb-16 max-w-[760px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#00875a]/15 bg-[#eaf7f1] px-4 py-2 text-[10px] font-extrabold tracking-[2px] text-[#00875a]">
            <span className="h-2 w-2 rounded-full bg-[#00875a]" />
            OUR TRADE PROCESS
          </span>

          <h2 className="mt-6 font-[Manrope] text-3xl font-extrabold leading-tight tracking-tight text-[#102b46] sm:text-4xl lg:text-[48px]">
            From Business Enquiry
            <br className="hidden sm:block" />
            <span className="text-[#00875a]"> To Global Trade.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-sm leading-8 text-[#718096] sm:text-[15px]">
            A structured approach to import and export coordination
            across gold, precious metals, pharmaceuticals and healthcare.
          </p>
        </div>

        {/* PROCESS CARDS */}
        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {/* CONNECTING LINE - DESKTOP */}
          <div className="absolute left-[12%] right-[12%] top-[49px] hidden h-px border-t-2 border-dashed border-[#d8e1e8] xl:block" />

          {steps.map((step, index) => {
            const isGreen = step.color === "green";
            const isBlue = step.color === "blue";

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
                key={step.number}
                className="group relative rounded-xl border border-[#e7ecf1] bg-white p-7 shadow-[0_8px_30px_rgba(16,43,70,0.035)] transition-all duration-300 hover:-translate-y-2 hover:border-[#00875a]/30 hover:shadow-[0_20px_45px_rgba(16,43,70,0.09)] sm:p-8"
              >
                {/* CARD TOP */}
                <div className="relative z-10 mb-8 flex items-center justify-between">

                  {/* NUMBER */}
                  <div
                    className="flex h-[58px] w-[58px] items-center justify-center rounded-xl font-[Manrope] text-xl font-extrabold text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: accent }}
                  >
                    {step.number}
                  </div>

                  {/* ICON */}
                  <div
                    className={`flex h-[58px] w-[58px] items-center justify-center rounded-xl text-2xl transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 ${light}`}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* STEP LABEL */}
                <span
                  className="text-[9px] font-extrabold tracking-[1.7px]"
                  style={{ color: accent }}
                >
                  {step.label}
                </span>

                {/* TITLE */}
                <h3 className="mt-3 min-h-[54px] font-[Manrope] text-xl font-extrabold leading-snug text-[#102b46]">
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 min-h-[100px] text-[12px] leading-[1.9] text-[#718096] sm:text-[13px]">
                  {step.description}
                </p>

                {/* BOTTOM */}
                <div className="mt-7 flex items-center justify-between border-t border-[#e7ecf1] pt-5">
                  <span className="text-[9px] font-bold tracking-wider text-[#9aa8b7]">
                    SAV7 IMPEX
                  </span>

                  <span
                    className="text-xl transition-transform duration-300 group-hover:translate-x-2"
                    style={{ color: accent }}
                  >
                    →
                  </span>
                </div>

                {/* MOBILE/TABLET CONNECTOR */}
                {index !== steps.length - 1 && (
                  <div className="absolute -bottom-6 left-1/2 z-20 hidden h-6 w-px border-l-2 border-dashed border-[#cbd5df] sm:block xl:hidden" />
                )}
              </article>
            );
          })}
        </div>

        {/* BOTTOM INFORMATION */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-xl border border-[#e7ecf1] bg-white px-6 py-6 shadow-sm md:flex-row md:px-9">
          <div>
            <span className="text-[9px] font-extrabold tracking-[2px] text-[#00875a]">
              READY TO START?
            </span>
            <h3 className="mt-2 font-[Manrope] text-lg font-extrabold text-[#102b46] sm:text-xl">
              Let's Discuss Your Global Trade Requirements.
            </h3>
          </div>

          <a
            href="/contact"
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-3 rounded-md bg-[#102b46] px-7 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#00875a] sm:w-auto"
          >
            Start Business Enquiry
            <span className="text-[#d2ad5b]">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}
