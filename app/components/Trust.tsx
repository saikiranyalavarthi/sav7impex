
const complianceItems = [
  {
    number: "01",
    title: "Product Documentation",
    description:
      "Product-specific specifications and commercial documentation for relevant transactions.",
    icon: "📄",
    color: "gold",
  },
  {
    number: "02",
    title: "Import-Export Permissions",
    description:
      "Coordination of applicable permissions and requirements for international trade.",
    icon: "✓",
    color: "green",
  },
  {
    number: "03",
    title: "Regulatory & Customs",
    description:
      "Attention to relevant regulatory, customs and cross-border trade requirements.",
    icon: "⚖",
    color: "blue",
  },
  {
    number: "04",
    title: "Business Partners",
    description:
      "Working with suitable suppliers and business partners for trade coordination.",
    icon: "🤝",
    color: "green",
  },
];

export default function Trust() {
  return (
    <section
      id="compliance"
      className="relative isolate overflow-hidden bg-[#f7f9fb] px-5 py-20 sm:px-8 lg:px-[7%] lg:py-28"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#00875a]/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#b68b31]/[0.05] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1250px]">

        {/* HEADING */}
        <div className="mx-auto mb-14 max-w-[800px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#00875a]/15 bg-[#eaf7f1] px-4 py-2 text-[10px] font-extrabold tracking-[2px] text-[#00875a]">
            <span className="h-2 w-2 rounded-full bg-[#00875a]" />
            QUALITY & REGULATORY COMPLIANCE
          </span>

          <h2 className="mt-6 font-[Manrope] text-3xl font-extrabold leading-tight tracking-tight text-[#102b46] sm:text-4xl lg:text-[46px]">
            Responsible Trade.
            <span className="block text-[#00875a]">
              Appropriate Compliance.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[750px] text-sm leading-8 text-[#718096] sm:text-[15px]">
            Precious metals and pharmaceutical products are subject to
            different legal, licensing, customs and regulatory requirements.
            Every transaction must comply with applicable Indian laws and
            the destination or origin country's regulations.
          </p>
        </div>

        {/* COMPLIANCE CARDS */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {complianceItems.map((item) => {
            const accent =
              item.color === "gold"
                ? "#b68b31"
                : item.color === "blue"
                ? "#287caa"
                : "#00875a";

            const light =
              item.color === "gold"
                ? "bg-[#fbf5e9]"
                : item.color === "blue"
                ? "bg-[#edf5fa]"
                : "bg-[#eaf7f1]";

            return (
              <article
                key={item.number}
                className="group rounded-xl border border-[#e7ecf1] bg-white p-7 shadow-[0_8px_30px_rgba(16,43,70,0.035)] transition-all duration-300 hover:-translate-y-2 hover:border-[#00875a]/30 hover:shadow-[0_20px_40px_rgba(16,43,70,0.08)] sm:p-8"
              >
                <div className="mb-7 flex items-center justify-between">
                  <span
                    className="font-[Manrope] text-3xl font-extrabold"
                    style={{ color: `${accent}50` }}
                  >
                    {item.number}
                  </span>

                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-xl text-2xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 ${light}`}
                    style={{ color: accent }}
                  >
                    {item.icon}
                  </span>
                </div>

                <div
                  className="mb-3 h-[3px] w-10 rounded-full transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: accent }}
                />

                <h3 className="font-[Manrope] text-base font-extrabold leading-snug text-[#102b46]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[12px] leading-[1.9] text-[#718096] sm:text-[13px]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* IMPORTANT COMPLIANCE NOTICE */}
        <div className="mt-10 overflow-hidden rounded-xl border border-[#b68b31]/20 bg-white shadow-sm">
          <div className="flex flex-col gap-5 p-6 sm:p-8 md:flex-row md:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#fbf5e9] text-2xl text-[#b68b31]">
              !
            </div>

            <div>
              <span className="text-[9px] font-extrabold tracking-[2px] text-[#b68b31]">
                IMPORTANT INFORMATION
              </span>

              <h3 className="mt-2 font-[Manrope] text-lg font-extrabold text-[#102b46]">
                Compliance Depends on Each Transaction
              </h3>

              <p className="mt-3 text-[12px] leading-7 text-[#718096] sm:text-[13px]">
                Certifications and regulatory approvals are subject to actual
                company and product documentation. Applicable requirements
                may vary depending on the product, transaction and countries
                involved.
              </p>
            </div>
          </div>

          <div className="h-1 w-full bg-gradient-to-r from-[#b68b31] via-[#00875a] to-[#102b46]" />
        </div>

      </div>
    </section>
  );
}
