
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Precious Metals Trading & Product Enquiries | SAV7 IMPEX",
  description:
    "Explore precious metals trade enquiries with SAV7 IMPEX PRIVATE LIMITED. Learn about gold, silver, platinum, palladium, product specifications and international trade considerations.",
  alternates: {
    canonical: "https://www.sav7impex.in/precious-metals",
  },
  openGraph: {
    title: "Precious Metals Trading | SAV7 IMPEX",
    description:
      "Gold, silver, platinum and palladium product enquiries and international precious metals trade information.",
    url: "https://www.sav7impex.in/precious-metals",
    siteName: "SAV7 IMPEX PRIVATE LIMITED",
    type: "website",
  },
};

const metals = [
  {
    symbol: "Au",
    atomic: "79",
    title: "Gold",
    subtitle: "Gold Bullion & Bars",
    description:
      "Explore gold bullion, gold bars and international gold trade enquiries. Discuss purity, weight, quantity and proposed transaction requirements.",
    features: ["Gold bullion", "Gold bars", "Gold import/export"],
    href: "/gold-precious-metals",
    accent: "gold",
  },
  {
    symbol: "Ag",
    atomic: "47",
    title: "Silver",
    subtitle: "Silver Bullion & Products",
    description:
      "Explore silver bullion, silver bars and product-specific requirements for commercial and international trade discussions.",
    features: ["Silver bullion", "Silver bars", "Silver specifications"],
    href: "/silver-products",
    accent: "silver",
  },
  {
    symbol: "Pt",
    atomic: "78",
    title: "Platinum",
    subtitle: "Specialised Precious Metal",
    description:
      "Learn about platinum's commercial and industrial applications and submit product-specific enquiries for further assessment.",
    features: ["Platinum enquiries", "Purity requirements", "Industrial applications"],
    href: "/contact",
    accent: "platinum",
  },
  {
    symbol: "Pd",
    atomic: "46",
    title: "Palladium",
    subtitle: "Industrial Precious Metal",
    description:
      "Explore palladium-related product requirements, specifications and potential commercial discussions, subject to availability.",
    features: ["Palladium enquiries", "Product specifications", "Trade requirements"],
    href: "/contact",
    accent: "palladium",
  },
];

const tradeAreas = [
  {
    number: "01",
    title: "Product Enquiries",
    description:
      "Share the precious metal, product form, purity, weight and quantity required for your business.",
  },
  {
    number: "02",
    title: "International Trade",
    description:
      "Discuss proposed origin and destination markets, trade routes and transaction requirements.",
  },
  {
    number: "03",
    title: "Product Specifications",
    description:
      "Define metal fineness, dimensions, weight, grade and relevant product documentation.",
  },
  {
    number: "04",
    title: "Documentation Review",
    description:
      "Consider applicable customs procedures, trade documentation and regulatory requirements.",
  },
];

const specifications = [
  {
    number: "01",
    title: "Metal & Product Form",
    description: "Gold, silver or another precious metal in the required form.",
  },
  {
    number: "02",
    title: "Purity & Fineness",
    description: "Required metal content, grade and quality specifications.",
  },
  {
    number: "03",
    title: "Weight & Quantity",
    description: "Preferred product weights and proposed transaction quantity.",
  },
  {
    number: "04",
    title: "Origin & Destination",
    description: "Proposed sourcing country and destination market.",
  },
  {
    number: "05",
    title: "Commercial Terms",
    description: "Proposed pricing, payment, delivery and transaction conditions.",
  },
  {
    number: "06",
    title: "Regulatory Requirements",
    description: "Applicable eligibility, permissions, customs and documentation.",
  },
];

const steps = [
  {
    number: "01",
    title: "Submit Enquiry",
    description:
      "Share your product specifications, proposed quantity and destination.",
  },
  {
    number: "02",
    title: "Review Requirements",
    description:
      "Clarify product details, proposed transaction scope and commercial expectations.",
  },
  {
    number: "03",
    title: "Assess Conditions",
    description:
      "Consider availability, counterparty information and relevant regulatory requirements.",
  },
  {
    number: "04",
    title: "Discuss Next Steps",
    description:
      "Explore potential commercial arrangements subject to verification and agreement.",
  },
];

