
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pharmaceuticals & Healthcare Products | SAV7 IMPEX",
  description:
    "Explore pharmaceutical and healthcare product enquiries with SAV7 IMPEX PRIVATE LIMITED. Generic medicines, pharmaceutical formulations, APIs and healthcare products for international trade discussions.",
  alternates: {
    canonical: "https://www.sav7impex.in/pharmaceuticals",
  },
  openGraph: {
    title: "Pharmaceuticals & Healthcare | SAV7 IMPEX",
    description:
      "Pharmaceutical formulations, generic medicines, APIs and healthcare product enquiries.",
    url: "https://www.sav7impex.in/pharmaceuticals",
    siteName: "SAV7 IMPEX PRIVATE LIMITED",
    type: "website",
  },
};

const categories = [
  {
    number: "01",
    icon: "Rx",
    title: "Generic Medicines",
    subtitle: "Generic Pharmaceutical Products",
    description:
      "Explore enquiries relating to generic medicine products, dosage forms, strengths, packaging and country-specific market requirements.",
    features: ["Generic formulations", "Dosage forms", "Product enquiries"],
  },
  {
    number: "02",
    icon: "API",
    title: "Active Pharmaceutical Ingredients",
    subtitle: "Pharmaceutical Raw Materials",
    description:
      "Submit requirements for active pharmaceutical ingredients, including product names, specifications, grades and intended applications.",
    features: ["API enquiries", "Specifications", "Raw materials"],
  },
  {
    number: "03",
    icon: "FM",
    title: "Pharmaceutical Formulations",
    subtitle: "Finished Dosage Forms",
    description:
      "Discuss pharmaceutical formulation requirements across tablets, capsules, syrups, injectables and other dosage forms.",
    features: ["Tablets & capsules", "Liquid formulations", "Other dosage forms"],
  },
  {
    number: "04",
    icon: "HC",
    title: "Healthcare Products",
    subtitle: "Healthcare & Medical Supplies",
    description:
      "Enquire about healthcare products and medical supplies based on intended application, specifications and destination requirements.",
    features: ["Healthcare products", "Medical supplies", "Product requirements"],
  },
];

const dosageForms = [
  {
    symbol: "TB",
    title: "Tablets",
    description:
      "Solid oral dosage forms with specified strengths and packaging requirements.",
  },
  {
    symbol: "CP",
    title: "Capsules",
    description:
      "Capsule formulations with product-specific composition and dosage requirements.",
  },
  {
    symbol: "SY",
    title: "Syrups & Suspensions",
    description:
      "Liquid oral formulations with appropriate product and packaging specifications.",
  },
  {
    symbol: "IN",
    title: "Injectables",
    description:
      "Sterile pharmaceutical product enquiries subject to applicable regulatory and quality requirements.",
  },
  {
    symbol: "TP",
    title: "Topical Products",
    description:
      "Creams, ointments, gels and other topical formulation requirements.",
  },
  {
    symbol: "OT",
    title: "Other Formulations",
    description:
      "Additional dosage forms and specialised pharmaceutical product enquiries.",
  },
];

const process = [
  {
    number: "01",
    title: "Submit Product Enquiry",
    description:
      "Share the product name, dosage form, strength, quantity and destination country.",
  },
  {
    number: "02",
    title: "Requirement Assessment",
    description:
      "Review the proposed product requirements, specifications and intended market.",
  },
  {
    number: "03",
    title: "Documentation & Compliance",
    description:
      "Consider applicable product documentation, regulatory permissions and market requirements.",
  },
  {
    number: "04",
    title: "Commercial Discussion",
    description:
      "Discuss availability, commercial conditions and potential transaction arrangements.",
  },
];

const information = [
  {
    title: "Product Name",
    description:
      "Specify the generic name, API name or healthcare product category.",
  },
  {
    title: "Dosage Form",
    description:
      "Identify tablets, capsules, liquids, injectables or other forms.",
  },
  {
    title: "Strength & Composition",
    description:
      "Share required strength, concentration and relevant specifications.",
  },
  {
    title: "Quantity",
    description:
      "Mention the proposed quantity and preferred packaging.",
  },
  {
    title: "Destination Country",
    description:
      "Identify the target market and applicable import requirements.",
  },
  {
    title: "Regulatory Requirements",
    description:
      "Provide any known product registration, authorisation or documentation requirements.",
  },
];

