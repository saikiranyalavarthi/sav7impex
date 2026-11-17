
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Global Markets | International Trade Markets | SAV7 IMPEX",
  description:
    "Explore SAV7 IMPEX international trade markets across Asia Pacific, Africa, Latin America, Europe and CIS. Enquire about gold, silver, precious metals, pharmaceutical and healthcare product opportunities.",
  alternates: {
    canonical: "https://www.sav7impex.in/markets",
  },
  openGraph: {
    title: "Global Markets | SAV7 IMPEX PRIVATE LIMITED",
    description:
      "Explore potential international markets and trade opportunities for precious metals, pharmaceuticals and healthcare products.",
    url: "https://www.sav7impex.in/markets",
    siteName: "SAV7 IMPEX PRIVATE LIMITED",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "SAV7 IMPEX Global Markets",
  url: "https://www.sav7impex.in/markets",
  description:
    "International market information for precious metals, pharmaceuticals and healthcare product enquiries.",
  about: {
    "@type": "Organization",
    name: "SAV7 IMPEX PRIVATE LIMITED",
    url: "https://www.sav7impex.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
  },
};

const regions = [
  {
    icon: "🌏",
    name: "Asia Pacific",
    tagline: "Middle East · Southeast Asia · South Asia · Central Asia",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=85",
    description:
      "Explore potential trade opportunities across the Middle East, Southeast Asia, South Asia and Central Asia. These markets offer diverse commercial requirements across precious metals, pharmaceuticals and healthcare.",
    highlights: [
      "Gold and silver product enquiries",
      "Precious metals sourcing opportunities",
      "Generic medicines and formulations",
      "API and healthcare product enquiries",
    ],
    gold: ["UAE", "Saudi Arabia", "Oman", "Qatar", "Kuwait"],
    pharma: [
      "Singapore",
      "Malaysia",
      "Vietnam",
      "Philippines",
      "Bangladesh",
    ],
    color: "gold",
  },
  {
    icon: "🌍",
    name: "Africa",
    tagline: "East Africa · West Africa · Southern Africa · North Africa",
    image:
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1200&q=85",
    description:
      "Africa represents an important potential market for international pharmaceutical, healthcare and precious metals trade. Product enquiries can be evaluated according to the requirements of individual countries.",
    highlights: [
      "Generic medicine enquiries",
      "Healthcare and medical supply categories",
      "Anti-infective and therapeutic segments",
      "Gold and precious metals opportunities",
    ],
    gold: ["South Africa", "Ghana", "Kenya", "Tanzania", "Nigeria"],
    pharma: ["Kenya", "Nigeria", "Uganda", "Tanzania", "Zambia"],
    color: "green",
  },
  {
    icon: "🌎",
    name: "Latin America",
    tagline: "Central America · South America · Caribbean",
    image:
      "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1200&q=85",
    description:
      "Latin America offers potential opportunities for pharmaceutical distribution, healthcare product sourcing and precious metals enquiries. Every proposed transaction is subject to market-specific requirements.",
    highlights: [
      "Generic medicine categories",
      "API and formulation enquiries",
      "Gold and silver product enquiries",
      "Healthcare product opportunities",
    ],
    gold: ["Mexico", "Brazil", "Peru", "Chile"],
    pharma: ["Mexico", "Colombia", "Brazil", "Argentina"],
    color: "gold",
  },
  {
    icon: "🌐",
    name: "Europe & CIS",
    tagline: "Western Europe · Eastern Europe · CIS Region",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=85",
    description:
      "European and CIS markets have distinct requirements for precious metals and pharmaceutical trade. Product enquiries are evaluated with consideration for relevant import regulations and commercial conditions.",
    highlights: [
      "Gold and silver product enquiries",
      "Precious metals trade opportunities",
      "API and pharmaceutical enquiries",
      "Product-specific regulatory assessment",
    ],
    gold: ["Netherlands", "Switzerland", "Turkey", "Russia"],
    pharma: ["Poland", "Romania", "Czech Republic", "Turkey"],
    color: "green",
  },
];