const faqs = [
  {
    question: "What are precious metals?",
    answer:
      "Precious metals are relatively rare metallic elements valued for their properties and commercial uses. Gold, silver, platinum and palladium are commonly discussed examples.",
  },
  {
    question: "Which precious metals can I enquire about?",
    answer:
      "SAV7 IMPEX welcomes enquiries concerning gold, silver and other precious metal requirements. Availability, product specifications and the feasibility of a proposed transaction must be confirmed individually.",
  },
  {
    question: "What is the difference between gold bullion and silver bullion?",
    answer:
      "Gold bullion primarily contains gold, while silver bullion primarily contains silver. Both may be produced in bar or other forms and are specified by characteristics such as weight and fineness.",
  },
  {
    question: "Can I submit an international precious metals trade enquiry?",
    answer:
      "Yes. You can share the proposed product, quantity, origin, destination and commercial requirements. Any transaction is subject to applicable laws, eligibility requirements and confirmed arrangements.",
  },
  {
    question: "What documentation may be required?",
    answer:
      "Documentation varies by product, country and transaction. Depending on applicable requirements, it may include invoices, packing lists, origin details, transport documents, customs declarations and regulatory authorisations.",
  },
  {
    question: "Does SAV7 IMPEX provide guaranteed metal prices?",
    answer:
      "No fixed price or availability guarantee is stated on this page. Any quotation, if offered, would depend on the product specifications, market conditions and agreed transaction terms.",
  },
];

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Precious Metals Trading",
  description:
    "Precious metals product information and trade enquiries with SAV7 IMPEX PRIVATE LIMITED.",
  url: "https://www.sav7impex.in/precious-metals",
  publisher: {
    "@type": "Organization",
    name: "SAV7 IMPEX PRIVATE LIMITED",
    url: "https://www.sav7impex.in/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const metalStyles: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  gold: {
    bg: "from-[#f9e9b6] via-[#d8b34f] to-[#9e7423]",
    text: "text-[#765415]",
    border: "border-[#c9a227]/30",
  },
  silver: {
    bg: "from-[#f8fafc] via-[#cbd5e1] to-[#94a3b8]",
    text: "text-[#475569]",
    border: "border-slate-300",
  },
  platinum: {
    bg: "from-[#e8edf3] via-[#b8c5d2] to-[#71869b]",
    text: "text-[#334155]",
    border: "border-slate-300",
  },
  palladium: {
    bg: "from-[#e3e8f1] via-[#a7b7cd] to-[#657b9c]",
    text: "text-[#263b5a]",
    border: "border-slate-300",
  },
};

