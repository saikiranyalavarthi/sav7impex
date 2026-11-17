
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Silver Products & Silver Bullion Trade | SAV7 IMPEX",
  description:
    "Explore silver bullion, silver bars and precious metals trade enquiries with SAV7 IMPEX PRIVATE LIMITED. Discuss silver specifications, quantities, sourcing and international trade requirements.",
  alternates: {
    canonical: "https://www.sav7impex.in/silver-products",
  },
  openGraph: {
    title: "Silver Products & Bullion | SAV7 IMPEX",
    description:
      "Silver bullion, silver bars and international precious metals trade enquiries.",
    url: "https://www.sav7impex.in/silver-products",
    siteName: "SAV7 IMPEX PRIVATE LIMITED",
    type: "website",
  },
};

const products = [
  {
    number: "01",
    symbol: "Ag",
    title: "Silver Bullion",
    subtitle: "Silver for Trade Enquiries",
    description:
      "Enquire about silver bullion requirements with details covering product form, purity, preferred quantity and proposed destination.",
    tags: ["Silver bullion", "Purity specifications", "Trade enquiries"],
  },
  {
    number: "02",
    symbol: "BAR",
    title: "Silver Bars",
    subtitle: "Bar Weights & Specifications",
    description:
      "Discuss silver bar requirements based on preferred weight, dimensions, purity, product specifications and transaction quantity.",
    tags: ["Silver bars", "Weight details", "Product specifications"],
  },
  {
    number: "03",
    symbol: "999",
    title: "Silver Purity",
    subtitle: "Quality Specifications",
    description:
      "Share your required silver purity and quality specifications. Product grade and applicable verification requirements need to be confirmed.",
    tags: ["Purity requirements", "Quality details", "Product grade"],
  },
  {
    number: "04",
    symbol: "PM",
    title: "Other Silver Products",
    subtitle: "Specific Business Requirements",
    description:
      "Submit enquiries for other silver product forms and share your intended application and product requirements for assessment.",
    tags: ["Silver products", "Custom requirements", "Bulk enquiries"],
  },
];

const specifications = [
  {
    title: "Silver Purity",
    description:
      "Specify the required purity, fineness and quality grade.",
  },
  {
    title: "Product Form",
    description:
      "Identify bullion, bars or another required silver product.",
  },
  {
    title: "Weight & Quantity",
    description:
      "Provide the preferred weight, quantity and unit of measurement.",
  },
  {
    title: "Origin Information",
    description:
      "Share the proposed sourcing country and origin requirements.",
  },
  {
    title: "Destination Country",
    description:
      "Identify the intended destination and import requirements.",
  },
  {
    title: "Commercial Conditions",
    description:
      "Discuss proposed pricing, payment and delivery arrangements.",
  },
];

const process = [
  {
    number: "01",
    title: "Submit Your Enquiry",
    description:
      "Share your silver product requirement, quantity, specifications and destination.",
  },
  {
    number: "02",
    title: "Requirement Review",
    description:
      "Review the proposed silver product form, purity and commercial requirements.",
  },
  {
    number: "03",
    title: "Documentation Review",
    description:
      "Identify relevant transaction documents, customs procedures and applicable permissions.",
  },
  {
    number: "04",
    title: "Trade Discussion",
    description:
      "Discuss product availability, commercial terms and possible transaction arrangements.",
  },
];