const faqs = [
  {
    question: "What pharmaceutical products can I enquire about?",
    answer:
      "You can submit enquiries relating to generic medicines, pharmaceutical formulations, active pharmaceutical ingredients and healthcare products. Specific products, availability and transaction conditions require individual confirmation.",
  },
  {
    question: "What are generic medicines?",
    answer:
      "Generic medicines contain the same active ingredient as their corresponding reference medicines and are assessed according to applicable regulatory requirements. Product approval, bioequivalence and substitution requirements vary by country and product.",
  },
  {
    question: "What are Active Pharmaceutical Ingredients?",
    answer:
      "Active Pharmaceutical Ingredients, commonly called APIs, are the substances responsible for the intended pharmacological activity of a medicine. Their specifications, quality requirements and regulatory status depend on the intended product and market.",
  },
  {
    question: "Which pharmaceutical dosage forms can I enquire about?",
    answer:
      "Enquiries may include tablets, capsules, syrups, suspensions, injectables, creams, ointments and other formulations, subject to product availability and applicable requirements.",
  },
  {
    question: "Are pharmaceutical imports and exports regulated?",
    answer:
      "Yes. Pharmaceutical trade is regulated by the relevant authorities in the exporting and importing countries. Product registration, manufacturing authorisations, import permissions, quality documentation, labelling and other requirements may apply.",
  },
  {
    question: "Can I submit bulk pharmaceutical requirements?",
    answer:
      "You can share the product name, dosage form, strength, quantity, packaging and destination through our enquiry form. Any proposed supply arrangement is subject to review, verification and applicable permissions.",
  },
  {
    question: "How can I request pharmaceutical product information?",
    answer:
      "Contact SAV7 IMPEX with your product details, specifications and destination country. Our team can use the information to understand the enquiry and discuss possible next steps.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Pharmaceuticals & Healthcare",
  description:
    "Pharmaceutical and healthcare product enquiries from SAV7 IMPEX PRIVATE LIMITED.",
  url: "https://www.sav7impex.in/pharmaceuticals",
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

export default function PharmaceuticalsPage() {
  return (
    <main className="overflow-hidden bg-white text-[#26384b]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema),
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,135,90,0.22),transparent_35%),radial-gradient(circle_at_5%_90%,rgba(201,162,39,0.12),transparent_35%)]" />

        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full border border-[#00875a]/15" />
        <div className="absolute -right-10 top-16 h-72 w-72 rounded-full border border-[#00875a]/15" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#00875a]/40 bg-[#00875a]/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#26c58b]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7ee0b7]">
                SAV7 IMPEX · Healthcare Division
              </span>
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Pharmaceuticals &{" "}
              <span className="text-[#38c995]">
                Healthcare
              </span>{" "}
              Products
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Exploring pharmaceutical formulations, generic medicines,
              active pharmaceutical ingredients and healthcare product
              requirements through business enquiries and international
              trade discussions.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#00875a] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#009f69]"
              >
                Submit Product Enquiry <span>→</span>
              </Link>

              <Link
                href="#categories"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#00875a] hover:text-[#38c995]"
              >
                Explore Categories
              </Link>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-7">
              <div>
                <p className="text-lg font-bold text-[#38c995]">Generic</p>
                <p className="mt-1 text-xs text-slate-400">
                  Medicines
                </p>
              </div>

              <div>
                <p className="text-lg font-bold text-[#38c995]">API</p>
                <p className="mt-1 text-xs text-slate-400">
                  Ingredients
                </p>
              </div>

              <div>
                <p className="text-lg font-bold text-[#38c995]">
                  Healthcare
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Products
                </p>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-0 rounded-full bg-[#00875a]/15 blur-3xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-[#00875a]/25 bg-gradient-to-br from-[#193c4a] via-[#102d3d] to-[#071522] p-5 shadow-2xl sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#38c995]">
                    Pharmaceuticals
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Healthcare Product Enquiries
                  </p>
                </div>

                <span className="rounded-full border border-white/10 px-3 py-2 text-[10px] text-slate-300">
                  SAV7 IMPEX
                </span>
              </div>

              <div className="relative flex min-h-[310px] items-center justify-center">
                <div className="absolute h-64 w-64 rounded-full border border-[#38c995]/20" />
                <div className="absolute h-48 w-48 rounded-full border border-[#38c995]/20" />

                <div className="relative flex h-48 w-48 rotate-[-8deg] items-center justify-center rounded-3xl border border-[#9ce7c7]/60 bg-gradient-to-br from-[#e0fff0] via-[#65d6a7] to-[#00875a] shadow-[0_25px_70px_rgba(0,135,90,0.3)] sm:h-56 sm:w-56">
                  <div className="absolute inset-3 rounded-2xl border border-white/50" />

                  <div className="text-center text-[#064a35]">
                    <p className="text-6xl font-black tracking-tighter">
                      Rx
                    </p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em]">
                      HEALTHCARE
                    </p>
                    <p className="mt-3 text-[9px] font-bold tracking-widest">
                      PHARMACEUTICALS
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-4 left-0 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
                  <p className="text-xs font-bold text-white">
                    Formulations
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Product Categories
                  </p>
                </div>

                <div className="absolute right-0 top-5 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
                  <p className="text-xs font-bold text-white">
                    APIs
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Ingredient Enquiries
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-bold text-[#38c995]">
                    Generic Medicines
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Product Enquiries
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-bold text-[#38c995]">
                    Healthcare
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Medical Supplies
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
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00875a]">
              About Our Healthcare Division
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#102b46] sm:text-4xl">
              Pharmaceutical & Healthcare Product Enquiries
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
            <p>
              Pharmaceuticals and healthcare products are essential
              components of modern healthcare systems. International trade
              in these products involves product specifications, quality
              requirements, documentation and compliance with the laws
              governing the relevant markets.
            </p>

            <p>
              SAV7 IMPEX PRIVATE LIMITED provides a business contact point
              for enquiries relating to generic medicines, pharmaceutical
              formulations, active pharmaceutical ingredients and
              healthcare products.
            </p>

            <p>
              Product requirements and proposed transactions are considered
              according to product-specific conditions, applicable
              permissions, destination-country regulations and commercial
              arrangements.
            </p>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-bold text-[#00875a] hover:gap-3"
            >
              Explore Our Business Services <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section
        id="categories"
        className="bg-[#f7f9fb] px-5 py-20 sm:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00875a]">
              Our Product Categories
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#102b46] sm:text-4xl">
              Explore Pharmaceuticals & Healthcare
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              Explore different pharmaceutical and healthcare product
              categories and share your specific requirements.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {categories.map((category) => (
              <div
                key={category.number}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00875a]/40 hover:shadow-xl hover:shadow-[#102b46]/5 sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf7f1] text-lg font-black text-[#00875a]">
                    {category.icon}
                  </div>

                  <span className="text-sm font-bold text-slate-300">
                    {category.number}
                  </span>
                </div>

                <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.15em] text-[#00875a]">
                  {category.subtitle}
                </p>

                <h3 className="mt-2 text-xl font-extrabold text-[#102b46]">
                  {category.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {category.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-slate-50 px-3 py-2 text-[10px] font-semibold text-slate-500"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Link
                  href={
                    category.title === "Generic Medicines"
                      ? "/generic-medicines"
                      : category.title === "Active Pharmaceutical Ingredients"
                        ? "/api-sourcing"
                        : category.title === "Healthcare Products"
                          ? "/healthcare-products"
                          : "/contact"
                  }
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#00875a] transition-all group-hover:gap-3"
                >
                  Explore Category <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOSAGE FORMS */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00875a]">
                Pharmaceutical Formulations
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#102b46] sm:text-4xl">
                Different Pharmaceutical Dosage Forms
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                Pharmaceutical products are developed in different dosage
                forms according to their intended use, composition and
                delivery requirements. Product availability and regulatory
                status must be confirmed for each market.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#102b46] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#00875a]"
              >
                Discuss Product Requirements <span>→</span>
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {dosageForms.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-[#00875a]/40 hover:bg-[#f7fcf9]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf7f1] text-xs font-black text-[#00875a]">
                    {item.symbol}
                  </div>

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
        </div>
      </section>

      {/* API SECTION */}
      <section className="bg-[#091c30] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#38c995]">
              Active Pharmaceutical Ingredients
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Pharmaceutical Raw Materials & API Enquiries
            </h2>

            <p className="mt-5 text-sm leading-8 text-slate-400">
              Active Pharmaceutical Ingredients are the substances
              responsible for the intended pharmacological activity of
              medicines. API-related enquiries require clear identification
              of the substance, specifications, intended application and
              applicable quality and regulatory requirements.
            </p>

            <p className="mt-4 text-sm leading-8 text-slate-400">
              Share the API name, grade, specifications, proposed quantity
              and destination market to establish the scope of your
              requirement.
            </p>

            <Link
              href="/api-sourcing"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#00875a] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#009f69]"
            >
              Explore API Sourcing <span>→</span>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#00875a]/10 blur-3xl" />

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-9">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#38c995]">
                    API Requirements
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Product Information
                  </p>
                </div>

                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00875a]/15 text-lg font-black text-[#38c995]">
                  API
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  "API name and identification",
                  "Required grade and specifications",
                  "Purity and quality requirements",
                  "Quantity and packaging",
                  "Intended market and application",
                  "Applicable technical documentation",
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#00875a]/15 text-[10px] font-bold text-[#38c995]">
                      0{index + 1}
                    </span>

                    <p className="text-sm text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEALTHCARE PRODUCTS */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00875a]">
              Healthcare Products
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#102b46] sm:text-4xl">
              Healthcare & Medical Supply Enquiries
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Explore healthcare-related product requirements and medical
              supply enquiries based on product specifications and
              destination-country conditions.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Medical Consumables",
                text: "Enquiries for selected medical-use consumables and related products.",
                symbol: "MC",
              },
              {
                title: "Healthcare Supplies",
                text: "Healthcare product requirements based on intended use and specifications.",
                symbol: "HS",
              },
              {
                title: "Medical Equipment",
                text: "Enquiries about selected equipment categories, subject to product and regulatory requirements.",
                symbol: "ME",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[#00875a]/40 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf7f1] text-sm font-black text-[#00875a]">
                  {item.symbol}
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#102b46]">
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

      {/* PRODUCT INFORMATION */}
      <section className="bg-[#f7f9fb] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00875a]">
              Enquiry Information
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#102b46] sm:text-4xl">
              What Information Should You Provide?
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Providing clear pharmaceutical product information helps
              establish the scope of a proposed enquiry.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {information.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#00875a]/40 hover:shadow-lg"
              >
                <span className="text-sm font-bold text-[#00875a]">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-lg font-bold text-[#102b46]">
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

      {/* TRADE PROCESS */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00875a]">
              Our Enquiry Process
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#102b46] sm:text-4xl">
              From Pharmaceutical Enquiry to Trade Discussion
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[#00875a]/40 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf7f1] text-sm font-extrabold text-[#00875a]">
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

      {/* REGULATORY */}
      <section className="bg-[#091c30] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#38c995]">
                Quality & Regulatory Awareness
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Pharmaceutical Trade Requires Regulatory Compliance
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-400">
                Pharmaceutical products are subject to regulatory controls
                designed to address product quality, safety, efficacy,
                manufacturing, distribution and market authorisation.
                Requirements depend on the product category and the
                destination country.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-400">
                Product registration, applicable manufacturing and
                distribution permissions, quality documentation, labelling,
                storage and transportation conditions should be reviewed
                before a transaction proceeds.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-400">
                This website does not claim that SAV7 IMPEX holds any
                particular pharmaceutical licence, manufacturing
                certification or product approval.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Applicable product registration",
                "Manufacturing and supply permissions",
                "Quality and technical documentation",
                "Labelling and packaging requirements",
                "Storage and transportation conditions",
                "Destination-country import requirements",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00875a]/20 text-sm font-bold text-[#38c995]">
                    {index + 1}
                  </span>

                  <p className="text-sm font-semibold text-slate-200">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRECIOUS METALS CROSS LINK */}
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 lg:flex-row lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b68b31]">
              Explore Our Other Business Division
            </span>

            <h2 className="mt-3 text-2xl font-extrabold text-[#102b46] sm:text-3xl">
              Gold & Precious Metals
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              Discover gold bullion, gold bars, silver products and
              precious metals trade enquiries.
            </p>
          </div>

          <Link
            href="/precious-metals"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl border border-[#b68b31] px-6 py-4 text-sm font-bold text-[#a17a21] transition hover:bg-[#b68b31] hover:text-white"
          >
            Explore Precious Metals →
          </Link>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="bg-[#f7f9fb] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00875a]">
            Pharmaceutical Import Export
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#102b46] sm:text-4xl">
            Pharmaceutical Products, Generic Medicines & Healthcare Trade
          </h2>

          <div className="mt-8 space-y-6 text-sm leading-8 text-slate-600 sm:text-base">
            <p>
              The pharmaceutical industry plays an important role in
              healthcare systems, medicine development and the supply of
              products used in the prevention and treatment of diseases.
              Pharmaceutical products are manufactured in different
              formulations and strengths to meet specific medical
              requirements. International pharmaceutical trade involves
              product specifications, quality documentation, regulatory
              permissions and destination-market requirements.
            </p>

            <h3 className="pt-3 text-xl font-bold text-[#102b46]">
              Generic Medicines and Pharmaceutical Formulations
            </h3>

            <p>
              Generic medicines are pharmaceutical products developed with
              the same active ingredients as their corresponding reference
              products, subject to the applicable regulatory standards.
              Formulations may include tablets, capsules, syrups,
              suspensions, injectables and topical products. Product
              registration, bioequivalence and other requirements depend
              on the relevant medicine and country.
            </p>

            <p>
              Businesses exploring this category can visit our{" "}
              <Link
                href="/generic-medicines"
                className="font-bold text-[#00875a] underline underline-offset-4"
              >
                generic medicines
              </Link>{" "}
              page for more information.
            </p>

            <h3 className="pt-3 text-xl font-bold text-[#102b46]">
              Active Pharmaceutical Ingredients
            </h3>

            <p>
              Active Pharmaceutical Ingredients are the substances
              responsible for the intended pharmacological activity of
              medicines. API sourcing requirements may include the
              substance name, grade, purity, specifications, intended
              application and technical documentation. Applicable
              manufacturing and quality requirements should be considered
              when evaluating any proposed API transaction.
            </p>

            <p>
              Explore our{" "}
              <Link
                href="/api-sourcing"
                className="font-bold text-[#00875a] underline underline-offset-4"
              >
                API sourcing
              </Link>{" "}
              page for additional information.
            </p>

            <h3 className="pt-3 text-xl font-bold text-[#102b46]">
              Healthcare Products and Medical Supplies
            </h3>

            <p>
              Healthcare products and medical supplies cover different
              categories of products used in healthcare environments.
              Product specifications, intended use, applicable standards,
              registration requirements and import permissions need to
              be assessed according to the specific product and
              destination market.
            </p>

            <h3 className="pt-3 text-xl font-bold text-[#102b46]">
              Pharmaceutical Import and Export Requirements
            </h3>

            <p>
              Pharmaceutical imports and exports are governed by the
              applicable laws and regulatory authorities in the countries
              involved. Depending on the product and transaction, the
              requirements may include product registration, manufacturing
              authorisation, import licences, quality documents,
              certificates, labelling information and customs
              documentation. The requirements should be verified before
              any commercial commitment.
            </p>

            <h3 className="pt-3 text-xl font-bold text-[#102b46]">
              Pharmaceutical Enquiries with SAV7 IMPEX
            </h3>

            <p>
              SAV7 IMPEX PRIVATE LIMITED provides a business contact point
              for pharmaceutical and healthcare product enquiries.
              Businesses can share generic medicine, API, formulation
              and healthcare product requirements, including the
              specifications, quantity and destination country. These
              details provide a starting point for further discussion,
              subject to product availability, regulatory permissions
              and confirmed commercial conditions.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-[#102b46] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#00875a]"
            >
              Submit Pharmaceutical Enquiry →
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-bold text-[#102b46] transition hover:border-[#00875a]"
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
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00875a]">
              Frequently Asked Questions
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#102b46] sm:text-4xl">
              Pharmaceuticals & Healthcare FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-[#00875a]/40 sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-bold text-[#102b46] sm:text-base">
                  <span>
                    <span className="mr-3 text-xs font-bold text-[#00875a]">
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
        <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border border-[#00875a]/15" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-[#00875a]/15" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#38c995]">
            SAV7 IMPEX · Healthcare Division
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            Have a Pharmaceutical or Healthcare Requirement?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
            Share your product specifications, proposed quantity and
            destination country. Connect with SAV7 IMPEX to discuss
            your pharmaceutical and healthcare enquiry.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#00875a] px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#009f69]"
            >
              Request a Trade Discussion →
            </Link>

            <a
              href="https://wa.me/919290934388"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 text-sm font-bold text-white transition hover:border-[#38c995] hover:text-[#38c995]"
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