export default function PreciousMetalsPage() {
  return (
    <main className="overflow-hidden bg-white text-[#26384b]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#091c30]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,162,39,0.17),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(0,135,90,0.12),transparent_35%)]" />

        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full border border-[#c9a227]/10" />
        <div className="absolute -right-10 top-16 h-72 w-72 rounded-full border border-[#c9a227]/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#c9a227]/30 bg-[#c9a227]/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#c9a227]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e5c66e]">
                SAV7 IMPEX · Precious Metals
              </span>
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Precious Metals{" "}
              <span className="text-[#d7b44d]">
                Trading & Enquiries
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore gold, silver, platinum and palladium product
              requirements. Connect with SAV7 IMPEX to discuss precious
              metals specifications and potential international trade
              opportunities.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#c9a227] px-7 py-4 text-sm font-bold text-[#091c30] transition hover:-translate-y-1 hover:bg-[#dfbd57]"
              >
                Submit Trade Enquiry <span>→</span>
              </Link>

              <Link
                href="#metals"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#c9a227] hover:text-[#e5c66e]"
              >
                Explore Metals
              </Link>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-7">
              <div>
                <p className="text-lg font-bold text-[#e0bd55]">Gold</p>
                <p className="mt-1 text-xs text-slate-400">
                  Bullion & Bars
                </p>
              </div>

              <div>
                <p className="text-lg font-bold text-[#e0bd55]">Silver</p>
                <p className="mt-1 text-xs text-slate-400">
                  Silver Products
                </p>
              </div>

              <div>
                <p className="text-lg font-bold text-[#e0bd55]">
                  Global
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Trade Enquiries
                </p>
              </div>
            </div>
          </div>

          {/* METALS VISUAL */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-0 rounded-full bg-[#c9a227]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-[#c9a227]/20 bg-gradient-to-br from-[#19334b] via-[#10283e] to-[#071522] p-5 shadow-2xl sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7b44d]">
                    Precious Metals
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Product Categories
                  </p>
                </div>

                <span className="rounded-full border border-white/10 px-3 py-2 text-[10px] text-slate-300">
                  SAV7 IMPEX
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 py-10 sm:gap-5">
                {metals.map((metal) => {
                  const style = metalStyles[metal.accent];

                  return (
                    <div
                      key={metal.symbol}
                      className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4"
                    >
                      <div
                        className={`relative flex aspect-square items-center justify-center rounded-xl border bg-gradient-to-br ${style.bg} ${style.border} shadow-lg`}
                      >
                        <span className="absolute right-3 top-3 text-[10px] font-bold text-[#334155]/70">
                          {metal.atomic}
                        </span>

                        <span
                          className={`text-5xl font-black tracking-tighter sm:text-6xl ${style.text}`}
                        >
                          {metal.symbol}
                        </span>
                      </div>

                      <p className="mt-3 text-center text-xs font-bold text-white">
                        {metal.title}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7b44d]">
                  Product Requirements · Trade Discussions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b68b31]">
              Precious Metals Overview
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#102b46] sm:text-4xl">
              Exploring Precious Metals Across International Markets
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
            <p>
              Precious metals are valued for their rarity, physical
              properties and applications across commercial and industrial
              sectors. Gold, silver, platinum and palladium are among the
              most widely recognised precious metals.
            </p>

            <p>
              SAV7 IMPEX PRIVATE LIMITED operates across gold and precious
              metals as well as pharmaceuticals and healthcare. Businesses
              can submit precious metals enquiries with product
              specifications, proposed quantities and destination details.
            </p>

            <p>
              The feasibility of any proposed trade arrangement depends on
              product availability, counterparty verification, applicable
              regulatory permissions and commercial conditions.
            </p>

            <Link
              href="/gold-precious-metals"
              className="inline-flex items-center gap-2 font-bold text-[#00875a] hover:gap-3"
            >
              Explore Gold & Precious Metals <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* METALS */}
      <section
        id="metals"
        className="bg-[#f7f9fb] px-5 py-20 sm:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b68b31]">
              Precious Metals Categories
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#102b46] sm:text-4xl">
              Explore Precious Metals
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              Learn about key precious metals and their product
              specifications, applications and trade enquiry requirements.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {metals.map((metal) => {
              const style = metalStyles[metal.accent];

              return (
                <div
                  key={metal.symbol}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a227]/50 hover:shadow-xl hover:shadow-[#102b46]/5 sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${style.bg} shadow-sm`}
                    >
                      <span
                        className={`text-2xl font-black ${style.text}`}
                      >
                        {metal.symbol}
                      </span>
                    </div>

                    <span className="text-xs font-bold text-slate-300">
                      ELEMENT {metal.atomic}
                    </span>
                  </div>

                  <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.15em] text-[#b68b31]">
                    {metal.subtitle}
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold text-[#102b46]">
                    {metal.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {metal.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {metal.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-slate-50 px-3 py-2 text-[10px] font-semibold text-slate-500"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={metal.href}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#00875a] transition-all group-hover:gap-3"
                  >
                    {metal.href === "/contact"
                      ? "Submit Enquiry"
                      : "Explore Products"}{" "}
                    <span>→</span>
                  </Link>
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-center text-xs leading-6 text-slate-500">
            Categories are provided for informational and enquiry purposes.
            Displaying a metal does not confirm current inventory, supply
            capability or transaction eligibility.
          </p>
        </div>
      </section>

      {/* TRADE AREAS */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b68b31]">
              Trade Enquiry Areas
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#102b46] sm:text-4xl">
              Precious Metals Business Requirements
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              International precious metals enquiries require clear product
              information and an understanding of applicable trade
              conditions.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tradeAreas.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[#c9a227]/50 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fbf5e9] text-sm font-bold text-[#b68b31]">
                  {item.number}
                </div>

                <h3 className="mt-6 text-lg font-bold text-[#102b46]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="bg-[#091c30] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d7b44d]">
              Product Information
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              Key Precious Metals Specifications
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Include these details when preparing a precious metals
              business enquiry.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {specifications.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#c9a227]/40 hover:bg-white/[0.07]"
              >
                <span className="text-sm font-bold text-[#d7b44d]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b68b31]">
              Enquiry Process
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#102b46] sm:text-4xl">
              How to Start a Precious Metals Enquiry
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[#c9a227]/50 hover:shadow-lg"
              >
                <span className="text-3xl font-black text-[#c9a227]/40">
                  {step.number}
                </span>

                <h3 className="mt-5 text-lg font-bold text-[#102b46]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGULATORY */}
      <section className="bg-[#f7f9fb] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 rounded-3xl border border-[#c9a227]/20 bg-[#fbf8ef] p-7 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:p-14">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a17a21]">
                Regulatory Awareness
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#102b46] sm:text-4xl">
                Responsible Precious Metals Trade Considerations
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-600">
                Precious metals transactions may be subject to
                country-specific import and export policies, customs
                requirements, counterparty verification obligations,
                financial regulations and other applicable legal conditions.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-600">
                Product origin, specifications, documentation, transaction
                eligibility and commercial arrangements should be
                appropriately reviewed before proceeding with any proposed
                transaction.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 font-bold text-[#00875a]"
              >
                Discuss Your Requirements →
              </Link>
            </div>

            <div className="space-y-4">
              {[
                "Product and purity verification",
                "Origin and counterparty information",
                "Applicable import and export permissions",
                "Customs and shipping documentation",
                "Commercial and payment conditions",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-[#c9a227]/15 bg-white p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eaf7f1] text-sm font-bold text-[#00875a]">
                    {index + 1}
                  </span>

                  <p className="text-sm font-semibold text-[#26384b]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b68b31]">
            Precious Metals Trade Information
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#102b46] sm:text-4xl">
            Gold, Silver, Platinum & Palladium in International Trade
          </h2>

          <div className="mt-8 space-y-6 text-sm leading-8 text-slate-600 sm:text-base">
            <p>
              Precious metals are an important category of materials in
              international commerce. Their physical characteristics,
              relative rarity and industrial applications create demand
              across different sectors. Gold, silver, platinum and
              palladium are among the best-known precious metals, although
              each has distinct properties, uses and market considerations.
            </p>

            <h3 className="pt-3 text-xl font-bold text-[#102b46]">
              Gold in International Precious Metals Trade
            </h3>

            <p>
              Gold is used in jewellery, investment-related products,
              electronics and other applications. Gold bullion and gold
              bars are commonly specified by purity, weight and product
              form. International gold transactions require attention to
              import and export rules, permitted trade channels, customs
              procedures and other applicable regulations.
            </p>

            <p>
              Businesses can explore our{" "}
              <Link
                href="/gold-import-export"
                className="font-bold text-[#00875a] underline underline-offset-4"
              >
                gold import and export
              </Link>{" "}
              page for additional information about international gold
              trade requirements.
            </p>

            <h3 className="pt-3 text-xl font-bold text-[#102b46]">
              Silver Bullion and Commercial Silver Products
            </h3>

            <p>
              Silver is used in jewellery, electronics, electrical
              components and industrial manufacturing. Silver bullion
              and silver bars are among the commonly recognised product
              forms. Buyers may require specific purity grades, weights
              and dimensions depending on the intended application.
            </p>

            <p>
              Visit our{" "}
              <Link
                href="/silver-products"
                className="font-bold text-[#00875a] underline underline-offset-4"
              >
                silver products
              </Link>{" "}
              page to learn more about silver bullion, silver bar
              specifications and silver trade enquiries.
            </p>

            <h3 className="pt-3 text-xl font-bold text-[#102b46]">
              Platinum and Palladium Applications
            </h3>

            <p>
              Platinum and palladium are precious metals with specialised
              industrial applications. They are used in areas such as
              automotive emission-control systems, chemical processing
              and selected electronic applications. Product requirements
              can differ according to purity, physical form, grade and
              intended industrial use.
            </p>

            <p>
              Businesses exploring platinum or palladium requirements
              should provide detailed specifications when submitting an
              enquiry. The feasibility of any proposed transaction must
              be assessed individually and is not implied by the
              informational listing of these metals.
            </p>

            <h3 className="pt-3 text-xl font-bold text-[#102b46]">
              Precious Metals Import and Export Requirements
            </h3>

            <p>
              International precious metals trade involves product
              classification, customs procedures, origin information,
              transport arrangements and applicable regulatory
              requirements. Import and export rules vary between
              countries and may differ between gold, silver, platinum
              and palladium. The eligibility of the parties and the
              permitted transaction route should be verified before
              proceeding.
            </p>

            <h3 className="pt-3 text-xl font-bold text-[#102b46]">
              Precious Metals Enquiries with SAV7 IMPEX
            </h3>

            <p>
              SAV7 IMPEX PRIVATE LIMITED provides a business contact
              point for precious metals product enquiries. Businesses
              can submit requirements relating to gold, silver and
              other precious metals with details about product form,
              purity, quantity, origin and destination. These details
              provide a starting point for further discussion,
              subject to applicable regulations and commercial
              conditions.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-[#102b46] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#00875a]"
            >
              Submit Precious Metals Enquiry →
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-bold text-[#102b46] transition hover:border-[#c9a227]"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f7f9fb] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b68b31]">
              Frequently Asked Questions
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#102b46] sm:text-4xl">
              Precious Metals FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-[#c9a227]/40 sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-bold text-[#102b46] sm:text-base">
                  <span>
                    <span className="mr-3 text-xs font-bold text-[#b68b31]">
                      0{index + 1}
                    </span>
                    {faq.question}
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-lg text-[#00875a] transition group-open:rotate-45">
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

      {/* RELATED DIVISION */}
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 lg:flex-row lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00875a]">
              SAV7 IMPEX Business Divisions
            </span>

            <h2 className="mt-3 text-2xl font-extrabold text-[#102b46] sm:text-3xl">
              Pharmaceuticals & Healthcare
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              Explore our other business division covering
              pharmaceutical and healthcare product enquiries.
            </p>
          </div>

          <Link
            href="/pharmaceuticals"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl border border-[#00875a] px-6 py-4 text-sm font-bold text-[#00875a] transition hover:bg-[#00875a] hover:text-white"
          >
            Explore Pharmaceuticals →
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[#091c30] px-5 py-20 sm:px-8 lg:py-24">
        <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border border-[#c9a227]/10" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-[#c9a227]/10" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d7b44d]">
            SAV7 IMPEX · Precious Metals
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            Explore Your Precious Metals Requirements
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
            Share your gold, silver or other precious metals
            requirements with SAV7 IMPEX. Submit your enquiry to
            discuss product specifications and potential trade
            arrangements.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#c9a227] px-8 py-4 text-sm font-bold text-[#091c30] transition hover:-translate-y-1 hover:bg-[#e0bd55]"
            >
              Request a Trade Discussion →
            </Link>

            <a
              href="https://wa.me/919290934388"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 text-sm font-bold text-white transition hover:border-[#c9a227] hover:text-[#e0bd55]"
            >
              WhatsApp Us
            </a>
          </div>

          <p className="mt-8 text-xs text-slate-500">
            SAV7 IMPEX PRIVATE LIMITED · Hyderabad, Telangana, India
          </p>
        </div>
      </section>
    </main>
  );
}
