
import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.sav7impex.in";
const pageUrl = `${siteUrl}/generic-medicines`;
const whatsapp = "https://wa.me/919290934388";

export const metadata: Metadata = {
  title: "Generic Medicines | Pharmaceutical Products | SAV7 IMPEX",
  description:
    "Explore generic medicine categories, pharmaceutical formulations and sourcing enquiries with SAV7 IMPEX PRIVATE LIMITED, Hyderabad, India.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Generic Medicines | SAV7 IMPEX PRIVATE LIMITED",
    description:
      "Enquire about generic medicines, pharmaceutical formulations and potential international sourcing opportunities.",
    url: pageUrl,
    type: "website",
  },
};

const categories = [
  {
    number: "01",
    title: "Generic Tablets",
    description:
      "Enquiries for generic tablet formulations across relevant therapeutic categories, subject to product availability and applicable approvals.",
    items: ["Film-coated tablets", "Uncoated tablets", "Dispersible tablets", "Extended-release tablets"],
    icon: "▦",
  },
  {
    number: "02",
    title: "Generic Capsules",
    description:
      "Capsule-based pharmaceutical products for business sourcing enquiries and potential distribution requirements.",
    items: ["Hard gelatin capsules", "Vegetable capsules", "Immediate-release capsules", "Other capsule formats"],
    icon: "◒",
  },
  {
    number: "03",
    title: "Liquid Medicines",
    description:
      "Liquid pharmaceutical formulations for different patient and market requirements, subject to regulatory suitability.",
    items: ["Syrups", "Oral suspensions", "Oral solutions", "Drops"],
    icon: "◉",
  },
  {
    number: "04",
    title: "Topical Medicines",
    description:
      "Enquiries covering external-use pharmaceutical preparations in different formulation formats.",
    items: ["Creams", "Ointments", "Gels", "Lotions"],
    icon: "✳",
  },
  {
    number: "05",
    title: "Injectable Products",
    description:
      "Business enquiries for injectable pharmaceutical categories, subject to strict product-specific regulatory and quality requirements.",
    items: ["Injectable solutions", "Injectable suspensions", "Vials", "Ampoules"],
    icon: "⌁",
  },
  {
    number: "06",
    title: "Specialised Formulations",
    description:
      "Enquiries for additional formulation types based on the requested product, destination market and applicable requirements.",
    items: ["Powders", "Sachets", "Modified-release products", "Other formulations"],
    icon: "✧",
  },
];

const steps = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Provide the medicine name, active pharmaceutical ingredient, strength, dosage form and destination market.",
  },
  {
    number: "02",
    title: "Product Review",
    description:
      "Review the requested specifications, availability and applicable sourcing requirements.",
  },
  {
    number: "03",
    title: "Documentation Review",
    description:
      "Identify the documentation, registrations and regulatory requirements relevant to the product and destination.",
  },
  {
    number: "04",
    title: "Commercial Discussion",
    description:
      "Discuss potential supply arrangements, commercial terms and next steps, subject to verification.",
  },
];

