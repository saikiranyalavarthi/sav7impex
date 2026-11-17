
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gold Import & Export | International Gold Trade | SAV7 IMPEX",
  description:
    "Explore gold import and export trade enquiries with SAV7 IMPEX PRIVATE LIMITED. Discuss gold bullion, gold bars, product specifications, international documentation and trade requirements.",
  alternates: {
    canonical: "https://www.sav7impex.in/gold-import-export",
  },
  openGraph: {
    title: "Gold Import & Export | SAV7 IMPEX",
    description:
      "Gold bullion and international gold import/export trade enquiries, product specifications and documentation.",
    url: "https://www.sav7impex.in/gold-import-export",
    siteName: "SAV7 IMPEX PRIVATE LIMITED",
    type: "website",
  },
};

const tradeServices = [
  {
    number: "01",
    title: "Gold Import Enquiries",
    description:
      "Discuss requirements for gold products intended for import, including product form, specifications, origin and destination-country requirements.",
    icon: "↓",
  },
  {
    number: "02",
    title: "Gold Export Enquiries",
    description:
      "Share your requirements for potential gold export transactions, including product details, buyer requirements and destination information.",
    icon: "↑",
  },
  {
    number: "03",
    title: "Gold Bullion & Bars",
    description:
      "Enquire about gold bullion and bar specifications, preferred weights, purity requirements and proposed transaction quantities.",
    icon: "Au",
  },
  {
    number: "04",
    title: "Trade Documentation",
    description:
      "Understand the documentation and regulatory considerations relevant to a proposed precious metals import or export transaction.",
    icon: "DOC",
  },
];

const requirements = [
  {
    title: "Product Details",
    description:
      "Gold bullion, bars or other specified gold product forms.",
  },
  {
    title: "Purity & Specifications",
    description:
      "Required purity, grade, weight and product specifications.",
  },
  {
    title: "Quantity",
    description:
      "Proposed transaction quantity and preferred unit of measurement.",
  },
  {
    title: "Country of Origin",
    description:
      "Proposed sourcing country and relevant origin information.",
  },
  {
    title: "Destination Country",
    description:
      "Import destination and applicable country-specific requirements.",
  },
  {
    title: "Commercial Terms",
    description:
      "Proposed pricing, payment conditions and delivery arrangements.",
  },
];

const process = [
  {
    number: "01",
    title: "Business Enquiry",
    description:
      "Submit your gold import or export requirement with product, quantity and destination details.",
  },
  {
    number: "02",
    title: "Requirement Assessment",
    description:
      "Review the proposed product specifications, sourcing requirements and commercial expectations.",
  },
  {
    number: "03",
    title: "Regulatory & Document Review",
    description:
      "Identify the applicable permissions, customs requirements and transaction documents.",
  },
  {
    number: "04",
    title: "Commercial Discussion",
    description:
      "Discuss availability, pricing, payment terms, logistics and possible next steps.",
  },
];