const faqs = [
  {
    question: "What silver products can I enquire about?",
    answer:
      "You can enquire about silver bullion, silver bars and other specified silver product forms. Product availability and specifications need to be confirmed for each proposed transaction.",
  },
  {
    question: "What does 999 fine silver mean?",
    answer:
      "999 fine silver generally refers to silver with a fineness of 999 parts per thousand, equivalent to 99.9% silver content. Actual product specifications should be verified using the relevant product documentation.",
  },
  {
    question: "Can I submit bulk silver requirements?",
    answer:
      "You can submit proposed quantities and specifications through our contact form. Any transaction is subject to product availability, counterparty verification and applicable regulatory requirements.",
  },
  {
    question: "What information is needed for a silver enquiry?",
    answer:
      "Provide the required product form, purity, quantity, weight, origin country, destination country and any additional commercial requirements.",
  },
  {
    question: "Are silver imports and exports regulated?",
    answer:
      "Yes. International silver transactions may be subject to customs classification, import and export policies, applicable permissions, duties, documentation and other country-specific requirements.",
  },
  {
    question: "How can I request silver product pricing?",
    answer:
      "Contact SAV7 IMPEX with your silver product specifications, quantity and destination. Pricing and commercial terms can be discussed after reviewing your enquiry.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Silver Products",
  description:
    "Silver bullion, silver bars and precious metals trade enquiries from SAV7 IMPEX PRIVATE LIMITED.",
  url: "https://www.sav7impex.in/silver-products",
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

export default function SilverProductsPage() {
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(190,205,220,0.17),transparent_35%),radial-gradient(ellipse_at_5%_95%,rgba(0,135,90,0.14),transparent_35%)]" />

        <div className="absolute -right-24 top-8 h-96 w-96 rounded-full border border-slate-300/10" />
        <div className="absolute -right-8 top-24 h-72 w-72 rounded-full border border-slate-300/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-300/20 bg-white/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#c9a227]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-200">
                SAV7 IMPEX · Silver Products Division
              </span>
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Silver Products &{" "}
              <span className="text-[#c8d5e3]">Bullion</span> Trade
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore silver bullion, silver bars and other silver product
              enquiries. Connect with SAV7 IMPEX to discuss product
              specifications, quantities and international trade requirements.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#c9a227] px-7 py-4 text-sm font-bold text-[#091c30] transition hover:-translate-y-1 hover:bg-[#dfbd57]"
              >
                Submit Silver Enquiry <span>→</span>
              </Link>

              <Link
                href="#products"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#c9a227] hover:text-[#e5c66e]"
              >
                Explore Products
              </Link>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-7">
              <div>
                <p className="text-xl font-bold text-[#d6e0e9]">Ag</p>
                <p className="mt-1 text-xs text-slate-400">Silver Bullion</p>
              </div>
              <div>
                <p className="text-xl font-bold text-[#d6e0e9]">999</p>
                <p className="mt-1 text-xs text-slate-400">Purity Enquiries</p>
              </div>
              <div>
                <p className="text-xl font-bold text-[#d6e0e9]">Global</p>
                <p className="mt-1 text-xs text-slate-400">Trade Enquiries</p>
              </div>
            </div>
          </div>

          {/* SILVER HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-0 rounded-full bg-slate-300/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-slate-300/20 bg-gradient-to-br from-[#253b50] via-[#132a40] to-[#071522] p-6 shadow-2xl sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7b44d]">
                    Precious Metals
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Silver Product Enquiries
                  </p>
                </div>

                <span className="rounded-full border border-white/15 px-3 py-2 text-[10px] font-bold text-slate-200">
                  Ag · 47
                </span>
              </div>

              <div className="relative flex min-h-[310px] items-center justify-center">
                <div className="absolute h-64 w-64 rounded-full border border-slate-200/20" />
                <div className="absolute h-48 w-48 rounded-full border border-slate-200/20" />

                <div className="relative flex h-48 w-48 rotate-[-8deg] items-center justify-center rounded-3xl border border-white/70 bg-gradient-to-br from-[#f7f9fc] via-[#bfcbd7] to-[#78899a] shadow-[0_25px_70px_rgba(190,205,220,0.25)] sm:h-56 sm:w-56">
                  <div className="absolute inset-3 rounded-2xl border border-white/60" />

                  <div className="text-center text-[#26384b]">
                    <p className="text-6xl font-black tracking-tighter">
                      Ag
                    </p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.3em]">
                      SILVER
                    </p>
                    <p className="mt-3 text-[9px] font-bold tracking-widest">
                      PRECIOUS METALS
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-4 left-0 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
                  <p className="text-xs font-bold text-white">Silver Bullion</p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Product Enquiries
                  </p>
                </div>

                <div className="absolute right-0 top-5 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
                  <p className="text-xs font-bold text-white">Silver Bars</p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Specifications
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-lg font-bold text-slate-200">Ag</p>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-400">
                    Silver
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-lg font-bold text-slate-200">999</p>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-400">
                    Fine Silver Reference
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
              About Silver Products
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#102b46] sm:text-4xl">
              Silver Trade Enquiries with Product-Focused Requirements
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
            <p>
              Silver is an important precious metal used in jewellery,
              electronics, industrial applications and other commercial
              sectors. Its physical properties, product quality and market
              applications make it relevant to a variety of international
              trade activities.
            </p>

            <p>
              SAV7 IMPEX PRIVATE LIMITED provides a business contact point for
              silver bullion, silver bars and other silver product enquiries.
              Businesses can share their product requirements, preferred
              purity, quantity and intended destination for further discussion.
            </p>

            <p>
              Every proposed transaction requires appropriate consideration
              of product availability, commercial conditions, counterparty
              verification and applicable import or export regulations.
            </p>

            <Link
              href="/gold-precious-metals"
              className="inline-flex items-center gap-2 font-bold text-[#00875a] hover:gap-3"
            >
              Explore All Precious Metals <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        className="bg-[#f7f9fb] px-5 py-20 sm:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b68b31]">
              Our Product Categories
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#102b46] sm:text-4xl">
              Silver Products for Business Enquiries
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              Explore silver product categories and share your requirements
              for further discussion.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {products.map((product) => (
              <div
                key={product.number}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#b7c6d4] hover:shadow-xl hover:shadow-[#102b46]/5 sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf2f6] text-lg font-black text-[#536b82]">
                    {product.symbol}
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
              Silver Product Specifications
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#102b46] sm:text-4xl">
              Define Your Silver Requirements Clearly
            </h2>

            <p className="mt-5 text-sm leading-8 text-slate-500">
              Accurate product specifications help establish the scope of a
              silver trade enquiry. Share the relevant product information
              when contacting our team.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#102b46] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#00875a]"
            >
              Discuss Your Requirements <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {specifications.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-5 transition hover:border-[#b7c6d4] hover:bg-[#f7f9fb]"
              >
                <span className="text-xs font-bold text-[#b68b31]">
                  0{index + 1}
                </span>

                <h3 className="mt-4 font-bold text-[#102b46]">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-[#091c30] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d7b44d]">
              Silver Applications
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              Silver Across Commercial Industries
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Silver has a wide range of applications because of its
              electrical conductivity, reflectivity and other material
              properties.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Jewellery",
                text: "Silver jewellery, ornaments and decorative applications.",
              },
              {
                number: "02",
                title: "Electronics",
                text: "Silver applications in electrical and electronic components.",
              },
              {
                number: "03",
                title: "Industrial",
                text: "Silver uses in selected industrial and manufacturing processes.",
              },
              {
                number: "04",
                title: "Commercial",
                text: "Silver products used across various commercial sectors.",
              },
            ].map((item) => (
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
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRADE PROCESS */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b68b31]">
              Our Process
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#102b46] sm:text-4xl">
              From Silver Enquiry to Trade Discussion
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              A structured approach to understanding proposed silver product
              requirements.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[#b7c6d4] hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#edf2f6] text-sm font-extrabold text-[#536b82]">
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

      {/* RESPONSIBLE TRADE */}
      <section className="bg-[#f7f9fb] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:p-14">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b68b31]">
                  Responsible Trade Practices
                </span>

                <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#102b46] sm:text-4xl">
                  Product Verification & Regulatory Awareness
                </h2>

                <p className="mt-5 text-sm leading-8 text-slate-600">
                  International silver transactions require appropriate
                  attention to product descriptions, purity, origin,
                  documentation, customs requirements and applicable trade
                  policies. Requirements may differ depending on the product
                  form and countries involved.
                </p>

                <p className="mt-4 text-sm leading-8 text-slate-600">
                  Product specifications and transaction documentation should
                  be reviewed before any proposed commercial arrangement
                  proceeds.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Product specifications and purity details",
                  "Origin and counterparty information",
                  "Applicable import and export documents",
                  "Customs and regulatory requirements",
                  "Commercial and logistics assessment",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-xl border border-slate-200 bg-[#f7f9fb] p-4"
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
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 lg:flex-row lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b68b31]">
              Explore Our Other Precious Metals
            </span>

            <h2 className="mt-3 text-2xl font-extrabold text-[#102b46] sm:text-3xl">
              Gold & Precious Metals
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              Explore gold bullion, gold bars and other precious metals
              product enquiries with SAV7 IMPEX.
            </p>
          </div>

          <Link
            href="/gold-precious-metals"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl border border-[#b68b31] px-6 py-4 text-sm font-bold text-[#a17a21] transition hover:bg-[#b68b31] hover:text-white"
          >
            Explore Gold Products <span>→</span>
          </Link>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="bg-[#f7f9fb] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b68b31]">
            Silver Bullion & Silver Products
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#102b46] sm:text-4xl">
            Silver Products, Bullion & International Trade Enquiries
          </h2>

          <div className="mt-8 space-y-6 text-sm leading-8 text-slate-600 sm:text-base">
            <p>
              Silver is a widely used precious metal with applications in
              jewellery, electronics, manufacturing and several industrial
              sectors. Its physical and chemical properties make it a useful
              material for both commercial and specialised applications.
              Silver products are traded in different forms and specifications
              according to the requirements of buyers, manufacturers and
              other businesses.
            </p>

            <h3 className="pt-3 text-xl font-bold text-[#102b46]">
              Silver Bullion and Silver Bars
            </h3>

            <p>
              Silver bullion and silver bars are important product categories
              in the precious metals market. Buyers may specify the required
              weight, purity, bar format, quantity and other product
              characteristics. Clear specifications are useful when
              communicating a proposed silver product requirement and
              evaluating a commercial transaction.
            </p>

            <h3 className="pt-3 text-xl font-bold text-[#102b46]">
              Understanding Silver Purity
            </h3>

            <p>
              Silver purity describes the proportion of silver in a material.
              For example, 999 fine silver represents 999 parts of silver per
              1,000 parts of material, commonly expressed as 99.9% purity.
              Other silver grades may also be available in different
              applications. Actual purity, product quality and supporting
              documentation should be confirmed for the specific product.
            </p>

            <h3 className="pt-3 text-xl font-bold text-[#102b46]">
              Silver in Industrial and Commercial Applications
            </h3>

            <p>
              Silver has high electrical conductivity and is used in
              electrical contacts, electronic components, selected
              manufacturing processes and other industrial applications.
              Silver is also used in jewellery, ornaments and decorative
              products. Different applications may require different
              specifications and product forms.
            </p>

            <h3 className="pt-3 text-xl font-bold text-[#102b46]">
              International Silver Import and Export
            </h3>

            <p>
              Silver import and export transactions may involve product
              classification, customs declarations, origin information,
              commercial invoices, transport documentation and applicable
              regulatory requirements. Requirements depend on the product,
              transaction structure and countries involved. Businesses should
              verify the relevant import and export procedures before
              proceeding with a proposed transaction.
            </p>

            <h3 className="pt-3 text-xl font-bold text-[#102b46]">
              Silver Product Enquiries with SAV7 IMPEX
            </h3>

            <p>
              SAV7 IMPEX PRIVATE LIMITED provides a business contact point for
              silver bullion, silver bars and other silver product enquiries.
              Businesses exploring silver requirements can submit their
              product specifications, quantity, origin, destination and
              intended commercial application. This information helps
              establish the scope of the enquiry for further discussion,
              subject to availability and applicable conditions.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-[#102b46] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#00875a]"
            >
              Submit Silver Enquiry →
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-bold text-[#102b46] transition hover:border-[#b68b31]"
            >
              Explore Our Services
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
              Silver Products FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-[#b7c6d4] sm:p-6"
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
        <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border border-slate-300/10" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-slate-300/10" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d7b44d]">
            SAV7 IMPEX · Silver Products
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            Looking for Silver Bullion or Silver Products?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
            Share your silver product requirements, quantity and destination.
            Connect with SAV7 IMPEX to discuss your proposed business enquiry.
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