const corridors = [
  {
    from: "India",
    to: "Middle East",
    countries: "UAE · Saudi Arabia · Oman",
    products: "Gold, Silver & Pharmaceutical Enquiries",
    image:
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=85",
    accent: "gold",
  },
  {
    from: "India",
    to: "Africa",
    countries: "Kenya · Nigeria · Uganda",
    products: "Generic Medicines & Healthcare Categories",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=85",
    accent: "green",
  },
  {
    from: "India",
    to: "Southeast Asia",
    countries: "Singapore · Malaysia · Vietnam",
    products: "APIs · Formulations · Precious Metals",
    image:
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=800&q=85",
    accent: "gold",
  },
  {
    from: "India",
    to: "Latin America",
    countries: "Mexico · Brazil · Colombia",
    products: "Generic Medicines & Healthcare",
    image:
      "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=85",
    accent: "green",
  },
  {
    from: "India",
    to: "Europe & CIS",
    countries: "Netherlands · Turkey · Poland",
    products: "Gold · Silver · Pharmaceutical APIs",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=85",
    accent: "gold",
  },
];

const whyMarkets = [
  {
    number: "01",
    title: "Diversified Product Categories",
    description:
      "Two business divisions covering precious metals and pharmaceutical and healthcare product categories.",
  },
  {
    number: "02",
    title: "Market-Specific Enquiries",
    description:
      "Product discussions can be evaluated according to the destination country and buyer requirements.",
  },
  {
    number: "03",
    title: "Documentation Awareness",
    description:
      "Consider product-specific documentation, customs procedures and regulatory requirements.",
  },
  {
    number: "04",
    title: "Business Communication",
    description:
      "A direct enquiry process for discussing product specifications, quantities and commercial terms.",
  },
];