const faqs = [
  {
    question: "What are generic medicines?",
    answer:
      "Generic medicines contain the same active pharmaceutical ingredient as their corresponding reference medicines. Their regulatory approval, quality standards, bioequivalence requirements and permitted use depend on the relevant jurisdiction and product.",
  },
  {
    question: "What generic medicine categories can I enquire about?",
    answer:
      "You can enquire about tablets, capsules, syrups, suspensions, topical formulations, injectables and other pharmaceutical dosage forms. Specific products are subject to availability and regulatory review.",
  },
  {
    question: "Can I submit bulk pharmaceutical requirements?",
    answer:
      "You can submit your business or bulk sourcing requirements for review. Minimum order quantities, availability, pricing and supply conditions must be confirmed for each product and transaction.",
  },
  {
    question: "Can SAV7 IMPEX support international medicine enquiries?",
    answer:
      "SAV7 IMPEX welcomes enquiries concerning potential international pharmaceutical trade. Any transaction depends on applicable export and import permissions, product registration, destination-market requirements and verification of the relevant parties.",
  },
  {
    question: "What information should I provide for a quotation?",
    answer:
      "Share the product name, active ingredient, strength, dosage form, preferred manufacturer if applicable, required quantity, packaging requirements and destination country.",
  },
  {
    question: "Are all medicines available for export?",
    answer:
      "No. Export eligibility depends on the medicine, applicable Indian regulations, destination-country rules, product registrations and the permissions held by the relevant parties. Availability must be confirmed individually.",
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

export default function GenericMedicinesPage() {
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
    name: "Generic Medicines",
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
              PHARMACEUTICALS & HEALTHCARE
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Generic Medicines &{" "}
              <span className="text-[#d3b36d]">Pharmaceutical</span>{" "}
              Sourcing
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore generic medicine categories and pharmaceutical
              sourcing opportunities with SAV7 IMPEX PRIVATE LIMITED.
              We welcome business enquiries based on product specifications,
              market requirements and applicable regulations.
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
                <p className="text-sm font-bold text-white">Product Categories</p>
                <p className="mt-1 text-xs text-slate-400">
                  Multiple dosage forms
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-white">Trade Enquiries</p>
                <p className="mt-1 text-xs text-slate-400">
                  Domestic & international interest
                </p>
              </div>
            </div>
          </div>

          {/* CSS pharmaceutical visual */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-8 rounded-full bg-[#00875a]/20 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-sm sm:p-9">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                  Pharmaceutical Portfolio
                </span>
                <span className="rounded-full bg-[#00875a]/20 px-3 py-1 text-xs text-[#8ee4c0]">
                  SAV7 IMPEX
                </span>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="flex h-36 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07]">
                  <div className="flex h-16 w-28 rotate-[-28deg] overflow-hidden rounded-full border border-white/30 shadow-xl">
                    <div className="w-1/2 bg-gradient-to-b from-white to-slate-200" />
                    <div className="w-1/2 bg-gradient-to-b from-[#00875a] to-[#005b3d]" />
                  </div>
                </div>
                <div className="flex h-36 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07]">
                  <div className="flex h-20 w-12 flex-col overflow-hidden rounded-xl border border-white/40 shadow-xl">
                    <div className="h-1/3 bg-white" />
                    <div className="h-1/3 bg-[#d3b36d]" />
                    <div className="h-1/3 bg-white" />
                  </div>
                </div>
                <div className="flex h-36 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07]">
                  <div className="relative h-20 w-14 rounded-b-2xl rounded-t-lg border border-white/40 bg-gradient-to-r from-[#b7d7d0] to-[#e6f5ef] shadow-xl">
                    <div className="absolute left-0 right-0 top-5 h-8 bg-[#00875a]/80" />
                    <div className="absolute left-2 right-2 top-8 h-0.5 bg-white/60" />
                  </div>
                </div>
                <div className="flex h-36 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07]">
                  <div className="relative h-20 w-20">
                    <div className="absolute left-7 top-0 h-12 w-7 rounded-t-full border border-white/40 bg-gradient-to-b from-white to-slate-300" />
                    <div className="absolute bottom-0 left-2 h-10 w-16 rounded-b-xl border border-white/30 bg-gradient-to-b from-[#d3b36d] to-[#98702a]" />
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-xl border border-white/10 bg-[#071521]/70 p-5">
                <p className="text-sm font-bold text-white">
                  Pharmaceutical Product Enquiries
                </p>
                <p className="mt-2 text-xs leading-6 text-slate-400">
                  Product specifications, formulation types, quantities and
                  destination-market requirements can be shared for review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#00875a]">
              ABOUT GENERIC MEDICINES
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#102b46] sm:text-4xl">
              Pharmaceutical Solutions Built Around Product Requirements
            </h2>
          </div>
          <div className="space-y-5 text-[15px] leading-8 text-[#718096]">
            <p>
              Generic medicines are pharmaceutical products developed to
              contain active ingredients corresponding to established
              reference medicines. They are an important part of healthcare
              systems in markets around the world.
            </p>
            <p>
              SAV7 IMPEX PRIVATE LIMITED provides a business enquiry channel
              for generic medicine categories, pharmaceutical formulations
              and potential sourcing opportunities. Requirements can be
              reviewed according to the requested product, specifications,
              destination market and applicable regulatory conditions.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-[#f7f9fb] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="PRODUCT CATEGORIES"
            title="Explore Generic Medicine Categories"
            description="Browse common pharmaceutical dosage forms and share your specific product requirements for review."
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
                <p className="mt-3 min-h-[88px] text-sm leading-7 text-[#718096]">
                  {category.description}
                </p>
                <div className="mt-5 border-t border-[#e7ecf1] pt-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#102b46]">
                    Formulation Types
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-[#f7f9fb] px-3 py-2 text-xs text-[#526477]"
                      >
                        {item}
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

      {/* PRODUCT INFORMATION */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="ENQUIRY SPECIFICATIONS"
          title="What Information Should You Share?"
          description="Clear product specifications help establish whether a pharmaceutical enquiry can be considered."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Product Name", "Generic name or requested medicine name."],
            ["Active Ingredient", "API name and composition, where applicable."],
            ["Strength", "Required dosage strength or concentration."],
            ["Dosage Form", "Tablet, capsule, syrup, injection or other format."],
            ["Required Quantity", "Estimated quantity and preferred packaging."],
            ["Destination Market", "Country and relevant product registration requirements."],
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
            title="From Product Enquiry to Trade Discussion"
            description="A structured approach to understanding pharmaceutical requirements and reviewing potential business opportunities."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
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

      {/* REGULATORY */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#00875a]">
              RESPONSIBLE PHARMACEUTICAL TRADE
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#102b46] sm:text-4xl">
              Regulatory Requirements & Product Verification
            </h2>
            <p className="mt-5 text-sm leading-8 text-[#718096]">
              Pharmaceutical products are subject to product-specific
              regulatory requirements. Applicable permissions and
              documentation must be established before any transaction
              proceeds.
            </p>
            <Link
              href="/pharmaceuticals"
              className="mt-7 inline-flex rounded-lg border border-[#00875a] px-6 py-3 text-sm font-bold text-[#00875a] transition hover:bg-[#00875a] hover:text-white"
            >
              Pharmaceutical Division →
            </Link>
          </div>

          <div className="rounded-2xl border border-[#e7ecf1] bg-[#f7f9fb] p-7 sm:p-9">
            <h3 className="text-xl font-bold text-[#102b46]">
              Important considerations
            </h3>
            <div className="mt-7 space-y-5">
              {[
                "Applicable pharmaceutical licences and permissions must be verified for the relevant parties.",
                "Product registration and marketing authorisation depend on the destination country.",
                "Quality documentation and product specifications should be reviewed before a transaction.",
                "Import and export requirements may vary by medicine, formulation and jurisdiction.",
                "Availability, pricing, quantities and commercial terms require individual confirmation.",
              ].map((item, index) => (
                <div key={item} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eaf7f1] text-xs font-bold text-[#00875a]">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-[#526477]">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-7 rounded-lg border border-[#e7d8b6] bg-[#fbf5e9] p-4 text-xs leading-6 text-[#79612f]">
              Website information is for business enquiry purposes only.
              It does not represent a claim that SAV7 IMPEX holds any
              particular pharmaceutical licence, manufacturing certification
              or product approval.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED PAGES */}
      <section className="bg-[#f7f9fb] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="EXPLORE MORE"
            title="Our Pharmaceutical & Healthcare Division"
            description="Explore related product and sourcing categories within the SAV7 IMPEX business portfolio."
          />

          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                title: "Active Pharmaceutical Ingredients",
                description: "Explore API-related sourcing enquiries and specifications.",
                href: "/api-sourcing",
              },
              {
                title: "Healthcare Products",
                description: "Discover healthcare product and medical supply enquiries.",
                href: "/healthcare-products",
              },
              {
                title: "Pharmaceuticals",
                description: "Explore the wider pharmaceutical business division.",
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
          GENERIC MEDICINES & PHARMACEUTICAL SOURCING
        </span>
        <h2 className="mt-4 text-3xl font-extrabold text-[#102b46] sm:text-4xl">
          Generic Medicine Categories and Pharmaceutical Enquiries
        </h2>

        <div className="mt-8 space-y-6 text-[15px] leading-8 text-[#718096]">
          <p>
            Generic medicines are an important part of pharmaceutical
            markets. They contain active pharmaceutical ingredients
            corresponding to reference medicines and are developed for
            use under the applicable regulatory framework. Product
            approval, quality standards, bioequivalence and permitted
            distribution depend on the relevant medicine and jurisdiction.
          </p>
          <p>
            SAV7 IMPEX PRIVATE LIMITED, based in Hyderabad, India, welcomes
            enquiries concerning generic medicines and pharmaceutical
            formulations. Enquiries may cover tablets, capsules, oral
            liquids, topical preparations, injectable formulations and
            other dosage forms. Each requirement can be considered according
            to its specifications, quantity, destination market and
            applicable regulatory conditions.
          </p>
          <p>
            Buyers and business organisations can share details such as
            the generic medicine name, active ingredient, required strength,
            dosage form, packaging preference and estimated quantity.
            Destination-market information is also important because
            pharmaceutical import requirements, registrations and
            documentation vary between countries.
          </p>
          <p>
            Pharmaceutical sourcing requires careful consideration of
            product identity, quality documentation, applicable permissions
            and the responsibilities of the relevant parties. A product
            enquiry does not itself confirm availability, regulatory
            approval or eligibility for export. These matters must be
            verified individually before commercial commitments are made.
          </p>
          <p>
            For related requirements, explore our{" "}
            <Link href="/api-sourcing" className="font-semibold text-[#00875a] underline">
              API sourcing
            </Link>
            ,{" "}
            <Link href="/healthcare-products" className="font-semibold text-[#00875a] underline">
              healthcare products
            </Link>{" "}
            and{" "}
            <Link href="/pharmaceuticals" className="font-semibold text-[#00875a] underline">
              pharmaceutical division
            </Link>
            . You can also contact SAV7 IMPEX to submit a specific product
            requirement for review.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f7f9fb] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="Generic Medicines FAQs"
            description="Common questions about generic medicine categories and pharmaceutical enquiries."
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
              BUSINESS ENQUIRIES
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              Looking for Generic Medicine Products?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Share your product specifications, required quantities and
              destination market with SAV7 IMPEX PRIVATE LIMITED.
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
