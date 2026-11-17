import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About SAV7 IMPEX | Gold & Pharmaceutical Import Export Company India",
  description:
    "SAV7 IMPEX PRIVATE LIMITED — India-based gold, silver & pharmaceutical import export company. 15+ years experience, WHO-GMP certified pharma supplier, LBMA-aligned gold trader serving 40+ countries.",
  keywords: [
    "about SAV7 IMPEX", "gold import export company India", "pharmaceutical export company India",
    "WHO-GMP pharma supplier India", "LBMA aligned gold dealer", "gold bullion trader Hyderabad",
    "import export company Hyderabad", "pharma exporter India", "precious metals trader India",
  ],
  alternates: { canonical: "https://www.sav7impex.in/about" },
  openGraph: {
    title: "About SAV7 IMPEX | Trusted Gold & Pharma Import Export Partner",
    description: "15+ years of compliant gold and pharmaceutical import-export across 40+ countries.",
    url: "https://www.sav7impex.in/about",
    siteName: "SAV7 IMPEX PRIVATE LIMITED",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About SAV7 IMPEX PRIVATE LIMITED",
  url: "https://www.sav7impex.in/about",
  mainEntity: {
    "@type": "Organization",
    name: "SAV7 IMPEX PRIVATE LIMITED",
    foundingDate: "2009",
    url: "https://www.sav7impex.in",
    address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", addressCountry: "IN" },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-92909-34388",
      contactType: "sales",
      email: "sav7impex@gmail.com",
      areaServed: "Worldwide",
    },
  },
};

const values = [
  { icon: "🛡️", title: "Compliance First", text: "Every trade executed with full regulatory documentation — COA, COPP, GMP, free-sale certificates and customs declarations." },
  { icon: "🤝", title: "Transparency", text: "One clear quotation with full landed cost. No hidden fees, no surprises — ever." },
  { icon: "🌍", title: "Global Reach", text: "Certified suppliers and buyers across 40+ countries in four continents." },
  { icon: "⚡", title: "Speed & Reliability", text: "Firm quotations in 24 hours and on-time delivery backed by insured logistics." },
  { icon: "🔐", title: "Secure Handling", text: "Certified vault storage for gold bullion and GDP-compliant cold-chain for pharmaceuticals." },
  { icon: "🎯", title: "Long-Term Partnership", text: "We build repeat trade relationships with every partner — not one-time deals." },
];

const milestones = [
  { year: "2009", title: "Foundation", desc: "SAV7 IMPEX founded in Hyderabad as a precious metals trading house." },
  { year: "2013", title: "First Export", desc: "Expanded into international gold bullion exports to Middle East & Southeast Asia." },
  { year: "2016", title: "Pharma Division", desc: "Launched Pharmaceuticals Division with WHO-GMP certified medicine exports." },
  { year: "2019", title: "Global Expansion", desc: "Opened distribution across Africa, Latin America and CIS — 25+ countries." },
  { year: "2021", title: "Corporate Rebrand", desc: "Registered as SAV7 IMPEX PRIVATE LIMITED with ISO 9001:2015 QMS." },
  { year: "2024", title: "40+ Countries", desc: "Now serving 40+ countries with 500+ active trade partners worldwide." },
];

const certifications = [
  "IEC — Importer Exporter Code",
  "RCMC Registration",
  "GST Registered",
  "ISO 9001:2015 QMS",
  "WHO-GMP Certified Suppliers",
  "LBMA-Aligned Refineries",
  "GDP Compliant Logistics",
  "FEMA Compliant Gold Trading",
];

