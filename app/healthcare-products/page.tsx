
import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.sav7impex.in";
const pageUrl = `${siteUrl}/healthcare-products`;
const whatsapp = "https://wa.me/919290934388";

export const metadata: Metadata = {
  title: "Healthcare Products & Medical Supplies | SAV7 IMPEX",
  description:
    "Explore healthcare products, medical supplies, healthcare consumables and potential sourcing enquiries with SAV7 IMPEX PRIVATE LIMITED, Hyderabad, India.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Healthcare Products | SAV7 IMPEX PRIVATE LIMITED",
    description:
      "Submit business enquiries for healthcare products, medical supplies and healthcare consumables.",
    url: pageUrl,
    type: "website",
  },
};

const categories = [
  {
    number: "01",
    icon: "✚",
    title: "Medical Consumables",
    description:
      "Enquiries for commonly used medical consumables and healthcare supplies for institutional and commercial requirements.",
    products: [
      "Disposable medical items",
      "Medical examination supplies",
      "Basic clinical consumables",
      "General healthcare supplies",
    ],
  },
  {
    number: "02",
    icon: "◈",
    title: "Personal Protective Equipment",
    description:
      "Healthcare protective equipment enquiries based on intended use, product specifications and applicable standards.",
    products: [
      "Protective masks",
      "Disposable gloves",
      "Protective gowns",
      "Other protective products",
    ],
  },
  {
    number: "03",
    icon: "◎",
    title: "Diagnostic Supplies",
    description:
      "Enquiries for diagnostic-related supplies and accessories, subject to product classification and applicable approvals.",
    products: [
      "Diagnostic consumables",
      "Sample collection supplies",
      "Testing accessories",
      "Laboratory consumables",
    ],
  },
  {
    number: "04",
    icon: "⌁",
    title: "Hospital Supplies",
    description:
      "Product enquiries for hospital, clinic and healthcare facility supply requirements.",
    products: [
      "Patient care supplies",
      "Ward consumables",
      "Clinical accessories",
      "General hospital supplies",
    ],
  },
  {
    number: "05",
    icon: "✧",
    title: "Healthcare Accessories",
    description:
      "Enquiries for selected healthcare accessories and supporting products according to buyer specifications.",
    products: [
      "Patient care accessories",
      "Healthcare support items",
      "Medical utility products",
      "General care accessories",
    ],
  },
  {
    number: "06",
    icon: "▤",
    title: "Healthcare Product Requirements",
    description:
      "Custom business enquiries based on the buyer's product list, quantity, specifications and target market.",
    products: [
      "Institutional requirements",
      "Bulk product enquiries",
      "Custom product lists",
      "Destination-specific needs",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Send your product list, intended application, quantity and destination market.",
  },
  {
    number: "02",
    title: "Product Assessment",
    description:
      "Review product specifications, classification, availability and suitability for the enquiry.",
  },
  {
    number: "03",
    title: "Documentation Review",
    description:
      "Identify relevant technical documents, quality information and applicable regulatory requirements.",
  },
  {
    number: "04",
    title: "Commercial Discussion",
    description:
      "Discuss potential sourcing arrangements, packaging, quantities and commercial conditions.",
  },
];

const faqs = [
  {
    question: "What healthcare products can I enquire about?",
    answer:
      "You can submit enquiries for medical consumables, protective equipment, diagnostic supplies, hospital supplies and selected healthcare accessories. Specific products are subject to availability, classification and applicable regulatory requirements.",
  },
  {
    question: "Can I submit bulk healthcare product requirements?",
    answer:
      "Yes. Business and institutional enquiries for bulk quantities can be submitted for review. Minimum order quantities, availability, pricing and packaging requirements depend on the specific product.",
  },
  {
    question: "Can hospitals and distributors submit enquiries?",
    answer:
      "Hospitals, distributors, healthcare organisations and other businesses can submit product requirements for review. Any transaction is subject to product suitability, verification and applicable permissions.",
  },
  {
    question: "What information should I provide?",
    answer:
      "Share the product name, specifications, intended application, estimated quantity, packaging preference and destination country. Product classification or registration details may also be relevant.",
  },
  {
    question: "Are medical devices and diagnostic products included?",
    answer:
      "You can enquire about relevant medical devices and diagnostic-related products. Their availability and supply depend on product classification, regulatory status and applicable permissions in the relevant market.",
  },
  {
    question: "Can healthcare products be sourced for international markets?",
    answer:
      "Potential international sourcing enquiries can be submitted. Import and export eligibility depends on the product, applicable regulations, destination-market requirements and permissions held by the relevant parties.",
  },
  {
    question: "Does SAV7 IMPEX manufacture healthcare products?",
    answer:
      "This page describes healthcare product business enquiries and potential sourcing opportunities. It does not claim that SAV7 IMPEX owns or operates a healthcare product manufacturing facility.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#00875a]">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#102b46] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[#718096]">
        {description}
      </p>
    </div>
  );
}

export default function HealthcareProductsPage() {
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

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Healthcare Products",
    url: pageUrl,
    description: metadata.description,
    isPartOf: {
      "@type": "WebSite",
      name: "SAV7 IMPEX PRIVATE LIMITED",
      url: siteUrl,
    },
  };

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
      <section className="relative overflow-hidden bg-[#091c30]">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#00875a]/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#b68b31]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold tracking-wider text-[#d7e8e1]">
              <span className="h-2 w-2 rounded-full bg-[#00b477]" />
              HEALTHCARE & MEDICAL SUPPLIES
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Healthcare Products &{" "}
              <span className="text-[#d3b36d]">Medical Supplies</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore healthcare product categories and potential sourcing
              opportunities with SAV7 IMPEX PRIVATE LIMITED. We welcome
              business enquiries based on product specifications, quantities
              and destination-market requirements.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-[#00875a] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#00734c]"
              >
                Submit an Enquiry →
              </Link>

              <Link
                href="/pharmaceuticals"
                className="rounded-lg border border-white/25 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Explore Pharmaceuticals
              </Link>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-2 gap-5 border-t border-white/15 pt-7">
              <div>
                <p className="text-sm font-bold text-white">
                  Healthcare Categories
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Multiple product types
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  Business Enquiries
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Product-specific requirements
                </p>
              </div>
            </div>
          </div>

          {/* CSS HEALTHCARE VISUAL */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-8 rounded-full bg-[#00875a]/20 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl backdrop-blur-sm sm:p-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                  Healthcare Portfolio
                </span>
                <span className="rounded-full bg-[#00875a]/20 px-3 py-1 text-xs text-[#8ee4c0]">
                  SAV7 IMPEX
                </span>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="flex h-36 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-[#d5e9df] shadow-xl">
                    <span className="text-5xl font-bold text-[#00875a]">
                      +
                    </span>
                  </div>
                </div>

                <div className="flex h-36 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07]">
                  <div className="flex h-20 w-14 flex-col items-center overflow-hidden rounded-xl border border-white/40 bg-gradient-to-r from-white to-[#d6e8df] shadow-xl">
                    <div className="mt-3 h-3 w-8 rounded-sm bg-[#00875a]" />
                    <div className="mt-3 h-1 w-8 rounded bg-slate-300" />
                    <div className="mt-2 h-1 w-6 rounded bg-slate-300" />
                  </div>
                </div>

                <div className="flex h-36 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07]">
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#d3b36d] bg-white shadow-xl">
                    <div className="h-12 w-1 rounded-full bg-[#00875a]" />
                    <div className="absolute h-1 w-12 rounded-full bg-[#00875a]" />
                  </div>
                </div>

                <div className="flex h-36 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07]">
                  <div className="flex h-20 w-14 flex-col items-center rounded-xl border border-white/40 bg-gradient-to-b from-[#e8f3ed] to-white shadow-xl">
                    <div className="mt-2 h-4 w-8 rounded bg-[#b68b31]" />
                    <div className="mt-4 h-1 w-8 rounded bg-slate-300" />
                    <div className="mt-2 h-1 w-6 rounded bg-slate-300" />
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-xl border border-white/10 bg-[#071521]/70 p-5">
                <p className="text-sm font-bold text-white">
                  Healthcare Product Enquiries
                </p>
                <p className="mt-2 text-xs leading-6 text-slate-400">
                  Product details, intended use, quantity, packaging and
                  destination-market requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#00875a]">
              ABOUT HEALTHCARE PRODUCTS
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#102b46] sm:text-4xl">
              Healthcare Supplies for Different Business Requirements
            </h2>
          </div>

          <div className="space-y-5 text-[15px] leading-8 text-[#718096]">
            <p>
              Healthcare products include a broad range of medical
              consumables, protective equipment, diagnostic-related
              supplies, hospital products and patient care accessories.
              These products support healthcare facilities and related
              institutional requirements.
            </p>

            <p>
              SAV7 IMPEX PRIVATE LIMITED welcomes business enquiries for
              selected healthcare product categories. Buyers can share
              their requirements based on intended application, product
              specifications, quantity and destination market.
            </p>

            <p>
              Product classification, technical suitability, regulatory
              permissions and availability must be established before
              any commercial arrangement proceeds.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-[#f7f9fb] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="HEALTHCARE PRODUCT CATEGORIES"
            title="Explore Our Product Enquiry Areas"
            description="Discover healthcare and medical supply categories for potential sourcing and business enquiries."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.number}
                className="group rounded-2xl border border-[#e7ecf1] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#00875a]/40 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf7f1] text-2xl text-[#00875a]">
                    {category.icon}
                  </span>
                  <span className="text-sm font-bold tracking-widest text-[#b68b31]">
                    {category.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-[#102b46]">
                  {category.title}
                </h3>

                <p className="mt-3 min-h-[100px] text-sm leading-7 text-[#718096]">
                  {category.description}
                </p>

                <div className="mt-5 border-t border-[#e7ecf1] pt-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#102b46]">
                    Product Types
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.products.map((product) => (
                      <span
                        key={product}
                        className="rounded-md bg-[#f7f9fb] px-3 py-2 text-xs text-[#526477]"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex text-sm font-bold text-[#00875a] transition group-hover:gap-2"
                >
                  Enquire about products →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUYER REQUIREMENTS */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="BUYER REQUIREMENTS"
          title="What Details Should You Provide?"
          description="Share the right product information to help assess your healthcare supply enquiry."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            [
              "Product Name",
              "Exact product name or category required.",
            ],
            [
              "Specifications",
              "Dimensions, material, grade or technical requirements.",
            ],
            [
              "Intended Application",
              "Hospital, clinical, diagnostic or other intended use.",
            ],
            [
              "Quantity",
              "Estimated order quantity and purchasing frequency.",
            ],
            [
              "Packaging",
              "Preferred packaging, labelling and product configuration.",
            ],
            [
              "Destination Market",
              "Country and applicable product registration requirements.",
            ],
          ].map(([title, description], index) => (
            <div
              key={title}
              className="flex gap-4 rounded-xl border border-[#e7ecf1] p-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fbf5e9] text-sm font-extrabold text-[#a17a2e]">
                0{index + 1}
              </span>

              <div>
                <h3 className="font-bold text-[#102b46]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#718096]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#091c30] px-5 py-20 text-white sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="OUR ENQUIRY APPROACH"
            title="A Clear Healthcare Sourcing Process"
            description="A structured approach to reviewing product requirements and potential commercial opportunities."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-7"
              >
                <span className="text-3xl font-extrabold text-[#d3b36d]">
                  {step.number}
                </span>

                <h3 className="mt-6 text-lg font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#00875a]">
              QUALITY & REGULATORY AWARENESS
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#102b46] sm:text-4xl">
              Responsible Healthcare Product Sourcing
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#718096]">
              Healthcare products may be subject to different quality,
              safety, labelling, classification and regulatory requirements.
              These requirements depend on the product and destination
              market.
            </p>

            <Link
              href="/pharmaceuticals"
              className="mt-7 inline-flex rounded-lg border border-[#00875a] px-6 py-3 text-sm font-bold text-[#00875a] transition hover:bg-[#00875a] hover:text-white"
            >
              Explore Pharmaceutical Division →
            </Link>
          </div>

          <div className="rounded-2xl border border-[#e7ecf1] bg-[#f7f9fb] p-7 sm:p-9">
            <h3 className="text-xl font-bold text-[#102b46]">
              Important considerations
            </h3>

            <div className="mt-7 space-y-5">
              {[
                "Product classification and intended use should be identified before sourcing.",
                "Relevant quality specifications and technical documentation should be reviewed.",
                "Applicable medical device or healthcare product registrations must be verified where required.",
                "Import and export permissions depend on the product and relevant jurisdiction.",
                "Packaging, labelling, storage and handling requirements should be confirmed.",
              ].map((item, index) => (
                <div key={item} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eaf7f1] text-xs font-bold text-[#00875a]">
                    {index + 1}
                  </span>

                  <p className="text-sm leading-7 text-[#526477]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-7 rounded-lg border border-[#e7d8b6] bg-[#fbf5e9] p-4 text-xs leading-6 text-[#79612f]">
              This website describes healthcare product enquiry areas.
              It does not claim that SAV7 IMPEX holds any particular
              medical device licence, manufacturing certification,
              regulatory approval or product registration.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED PAGES */}
      <section className="bg-[#f7f9fb] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="RELATED BUSINESS AREAS"
            title="Explore Our Pharmaceutical Portfolio"
            description="Discover other pharmaceutical and healthcare categories within SAV7 IMPEX."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Generic Medicines",
                description:
                  "Explore generic medicine categories and pharmaceutical formulations.",
                href: "/generic-medicines",
              },
              {
                title: "API Sourcing",
                description:
                  "Explore active pharmaceutical ingredient sourcing enquiries.",
                href: "/api-sourcing",
              },
              {
                title: "Pharmaceuticals",
                description:
                  "Learn about the wider pharmaceutical business division.",
                href: "/pharmaceuticals",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-[#e7ecf1] bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-[#102b46]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#718096]">
                  {item.description}
                </p>

                <span className="mt-5 inline-block text-sm font-bold text-[#00875a]">
                  Explore more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#00875a]">
          HEALTHCARE PRODUCTS INDIA
        </span>

        <h2 className="mt-4 text-3xl font-extrabold text-[#102b46] sm:text-4xl">
          Healthcare Products and Medical Supply Enquiries
        </h2>

        <div className="mt-8 space-y-6 text-[15px] leading-8 text-[#718096]">
          <p>
            Healthcare products include a wide range of medical supplies
            used in hospitals, clinics, diagnostic facilities and other
            healthcare environments. These products may include medical
            consumables, personal protective equipment, diagnostic
            supplies, patient care accessories and general hospital
            products.
          </p>

          <p>
            SAV7 IMPEX PRIVATE LIMITED, based in Hyderabad, India,
            welcomes business enquiries for selected healthcare product
            categories. Buyers, distributors and institutional organisations
            can submit requirements based on product specifications,
            intended use, estimated quantity and destination market.
          </p>

          <p>
            Healthcare product sourcing requires consideration of product
            classification, quality information, applicable standards,
            packaging and regulatory suitability. Certain products,
            including medical devices and diagnostic products, may require
            specific registrations, licences or permissions depending
            on the relevant jurisdiction.
          </p>

          <p>
            International healthcare product transactions may involve
            additional import and export documentation. Product
            eligibility, applicable approvals, labelling and destination
            requirements should be verified before commercial commitments
            are made.
          </p>

          <p>
            Organisations interested in healthcare supplies can contact
            SAV7 IMPEX with their product lists and business requirements.
            You can also explore our{" "}
            <Link
              href="/generic-medicines"
              className="font-semibold text-[#00875a] underline"
            >
              generic medicines
            </Link>
            ,{" "}
            <Link
              href="/api-sourcing"
              className="font-semibold text-[#00875a] underline"
            >
              API sourcing
            </Link>{" "}
            and{" "}
            <Link
              href="/pharmaceuticals"
              className="font-semibold text-[#00875a] underline"
            >
              pharmaceutical division
            </Link>{" "}
            pages for related business enquiries.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f7f9fb] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="Healthcare Products FAQs"
            description="Common questions about healthcare supplies, medical consumables and product enquiries."
          />

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-[#e7ecf1] bg-white p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#102b46]">
                  {faq.question}
                  <span className="text-xl text-[#00875a] transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 border-t border-[#e7ecf1] pt-4 text-sm leading-7 text-[#718096]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#091c30] px-5 py-20 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-3xl border border-white/10 bg-white/[0.05] p-8 sm:p-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#d3b36d]">
              HEALTHCARE BUSINESS ENQUIRIES
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              Have a Healthcare Product Requirement?
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Share your product list, specifications, required quantity
              and destination country with SAV7 IMPEX PRIVATE LIMITED.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-[#00875a] px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-[#00734c]"
            >
              Contact Our Team →
            </Link>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/25 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-white/10"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
