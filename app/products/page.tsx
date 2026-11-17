
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products | Gold, Silver & Pharmaceutical Products | SAV7 IMPEX",
  description:
    "Explore SAV7 IMPEX product categories, including gold bullion, gold doré, silver, precious metals, generic medicines, APIs, pharmaceutical formulations and healthcare products.",
  alternates: {
    canonical: "https://www.sav7impex.in/products",
  },
  openGraph: {
    title: "Gold, Silver & Pharmaceutical Products | SAV7 IMPEX",
    description:
      "Explore precious metals, pharmaceutical and healthcare product categories from SAV7 IMPEX PRIVATE LIMITED.",
    url: "https://www.sav7impex.in/products",
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
  "@type": "CollectionPage",
  name: "SAV7 IMPEX Products",
  url: "https://www.sav7impex.in/products",
  description:
    "Product categories covering gold, silver, precious metals, pharmaceuticals and healthcare.",
  isPartOf: {
    "@type": "WebSite",
    name: "SAV7 IMPEX PRIVATE LIMITED",
    url: "https://www.sav7impex.in",
  },
};

const goldProducts = [
  {
    tag: "GOLD BULLION",
    title: "Gold Bullion Bars",
    description:
      "Gold bullion bar enquiries for investment, institutional and commercial requirements. Available specifications and purity are confirmed for each transaction.",
    image:
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1000&q=85",
    specs: ["100 g", "1 kg", "400 oz"],
    purity: "Purity subject to specification",
  },
  {
    tag: "GOLD DORÉ",
    title: "Gold Doré Bars",
    description:
      "Gold doré product enquiries for refinery and commercial requirements, subject to source, assay and transaction verification.",
    image:
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1000&q=85",
    specs: ["Bulk enquiries", "Refinery requirements"],
    purity: "Assay dependent",
  },
  {
    tag: "GOLD COINS",
    title: "Gold Bullion Coins",
    description:
      "Enquire about gold bullion coins in different weights and product specifications for eligible commercial and investment requirements.",
    image:
      "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&w=1000&q=85",
    specs: ["1 oz", "1/2 oz", "1/4 oz"],
    purity: "Specification dependent",
  },
  {
    tag: "SILVER",
    title: "Silver Bullion Bars",
    description:
      "Silver bullion bar enquiries for distributors, commercial buyers and precious-metal market participants.",
    image:
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1000&q=85",
    specs: ["1 kg", "100 oz", "1000 oz"],
    purity: "Specification dependent",
  },
  {
    tag: "SILVER COINS",
    title: "Silver Coins",
    description:
      "Explore silver coin requirements across different weights, product origins and specifications.",
    image:
      "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&w=1000&q=85",
    specs: ["1 oz", "Fractional weights"],
    purity: "Specification dependent",
  },
  {
    tag: "PRECIOUS METALS",
    title: "Platinum & Palladium",
    description:
      "Enquiries for platinum and palladium products, subject to sourcing availability, product form and transaction requirements.",
    image:
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1000&q=85",
    specs: ["Bars", "Sponge", "Bulk enquiries"],
    purity: "Specification dependent",
  },
];