const faqs = [
  {
    question: "Which international markets does SAV7 IMPEX focus on?",
    answer:
      "SAV7 IMPEX identifies potential business markets across Asia Pacific, Africa, Latin America, Europe and CIS. Specific country enquiries are evaluated based on product availability, applicable regulations and transaction requirements. The countries listed on this page are potential market destinations, not a confirmed list of active export operations.",
  },
  {
    question: "What products can I enquire about for international trade?",
    answer:
      "You can enquire about gold bullion, gold doré, silver, platinum, palladium, generic medicines, APIs, finished formulations, nutraceuticals and healthcare product categories. Specific products are subject to sourcing availability and applicable legal requirements.",
  },
  {
    question: "Does SAV7 IMPEX accept enquiries from African countries?",
    answer:
      "You can submit enquiries from African countries including Kenya, Nigeria, Uganda, Tanzania, Ghana, Zambia and South Africa. Product eligibility, registrations and import requirements must be evaluated for the destination country.",
  },
  {
    question: "Can I enquire about Middle East markets?",
    answer:
      "Yes. You can submit product enquiries for potential markets such as the UAE, Saudi Arabia, Oman, Qatar and Kuwait. Commercial feasibility and applicable trade requirements are assessed individually.",
  },
  {
    question: "Do you consider Latin American markets?",
    answer:
      "Enquiries from Mexico, Brazil, Colombia, Argentina, Peru, Chile and other Latin American markets can be submitted. Pharmaceutical and precious metals transactions are subject to destination-specific regulations and commercial assessment.",
  },
  {
    question: "Can I enquire about European and CIS markets?",
    answer:
      "Yes. You can submit enquiries for markets including the Netherlands, Switzerland, Turkey, Poland, Romania and other relevant destinations. Product eligibility and regulatory requirements must be reviewed before proceeding.",
  },
  {
    question: "How are international trade requirements assessed?",
    answer:
      "Requirements depend on the product and destination. They may include import permissions, product registrations, customs documentation, product specifications, applicable duties and other regulatory conditions. The relevant requirements should be verified before a transaction is confirmed.",
  },
  {
    question: "How can I check whether my country is a suitable destination?",
    answer:
      "Send your destination country, product category, quantity and specifications through the contact page or WhatsApp. SAV7 IMPEX can review the enquiry and discuss the next steps, subject to sourcing and regulatory feasibility.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <span className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#A77D28]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
        {eyebrow}
      </span>

      <h2 className="text-3xl font-extrabold tracking-tight text-[#102B46] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-sm leading-8 text-slate-500 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default function MarketsPage() {
  return (
    <main className="overflow-hidden bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* BREADCRUMB */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-slate-100 bg-[#F7F9FB] px-5 py-4"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-3 text-xs font-semibold text-slate-400">
          <Link href="/" className="transition hover:text-[#A77D28]">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#102B46]">Our Markets</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative bg-[#091C30]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#C9A227]/20" />
          <div className="absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-[#C9A227]/20" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#00875A]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-3 rounded-full border border-[#C9A227]/30 bg-white/5 px-4 py-2 text-[10px] font-extrabold tracking-[0.2em] text-[#E1BD62]">
              <span className="h-2 w-2 rounded-full bg-[#C9A227]" />
              INTERNATIONAL TRADE MARKETS
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Connecting
              <span className="block text-[#D8B65B]">
                Global Markets.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-8 text-slate-300 sm:text-base">
              SAV7 IMPEX PRIVATE LIMITED explores international business
              opportunities across Asia Pacific, Africa, Latin America,
              Europe and CIS, with a diversified focus on gold, silver,
              precious metals, pharmaceuticals and healthcare products.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#regions"
                className="rounded-lg bg-[#C9A227] px-7 py-4 text-center text-sm font-extrabold text-[#102B46] transition hover:bg-[#E0BB50]"
              >
                Explore Global Regions →
              </Link>

              <Link
                href="/contact"
                className="rounded-lg border border-white/30 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-white hover:text-[#102B46]"
              >
                Enquire About Your Country
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold text-slate-300">
              <span>✦ Asia Pacific</span>
              <span>✦ Africa</span>
              <span>✦ Latin America</span>
              <span>✦ Europe & CIS</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl border border-[#C9A227]/20" />

            <div className="relative overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=85"
                alt="International global trade and business markets"
                className="h-[350px] w-full object-cover sm:h-[480px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071827]/90 via-[#071827]/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <span className="text-xs font-extrabold tracking-[0.2em] text-[#D8B65B]">
                  SAV7 IMPEX
                </span>

                <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                  International Trade Opportunities
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-200">
                  Precious Metals · Pharmaceuticals · Healthcare
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGION STRIP */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-4 px-5 py-7 text-[10px] font-extrabold tracking-[0.16em] text-[#102B46] sm:text-xs">
          <span>ASIA PACIFIC</span>
          <span className="text-[#C9A227]">✦</span>
          <span>AFRICA</span>
          <span className="text-[#C9A227]">✦</span>
          <span>LATIN AMERICA</span>
          <span className="text-[#00875A]">✦</span>
          <span>EUROPE</span>
          <span className="text-[#00875A]">✦</span>
          <span>CIS</span>
        </div>
      </section>

      {/* GLOBAL REACH INTRO */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="OUR GLOBAL MARKET APPROACH"
            title="Exploring Opportunities Across Borders"
            description="Our market approach brings together two distinct business divisions and a range of international product enquiries. Each destination is evaluated according to product requirements, commercial feasibility and applicable regulations."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "🌏",
                title: "Regional Market Focus",
                text: "Explore business opportunities across Asia Pacific, Africa, Latin America, Europe and CIS.",
              },
              {
                icon: "◈",
                title: "Two Business Divisions",
                text: "Gold & Precious Metals and Pharmaceuticals & Healthcare product categories.",
              },
              {
                icon: "◎",
                title: "Country-Specific Assessment",
                text: "Evaluate destination requirements, product availability and relevant trade regulations.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FBF5E9] text-3xl">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-[#102B46]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGIONAL MARKETS */}
      <section
        id="regions"
        className="scroll-mt-24 bg-[#F7F9FB] px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="OUR INTERNATIONAL MARKETS"
            title="Explore Our Key Regions"
            description="Discover potential market destinations and product categories across major international regions."
          />

          <div className="space-y-8">
            {regions.map((region, index) => {
              const isGold = region.color === "gold";

              return (
                <article
                  key={region.name}
                  className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:grid-cols-2"
                >
                  {/* REGION IMAGE */}
                  <div
                    className={`relative min-h-[300px] overflow-hidden ${
                      index % 2 !== 0 ? "lg:order-2" : ""
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={region.image}
                      alt={`${region.name} international market`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071827]/90 via-[#071827]/15 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                      <span
                        className={`mb-4 inline-flex rounded-md px-3 py-2 text-[10px] font-extrabold tracking-widest text-white ${
                          isGold ? "bg-[#A77D28]" : "bg-[#00875A]"
                        }`}
                      >
                        REGION 0{index + 1}
                      </span>

                      <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
                        {region.icon} {region.name}
                      </h3>

                      <p className="mt-3 text-xs font-semibold text-white/80">
                        {region.tagline}
                      </p>
                    </div>
                  </div>

                  {/* REGION CONTENT */}
                  <div className="p-7 sm:p-9 lg:p-10">
                    <span
                      className={`text-[10px] font-extrabold tracking-[0.18em] ${
                        isGold ? "text-[#A77D28]" : "text-[#00875A]"
                      }`}
                    >
                      INTERNATIONAL MARKET OVERVIEW
                    </span>

                    <p className="mt-4 text-sm leading-8 text-slate-500">
                      {region.description}
                    </p>

                    <div className="mt-7">
                      <h4 className="text-xs font-extrabold tracking-widest text-[#102B46]">
                        PRODUCT OPPORTUNITIES
                      </h4>

                      <ul className="mt-4 space-y-3">
                        {region.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                          >
                            <span
                              className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-extrabold text-white ${
                                isGold ? "bg-[#A77D28]" : "bg-[#00875A]"
                              }`}
                            >
                              ✓
                            </span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 grid gap-5 border-t border-slate-100 pt-7 sm:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-[10px] font-extrabold tracking-widest text-[#A77D28]">
                          🥇 GOLD & PRECIOUS METALS
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {region.gold.map((country) => (
                            <span
                              key={country}
                              className="rounded-md bg-[#FBF5E9] px-3 py-2 text-[10px] font-semibold text-[#98701E]"
                            >
                              {country}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-3 text-[10px] font-extrabold tracking-widest text-[#00875A]">
                          💊 PHARMACEUTICALS
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {region.pharma.map((country) => (
                            <span
                              key={country}
                              className="rounded-md bg-[#EAF7F1] px-3 py-2 text-[10px] font-semibold text-[#00875A]"
                            >
                              {country}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/contact?region=${encodeURIComponent(region.name)}`}
                      className={`mt-8 inline-flex items-center gap-2 text-sm font-extrabold transition hover:gap-4 ${
                        isGold ? "text-[#A77D28]" : "text-[#00875A]"
                      }`}
                    >
                      Enquire About {region.name}
                      <span>→</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-8 text-center text-xs leading-6 text-slate-400">
            Country names indicate potential enquiry destinations and are not
            a representation of confirmed exports, active customers or
            established local operations.
          </p>
        </div>
      </section>

      {/* TRADE CORRIDORS */}
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="INTERNATIONAL TRADE ROUTES"
            title="India to Global Markets"
            description="Explore potential trade corridors connecting India with international destinations across precious metals, pharmaceuticals and healthcare."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {corridors.map((corridor) => {
              const isGold = corridor.accent === "gold";

              return (
                <article
                  key={corridor.to}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="grid sm:grid-cols-[180px_1fr]">
                    <div className="relative min-h-[190px] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={corridor.image}
                        alt={`${corridor.from} to ${corridor.to} trade opportunities`}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-6 sm:p-7">
                      <span
                        className={`text-[10px] font-extrabold tracking-widest ${
                          isGold ? "text-[#A77D28]" : "text-[#00875A]"
                        }`}
                      >
                        POTENTIAL TRADE CORRIDOR
                      </span>

                      <div className="mt-3 flex flex-wrap items-center gap-2 text-lg font-extrabold text-[#102B46]">
                        <span>{corridor.from}</span>
                        <span className="text-[#C9A227]">→</span>
                        <span>{corridor.to}</span>
                      </div>

                      <p className="mt-3 text-xs leading-6 text-slate-500">
                        {corridor.countries}
                      </p>

                      <div className="mt-5 border-t border-slate-100 pt-4">
                        <span className="text-[10px] font-extrabold tracking-widest text-[#102B46]">
                          PRODUCT CATEGORIES
                        </span>

                        <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">
                          {corridor.products}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-8 text-center text-xs leading-6 text-slate-400">
            The routes shown are illustrative potential trade corridors, not
            confirmed shipment routes or historical transaction volumes.
          </p>
        </div>
      </section>

      {/* WHY SAV7 */}
      <section className="bg-[#F7F9FB] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="OUR BUSINESS APPROACH"
            title="A Clear Approach to International Trade"
            description="We focus on understanding the product, the buyer's requirements and the destination market before discussing a potential transaction."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyMarkets.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-3xl font-black text-[#C9A227]/60">
                  {item.number}
                </span>

                <h3 className="mt-6 text-lg font-extrabold text-[#102B46]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-[#00875A]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL COMPLIANCE */}
      <section className="bg-[#091C30] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-extrabold tracking-[0.2em] text-[#D8B65B]">
              INTERNATIONAL TRADE CONSIDERATIONS
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Every Market Has
              <span className="block text-[#D8B65B]">
                Different Requirements.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-slate-300">
              International trade requirements vary by country and product
              category. Precious metals and pharmaceutical products can have
              specific import permissions, customs requirements, registrations
              and supporting documentation. These must be assessed for the
              relevant transaction before proceeding.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-lg bg-[#C9A227] px-7 py-4 text-sm font-extrabold text-[#102B46] transition hover:bg-[#E0BB50]"
            >
              Discuss Trade Requirements →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                number: "01",
                title: "Customs Requirements",
                text: "Review relevant customs procedures and documentation.",
              },
              {
                number: "02",
                title: "Product Eligibility",
                text: "Check whether the product can be imported into the destination market.",
              },
              {
                number: "03",
                title: "Regulatory Conditions",
                text: "Identify applicable product registrations, licences and permits.",
              },
              {
                number: "04",
                title: "Commercial Terms",
                text: "Review applicable duties, delivery terms and transaction requirements.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <span className="text-xs font-extrabold text-[#D8B65B]">
                  {item.number}
                </span>

                <h3 className="mt-4 font-extrabold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6">
          <p className="text-xs leading-7 text-slate-400">
            All transactions are subject to applicable laws, sanctions,
            customs rules, product-specific permissions and destination-country
            regulations. Regulatory or customs support should be confirmed
            separately for each transaction.
          </p>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <span className="text-xs font-extrabold tracking-[0.2em] text-[#A77D28]">
            SAV7 IMPEX INTERNATIONAL MARKETS
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#102B46] sm:text-4xl">
            Global Markets for Gold, Precious Metals and Pharmaceutical Trade
          </h2>

          <div className="mt-8 space-y-6 text-sm leading-8 text-slate-600">
            <p>
              SAV7 IMPEX PRIVATE LIMITED is an India-based business focused
              on two areas of international trade: Gold & Precious Metals
              and Pharmaceuticals & Healthcare. Its international market
              approach considers potential opportunities across Asia
              Pacific, Africa, Latin America, Europe and CIS. Buyers can
              submit enquiries relating to product specifications, quantities
              and destination requirements for commercial assessment.
            </p>

            <h3 className="pt-3 text-xl font-extrabold text-[#102B46]">
              Asia Pacific International Trade Markets
            </h3>

            <p>
              Asia Pacific includes a wide range of markets with different
              commercial and regulatory requirements. Potential enquiry
              destinations include the UAE, Saudi Arabia, Oman, Qatar,
              Kuwait, Singapore, Malaysia, Indonesia, Vietnam, the
              Philippines, Sri Lanka, Bangladesh, Nepal, Kazakhstan and
              Uzbekistan. Precious metals enquiries may include gold bullion,
              gold doré and silver products. Pharmaceutical enquiries may
              include generic medicines, APIs and finished formulations.
            </p>

            <p>
              Buyers interested in Middle East or Southeast Asian trade can
              share their product specifications and destination details.
              Product availability, import eligibility and transaction terms
              need to be confirmed individually.
            </p>

            <h3 className="pt-3 text-xl font-extrabold text-[#102B46]">
              Africa Pharmaceutical and Precious Metals Markets
            </h3>

            <p>
              African markets represent potential opportunities across
              healthcare distribution, pharmaceutical product sourcing and
              precious metals. Countries such as Kenya, Nigeria, Uganda,
              Tanzania, Ghana, Zambia and South Africa have different
              requirements for pharmaceutical imports and precious metals
              transactions.
            </p>

            <p>
              Pharmaceutical enquiries can cover generic medicines, APIs,
              finished formulations, healthcare products and relevant
              therapeutic categories. Precious metals enquiries may include
              gold, silver and other products depending on the transaction.
              Import permits, product registration, customs procedures and
              other country-specific conditions should be reviewed before
              confirming an order.
            </p>

            <h3 className="pt-3 text-xl font-extrabold text-[#102B46]">
              Latin America Trade Opportunities
            </h3>

            <p>
              Latin America includes potential market destinations such as
              Mexico, Brazil, Colombia, Argentina, Peru and Chile. Business
              enquiries can cover pharmaceutical products, healthcare
              categories, gold and silver. Buyers should identify their
              required product, applicable specifications and destination
              market when submitting an enquiry.
            </p>

            <p>
              Pharmaceutical imports may require local registrations,
              documentation and regulatory checks. Precious metals
              transactions also require attention to product origin,
              specifications, customs and applicable trade requirements.
            </p>

            <h3 className="pt-3 text-xl font-extrabold text-[#102B46]">
              Europe and CIS International Markets
            </h3>

            <p>
              Europe and CIS represent diverse markets for precious metals,
              pharmaceutical products and APIs. Potential enquiry
              destinations include the Netherlands, Switzerland, Turkey,
              Poland, Romania, Czech Republic and other relevant countries.
              Each country has its own requirements for importing products,
              completing customs procedures and meeting applicable
              regulations.
            </p>

            <p>
              Pharmaceutical product enquiries should consider destination
              market registrations, manufacturing documentation, product
              eligibility and labelling conditions. Precious metals enquiries
              should consider product specifications, origin and transaction
              documentation.
            </p>

            <h3 className="pt-3 text-xl font-extrabold text-[#102B46]">
              India to Global Import and Export Enquiries
            </h3>

            <p>
              India provides the starting point for SAV7 IMPEX business
              enquiries. Potential international trade corridors include
              India to the Middle East, India to Africa, India to Southeast
              Asia, India to Latin America and India to Europe and CIS.
              These corridors are illustrative market opportunities and do
              not imply that shipments have already been completed.
            </p>

            <p>
              Businesses can submit an enquiry by sharing their country,
              product category, quantity, specifications and preferred
              delivery requirements. This helps establish the commercial
              scope and identify relevant sourcing, documentation and
              regulatory considerations.
            </p>

            <h3 className="pt-3 text-xl font-extrabold text-[#102B46]">
              Contact SAV7 IMPEX for International Trade Enquiries
            </h3>

            <p>
              Whether you are enquiring about gold bullion, silver, precious
              metals, generic medicines, pharmaceutical APIs, finished
              formulations or healthcare products, contact SAV7 IMPEX to
              discuss your requirements. Share your destination country,
              product details and quantity so the enquiry can be assessed.
            </p>

            <p>
              Contact the team through{" "}
              <a
                href="https://wa.me/919290934388"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#00875A] hover:underline"
              >
                WhatsApp (+91 92909 34388)
              </a>{" "}
              or email{" "}
              <a
                href="mailto:sav7impex@gmail.com"
                className="font-bold text-[#00875A] hover:underline"
              >
                sav7impex@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7F9FB] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="GLOBAL MARKETS FAQ"
            title="Frequently Asked Questions"
            description="Learn more about international market enquiries and potential trade destinations."
          />

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-white p-6 transition open:border-[#C9A227]/40 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-extrabold text-[#102B46]">
                  {faq.question}

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F7F9FB] text-lg text-[#A77D28] transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#091C30] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs font-extrabold tracking-[0.2em] text-[#D8B65B]">
            INTERNATIONAL BUSINESS ENQUIRIES
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Looking for a Global
            <span className="block text-[#D8B65B]">
              Trade Opportunity?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-300">
            Tell us your destination country, product category and business
            requirements. Contact SAV7 IMPEX to discuss potential
            international trade opportunities.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-[#C9A227] px-8 py-4 text-sm font-extrabold text-[#102B46] transition hover:bg-[#E0BB50]"
            >
              Enquire About Your Country →
            </Link>

            <a
              href="https://wa.me/919290934388"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/30 px-8 py-4 text-sm font-extrabold text-white transition hover:bg-white hover:text-[#102B46]"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 text-xs text-slate-400 sm:flex-row sm:gap-8">
            <a
              href="mailto:sav7impex@gmail.com"
              className="transition hover:text-[#D8B65B]"
            >
              sav7impex@gmail.com
            </a>

            <span className="hidden sm:block">•</span>

            <a
              href="tel:+919290934388"
              className="transition hover:text-[#D8B65B]"
            >
              +91 92909 34388
            </a>

            <span className="hidden sm:block">•</span>

            <span>Hyderabad, Telangana, India</span>
          </div>
        </div>
      </section>
    </main>
  );
}
