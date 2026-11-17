
import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.sav7impex.in";
const pageUrl = `${siteUrl}/api-sourcing`;
const whatsapp = "https://wa.me/919290934388";

export const metadata: Metadata = {
  title: "API Sourcing | Active Pharmaceutical Ingredients | SAV7 IMPEX",
  description:
    "Explore active pharmaceutical ingredient (API) sourcing enquiries, product specifications and pharmaceutical raw material requirements with SAV7 IMPEX PRIVATE LIMITED, India.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "API Sourcing | SAV7 IMPEX PRIVATE LIMITED",
    description:
      "Enquire about active pharmaceutical ingredients, API specifications and potential pharmaceutical sourcing opportunities.",
    url: pageUrl,
    type: "website",
  },
};

const apiCategories = [
  {
    number: "01",
    icon: "⚗",
    title: "Pharmaceutical APIs",
    description:
      "Enquiries for active pharmaceutical ingredients used in the development and manufacture of pharmaceutical products.",
    items: ["API name", "Chemical composition", "CAS number", "Required specification"],
  },
  {
    number: "02",
    icon: "◇",
    title: "Generic Drug APIs",
    description:
      "Sourcing enquiries for active ingredients associated with generic medicine formulations, subject to regulatory requirements.",
    items: ["Generic API requirements", "Strength and grade", "Purity specifications", "Application details"],
  },
  {
    number: "03",
    icon: "◈",
    title: "Pharmaceutical Intermediates",
    description:
      "Business enquiries for pharmaceutical intermediates and relevant chemical inputs used in pharmaceutical production.",
    items: ["Chemical intermediates", "Product identification", "Technical specifications", "Intended application"],
  },
  {
    number: "04",
    icon: "▤",
    title: "API Bulk Requirements",
    description:
      "Enquiries for bulk quantities and commercial requirements based on product specifications and potential sourcing availability.",
    items: ["Bulk quantity enquiries", "Packaging requirements", "Batch information", "Commercial requirements"],
  },
  {
    number: "05",
    icon: "✧",
    title: "Speciality Ingredients",
    description:
      "Enquiries concerning specialised pharmaceutical ingredients, depending on product suitability and applicable regulations.",
    items: ["Speciality APIs", "Specific grades", "Technical requirements", "Market requirements"],
  },
  {
    number: "06",
    icon: "◎",
    title: "Custom API Requirements",
    description:
      "Product-specific sourcing enquiries based on buyer requirements, technical documentation and destination-market considerations.",
    items: ["Custom product enquiries", "Required specifications", "Preferred origin", "Target market"],
  },
];

const process = [
  {
    number: "01",
    title: "Submit API Requirement",
    description:
      "Share the API name, CAS number, required grade, specifications and estimated quantity.",
  },
  {
    number: "02",
    title: "Requirement Assessment",
    description:
      "Review the requested ingredient, technical details, intended application and destination market.",
  },
  {
    number: "03",
    title: "Documentation & Verification",
    description:
      "Identify relevant technical, quality and regulatory documents for the product and transaction.",
  },
  {
    number: "04",
    title: "Commercial Discussion",
    description:
      "Discuss potential sourcing arrangements, quantities, packaging and commercial conditions after verification.",
  },
];