const pharmaProducts = [
  {
    tag: "GENERIC MEDICINES",
    title: "Generic Medicines",
    description:
      "Enquiries covering generic medicine categories across different therapeutic areas and dosage forms, subject to applicable approvals.",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=85",
    specs: ["Tablets", "Capsules", "Injectables"],
  },
  {
    tag: "ACTIVE INGREDIENTS",
    title: "APIs & Intermediates",
    description:
      "Active pharmaceutical ingredient and intermediate product enquiries for pharmaceutical manufacturing and sourcing requirements.",
    image:
      "https://images.unsplash.com/photo-1581093458791-9d15482442f5?auto=format&fit=crop&w=1000&q=85",
    specs: ["Bulk enquiries", "API sourcing", "Intermediates"],
  },
  {
    tag: "FORMULATIONS",
    title: "Finished Formulations",
    description:
      "Pharmaceutical formulation enquiries across different dosage forms, subject to product availability and destination-country regulations.",
    image:
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1000&q=85",
    specs: ["Tablets", "Syrups", "Injectables", "Topicals"],
  },
  {
    tag: "OTC HEALTHCARE",
    title: "OTC & Consumer Health",
    description:
      "Over-the-counter and consumer healthcare product enquiries for eligible distribution and commercial requirements.",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=85",
    specs: ["Consumer health", "OTC categories"],
  },
  {
    tag: "NUTRITION",
    title: "Nutraceuticals & Supplements",
    description:
      "Enquiries for nutritional and wellness product categories, including vitamins, minerals and supplements.",
    image:
      "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=1000&q=85",
    specs: ["Capsules", "Powders", "Tablets"],
  },
  {
    tag: "MEDICAL SUPPLIES",
    title: "Medical Devices & PPE",
    description:
      "Medical supply and healthcare equipment enquiries for eligible hospitals, distributors and commercial buyers.",
    image:
      "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&w=1000&q=85",
    specs: ["Medical supplies", "PPE", "Diagnostics"],
  },
];

const therapeuticSegments = [
  {
    icon: "✚",
    title: "Antibiotics",
    text: "Product enquiries across broad and narrow-spectrum antibiotic categories.",
  },
  {
    icon: "♥",
    title: "Cardiovascular",
    text: "Cardiovascular medicine categories, including products for blood pressure and heart health.",
  },
  {
    icon: "◉",
    title: "Anti-Diabetic",
    text: "Medicine categories associated with diabetes management.",
  },
  {
    icon: "✳",
    title: "Oncology",
    text: "Oncology-related medicine enquiries, subject to product and regulatory requirements.",
  },
  {
    icon: "✚",
    title: "Anti-Malarial",
    text: "Anti-malarial medicine categories for eligible healthcare markets.",
  },
  {
    icon: "⌘",
    title: "CNS & Neurology",
    text: "Central nervous system and neurological medicine categories.",
  },
  {
    icon: "◎",
    title: "Respiratory",
    text: "Respiratory medicine categories and related formulations.",
  },
  {
    icon: "◇",
    title: "Anti-Infective",
    text: "Antiviral, antifungal and other anti-infective product categories.",
  },
  {
    icon: "✚",
    title: "Gastro & General",
    text: "Gastrointestinal and general medicine product enquiries.",
  },
];

const process = [
  {
    number: "01",
    title: "Share Your Requirement",
    text: "Tell us the product category, required specification, quantity and destination.",
  },
  {
    number: "02",
    title: "Product Assessment",
    text: "We review the enquiry and assess sourcing possibilities and applicable requirements.",
  },
  {
    number: "03",
    title: "Commercial Discussion",
    text: "Discuss pricing, specifications, documentation and transaction terms.",
  },
  {
    number: "04",
    title: "Order Coordination",
    text: "Proceed with the agreed transaction and applicable documentation and logistics arrangements.",
  },
];

