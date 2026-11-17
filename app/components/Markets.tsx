import Link from "next/link";

const markets = [
  {
    icon: "🌏",
    title: "Asia Pacific",
    subtitle: "Middle East · Southeast Asia · South Asia",
    description:
      "Southeast Asia, Middle East, Central Asia and South Asia with established pharma and gold distribution channels.",
    stat: "15+",
    label: "COUNTRIES ACTIVE",
    countries: ["UAE", "Saudi Arabia", "Oman", "Singapore", "Malaysia", "Vietnam", "Bangladesh"],
    accent: "green" as const,
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: "🌍",
    title: "Africa",
    subtitle: "East · West · Southern Africa",
    description:
      "Government health programmes, private hospitals and bullion dealers across East, West and Southern Africa.",
    stat: "18+",
    label: "COUNTRIES ACTIVE",
    countries: ["Kenya", "Nigeria", "Uganda", "Tanzania", "Zambia", "Ghana", "South Africa"],
    accent: "gold" as const,
    image:
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: "🌎",
    title: "Latin America",
    subtitle: "Central · South America",
    description:
      "Pharma distributors and precious metal buyers across Central and South America — from Mexico to Chile.",
    stat: "8+",
    label: "COUNTRIES ACTIVE",
    countries: ["Mexico", "Brazil", "Colombia", "Argentina", "Peru", "Chile"],
    accent: "green" as const,
    image:
      "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: "🌐",
    title: "Europe & CIS",
    subtitle: "Eastern Europe · CIS Region",
    description:
      "EU-licensed pharmacies and LBMA-aligned bullion banks in CIS and Eastern Europe with growing demand.",
    stat: "10+",
    label: "COUNTRIES ACTIVE",
    countries: ["Netherlands", "Switzerland", "Turkey", "Poland", "Romania", "Czech Republic"],
    accent: "gold" as const,
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
  },
];

const globalStats = [
  { value: "40+", label: "COUNTRIES", icon: "🌍" },
  { value: "4", label: "CONTINENTS", icon: "🗺️" },
  { value: "500+", label: "PARTNERS", icon: "🤝" },
  { value: "15+", label: "YEARS", icon: "⏳" },
];

