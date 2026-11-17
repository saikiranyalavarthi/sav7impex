
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gold & Precious Metals Import Export | SAV7 IMPEX",
  description:
    "Explore gold bullion, gold bars, silver and precious metals trading enquiries with SAV7 IMPEX PRIVATE LIMITED. Contact us for product specifications, sourcing and international trade requirements.",
  alternates: {
    canonical: "https://www.sav7impex.in/gold-precious-metals",
  },
  openGraph: {
    title: "Gold & Precious Metals | SAV7 IMPEX",
    description:
      "Gold bullion, gold bars, silver and precious metals trade enquiries for international business.",
    url: "https://www.sav7impex.in/gold-precious-metals",
    siteName: "SAV7 IMPEX PRIVATE LIMITED",
    type: "website",
  },
};

const products = [
  {
    number: "01",
    title: "Gold Bullion",
    subtitle: "Gold Investment & Trade",
    description:
      "Explore gold bullion requirements for business and investment-related transactions, subject to product availability and applicable regulations.",
    tags: ["Gold bullion", "Trade enquiries", "Product specifications"],
    icon: "Au",
    color: "gold",
  },
  {
    number: "02",
    title: "Gold Bars",
    subtitle: "Different Weights & Specifications",
    description:
      "Enquire about gold bars with details covering preferred weight, purity specifications, origin and transaction requirements.",
    tags: ["Gold bars", "Weight specifications", "Purity details"],
    icon: "Au",
    color: "gold",
  },
  {
    number: "03",
    title: "Silver Products",
    subtitle: "Silver Bullion & Products",
    description:
      "Discuss silver product requirements, including bullion and other silver forms, depending on availability and applicable trade conditions.",
    tags: ["Silver bullion", "Silver products", "Bulk enquiries"],
    icon: "Ag",
    color: "silver",
  },
  {
    number: "04",
    title: "Other Precious Metals",
    subtitle: "Specialised Metal Requirements",
    description:
      "Submit enquiries for other precious metals and share your required specifications for further assessment.",
    tags: ["Precious metals", "Custom enquiries", "Trade specifications"],
    icon: "PM",
    color: "navy",
  },
];

const process = [
  {
    number: "01",
    title: "Submit Your Enquiry",
    description:
      "Share the metal, preferred quantity, destination and your business requirements.",
  },
  {
    number: "02",
    title: "Requirement Review",
    description:
      "Your product specifications and proposed transaction requirements can be reviewed.",
  },
  {
    number: "03",
    title: "Verification & Documentation",
    description:
      "Applicable product, counterparty, regulatory and transaction documentation is considered.",
  },
  {
    number: "04",
    title: "Trade Discussion",
    description:
      "Discuss commercial terms, availability, logistics and the next steps for the proposed transaction.",
  },
];

const faqs = [
  {
    question: "What precious metals can I enquire about?",
    answer:
      "You can enquire about gold bullion, gold bars, silver bullion, silver products and other precious metals. Specific product availability and transaction conditions need to be confirmed.",
  },
  {
    question: "Can I enquire about bulk gold requirements?",
    answer:
      "Yes. You can submit your required quantity, preferred product specifications and destination through our contact form. Quantities and commercial terms are subject to review and confirmation.",
  },
  {
    question: "What information should I provide for a gold enquiry?",
    answer:
      "Include the type of gold product, preferred weight, purity specifications, quantity, destination country and any relevant transaction requirements.",
  },
  {
    question: "Do you provide international precious metals trading?",
    answer:
      "SAV7 IMPEX is positioned as an international import and export business. Any specific precious metals transaction is subject to applicable laws, regulatory permissions, counterparty verification and confirmed trade arrangements.",
  },
  {
    question: "How can I request pricing?",
    answer:
      "Contact our team with your product, quantity, specifications and destination. Pricing, availability and commercial terms can be discussed after reviewing the enquiry.",
  },
];

const goldSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Gold & Precious Metals",
  description:
    "Gold bullion, gold bars, silver and precious metals trade enquiries from SAV7 IMPEX PRIVATE LIMITED.",
  url: "https://www.sav7impex.in/gold-precious-metals",
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