const faqs = [
  {
    question: "What is an Active Pharmaceutical Ingredient (API)?",
    answer:
      "An Active Pharmaceutical Ingredient is the substance or combination of substances responsible for the pharmacological activity of a medicine. APIs are used in pharmaceutical formulations and are subject to applicable quality and regulatory requirements.",
  },
  {
    question: "What API products can I enquire about?",
    answer:
      "You can submit enquiries for pharmaceutical APIs, generic drug ingredients, pharmaceutical intermediates, bulk API requirements and specialised ingredients. Product-specific availability must be confirmed.",
  },
  {
    question: "What details are required for API sourcing?",
    answer:
      "Share the API name, CAS number where available, required grade, purity or specification, estimated quantity, packaging preference, intended application and destination country.",
  },
  {
    question: "Can I enquire about bulk API quantities?",
    answer:
      "Yes. Business enquiries for bulk quantities can be submitted for review. Minimum order quantities, availability, packaging and commercial terms depend on the specific product and must be confirmed.",
  },
  {
    question: "What API documents may be required?",
    answer:
      "Depending on the ingredient and transaction, relevant documentation may include a Certificate of Analysis, Safety Data Sheet, technical specifications, manufacturing information and applicable regulatory documents. The exact requirements must be established for each product and market.",
  },
  {
    question: "Can APIs be sourced for international markets?",
    answer:
      "Potential international sourcing enquiries can be submitted. Any transaction depends on applicable export and import regulations, product eligibility, destination-market requirements and permissions held by the relevant parties.",
  },
  {
    question: "Does SAV7 IMPEX manufacture APIs?",
    answer:
      "This website describes API sourcing enquiries and potential business opportunities. It does not claim that SAV7 IMPEX operates an API manufacturing facility. Manufacturing arrangements and relevant permissions must be independently verified.",
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

export default function ApiSourcingPage() {
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
    name: "API Sourcing",
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
              PHARMACEUTICAL RAW MATERIALS
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Active Pharmaceutical Ingredients{" "}
              <span className="text-[#d3b36d]">(API) Sourcing</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore pharmaceutical ingredient sourcing enquiries with
              SAV7 IMPEX PRIVATE LIMITED. Share your API specifications,
              technical requirements and target market for business review.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-[#00875a] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#00734c]"
              >
                Submit API Enquiry →
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
                  API Requirements
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Technical specifications
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  Sourcing Enquiries
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Product-specific review
                </p>
              </div>
            </div>
          </div>

          {/* API VISUAL */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-8 rounded-full bg-[#00875a]/20 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl backdrop-blur-sm sm:p-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                  API Portfolio
                </span>
                <span className="rounded-full bg-[#00875a]/20 px-3 py-1 text-xs text-[#8ee4c0]">
                  SAV7 IMPEX
                </span>
              </div>

              <div className="relative mt-10 flex h-64 items-center justify-center">
                <div className="absolute h-52 w-52 rounded-full border border-dashed border-white/20" />
                <div className="absolute h-40 w-40 rounded-full border border-white/10" />
                <div className="absolute h-28 w-28 rounded-full bg-[#00875a]/20 blur-xl" />

                <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl border border-white/20 bg-gradient-to-br from-[#e8f4ed] to-[#b8d9c8] shadow-2xl">
                  <div className="text-center">
                    <span className="block text-3xl font-black text-[#102b46]">
                      API
                    </span>
                    <span className="mt-1 block text-[9px] font-bold tracking-widest text-[#00875a]">
                      INGREDIENTS
                    </span>
                  </div>
                </div>

                {[
                  ["C", "top-3 left-12"],
                  ["O", "top-12 right-9"],
                  ["N", "bottom-12 left-8"],
                  ["H", "bottom-3 right-14"],
                ].map(([letter, position]) => (
                  <div
                    key={letter + position}
                    className={`absolute ${position} flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#b68b31] text-sm font-extrabold text-white shadow-lg`}
                  >
                    {letter}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-white/10 bg-[#071521]/70 p-5">
                <p className="text-sm font-bold text-white">
                  Active Pharmaceutical Ingredients
                </p>
                <p className="mt-2 text-xs leading-6 text-slate-400">
                  API name, CAS number, grade, purity, quantity and
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
              UNDERSTANDING APIS
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#102b46] sm:text-4xl">
              Pharmaceutical Ingredients for Medicine Manufacturing
            </h2>
          </div>

          <div className="space-y-5 text-[15px] leading-8 text-[#718096]">
            <p>
              Active Pharmaceutical Ingredients are the substances
              responsible for the intended pharmacological activity of
              pharmaceutical medicines. They form an essential component
              of pharmaceutical formulations and medicine manufacturing.
            </p>
            <p>
              API sourcing involves identifying the correct ingredient,
              required grade, technical specifications and applicable
              quality documentation. Requirements vary depending on
              the intended application, formulation and destination market.
            </p>
            <p>
              SAV7 IMPEX PRIVATE LIMITED welcomes business enquiries for
              pharmaceutical ingredients and related sourcing requirements.
              Each enquiry is considered subject to product availability,
              verification and applicable regulatory conditions.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-[#f7f9fb] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="API PRODUCT CATEGORIES"
            title="Explore API Sourcing Requirements"
            description="Submit your ingredient requirements across different pharmaceutical raw material categories."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {apiCategories.map((category) => (
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
                    Enquiry Information
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
                  Enquire now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="TECHNICAL INFORMATION"
          title="API Specifications & Documentation"
          description="Providing accurate ingredient and technical information helps in assessing a pharmaceutical sourcing enquiry."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["API Name", "Generic or chemical name of the required ingredient."],
            ["CAS Number", "Chemical Abstracts Service identification number, where available."],
            ["Purity & Grade", "Required purity, pharmaceutical grade and applicable specifications."],
            ["Molecular Information", "Molecular formula, molecular weight or other relevant identifiers."],
            ["Quantity & Packaging", "Estimated quantity, packaging preference and storage requirements."],
            ["Destination Country", "Target market and applicable import or registration requirements."],
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

        <div className="mt-8 rounded-2xl border border-[#e7ecf1] bg-[#f7f9fb] p-7">
          <h3 className="text-lg font-bold text-[#102b46]">
            Documents that may be relevant
          </h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              "Certificate of Analysis (CoA)",
              "Safety Data Sheet (SDS)",
              "Technical Data Sheet",
              "Product Specifications",
              "Batch Information",
              "Regulatory Documentation",
            ].map((item) => (
              <span
                key={item}
                className="rounded-lg border border-[#e7ecf1] bg-white px-4 py-3 text-sm font-medium text-[#526477]"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-5 text-xs leading-6 text-[#718096]">
            The exact documentation depends on the ingredient, supplier,
            transaction and applicable destination-market regulations.
            Listing a document here does not imply that it is available
            for every product.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#091c30] px-5 py-20 text-white sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="OUR SOURCING APPROACH"
            title="A Structured API Enquiry Process"
            description="A clear process for reviewing ingredient requirements and potential pharmaceutical sourcing opportunities."
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

      {/* REGULATORY */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#00875a]">
              QUALITY & COMPLIANCE
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#102b46] sm:text-4xl">
              Responsible API Trade & Regulatory Awareness
            </h2>
            <p className="mt-5 text-sm leading-8 text-[#718096]">
              APIs are subject to technical, quality, safety and regulatory
              requirements. Applicable permissions, product documentation
              and destination-market requirements should be verified before
              any transaction.
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
                "API identity, grade and technical specifications should be checked against the requested requirements.",
                "Relevant quality documentation must be reviewed for the specific product and supplier.",
                "Applicable manufacturing, import and export permissions must be verified for the relevant parties.",
                "Destination-market registration and regulatory requirements may differ between countries.",
                "Storage, handling, transportation and packaging requirements should be assessed for the ingredient.",
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
              SAV7 IMPEX website content is intended for business enquiries.
              It does not represent a claim of API manufacturing facilities,
              GMP certification, pharmaceutical licences or regulatory
              approvals held by the company.
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
            description="Discover other pharmaceutical and healthcare categories offered for business enquiries."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Generic Medicines",
                description:
                  "Explore tablet, capsule, liquid and other generic medicine categories.",
                href: "/generic-medicines",
              },
              {
                title: "Healthcare Products",
                description:
                  "Explore healthcare product and medical supply enquiries.",
                href: "/healthcare-products",
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
          API SOURCING INDIA
        </span>

        <h2 className="mt-4 text-3xl font-extrabold text-[#102b46] sm:text-4xl">
          Active Pharmaceutical Ingredient Sourcing & Enquiries
        </h2>

        <div className="mt-8 space-y-6 text-[15px] leading-8 text-[#718096]">
          <p>
            Active Pharmaceutical Ingredients (APIs) are essential
            components of pharmaceutical medicines. They provide the
            pharmacological activity of a finished pharmaceutical product.
            API quality, identity, purity and technical specifications
            are important considerations throughout pharmaceutical
            manufacturing and sourcing.
          </p>

          <p>
            SAV7 IMPEX PRIVATE LIMITED, based in Hyderabad, India,
            welcomes enquiries for active pharmaceutical ingredients,
            generic drug APIs, pharmaceutical intermediates and related
            raw material requirements. Business enquiries can include
            specific API names, CAS numbers, purity requirements, grades,
            quantities and packaging preferences.
          </p>

          <p>
            API sourcing requirements vary according to the intended
            pharmaceutical application. Buyers may need to consider
            technical specifications, certificates of analysis, safety
            data sheets, manufacturing information and other relevant
            documentation. The required documents should be determined
            for each ingredient and transaction.
          </p>

          <p>
            International pharmaceutical ingredient transactions may
            involve additional import and export requirements. Product
            eligibility, applicable permissions, registrations, quality
            standards and destination-country regulations must be reviewed
            before a commercial transaction proceeds.
          </p>

          <p>
            Organisations interested in pharmaceutical ingredients can
            contact SAV7 IMPEX with their product specifications and
            sourcing requirements. Explore our related{" "}
            <Link
              href="/generic-medicines"
              className="font-semibold text-[#00875a] underline"
            >
              generic medicines
            </Link>
            ,{" "}
            <Link
              href="/healthcare-products"
              className="font-semibold text-[#00875a] underline"
            >
              healthcare products
            </Link>{" "}
            and{" "}
            <Link
              href="/pharmaceuticals"
              className="font-semibold text-[#00875a] underline"
            >
              pharmaceutical services
            </Link>{" "}
            pages for additional information.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f7f9fb] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="API Sourcing FAQs"
            description="Answers to common questions about active pharmaceutical ingredients and sourcing enquiries."
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
              API BUSINESS ENQUIRIES
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              Have an API Sourcing Requirement?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Share your API name, CAS number, grade, required quantity
              and destination country for an enquiry review.
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