export default function Markets() {
  return (
    <section
      id="markets"
      className="relative overflow-hidden bg-white px-[7%] py-16 md:py-20 lg:py-24"
    >
      {/* Background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-[#00875a]/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#b68b31]/5 blur-3xl"
      />

      <div className="relative">
        {/* ═══════════ SECTION HEADING ═══════════ */}
        <div className="mx-auto mb-12 max-w-[740px] text-center md:mb-16">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#eaf7f1] px-3.5 py-1.5 text-[10px] font-extrabold tracking-widest text-[#00875a]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00875a]" />
            GLOBAL MARKET PRESENCE
          </span>
          <h2 className="font-['Manrope'] text-3xl font-extrabold leading-tight tracking-tight text-[#102b46] sm:text-4xl lg:text-[42px]">
            Where We <span className="text-[#00875a]">Trade</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-sm leading-relaxed text-[#718096] md:text-[15px]">
            Serving buyers, distributors, hospitals and governments across 40+
            countries in four continents.
          </p>
        </div>

        {/* ═══════════ GLOBAL STATS STRIP ═══════════ */}
        <div className="mx-auto mb-12 max-w-[1250px]">
          <div className="grid grid-cols-2 gap-3 rounded-xl border border-[#e7ecf1] bg-[#f7f9fb] p-5 sm:grid-cols-4 sm:gap-4 sm:p-6">
            {globalStats.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm"
              >
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-lg bg-[#eaf7f1] text-lg">
                  {s.icon}
                </span>
                <div>
                  <strong className="block font-['Manrope'] text-xl font-extrabold leading-none text-[#102b46] sm:text-2xl">
                    {s.value}
                  </strong>
                  <span className="mt-1 block text-[9px] font-extrabold tracking-wider text-[#718096]">
                    {s.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════ MARKETS GRID ═══════════ */}
        <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-6 md:grid-cols-2">
          {markets.map((m) => {
            const isGold = m.accent === "gold";
            const accentText = isGold ? "text-[#b68b31]" : "text-[#00875a]";
            const accentBg = isGold ? "bg-[#fbf5e9]" : "bg-[#eaf7f1]";
            const accentBorder = isGold ? "border-t-[#b68b31]" : "border-t-[#00875a]";
            const tagBg = isGold ? "bg-[#fbf5e9]" : "bg-[#eaf7f1]";
            const tagText = isGold ? "text-[#b68b31]" : "text-[#00875a]";

            return (
              <article
                key={m.title}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[#e7ecf1] border-t-[4px] ${accentBorder} bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#091c30]/10`}
              >
                {/* ─── IMAGE BAND ─── */}
                <div
                  className="relative h-[140px] bg-cover bg-center sm:h-[160px]"
                  style={{
                    backgroundImage: `linear-gradient(0deg, rgba(9,28,48,0.7), rgba(9,28,48,0.15) 70%), url("${m.image}")`,
                  }}
                >
                  <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between gap-3">
                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <span className="text-2xl">{m.icon}</span>
                        <h3 className="font-['Manrope'] text-xl font-bold text-white sm:text-2xl">
                          {m.title}
                        </h3>
                      </div>
                      <p className="text-[10px] font-semibold text-white/80">
                        {m.subtitle}
                      </p>
                    </div>
                    <div
                      className={`flex-shrink-0 rounded-lg ${accentBg} px-3 py-2 text-center shadow-md`}
                    >
                      <strong className={`block font-['Manrope'] text-lg font-extrabold leading-none ${accentText}`}>
                        {m.stat}
                      </strong>
                      <span className={`mt-0.5 block text-[8px] font-extrabold tracking-wide ${accentText}`}>
                        COUNTRIES
                      </span>
                    </div>
                  </div>
                </div>

                {/* ─── BODY ─── */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {/* Description */}
                  <p className="mb-4 text-[12.5px] leading-relaxed text-[#718096] sm:text-[13px]">
                    {m.description}
                  </p>

                  {/* Countries chips */}
                  <div className="mb-5">
                    <span className={`mb-2 block text-[9px] font-extrabold tracking-widest ${accentText}`}>
                      KEY MARKETS
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {m.countries.map((c) => (
                        <span
                          key={c}
                          className={`rounded ${tagBg} px-2.5 py-1 text-[10px] font-semibold ${tagText}`}
                        >
                          {c}
                        </span>
                      ))}
                      <span className="rounded border border-dashed border-[#e7ecf1] px-2.5 py-1 text-[10px] font-semibold text-[#718096]">
                        +{m.stat.replace("+", "")} more
                      </span>
                    </div>
                  </div>

                  {/* Status bar */}
                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#e7ecf1] pt-4">
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-extrabold tracking-wider ${accentText}`}>
                      <span className={`h-1.5 w-1.5 animate-pulse rounded-full ${isGold ? "bg-[#b68b31]" : "bg-[#00875a]"}`} />
                      ACTIVE · {m.label}
                    </span>
                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-1 text-[11px] font-extrabold text-[#102b46] transition hover:${accentText}`}
                    >
                      Enquire
                      <span className="transition-transform group-hover:translate-x-0.5">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ═══════════ BOTTOM CTA BANNER ═══════════ */}
        <div className="mx-auto mt-12 max-w-[1250px]">
          <div
            className="relative overflow-hidden rounded-2xl px-6 py-8 text-white sm:px-10 sm:py-10"
            style={{
              backgroundImage: `linear-gradient(115deg, rgba(9,28,48,0.96), rgba(16,43,70,0.92)), url("https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1500&q=80")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="max-w-xl text-center sm:text-left">
                <span className="mb-2 inline-block text-[9px] font-extrabold tracking-widest text-[#55d6a4]">
                  NOT SURE IF WE SERVE YOUR COUNTRY?
                </span>
                <h3 className="mb-2 font-['Manrope'] text-xl font-extrabold leading-tight sm:text-2xl">
                  We're adding new markets every quarter.
                </h3>
                <p className="text-xs leading-relaxed text-[#d0dbe5] sm:text-sm">
                  Share your country and requirement — our trade desk will confirm
                  availability within 24 hours.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex min-h-[48px] flex-shrink-0 items-center justify-center gap-2 rounded-md bg-white px-6 text-xs font-bold text-[#102b46] transition hover:-translate-y-0.5 hover:bg-[#00875a] hover:text-white"
              >
                Enquire About Your Country →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}