export default function GoldPreciousMetalsPage() {
  return (
    <main className="overflow-hidden bg-white text-[#26384b]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(goldSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#091c30]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,162,39,0.19),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(0,135,90,0.13),transparent_35%)]" />

        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full border border-[#c9a227]/10" />
        <div className="absolute -right-20 top-20 h-72 w-72 rounded-full border border-[#c9a227]/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#c9a227]/30 bg-[#c9a227]/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#c9a227]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e5c66e]">
                SAV7 IMPEX · Precious Metals Division
              </span>
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Gold &{" "}
              <span className="text-[#d7b44d]">
                Precious Metals
              </span>{" "}
              Trading
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Exploring precious metals trade opportunities through product
              specifications, business enquiries and international trade
              discussions. Connect with SAV7 IMPEX for gold, silver and
              precious metals requirements.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#c9a227] px-7 py-4 text-sm font-bold text-[#091c30] transition hover:-translate-y-1 hover:bg-[#dfbd57]"
              >
                Submit Gold Enquiry
                <span>→</span>
              </Link>

              <Link
                href="#our-products"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#c9a227] hover:text-[#e5c66e]"
              >
                Explore Products
              </Link>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-7">
              <div>
                <p className="text-xl font-bold text-[#e0bd55]">Gold</p>
                <p className="mt-1 text-xs text-slate-400">Bullion & Bars</p>
              </div>
              <div>
                <p className="text-xl font-bold text-[#e0bd55]">Silver</p>
                <p className="mt-1 text-xs text-slate-400">Bullion & Products</p>
              </div>
              <div>
                <p className="text-xl font-bold text-[#e0bd55]">Global</p>
                <p className="mt-1 text-xs text-slate-400">Trade Enquiries</p>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-0 rounded-[40px] bg-[#c9a227]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-[#d7b44d]/20 bg-gradient-to-br from-[#19334b] via-[#10283e] to-[#071522] p-5 shadow-2xl sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7b44d]">
                  Precious Metals
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-slate-300">
                  SAV7 IMPEX
                </span>
              </div>

              <div className="relative flex min-h-[300px] items-center justify-center sm:min-h-[360px]">
                <div className="absolute h-64 w-64 rounded-full border border-[#c9a227]/20" />
                <div className="absolute h-52 w-52 rounded-full border border-[#c9a227]/20" />

                <div className="relative flex h-52 w-52 rotate-[-8deg] items-center justify-center rounded-3xl border border-[#f3df9b]/60 bg-gradient-to-br from-[#f9e8a7] via-[#c9a227] to-[#846016] shadow-[0_25px_70px_rgba(201,162,39,0.3)] sm:h-60 sm:w-60">
                  <div className="absolute inset-3 rounded-2xl border border-[#fff4c9]/50" />
                  <div className="text-center text-[#49370e]">
                    <div className="text-6xl font-black tracking-tighter">
                      Au
                    </div>
                    <div className="mt-2 text-xs font-bold uppercase tracking-[0.3em]">
                      GOLD
                    </div>
                    <div className="mt-3 text-[9px] font-semibold tracking-widest">
                      PRECIOUS METALS
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-5 left-0 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
                  <p className="text-xs font-bold text-white">Gold Bullion</p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Product Enquiries
                  </p>
                </div>

                <div className="absolute right-0 top-8 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
                  <p className="text-xs font-bold text-white">Silver</p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Precious Metals
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-lg font-bold text-[#e2c46c]">Au</p>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-400">
                    Gold
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-lg font-bold text-slate-200">Ag</p>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-400">
                    Silver
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
              About Our Division
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#102b46] sm:text-4xl">
              Connecting Precious Metals Requirements With Trade
              Opportunities
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
            <p>
              SAV7 IMPEX PRIVATE LIMITED operates across multiple business
              divisions, including gold and precious metals and
              pharmaceuticals and healthcare. Our precious metals division
              focuses on enquiries relating to gold, silver and other metal
              product requirements.
            </p>

            <p>
              Every proposed transaction requires attention to product
              specifications, quantity, origin, destination, commercial
              arrangements and applicable regulatory requirements. These
              details help establish the scope of an enquiry before any
              transaction is considered.
            </p>

            <p>
              Whether you are enquiring about gold bullion, gold bars or
              silver products, you can share your requirements with our team
              for further discussion.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-bold text-[#00875a] hover:gap-3"
            >
              Discover SAV7 IMPEX <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="our-products"
        className="bg-[#f7f9fb] px-5 py-20 sm:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b68b31]">
              Our Product Categories
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#102b46] sm:text-4xl">
              Precious Metals Product Enquiries
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              Explore our key precious metals categories and share your
              specifications for a business enquiry.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {products.map((product) => (
              <div
                key={product.number}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a227]/50 hover:shadow-xl hover:shadow-[#102b46]/5 sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-black ${
                      product.color === "gold"
                        ? "bg-[#fbf5e9] text-[#b68b31]"
                        : product.color === "silver"
                          ? "bg-slate-100 text-slate-600"
                          : "bg-[#edf3f8] text-[#102b46]"
                    }`}
                  >
                    {product.icon}
                  </div>

                  <span className="text-sm font-bold text-slate-300">
                    {product.number}
                  </span>
                </div>

                <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.15em] text-[#b68b31]">
                  {product.subtitle}
                </p>

                <h3 className="mt-2 text-xl font-extrabold text-[#102b46]">
                  {product.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {product.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-50 px-3 py-2 text-[10px] font-semibold text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#00875a] transition-all group-hover:gap-3"
                >
                  Enquire Now <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b68b31]">
              Product Information
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#102b46] sm:text-4xl">
              Clear Specifications. Informed Trade Discussions.
            </h2>

            <p className="mt-5 text-sm leading-8 text-slate-500">
              Precious metals transactions require accurate product
              information. Providing clear specifications helps all parties
              understand the proposed requirements and assess the transaction
              appropriately.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#102b46] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#00875a]"
            >
              Discuss Your Requirements <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                title: "Metal Type",
                text: "Gold, silver or another precious metal.",
                icon: "01",
              },
              {
                title: "Purity & Quality",
                text: "Required purity, grade and product specifications.",
                icon: "02",
              },
              {
                title: "Quantity & Weight",
                text: "Preferred weight, quantity and packaging details.",
                icon: "03",
              },
              {
                title: "Origin & Destination",
                text: "Proposed origin, destination and delivery requirements.",
                icon: "04",
              },
              {
                title: "Documentation",
                text: "Applicable transaction and regulatory documents.",
                icon: "05",
              },
              {
                title: "Commercial Terms",
                text: "Proposed pricing, payment and trade conditions.",
                icon: "06",
              },
            ].map((item) => (
              <div
                key={item.icon}
                className="rounded-2xl border border-slate-200 p-5 transition hover:border-[#c9a227]/50 hover:bg-[#fbf9f3]"
              >
                <span className="text-xs font-bold text-[#b68b31]">
                  {item.icon}
                </span>
                <h3 className="mt-4 font-bold text-[#102b46]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRADE PROCESS */}
      <section className="bg-[#091c30] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d7b44d]">
              How It Works
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              Our Precious Metals Enquiry Process
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              A structured approach to understanding product requirements and
              discussing potential precious metals transactions.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#c9a227]/30 bg-[#c9a227]/10 text-sm font-bold text-[#e0bd55]">
                  {step.number}
                </div>

                <h3 className="text-lg font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>

                {index !== 3 && (
                  <div className="absolute left-16 top-7 hidden h-px w-[calc(100%-2rem)] bg-white/10 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIBLE TRADING */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl border border-[#c9a227]/20 bg-[#fbf8ef]">
            <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:p-14">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a17a21]">
                  Responsible Trade Practices
                </span>

                <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#102b46] sm:text-4xl">
                  Transparency & Regulatory Awareness Matter
                </h2>

                <p className="mt-5 text-sm leading-8 text-slate-600">
                  Precious metals are subject to applicable national and
                  international regulations. Proposed transactions must be
                  assessed in accordance with relevant legal requirements,
                  documentation obligations and applicable permissions.
                </p>

                <p className="mt-4 text-sm leading-8 text-slate-600">
                  Product specifications, origin information, counterparty
                  details, payment arrangements and logistics should be
                  appropriately reviewed before proceeding.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Product specification review",
                  "Counterparty and transaction checks",
                  "Applicable regulatory documentation",
                  "Commercial and logistics assessment",
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
        </div>
      </section>

      {/* OTHER DIVISION */}
      <section className="bg-[#f7f9fb] px-5 py-16 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 lg:flex-row lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00875a]">
              Explore Our Other Division
            </span>

            <h2 className="mt-3 text-2xl font-extrabold text-[#102b46] sm:text-3xl">
              Pharmaceuticals & Healthcare
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              Alongside precious metals, SAV7 IMPEX also focuses on
              pharmaceutical and healthcare product enquiries.
            </p>
          </div>

          <Link
            href="/pharmaceuticals"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl border border-[#00875a] px-6 py-4 text-sm font-bold text-[#00875a] transition hover:bg-[#00875a] hover:text-white"
          >
            Explore Pharmaceuticals <span>→</span>
          </Link>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b68b31]">
            Gold & Precious Metals Import Export
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#102b46] sm:text-4xl">
            Gold, Silver & Precious Metals Trade Enquiries
          </h2>

          <div className="mt-8 space-y-6 text-sm leading-8 text-slate-600 sm:text-base">
            <p>
              Gold and precious metals play an important role in international
              commerce, manufacturing, investment-related activities and
              financial markets. Businesses involved in precious metals
              transactions need to consider product quality, purity,
              specifications, sourcing, commercial terms and applicable
              regulations. SAV7 IMPEX PRIVATE LIMITED provides a business
              contact point for enquiries relating to gold, silver and other
              precious metals.
            </p>

            <h3 className="pt-3 text-xl font-bold text-[#102b46]">
              Gold Bullion and Gold Bars
            </h3>

            <p>
              Gold bullion and gold bars are commonly discussed in precious
              metals trade. Buyers and sellers may have different requirements
              relating to weight, purity, origin, form and transaction size.
              Providing these details at the enquiry stage helps establish
              what product is being requested. Any specific gold product,
              quantity and commercial arrangement must be confirmed
              separately.
            </p>

            <h3 className="pt-3 text-xl font-bold text-[#102b46]">
              Silver Bullion and Silver Products
            </h3>

            <p>
              Silver is another important precious metal used across several
              industries and commercial applications. Enquiries can include
              silver bullion and other silver products, depending on the
              intended application and product specifications. Quantity,
              purity, product form and destination are relevant details when
              discussing a proposed silver transaction.
            </p>

            <h3 className="pt-3 text-xl font-bold text-[#102b46]">
              International Precious Metals Trade
            </h3>

            <p>
              International precious metals transactions involve considerations
              beyond product selection. Import and export requirements can
              differ according to the metal, country of origin, destination,
              transaction structure and applicable regulations. Documentation,
              customs procedures, regulatory permissions and counterparty
              verification must be considered before any transaction proceeds.
            </p>

            <h3 className="pt-3 text-xl font-bold text-[#102b46]">
              Submit Your Precious Metals Enquiry
            </h3>

            <p>
              If your business is exploring gold bullion, gold bars, silver or
              other precious metals, you can contact SAV7 IMPEX with your
              requirements. Include the product category, desired quantity,
              specifications, destination country and any additional
              commercial information. This provides a starting point for
              discussing product requirements and potential trade
              arrangements.
            </p>

            <p>
              SAV7 IMPEX operates across both precious metals and
              pharmaceuticals and healthcare business divisions. This
              diversified business structure is reflected in its international
              trade enquiry approach, with product-specific requirements
              considered separately according to applicable conditions.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-[#102b46] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#00875a]"
            >
              Contact Our Team →
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

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[#091c30] px-5 py-20 sm:px-8 lg:py-24">
        <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border border-[#c9a227]/10" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-[#c9a227]/10" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d7b44d]">
            Start a Business Enquiry
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            Looking for Gold or Precious Metals?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
            Share your product specifications and business requirements with
            SAV7 IMPEX. Contact our team to discuss your proposed precious
            metals enquiry.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#c9a227] px-8 py-4 text-sm font-bold text-[#091c30] transition hover:-translate-y-1 hover:bg-[#e0bd55]"
            >
              Request a Quotation <span>→</span>
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