const faqs = [
  {
    question: "What is gold import and export?",
    answer:
      "Gold import refers to bringing gold products into a country from another country. Gold export refers to sending gold products from one country to another. Both activities are subject to applicable trade policies, customs procedures and regulatory requirements.",
  },
  {
    question: "Which gold products can I enquire about?",
    answer:
      "You can submit enquiries relating to gold bullion, gold bars and other specified gold products. Product form, purity, quantity and availability must be confirmed for each proposed transaction.",
  },
  {
    question: "What documents are required for gold import and export?",
    answer:
      "Requirements vary according to the product, transaction structure and countries involved. They may include applicable import or export authorisations, commercial invoices, packing lists, transport documents, customs declarations, origin information and other regulatory documents.",
  },
  {
    question: "Can I submit a bulk gold import enquiry?",
    answer:
      "You can submit your proposed quantity, gold product specifications, origin and destination details through our contact page. The proposed transaction will need to be assessed against applicable regulations and business requirements.",
  },
  {
    question: "Can gold be imported into India?",
    answer:
      "Gold imports into India are governed by the applicable Foreign Trade Policy, DGFT notifications, RBI directions, customs rules and relevant eligibility conditions. Not every business can import every category of gold. The applicable route and permissions must be verified before proceeding.",
  },
  {
    question: "How can I discuss an international gold trade requirement?",
    answer:
      "Contact SAV7 IMPEX with your product details, proposed quantity, origin country, destination country and business requirements. You can use the website enquiry form or WhatsApp to initiate a discussion.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Gold Import & Export",
  description:
    "International gold import and export trade enquiries from SAV7 IMPEX PRIVATE LIMITED.",
  url: "https://www.sav7impex.in/gold-import-export",
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

export default function GoldImportExportPage() {
  return (
    <main className="overflow-hidden bg-white text-[#26384b]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#091c30]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_15%,rgba(201,162,39,0.2),transparent_35%),radial-gradient(ellipse_at_5%_95%,rgba(0,135,90,0.15),transparent_35%)]" />

        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full border border-[#c9a227]/10" />
        <div className="absolute -right-8 top-22 h-64 w-64 rounded-full border border-[#c9a227]/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#c9a227]/30 bg-[#c9a227]/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#d7b44d]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#e5c66e]">
                SAV7 IMPEX · International Gold Trade
              </span>
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Gold Import &{" "}
              <span className="text-[#d7b44d]">Export</span> Trade
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Exploring international gold trade opportunities through
              product specifications, sourcing requirements, commercial
              discussions and applicable import and export procedures.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#c9a227] px-7 py-4 text-sm font-bold text-[#091c30] transition hover:-translate-y-1 hover:bg-[#dfbd57]"
              >
                Submit Trade Enquiry <span>→</span>
              </Link>

              <Link
                href="#trade-services"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#c9a227] hover:text-[#e5c66e]"
              >
                Explore Trade Services
              </Link>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-7">
              <div>
                <p className="text-lg font-bold text-[#e0bd55]">Import</p>
                <p className="mt-1 text-xs text-slate-400">Trade Enquiries</p>
              </div>
              <div>
                <p className="text-lg font-bold text-[#e0bd55]">Export</p>
                <p className="mt-1 text-xs text-slate-400">Trade Enquiries</p>
              </div>
              <div>
                <p className="text-lg font-bold text-[#e0bd55]">Bullion</p>
                <p className="mt-1 text-xs text-slate-400">Gold Products</p>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-0 rounded-full bg-[#c9a227]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-[#c9a227]/20 bg-gradient-to-br from-[#19334b] via-[#10283e] to-[#071522] p-6 shadow-2xl sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7b44d]">
                    International Trade
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Gold Import & Export
                  </p>
                </div>

                <div className="rounded-full border border-[#c9a227]/30 px-3 py-2 text-[10px] font-bold text-[#e0bd55]">
                  Au · 79
                </div>
              </div>

              <div className="relative flex min-h-[310px] items-center justify-center">
                <div className="absolute h-64 w-64 rounded-full border border-[#c9a227]/20" />
                <div className="absolute h-48 w-48 rounded-full border border-[#c9a227]/20" />

                <div className="relative flex h-48 w-48 rotate-[-8deg] items-center justify-center rounded-3xl border border-[#fff1bd]/60 bg-gradient-to-br from-[#fff0b3] via-[#c9a227] to-[#80601b] shadow-[0_25px_70px_rgba(201,162,39,0.3)] sm:h-56 sm:w-56">
                  <div className="absolute inset-3 rounded-2xl border border-[#fff8dc]/50" />

                  <div className="text-center text-[#49370e]">
                    <p className="text-6xl font-black tracking-tighter">
                      Au
                    </p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.3em]">
                      GOLD
                    </p>
                    <p className="mt-3 text-[9px] font-bold tracking-widest">
                      INTERNATIONAL TRADE
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-4 left-0 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
                  <p className="text-xs font-bold text-white">Import</p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Origin to Destination
                  </p>
                </div>

                <div className="absolute right-0 top-5 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
                  <p className="text-xs font-bold text-white">Export</p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    International Markets
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-bold text-[#e0bd55]">
                    Product
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Gold Bullion & Bars
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-bold text-[#e0bd55]">
                    Business
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Trade Enquiries
                  </p>
                </div>
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
              International Gold Trade
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#102b46] sm:text-4xl">
              Connecting Gold Trade Requirements Across Markets
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
            <p>
              Gold is an internationally traded precious metal with
              applications in jewellery, investment-related products and
              several commercial activities. Gold import and export
              transactions require careful consideration of product
              specifications, trade policies, customs procedures and
              transaction documentation.
            </p>

            <p>
              SAV7 IMPEX PRIVATE LIMITED provides a business contact point for
              gold import and export enquiries. Businesses can share their
              proposed requirements for gold bullion, gold bars and other
              specified gold products for further discussion.
            </p>

            <p>
              Every proposed transaction must be evaluated according to the
              applicable laws, regulatory permissions, eligible trade routes
              and commercial conditions of the countries involved.
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

      {/* SERVICES */}
      <section
        id="trade-services"
        className="bg-[#f7f9fb] px-5 py-20 sm:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b68b31]">
              Our Trade Categories
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#102b46] sm:text-4xl">
              Gold Import & Export Enquiry Services
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              Explore the different areas of gold trade and share your
              requirements with our team.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {tradeServices.map((service) => (
              <div
                key={service.number}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a227]/50 hover:shadow-xl hover:shadow-[#102b46]/5 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fbf5e9] text-xl font-black text-[#b68b31]">
                    {service.icon}
                  </div>
                  <span className="text-sm font-bold text-slate-300">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-extrabold text-[#102b46]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#00875a] transition-all group-hover:gap-3"
                >
                  Discuss Requirement <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b68b31]">
                Gold Product Categories
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#102b46] sm:text-4xl">
                Gold Products for Trade Enquiries
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                Product form and specifications are important when evaluating
                a proposed gold import or export transaction. Share your
                requirements with the product details and destination
                information.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#102b46] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#00875a]"
              >
                Submit Product Enquiry <span>→</span>
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  symbol: "Au",
                  title: "Gold Bullion",
                  description:
                    "Enquiries for gold bullion products and specifications.",
                },
                {
                  symbol: "BAR",
                  title: "Gold Bars",
                  description:
                    "Enquiries based on bar weight, purity and product form.",
                },
                {
                  symbol: "24K",
                  title: "Gold Purity",
                  description:
                    "Discuss required purity and quality specifications.",
                },
                {
                  symbol: "WT",
                  title: "Gold Weight",
                  description:
                    "Specify required weights and proposed quantities.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#c9a227]/50 hover:bg-[#fbf9f3]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fbf5e9] text-sm font-black text-[#b68b31]">
                    {item.symbol}
                  </div>

                  <h3 className="mt-5 font-bold text-[#102b46]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="bg-[#091c30] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d7b44d]">
              Transaction Information
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              What Information Is Needed for a Gold Trade Enquiry?
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Providing clear product and destination information helps
              establish the requirements of a proposed import or export
              transaction.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {requirements.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#c9a227]/40 hover:bg-white/[0.07]"
              >
                <span className="text-sm font-bold text-[#d7b44d]">
                  0{index + 1}
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
              Trade Process
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#102b46] sm:text-4xl">
              From Enquiry to Trade Discussion
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              A structured process for reviewing proposed gold import and
              export requirements.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[#c9a227]/50 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fbf5e9] text-sm font-extrabold text-[#b68b31]">
                  {step.number}
                </div>

                <h3 className="mt-6 text-lg font-bold text-[#102b46]">
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

      {/* REGULATORY SECTION */}
      <section className="bg-[#f7f9fb] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl border border-[#c9a227]/20 bg-[#fbf8ef]">
            <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:p-14">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a17a21]">
                  Regulatory Considerations
                </span>

                <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#102b46] sm:text-4xl">
                  International Gold Trade Requires Regulatory Compliance
                </h2>

                <p className="mt-5 text-sm leading-8 text-slate-600">
                  Gold imports and exports are subject to country-specific
                  trade policies, customs rules, foreign exchange requirements
                  and other applicable regulations. The permitted transaction
                  route may depend on the product category, importer or
                  exporter eligibility and the countries involved.
                </p>

                <p className="mt-4 text-sm leading-8 text-slate-600">
                  For India-related transactions, relevant DGFT notifications,
                  RBI directions, customs requirements and applicable IFSCA
                  rules should be checked before proceeding. Eligibility for
                  particular bullion import routes is restricted to qualifying
                  entities and must not be assumed.
                </p>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 font-bold text-[#00875a] hover:gap-3"
                >
                  Discuss Your Trade Requirement <span>→</span>
                </Link>
              </div>

              <div className="space-y-4">
                {[
                  "Applicable import and export policy",
                  "Customs and product classification",
                  "Required permissions and eligibility",
                  "Transaction and shipping documents",
                  "Foreign exchange and payment rules",
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

          <p className="mt-5 text-xs leading-6 text-slate-500">
            Website information is general in nature and is not legal,
            customs, financial or regulatory advice. SAV7 IMPEX does not
            represent that every gold import or export route is available to
            every business. Transaction-specific eligibility and permissions
            must be independently verified.
          </p>
        </div>
      </section>

      {/* OTHER PRODUCTS */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b68b31]">
              Explore More
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#102b46] sm:text-4xl">
              Explore Our Precious Metals Categories
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Link
              href="/gold-precious-metals"
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#c9a227]/50 hover:shadow-xl"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-[#b68b31]">
                Precious Metals
              </p>

              <h3 className="mt-3 text-xl font-extrabold text-[#102b46]">
                Gold & Precious Metals
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Explore gold bullion, gold bars, silver and other precious
                metals product categories.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#00875a] group-hover:gap-3">
                Explore Products →
              </span>
            </Link>

            <Link
              href="/silver-products"
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#c9a227]/50 hover:shadow-xl"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Silver Division
              </p>

              <h3 className="mt-3 text-xl font-extrabold text-[#102b46]">
                Silver Products
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Explore silver bullion and silver product enquiry
                requirements.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#00875a] group-hover:gap-3">
                Explore Silver →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="bg-[#f7f9fb] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b68b31]">
            Gold Import Export from India
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#102b46] sm:text-4xl">
            Understanding International Gold Import and Export Trade
          </h2>

          <div className="mt-8 space-y-6 text-sm leading-8 text-slate-600 sm:text-base">
            <p>
              Gold import and export is an important part of international
              precious metals commerce. The movement of gold between countries
              involves product classification, sourcing, commercial
              arrangements, customs procedures and compliance with the laws
              governing precious metals transactions. Businesses planning
              international gold trade need to understand the requirements
              associated with both the origin and destination countries.
            </p>

            <h3 className="pt-3 text-xl font-bold text-[#102b46]">
              Gold Import from International Markets
            </h3>

            <p>
              Gold import involves bringing gold products from an overseas
              source into a destination country. Import requirements can
              depend on whether the product is bullion, bars, semi-manufactured
              gold or another form. Importers must assess applicable
              eligibility criteria, permitted channels, customs
              classification, documentation, duties and payment regulations.
              Product availability and the permitted route should be
              confirmed before a commercial commitment is made.
            </p>

            <h3 className="pt-3 text-xl font-bold text-[#102b46]">
              Gold Export and International Buyers
            </h3>

            <p>
              Gold export involves sending permitted gold products from one
              country to another. Export transactions may require information
              about the product form, purity, weight, origin, buyer,
              destination and intended use. Export permissions, customs
              declarations, product documentation and destination-country
              import requirements must be considered as part of the proposed
              transaction.
            </p>

            <h3 className="pt-3 text-xl font-bold text-[#102b46]">
              Gold Bullion and Gold Bar Specifications
            </h3>

            <p>
              Gold bullion and gold bars are commonly specified by weight,
              purity, form and other product characteristics. Clear product
              specifications help buyers and sellers communicate their
              requirements. An enquiry should ideally identify the required
              product, quantity, preferred specifications, origin and
              destination. Any final specification and availability needs
              confirmation for the particular transaction.
            </p>

            <h3 className="pt-3 text-xl font-bold text-[#102b46]">
              Gold Import Export Regulations in India
            </h3>

            <p>
              Gold import into India is governed by the applicable Foreign
              Trade Policy, Directorate General of Foreign Trade
              notifications, Reserve Bank of India directions, customs
              regulations and other relevant requirements. Certain bullion
              import routes have specific eligibility conditions, including
              routes through the India International Bullion Exchange for
              qualifying entities. A business should not assume that it can
              use a particular import channel without verifying its
              eligibility and applicable permissions.
            </p>

            <h3 className="pt-3 text-xl font-bold text-[#102b46]">
              Gold Import Export Documentation
            </h3>

            <p>
              International gold transactions may involve commercial
              invoices, packing lists, transport documents, customs
              declarations, product specifications, origin documents and
              regulatory authorisations, depending on the transaction.
              Documentation requirements are not identical for every
              product or country. The relevant customs and regulatory
              authorities should be consulted for transaction-specific
              requirements.
            </p>

            <h3 className="pt-3 text-xl font-bold text-[#102b46]">
              Gold Trade Enquiries with SAV7 IMPEX
            </h3>

            <p>
              SAV7 IMPEX PRIVATE LIMITED provides a contact point for
              businesses exploring gold import and export requirements.
              Businesses can submit details about gold bullion, gold bars,
              proposed quantities, sourcing countries and destination
              markets. These details provide a starting point for reviewing
              the proposed requirement and discussing possible commercial
              arrangements, subject to applicable regulations and confirmed
              transaction conditions.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-[#102b46] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#00875a]"
            >
              Submit Gold Trade Enquiry →
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-bold text-[#102b46] transition hover:border-[#c9a227]"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b68b31]">
              Frequently Asked Questions
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#102b46] sm:text-4xl">
              Gold Import & Export FAQs
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

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[#091c30] px-5 py-20 sm:px-8 lg:py-24">
        <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border border-[#c9a227]/10" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-[#c9a227]/10" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d7b44d]">
            SAV7 IMPEX · Gold Trade
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            Have a Gold Import or Export Requirement?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
            Share your proposed gold product, quantity, origin and destination
            details. Connect with SAV7 IMPEX to discuss your international
            trade enquiry.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#c9a227] px-8 py-4 text-sm font-bold text-[#091c30] transition hover:-translate-y-1 hover:bg-[#e0bd55]"
            >
              Request a Trade Discussion <span>→</span>
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