const faqs = [
  {
    question: "What products does SAV7 IMPEX deal in?",
    answer:
      "SAV7 IMPEX focuses on two business divisions: Gold & Precious Metals and Pharmaceuticals & Healthcare. Product enquiries include gold bullion, gold doré, silver, platinum, palladium, generic medicines, APIs, formulations and healthcare product categories.",
  },
  {
    question: "What gold and precious metals can I enquire about?",
    answer:
      "You can enquire about gold bullion bars, gold doré, gold coins, silver bullion bars, silver coins, platinum and palladium. Available product specifications, purity, origin and documentation must be confirmed for each transaction.",
  },
  {
    question: "What pharmaceutical categories are covered?",
    answer:
      "The listed categories include generic medicines, APIs and intermediates, finished formulations, OTC and consumer health products, nutraceuticals, supplements, medical devices and PPE. Specific products are subject to sourcing availability and applicable regulatory requirements.",
  },
  {
    question: "Can I enquire about bulk quantities?",
    answer:
      "Yes. You can submit bulk or commercial requirements. Minimum order quantities, pricing, availability and transaction terms depend on the particular product and supplier.",
  },
  {
    question: "Can I request product specifications and documents?",
    answer:
      "Yes. You can request relevant specifications and available product documentation during the enquiry process. The documents required and available depend on the product, supplier, transaction and destination-country regulations.",
  },
  {
    question: "Do pharmaceutical products require destination-country approvals?",
    answer:
      "Pharmaceutical imports and exports can require product registrations, licences, permits and other regulatory documents depending on the product and destination market. These requirements must be checked before proceeding.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "Contact SAV7 IMPEX with your product name, required quantity, specifications and destination. The team can review the enquiry and discuss the next steps.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <span
        className={`mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] ${
          light ? "text-[#D8B65B]" : "text-[#A77D28]"
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-current" />
        {eyebrow}
      </span>

      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-[#102B46]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-sm leading-7 sm:text-base ${
            light ? "text-slate-300" : "text-slate-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function ProductCard({
  product,
  type,
}: {
  product: (typeof goldProducts)[number] | (typeof pharmaProducts)[number];
  type: "gold" | "pharma";
}) {
  const isGold = type === "gold";

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-60 overflow-hidden bg-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071827]/70 via-transparent to-transparent" />

        <span
          className={`absolute left-5 top-5 rounded-full px-3 py-2 text-[10px] font-extrabold tracking-[0.15em] ${
            isGold
              ? "bg-[#C9A227] text-[#102B46]"
              : "bg-[#00875A] text-white"
          }`}
        >
          {product.tag}
        </span>

        <div className="absolute bottom-5 left-5 right-5">
          <span className="text-xs font-semibold text-white/80">
            SAV7 IMPEX PRODUCT CATEGORY
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-extrabold text-[#102B46] transition group-hover:text-[#A77D28]">
          {product.title}
        </h3>

        <p className="mt-3 min-h-[88px] text-sm leading-7 text-slate-500">
          {product.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {product.specs.map((spec) => (
            <span
              key={spec}
              className={`rounded-md px-3 py-2 text-[10px] font-bold ${
                isGold
                  ? "bg-[#FBF5E9] text-[#98701E]"
                  : "bg-[#EAF7F1] text-[#00875A]"
              }`}
            >
              {spec}
            </span>
          ))}
        </div>

        {"purity" in product && (
          <p className="mt-4 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
            {product.purity}
          </p>
        )}

        <Link
          href={`/contact?product=${encodeURIComponent(product.title)}`}
          className={`mt-6 inline-flex items-center gap-2 text-sm font-extrabold transition ${
            isGold
              ? "text-[#A77D28] hover:text-[#102B46]"
              : "text-[#00875A] hover:text-[#102B46]"
          }`}
        >
          Enquire About Product
          <span className="transition group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}

export default function ProductsPage() {
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
          <span className="text-[#102B46]">Products</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative bg-[#091C30]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#C9A227]/30" />
          <div className="absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-[#C9A227]/30" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-3 rounded-full border border-[#C9A227]/30 bg-white/5 px-4 py-2 text-[10px] font-extrabold tracking-[0.2em] text-[#E1BD62]">
              <span className="h-2 w-2 rounded-full bg-[#C9A227]" />
              OUR PRODUCT PORTFOLIO
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Products for
              <span className="block text-[#D8B65B]">
                Global Trade.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-8 text-slate-300 sm:text-base">
              Explore the product categories of SAV7 IMPEX PRIVATE LIMITED,
              covering Gold & Precious Metals and Pharmaceuticals & Healthcare.
              We welcome enquiries from businesses seeking product sourcing
              and international trade opportunities.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#gold-products"
                className="rounded-lg bg-[#C9A227] px-7 py-4 text-center text-sm font-extrabold text-[#102B46] transition hover:bg-[#E0BB50]"
              >
                Explore Gold Products →
              </Link>

              <Link
                href="#pharma-products"
                className="rounded-lg border border-white/30 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-white hover:text-[#102B46]"
              >
                Explore Pharma Products
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold text-slate-300">
              <span>✦ Precious Metals</span>
              <span>✦ Pharmaceuticals</span>
              <span>✦ Healthcare</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl border border-[#C9A227]/20" />

            <div className="relative grid grid-cols-2 gap-3">
              <div className="overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=85"
                  alt="Gold bullion product category"
                  className="h-64 w-full object-cover sm:h-80"
                />
              </div>

              <div className="mt-12 overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=85"
                  alt="Pharmaceutical product category"
                  className="h-64 w-full object-cover sm:h-80"
                />
              </div>

              <div className="col-span-2 rounded-xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold tracking-widest text-[#D8B65B]">
                      TWO BUSINESS DIVISIONS
                    </p>
                    <p className="mt-2 text-lg font-extrabold text-white">
                      One Global Trade Focus
                    </p>
                  </div>
                  <span className="text-3xl">🌍</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY STRIP */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-4 px-5 py-7 text-[10px] font-extrabold tracking-[0.16em] text-[#102B46] sm:text-xs">
          <span>GOLD BULLION</span>
          <span className="text-[#C9A227]">✦</span>
          <span>SILVER</span>
          <span className="text-[#C9A227]">✦</span>
          <span>PRECIOUS METALS</span>
          <span className="text-[#00875A]">✦</span>
          <span>GENERIC MEDICINES</span>
          <span className="text-[#00875A]">✦</span>
          <span>APIs</span>
          <span className="text-[#00875A]">✦</span>
          <span>HEALTHCARE</span>
        </div>
      </section>

      {/* GOLD PRODUCTS */}
      <section
        id="gold-products"
        className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="DIVISION 01 · GOLD & PRECIOUS METALS"
            title="Gold & Silver Products"
            description="Explore gold bullion, gold doré, silver and other precious-metal product categories for commercial and institutional enquiries."
          />

          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#C9A227]/20 bg-[#FBF8F0] p-5">
            <div>
              <p className="text-sm font-extrabold text-[#102B46]">
                Precious Metals Division
              </p>
              <p className="mt-1 text-xs leading-6 text-slate-500">
                Product specifications, origin and availability are confirmed
                during the enquiry process.
              </p>
            </div>
            <Link
              href="/gold-precious-metals"
              className="text-xs font-extrabold text-[#98701E] hover:underline"
            >
              Explore Division →
            </Link>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {goldProducts.map((product) => (
              <ProductCard
                key={product.title}
                product={product}
                type="gold"
              />
            ))}
          </div>
        </div>
      </section>

      {/* PHARMA PRODUCTS */}
      <section
        id="pharma-products"
        className="scroll-mt-24 bg-[#F5F8F7] px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="DIVISION 02 · PHARMACEUTICALS & HEALTHCARE"
            title="Pharmaceutical Products"
            description="Discover pharmaceutical and healthcare product categories, including generic medicines, APIs, finished formulations and medical supplies."
          />

          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#00875A]/15 bg-white p-5">
            <div>
              <p className="text-sm font-extrabold text-[#102B46]">
                Pharmaceutical & Healthcare Division
              </p>
              <p className="mt-1 text-xs leading-6 text-slate-500">
                Product supply is subject to sourcing, product registrations
                and applicable destination-market requirements.
              </p>
            </div>
            <Link
              href="/pharmaceuticals"
              className="text-xs font-extrabold text-[#00875A] hover:underline"
            >
              Explore Division →
            </Link>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {pharmaProducts.map((product) => (
              <ProductCard
                key={product.title}
                product={product}
                type="pharma"
              />
            ))}
          </div>
        </div>
      </section>

      {/* THERAPEUTIC SEGMENTS */}
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="PHARMACEUTICAL CATEGORIES"
            title="Therapeutic Segments"
            description="Browse the therapeutic categories included in our pharmaceutical product enquiry portfolio."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {therapeuticSegments.map((item) => (
              <div
                key={item.title}
                className="group flex gap-5 rounded-xl border border-slate-200 bg-white p-6 transition hover:border-[#00875A]/40 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF7F1] text-xl font-bold text-[#00875A] transition group-hover:bg-[#00875A] group-hover:text-white">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-extrabold text-[#102B46]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs leading-6 text-slate-400">
            Specific pharmaceutical products and their availability are
            subject to applicable regulatory requirements.
          </p>
        </div>
      </section>

      {/* PRODUCT DOCUMENTATION */}
      <section className="bg-[#091C30] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-extrabold tracking-[0.2em] text-[#D8B65B]">
              PRODUCT INFORMATION & DOCUMENTATION
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Clear Product Details.
              <span className="block text-[#D8B65B]">
                Informed Trade Decisions.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-slate-300">
              Product specifications and supporting documents are important
              parts of international trade. Requirements vary depending on
              product category, supplier, transaction and destination market.
              Our enquiry process helps establish the relevant details before
              commercial discussions proceed.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-lg bg-[#C9A227] px-7 py-4 text-sm font-extrabold text-[#102B46] transition hover:bg-[#E0BB50]"
            >
              Discuss Your Requirements →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: "01",
                title: "Product Specifications",
                text: "Discuss product type, grade, dosage form, purity or other relevant specifications.",
              },
              {
                icon: "02",
                title: "Supporting Documents",
                text: "Identify applicable product and transaction documentation.",
              },
              {
                icon: "03",
                title: "Regulatory Requirements",
                text: "Consider relevant import, export and destination-market requirements.",
              },
              {
                icon: "04",
                title: "Commercial Terms",
                text: "Review quantity, pricing, delivery terms and transaction conditions.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <span className="text-xs font-extrabold text-[#D8B65B]">
                  {item.icon}
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
      </section>

      {/* ORDERING PROCESS */}
      <section className="bg-[#F7F9FB] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="OUR ENQUIRY PROCESS"
            title="From Enquiry to Order"
            description="A structured process to understand your product requirements and discuss the next steps."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.number}
                className="relative rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-4xl font-black text-[#C9A227]/40">
                  {item.number}
                </span>

                <h3 className="mt-6 text-lg font-extrabold text-[#102B46]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.text}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-[#00875A]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SAV7 */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="THE SAV7 IMPEX APPROACH"
            title="A Diversified Business Approach"
            description="Our two business divisions address different product markets through a common focus on clear communication and transaction-specific requirements."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "◈",
                title: "Diversified Portfolio",
                text: "Two distinct business divisions covering precious metals and pharmaceuticals and healthcare.",
              },
              {
                icon: "◎",
                title: "Requirement-Based Enquiries",
                text: "Product discussions begin with specifications, quantity, destination and commercial requirements.",
              },
              {
                icon: "◇",
                title: "Trade Documentation Focus",
                text: "Consideration of product documentation and relevant regulatory requirements for each transaction.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-8 text-center transition hover:border-[#C9A227]/50 hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FBF5E9] text-3xl text-[#A77D28]">
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

      {/* SEO CONTENT */}
      <section className="border-t border-slate-100 bg-[#F7F9FB] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <span className="text-xs font-extrabold tracking-[0.2em] text-[#A77D28]">
            SAV7 IMPEX PRODUCT PORTFOLIO
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#102B46] sm:text-4xl">
            Gold, Silver, Precious Metals & Pharmaceutical Products
          </h2>

          <div className="mt-8 space-y-6 text-sm leading-8 text-slate-600">
            <p>
              SAV7 IMPEX PRIVATE LIMITED is an India-based business with two
              distinct areas of focus: Gold & Precious Metals and
              Pharmaceuticals & Healthcare. Its product portfolio brings
              together enquiries across precious metals, pharmaceutical
              products and healthcare-related categories. The products listed
              on this page represent categories for business enquiries;
              specific availability and transaction terms are confirmed
              separately.
            </p>

            <h3 className="pt-3 text-xl font-extrabold text-[#102B46]">
              Gold & Precious Metals Product Categories
            </h3>

            <p>
              The precious metals portfolio includes gold bullion bars, gold
              doré bars, gold bullion coins, silver bullion bars, silver coins,
              platinum and palladium product categories. Commercial buyers can
              share their preferred product form, quantity, purity or grade
              requirements, product origin preferences and delivery
              destination. Product specifications, assay information,
              documentation and commercial availability should be verified
              for the particular transaction.
            </p>

            <p>
              Gold bullion enquiries may involve different bar weights,
              including 100 gram, 1 kilogram and larger institutional formats.
              Silver enquiries may involve different bar and coin formats.
              Gold doré and other precious metal enquiries require
              transaction-specific assessment of material specifications,
              assay information, source and applicable trade requirements.
            </p>

            <h3 className="pt-3 text-xl font-extrabold text-[#102B46]">
              Pharmaceutical & Healthcare Product Categories
            </h3>

            <p>
              The pharmaceutical and healthcare portfolio includes generic
              medicines, active pharmaceutical ingredients (APIs),
              intermediates, finished formulations, OTC and consumer health
              categories, nutraceuticals, supplements, medical devices and
              personal protective equipment. Product enquiries can cover
              different dosage forms such as tablets, capsules, syrups,
              suspensions, injectables and topical formulations.
            </p>

            <p>
              Pharmaceutical trade requires attention to product-specific
              regulations, registrations, manufacturing information, labelling
              and documentation. Requirements can differ between countries
              and product categories. Importers should verify the relevant
              regulatory requirements and product eligibility before
              proceeding with an order.
            </p>

            <h3 className="pt-3 text-xl font-extrabold text-[#102B46]">
              Pharmaceutical Therapeutic Segments
            </h3>

            <p>
              Pharmaceutical enquiries may cover antibiotics, cardiovascular
              medicines, anti-diabetic products, oncology, anti-malarial
              medicines, central nervous system and neurological categories,
              respiratory medicines, anti-infectives and gastrointestinal
              products. Specific products, strengths, dosage forms and
              applicable permissions need to be assessed individually.
            </p>

            <h3 className="pt-3 text-xl font-extrabold text-[#102B46]">
              International Product Enquiries
            </h3>

            <p>
              Businesses interested in sourcing products can contact SAV7
              IMPEX with the product category, quantity, specifications and
              destination market. This information helps establish the
              commercial requirement and identify relevant sourcing and
              documentation considerations. Pricing, minimum order quantities,
              payment terms and delivery arrangements are subject to
              transaction-specific confirmation.
            </p>

            <p>
              For enquiries about gold bullion, silver, precious metals,
              generic medicines, APIs, formulations and healthcare products,
              visit the relevant division pages or contact the SAV7 IMPEX
              team directly.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/gold-precious-metals"
              className="rounded-lg border border-[#C9A227]/40 bg-white px-5 py-3 text-xs font-extrabold text-[#98701E] hover:bg-[#FBF5E9]"
            >
              Gold & Precious Metals →
            </Link>
            <Link
              href="/pharmaceuticals"
              className="rounded-lg border border-[#00875A]/30 bg-white px-5 py-3 text-xs font-extrabold text-[#00875A] hover:bg-[#EAF7F1]"
            >
              Pharmaceuticals →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="PRODUCT ENQUIRIES"
            title="Frequently Asked Questions"
            description="Helpful information about our product categories and enquiry process."
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
            START A BUSINESS ENQUIRY
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Looking for the Right
            <span className="block text-[#D8B65B]">
              Product & Trade Partner?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-300">
            Share your product category, specifications, quantity and
            destination. Contact SAV7 IMPEX to discuss your business
            requirements.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-[#C9A227] px-8 py-4 text-sm font-extrabold text-[#102B46] transition hover:bg-[#E0BB50]"
            >
              Request a Product Enquiry →
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