const faqs = [
  { q: "What does SAV7 IMPEX PRIVATE LIMITED do?", a: "SAV7 IMPEX is an India-based diversified import-export company with two divisions: Gold & Precious Metals (LBMA-aligned gold bullion, doré, silver) and Pharmaceuticals & Healthcare (WHO-GMP certified medicines, APIs, formulations). We serve 40+ countries with buyers, distributors, hospitals and refiners." },
  { q: "When was SAV7 IMPEX founded?", a: "Founded in 2009 in Hyderabad, India as a precious metals trading house. Expanded into international gold exports in 2013, launched pharmaceuticals in 2016, and now serves 500+ trade partners across 40+ countries." },
  { q: "Is SAV7 IMPEX a certified company?", a: "Yes. We hold IEC (Importer Exporter Code), RCMC registration, GST registration, and ISO 9001:2015 QMS. Our suppliers are WHO-GMP certified, refineries LBMA-aligned, and we use GDP-compliant logistics for pharma plus FEMA-compliant processes for gold." },
  { q: "Which countries does SAV7 IMPEX serve?", a: "40+ countries across Asia Pacific (UAE, Saudi Arabia, Oman, Singapore, Malaysia, Vietnam, Bangladesh, Sri Lanka, Nepal, Kazakhstan), Africa (Kenya, Nigeria, Uganda, Tanzania, Zambia, Ghana, South Africa), Latin America (Mexico, Brazil, Colombia, Argentina, Peru, Chile) and Europe & CIS (Netherlands, Switzerland, Turkey, Poland, Romania, Czech Republic, Russia)." },
  { q: "What makes SAV7 IMPEX different?", a: "Four things: (1) Compliance-first — full COA, COPP, GMP and free-sale documentation; (2) Certified supply chain — LBMA-aligned refineries & WHO-GMP pharma plants only; (3) Fully insured logistics — 100% coverage origin to destination; (4) Transparent pricing — one quotation with full landed cost, no hidden fees." },
  { q: "How do I start trading with SAV7 IMPEX?", a: "Contact our trade desk via WhatsApp (+91 92909 34388), email sav7impex@gmail.com, or the enquiry form on our Contact page. Share your requirement — product, quantity, destination, timeline — and receive a firm quotation within 24 hours." },
];

export default function AboutPage() {
  return (
    <main className="w-full overflow-hidden bg-white text-[#26384b]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ═══════════ BREADCRUMBS ═══════════ */}
      <div className="border-b border-[#e7ecf1] bg-[#f8fafb]">
        <ol className="mx-auto flex max-w-[1450px] flex-wrap items-center gap-2 px-[5%] py-3.5 text-[11px] text-[#718096]">
          <li><Link href="/" className="text-[#52677a] hover:text-[#00875a]">Home</Link></li>
          <li className="text-[#c3cdd8]">›</li>
          <li className="font-bold text-[#102b46]">About Us</li>
        </ol>
      </div>

      {/* ═══════════ PAGE HERO ═══════════ */}
      <section className="border-b border-[#e7ecf1] bg-gradient-to-br from-white via-[#f9fbff] to-white px-[7%] py-16 md:py-20">
        <div className="mx-auto grid max-w-[1450px] grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#eaf7f1] px-4 py-2 text-[10px] font-extrabold uppercase tracking-wider text-[#00875a]">
              <span className="h-2 w-2 rounded-full bg-[#00875a]" />
              About SAV7 IMPEX PRIVATE LIMITED
            </span>
            <h1 className="font-['Manrope'] text-3xl font-extrabold leading-[1.13] tracking-tight text-[#091c30] sm:text-4xl md:text-5xl">
              India-Based Global{" "}
              <span className="text-[#00875a]">Gold & Pharmaceutical</span>{" "}
              Import Export Company
            </h1>
            <p className="mt-5 max-w-[590px] text-[15px] leading-relaxed text-[#718096]">
              For over 15 years, SAV7 IMPEX PRIVATE LIMITED has connected certified
              manufacturers, refineries and buyers across 40+ countries — delivering
              compliant, insured and end-to-end cross-border trade solutions in gold
              bullion, silver, precious metals and WHO-GMP pharmaceuticals.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-[51px] items-center justify-center rounded-md bg-[#00875a] px-6 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#102b46]"
              >
                Talk to Our Trade Desk
              </Link>
              <Link
                href="/#divisions"
                className="inline-flex min-h-[51px] items-center justify-center rounded-md border border-[#e7ecf1] bg-white px-6 text-xs font-bold text-[#102b46] transition hover:border-[#00875a] hover:text-[#00875a]"
              >
                Explore Divisions
              </Link>
            </div>
          </div>
          <div
            className="relative h-[300px] rounded-xl bg-cover bg-center shadow-[0_25px_60px_-30px_rgba(9,28,48,0.35)] md:h-[440px]"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85")`,
            }}
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#091c30]/60 to-transparent" />
            <div className="absolute bottom-5 left-5 z-10 flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-lg">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-[#eaf7f1] text-xl text-[#00875a]">🏛️</span>
              <div>
                <strong className="block text-xs font-bold text-[#102b46]">Headquartered in Hyderabad</strong>
                <small className="mt-0.5 block text-[10px] text-[#718096]">Telangana, India · Est. 2009</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ STRIP ═══════════ */}
      <div className="flex flex-wrap items-center justify-center gap-4 bg-[#091c30] px-[5%] py-6 text-[10px] font-extrabold tracking-wider text-white">
        <span>40+ COUNTRIES</span><i className="text-base not-italic text-[#c9a45a]">✳</i>
        <span>500+ PARTNERS</span><i className="text-base not-italic text-[#c9a45a]">✳</i>
        <span>15+ YEARS</span><i className="text-base not-italic text-[#c9a45a]">✳</i>
        <span>2 SPECIALISED DIVISIONS</span>
      </div>

      {/* ═══════════ OUR STORY ═══════════ */}
      <section className="bg-white px-[7%] py-20 md:py-24">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div
            className="h-[300px] rounded-xl bg-cover bg-center shadow-[0_25px_60px_-32px_rgba(9,28,48,0.3)] md:h-[460px]"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1000&q=85")`,
            }}
          />
          <div>
            <span className="mb-3 inline-block text-[10px] font-extrabold tracking-widest text-[#00875a]">
              OUR STORY
            </span>
            <h2 className="font-['Manrope'] text-2xl font-extrabold leading-tight tracking-tight text-[#102b46] md:text-3xl lg:text-4xl">
              From Hyderabad to{" "}
              <span className="text-[#00875a]">40+ Countries</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#718096]">
              SAV7 IMPEX began in 2009 as a precious metals trading house serving
              domestic jewellers in Hyderabad. The vision was simple: build an
              import-export business on <strong className="text-[#102b46]">uncompromising
              compliance</strong>, transparent pricing and reliable delivery — even
              when the industry rarely offered any of these.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#718096]">
              Within four years we expanded into international gold bullion exports
              to the Middle East and Southeast Asia. In 2016, we launched our
              Pharmaceuticals Division bringing WHO-GMP certified medicines to
              emerging markets. In 2019, we crossed 25+ countries.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#718096]">
              Today, SAV7 IMPEX operates two specialised divisions serving{" "}
              <strong className="text-[#102b46]">40+ countries</strong> with over{" "}
              <strong className="text-[#102b46]">500 active trade partners</strong>.
              Every shipment is insured, every product certified, and every trade
              conducted with the same first principle: do it right, or don't do it
              at all.
            </p>
            <ul className="mt-5 space-y-2">
              {[
                "15+ years of proven cross-border trade experience",
                "Two specialised divisions — Gold and Pharmaceuticals",
                "500+ active trade partners across 40+ countries",
                "ISO 9001:2015 quality management certification",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[12.5px] font-semibold text-[#34485d]">
                  <span className="mt-0.5 text-[#00875a]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════ MISSION & VISION ═══════════ */}
      <section className="bg-[#f7f9fb] px-[7%] py-20 md:py-24">
        <div className="mx-auto mb-12 max-w-[740px] text-center">
          <span className="mb-3 inline-block text-[10px] font-extrabold tracking-widest text-[#00875a]">
            MISSION & VISION
          </span>
          <h2 className="font-['Manrope'] text-3xl font-extrabold tracking-tight text-[#102b46] md:text-4xl">
            What Drives SAV7 IMPEX
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#718096]">
            Our purpose and promise — the foundation of every trade we handle.
          </p>
        </div>
        <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-[#e7ecf1] bg-white p-8">
            <div className="mb-4 grid h-13 w-13 place-items-center rounded-lg bg-[#eaf7f1] text-2xl">🎯</div>
            <h3 className="mb-3 font-['Manrope'] text-lg font-bold text-[#102b46]">Our Mission</h3>
            <p className="text-[13px] leading-relaxed text-[#718096]">
              To make international trade in gold and pharmaceuticals simpler, safer
              and more transparent for buyers and suppliers across the world. We do
              this by combining certified sourcing, end-to-end compliance and fully
              insured logistics — so our partners can focus entirely on their
              business, not on customs or paperwork.
            </p>
          </div>
          <div className="rounded-lg border border-[#e7ecf1] bg-white p-8">
            <div className="mb-4 grid h-13 w-13 place-items-center rounded-lg bg-[#eaf7f1] text-2xl">🌟</div>
            <h3 className="mb-3 font-['Manrope'] text-lg font-bold text-[#102b46]">Our Vision</h3>
            <p className="text-[13px] leading-relaxed text-[#718096]">
              To become the most trusted India-based import-export partner for gold,
              silver and pharmaceutical products in emerging and developed markets —
              known not for the size of our shipments, but for the integrity of our
              trade. A company that buyers recommend to buyers, and suppliers return
              to year after year.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ CORE VALUES ═══════════ */}
      <section className="bg-white px-[7%] py-20 md:py-24">
        <div className="mx-auto mb-12 max-w-[740px] text-center">
          <span className="mb-3 inline-block text-[10px] font-extrabold tracking-widest text-[#00875a]">
            OUR CORE VALUES
          </span>
          <h2 className="font-['Manrope'] text-3xl font-extrabold tracking-tight text-[#102b46] md:text-4xl">
            Six Principles Behind Every Trade
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#718096]">
            Every quotation, every shipment, every relationship is governed by these
            six non-negotiable principles.
          </p>
        </div>
        <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-lg border border-[#e7ecf1] bg-white p-7 transition hover:-translate-y-1 hover:border-[#a8d5c1] hover:shadow-md"
            >
              <div className="mb-4 grid h-13 w-13 place-items-center rounded-lg bg-[#eaf7f1] text-2xl">{v.icon}</div>
              <h3 className="mb-2 font-['Manrope'] text-[15px] font-bold text-[#102b46]">{v.title}</h3>
              <p className="text-xs leading-relaxed text-[#718096]">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ TIMELINE ═══════════ */}
      <section className="bg-[#f7f9fb] px-[7%] py-20 md:py-24">
        <div className="mx-auto mb-12 max-w-[740px] text-center">
          <span className="mb-3 inline-block text-[10px] font-extrabold tracking-widest text-[#00875a]">
            OUR JOURNEY
          </span>
          <h2 className="font-['Manrope'] text-3xl font-extrabold tracking-tight text-[#102b46] md:text-4xl">
            15+ Years of Growth & Trust
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#718096]">
            From a Hyderabad precious metals trading house to a globally trusted
            import-export company.
          </p>
        </div>
        <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {milestones.map((m) => (
            <div
              key={m.year}
              className="rounded-md border-t-[3px] border-t-[#00875a] bg-white p-6"
            >
              <span className="font-['Manrope'] text-2xl font-extrabold text-[#00875a]">{m.year}</span>
              <h3 className="mb-2 mt-3 text-sm font-bold text-[#102b46]">{m.title}</h3>
              <p className="text-xs leading-relaxed text-[#718096]">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ DIVISIONS SNAPSHOT ═══════════ */}
      <section className="bg-[#f7f9fb] px-[7%] py-20 md:py-24">
        <div className="mx-auto mb-12 max-w-[740px] text-center">
          <span className="mb-3 inline-block text-[10px] font-extrabold tracking-widest text-[#00875a]">
            OUR TWO DIVISIONS
          </span>
          <h2 className="font-['Manrope'] text-3xl font-extrabold tracking-tight text-[#102b46] md:text-4xl">
            Two Specialised Business Divisions
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#718096]">
            Each division operates independently with dedicated compliance, sourcing
            and logistics teams.
          </p>
        </div>
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-6 md:grid-cols-2">
          {/* GOLD DIVISION CARD */}
          <div className="overflow-hidden rounded-xl border border-[#e7ecf1] bg-white transition hover:-translate-y-1 hover:shadow-lg">
            <div
              className="relative h-[240px] bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(9,28,48,0.55), transparent 70%), 
                url("https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1000&q=85")`,
              }}
            >
              <span className="absolute left-6 top-5 text-2xl font-extrabold text-white">01</span>
              <span className="absolute bottom-5 left-6 text-[10px] font-extrabold tracking-widest text-white">
                PRECIOUS METALS
              </span>
            </div>
            <div className="p-8">
              <span className="text-[9px] font-extrabold tracking-widest text-[#b68b31]">
                GOLD & PRECIOUS METALS
              </span>
              <h3 className="my-3 font-['Manrope'] text-2xl font-bold text-[#102b46]">
                Gold Import & Export
              </h3>
              <p className="text-[13px] leading-relaxed text-[#718096]">
                LBMA-aligned gold bullion, doré, silver and precious metals traded
                with certified refineries, insured logistics and secure vault
                storage across 40+ countries.
              </p>
              <Link
                href="/gold-import-export"
                className="mt-5 inline-block w-full border-t border-[#e7ecf1] pt-4 text-xs font-extrabold text-[#102b46] hover:text-[#b68b31]"
              >
                Explore Gold Division <span className="text-[#b68b31]">→</span>
              </Link>
            </div>
          </div>

          {/* PHARMA DIVISION CARD */}
          <div className="overflow-hidden rounded-xl border border-[#e7ecf1] bg-white transition hover:-translate-y-1 hover:shadow-lg">
            <div
              className="relative h-[240px] bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(9,28,48,0.55), transparent 70%), url("https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1400&q=85")`,
              }}
            >
              <span className="absolute left-6 top-5 text-2xl font-extrabold text-white">02</span>
              <span className="absolute bottom-5 left-6 text-[10px] font-extrabold tracking-widest text-white">
                HEALTHCARE
              </span>
            </div>
            <div className="p-8">
              <span className="text-[9px] font-extrabold tracking-widest text-[#00875a]">
                PHARMACEUTICALS & HEALTHCARE
              </span>
              <h3 className="my-3 font-['Manrope'] text-2xl font-bold text-[#102b46]">
                Pharmaceutical Export
              </h3>
              <p className="text-[13px] leading-relaxed text-[#718096]">
                WHO-GMP certified generic medicines, APIs, formulations and healthcare
                products exported with complete COA, COPP, GMP and free-sale
                documentation.
              </p>
              <Link
                href="/pharmaceuticals"
                className="mt-5 inline-block w-full border-t border-[#e7ecf1] pt-4 text-xs font-extrabold text-[#102b46] hover:text-[#00875a]"
              >
                Explore Pharma Division <span className="text-[#00875a]">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ COMPLIANCE ═══════════ */}
      <section className="bg-[#f7f9fb] px-[7%] py-20 md:py-24">
        <div className="mx-auto max-w-[900px] text-center">
          <span className="mb-3 inline-block text-[10px] font-extrabold tracking-widest text-[#00875a]">
            CERTIFICATIONS & COMPLIANCE
          </span>
          <h2 className="font-['Manrope'] text-3xl font-extrabold tracking-tight text-[#102b46] md:text-4xl">
            Fully Licensed. Fully Compliant.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#718096]">
            SAV7 IMPEX operates with all mandatory Indian and international trade
            licences required for gold and pharmaceutical import-export.
          </p>
          <div className="my-8 grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
            {certifications.map((c) => (
              <span
                key={c}
                className="rounded-md border border-[#e7ecf1] bg-white p-4 text-xs font-bold text-[#102b46]"
              >
                ✓ {c}
              </span>
            ))}
          </div>
          <small className="text-[10px] leading-relaxed text-[#718096]">
            Every shipment is accompanied by complete documentation — Certificate of
            Analysis (COA), COPP, GMP certificate, free-sale certificate, assay
            certificate for gold, and full customs declarations.
          </small>
        </div>
      </section>

      {/* ═══════════ WHY CHOOSE US ═══════════ */}
      <section className="bg-white px-[7%] py-20 md:py-24">
        <div className="mx-auto mb-12 max-w-[740px] text-center">
          <span className="mb-3 inline-block text-[10px] font-extrabold tracking-widest text-[#00875a]">
            WHY CHOOSE SAV7 IMPEX
          </span>
          <h2 className="font-['Manrope'] text-3xl font-extrabold tracking-tight text-[#102b46] md:text-4xl">
            Built on Trust. Backed by Compliance.
          </h2>
        </div>
        <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["I", "Certified Supply Chain", "Only LBMA-aligned refineries and WHO-GMP certified pharma plants in our network."],
            ["II", "End-to-End Compliance", "IEC, RCMC, GST, ISO 9001:2015 and GDP-compliant logistics on every trade."],
            ["III", "Insured Shipments", "100% air and sea freight insurance with full chain-of-custody tracking."],
            ["IV", "Transparent Pricing", "One clear quotation with full landed cost breakdown — no hidden fees."],
          ].map(([n, t, d]) => (
            <div
              key={n}
              className="rounded-lg border border-[#e7ecf1] bg-white p-6 transition hover:-translate-y-1 hover:border-[#a8d5c1]"
            >
              <span className="mb-4 block text-2xl font-extrabold text-[#b68b31]">{n}</span>
              <h3 className="mb-2 font-['Manrope'] text-[15px] font-bold text-[#102b46]">{t}</h3>
              <p className="text-xs leading-relaxed text-[#718096]">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ SEO ARTICLE ═══════════ */}
      <section className="bg-white px-[7%] py-20 md:py-24">
        <div className="mx-auto max-w-[920px]">
          <h2 className="mb-5 font-['Manrope'] text-2xl font-extrabold leading-tight tracking-tight text-[#102b46] md:text-3xl lg:text-[34px]">
            About SAV7 IMPEX PRIVATE LIMITED — India's Trusted Gold & Pharmaceutical
            Import Export Partner
          </h2>
          <p className="mb-4 text-sm leading-[1.95] text-[#718096]">
            SAV7 IMPEX PRIVATE LIMITED is a diversified India-based import and export
            company that has been connecting global markets through compliant,
            transparent and reliable cross-border trade since 2009. Headquartered in
            Hyderabad, Telangana, we operate two specialised divisions —{" "}
            <strong className="text-[#102b46]">Gold & Precious Metals</strong> and{" "}
            <strong className="text-[#102b46]">Pharmaceuticals & Healthcare</strong> —
            serving over 500 active trade partners across 40+ countries in Asia
            Pacific, Africa, Latin America, Europe and the CIS region.
          </p>
          <p className="mb-4 text-sm leading-[1.95] text-[#718096]">
            What began as a domestic precious metals trading house serving Hyderabad
            jewellers has grown into a globally trusted import-export company. Our
            expansion into pharmaceutical exports in 2016 opened a new chapter in our
            story — one where we bring the same rigorous compliance, certified sourcing
            and insured logistics that defined our gold business to the world of
            WHO-GMP certified medicines, APIs and healthcare products.
          </p>

          <h3 className="mt-8 mb-3 font-['Manrope'] text-xl font-bold text-[#102b46]">
            Our Gold & Precious Metals Division
          </h3>
          <p className="mb-4 text-sm leading-[1.95] text-[#718096]">
            Our <strong className="text-[#102b46]">Gold Import Export Division</strong>{" "}
            specialises in LBMA-aligned gold bullion bars, gold doré, sovereign-minted
            coins, silver bullion and precious metals trading. We source exclusively
            from audited and certified refineries and each shipment carries assay
            certificates, hallmark verification and complete chain-of-custody
            documentation. Our gold trading operations are FEMA-compliant and fully
            insured, with certified vault storage available for buyers who require
            secure custody between transactions.
          </p>
          <p className="mb-4 text-sm leading-[1.95] text-[#718096]">
            From 1 kg investment-grade gold bars to 400 oz institutional bullion, we
            provide transparent, spot-based pricing with no hidden fees. Our gold
            logistics partners handle insured air and sea freight from origin to
            destination port, with real-time tracking and customs clearance support.
          </p>

          <h3 className="mt-8 mb-3 font-['Manrope'] text-xl font-bold text-[#102b46]">
            Our Pharmaceuticals & Healthcare Division
          </h3>
          <p className="mb-4 text-sm leading-[1.95] text-[#718096]">
            Our <strong className="text-[#102b46]">Pharmaceutical Export Division</strong>{" "}
            supplies WHO-GMP certified generic medicines, active pharmaceutical
            ingredients (APIs), formulations, oncology drugs, cardiovascular medicines,
            antibiotics, anti-malarials and nutraceuticals. Every product is
            manufactured in WHO-GMP certified plants and supported by complete
            regulatory dossiers including Certificate of Analysis (COA), Certificate
            of Pharmaceutical Product (COPP), GMP certificates and free-sale
            certificates.
          </p>
          <p className="mb-4 text-sm leading-[1.95] text-[#718096]">
            We serve hospitals, distributors, government health programmes and private
            pharmacies across emerging and developed markets. Our GDP-compliant
            cold-chain logistics ensure temperature-sensitive pharmaceuticals arrive
            safely, and our regulatory team supports client product registrations in
            destination countries.
          </p>

          <h3 className="mt-8 mb-3 font-['Manrope'] text-xl font-bold text-[#102b46]">
            Our Compliance-First Approach
          </h3>
          <p className="mb-4 text-sm leading-[1.95] text-[#718096]">
            Compliance is the foundation of everything we do at SAV7 IMPEX. We operate
            with all mandatory Indian trade licences including IEC (Importer Exporter
            Code), RCMC registration, GST registration and ISO 9001:2015 quality
            management certification. Our gold trading follows FEMA-compliant
            processes, and our pharmaceutical exports are backed by full COA, COPP,
            GMP and free-sale documentation.
          </p>
          <p className="mb-4 text-sm leading-[1.95] text-[#718096]">
            Every shipment is fully insured from origin to destination, and our
            logistics partners are GDP-certified for pharmaceutical handling. We
            maintain real-time chain-of-custody tracking so clients always know where
            their goods are, in every stage of the shipment.
          </p>

          <h3 className="mt-8 mb-3 font-['Manrope'] text-xl font-bold text-[#102b46]">
            Our Global Reach
          </h3>
          <p className="mb-4 text-sm leading-[1.95] text-[#718096]">
            SAV7 IMPEX serves buyers, distributors, hospitals, refiners and government
            health programmes across 40+ countries. Our largest markets are in Asia
            Pacific (Southeast Asia, Middle East, Central Asia and South Asia), Africa
            (East, West and Southern Africa), Latin America (Central and South
            America), and Europe & CIS. Each region is supported by a dedicated
            account manager who understands local customs, currency and compliance
            requirements.
          </p>

          <h3 className="mt-8 mb-3 font-['Manrope'] text-xl font-bold text-[#102b46]">
            Our Commitment to Partners
          </h3>
          <p className="mb-4 text-sm leading-[1.95] text-[#718096]">
            We don't chase one-time deals — we build long-term trade partnerships.
            Every enquiry receives a firm transparent quotation within 24 hours, and
            every shipment is delivered on schedule. Our trade desk responds in
            English, Hindi, Telugu and Arabic, and our 24/7 support ensures you're
            never left waiting for an answer.
          </p>
          <p className="mb-4 text-sm leading-[1.95] text-[#718096]">
            Whether you are a jeweller sourcing gold bullion, a hospital buying
            essential medicines, a distributor expanding product lines, or a
            government agency procuring healthcare supplies, SAV7 IMPEX PRIVATE
            LIMITED is your trusted import-export partner — built on compliance,
            transparency and 15+ years of proven delivery.
          </p>

          <h3 className="mt-8 mb-3 font-['Manrope'] text-xl font-bold text-[#102b46]">
            Get in Touch
          </h3>
          <p className="mb-4 text-sm leading-[1.95] text-[#718096]">
            Ready to discuss your gold or pharmaceutical import-export requirement?
            Contact our trade desk via{" "}
            <a
              href="https://wa.me/919290934388"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#00875a] hover:underline"
            >
              WhatsApp (+91 92909 34388)
            </a>
            , email us at{" "}
            <a href="mailto:sav7impex@gmail.com" className="font-bold text-[#00875a] hover:underline">
              sav7impex@gmail.com
            </a>
            , or{" "}
            <Link href="/contact" className="font-bold text-[#00875a] hover:underline">
              use our contact form
            </Link>
            . We respond to every business enquiry within 24 hours with a firm,
            transparent quotation.
          </p>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="bg-[#f7f9fb] px-[7%] py-20 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block text-[10px] font-extrabold tracking-widest text-[#00875a]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-['Manrope'] text-3xl font-extrabold tracking-tight text-[#102b46] md:text-4xl">
              About SAV7 IMPEX
            </h2>
          </div>
          {faqs.map((f) => (
            <details
              key={f.q}
              className="mb-3 rounded-lg border border-[#e7ecf1] bg-white px-6 py-1.5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 text-sm font-bold text-[#102b46] [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="text-2xl leading-none text-[#b68b31]">+</span>
              </summary>
              <p className="border-t border-[#e7ecf1] py-4 text-[13px] leading-relaxed text-[#718096]">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section
        className="px-[7%] py-20 text-white md:py-24"
        style={{
          backgroundImage: `linear-gradient(115deg, rgba(9,28,48,0.95), rgba(16,43,70,0.9)), url("https://images.unsplash.com/photo-1526304640581-d334cd0c9d6a?auto=format&fit=crop&w=1500&q=80")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-[820px] text-center">
          <span className="mb-3 inline-block text-[10px] font-extrabold tracking-widest text-[#55d6a4]">
            PARTNER WITH SAV7 IMPEX
          </span>
          <h2 className="font-['Manrope'] text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-[46px]">
            Ready to Trade Gold or Pharma
            <span className="mt-2 block text-[#d6b86c]">With a Trusted Partner?</span>
          </h2>
          <p className="mx-auto mb-8 mt-5 max-w-[620px] text-sm leading-relaxed text-[#d0dbe5]">
            Share your requirement and receive a firm, transparent quotation within
            24 hours — no obligation, no hidden costs. Our trade desk responds in
            English, Hindi, Telugu and Arabic.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-[51px] items-center justify-center rounded-md bg-white px-6 text-xs font-bold text-[#102b46] transition hover:bg-[#00875a] hover:text-white"
            >
              Request a Quote
            </Link>
            <a
              href="https://wa.me/919290934388"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[51px] items-center justify-center rounded-md bg-[#00875a] px-6 text-xs font-bold text-white transition hover:bg-[#102b46]"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}