
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Import Export Services | Gold & Pharma Trade Solutions | SAV7 IMPEX",
  description:
    "Explore SAV7 IMPEX import-export services, including global sourcing, trade documentation, logistics coordination and customs support for gold, silver and pharmaceutical products.",
  alternates: {
    canonical: "https://www.sav7impex.in/services",
  },
  openGraph: {
    title: "Import Export Services | Gold & Pharma | SAV7 IMPEX",
    description:
      "Import-export solutions for gold, precious metals, pharmaceuticals and healthcare products.",
    url: "https://www.sav7impex.in/services",
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
  "@type": "Service",
  name: "Import Export Services",
  description:
    "Import-export sourcing and trade coordination for precious metals, pharmaceuticals and healthcare products.",
  provider: {
    "@type": "Organization",
    name: "SAV7 IMPEX PRIVATE LIMITED",
    url: "https://www.sav7impex.in",
    email: "sav7impex@gmail.com",
    telephone: "+91 92909 34388",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
  },
  areaServed: "Worldwide",
  serviceType: [
    "Gold and Precious Metals Trade",
    "Pharmaceutical Import Export",
    "Global Product Sourcing",
    "Trade Documentation",
    "Logistics Coordination",
  ],
};

const coreServices = [
  {
    icon: "🌍",
    title: "Global Product Sourcing",
    text: "Identify potential manufacturers, suppliers and business partners for gold, precious metals, pharmaceutical products and healthcare supplies.",
    features: ["Supplier discovery", "Product sourcing", "Enquiry coordination"],
    color: "green",
  },
  {
    icon: "📋",
    title: "Trade Documentation",
    text: "Coordinate relevant commercial, shipping, customs and product-specific documentation according to the transaction and destination requirements.",
    features: ["Commercial invoices", "Packing lists", "Certificates where applicable"],
    color: "gold",
  },
  {
    icon: "🚢",
    title: "International Logistics",
    text: "Coordinate suitable transportation and shipment arrangements for international trade, subject to product, route and carrier requirements.",
    features: ["Air freight coordination", "Sea freight coordination", "Shipment updates"],
    color: "green",
  },
  {
    icon: "🏦",
    title: "Payment Coordination",
    text: "Discuss suitable transaction payment arrangements with buyers, sellers and their authorised banking or financial partners.",
    features: ["LC coordination", "Bank transfer", "Payment documentation"],
    color: "gold",
  },
  {
    icon: "🔐",
    title: "Storage Coordination",
    text: "Explore suitable storage and handling arrangements for precious metals and pharmaceutical products through appropriate service providers.",
    features: ["Storage enquiries", "Product handling", "Temperature requirements"],
    color: "green",
  },
  {
    icon: "🛃",
    title: "Customs Coordination",
    text: "Coordinate with relevant customs professionals and logistics partners regarding product classification, documentation and clearance requirements.",
    features: ["Import documentation", "Export documentation", "Customs coordination"],
    color: "gold",
  },
];

const divisionServices = [
  {
    division: "GOLD & PRECIOUS METALS",
    color: "gold",
    image:
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1200&q=85",
    heading: "Gold Import Export Services",
    description:
      "SAV7 IMPEX focuses on gold and precious metals trade enquiries, product sourcing and import-export coordination. Requirements can be discussed for bullion, silver and other eligible precious metal products, subject to applicable regulations and transaction verification.",
    services: [
      "Gold bullion sourcing enquiries",
      "Gold bars and precious metals",
      "Silver product sourcing",
      "Gold and silver trade coordination",
      "Product specification coordination",
      "Commercial documentation",
      "Shipment coordination",
      "Supplier and buyer communication",
    ],
    link: "/gold-import-export",
  },
  {
    division: "PHARMACEUTICALS & HEALTHCARE",
    color: "green",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=85",
    heading: "Pharmaceutical Import Export Services",
    description:
      "Our pharmaceutical and healthcare division covers sourcing enquiries and trade coordination for eligible medicines, APIs, formulations and healthcare products. Product availability and documentation depend on applicable licences, registrations and destination-market regulations.",
    services: [
      "Generic medicine sourcing",
      "Active pharmaceutical ingredients",
      "Pharmaceutical formulations",
      "Tablets and capsules",
      "Healthcare product enquiries",
      "Product documentation coordination",
      "Regulatory requirement coordination",
      "Temperature-sensitive shipment planning",
    ],
    link: "/pharmaceuticals",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Business Enquiry",
    desc: "Share your product requirements, quantity, destination country and expected timeline.",
  },
  {
    num: "02",
    title: "Product Sourcing",
    desc: "Explore suitable suppliers, manufacturers and product options for your requirements.",
  },
  {
    num: "03",
    title: "Quotation & Documentation",
    desc: "Discuss pricing, specifications, applicable documentation and transaction requirements.",
  },
  {
    num: "04",
    title: "Trade & Logistics",
    desc: "Coordinate order execution, shipping arrangements and relevant customs procedures.",
  },
  {
    num: "05",
    title: "Delivery Coordination",
    desc: "Follow up on shipment progress and coordinate communication through the delivery process.",
  },
];

const additionalServices = [
  {
    icon: "🔍",
    title: "Supplier Identification",
    text: "Identify potential suppliers and manufacturers based on product requirements and business needs.",
  },
  {
    icon: "📞",
    title: "Business Communication",
    text: "Coordinate communication between buyers, suppliers and relevant trade partners.",
  },
  {
    icon: "📦",
    title: "Sample Coordination",
    text: "Discuss product samples and inspection arrangements where supported by the supplier.",
  },
  {
    icon: "📊",
    title: "Product Classification",
    text: "Coordinate product classification enquiries and relevant HS code information with appropriate professionals.",
  },
  {
    icon: "🛡️",
    title: "Insurance Enquiries",
    text: "Coordinate cargo insurance enquiries with suitable insurance providers when required.",
  },
  {
    icon: "📈",
    title: "Market Research",
    text: "Understand product demand, sourcing opportunities and potential international markets.",
  },
  {
    icon: "🤝",
    title: "Trade Partnerships",
    text: "Build business connections with potential buyers, sellers, manufacturers and distributors.",
  },
  {
    icon: "🌐",
    title: "Market Expansion",
    text: "Explore international trade opportunities and new markets based on product and regulatory requirements.",
  },
];

const faqs = [
  {
    question: "What import-export services does SAV7 IMPEX provide?",
    answer:
      "SAV7 IMPEX covers product sourcing enquiries, trade documentation coordination, logistics coordination, payment-related communication, customs coordination and international business enquiries across gold, precious metals, pharmaceuticals and healthcare products.",
  },
  {
    question: "Does SAV7 IMPEX handle gold import and export?",
    answer:
      "SAV7 IMPEX provides a business enquiry channel for gold and precious metals, including bullion and silver products. Product availability, transaction eligibility, documentation and permissions depend on applicable Indian laws and destination-country requirements.",
  },
  {
    question: "Does SAV7 IMPEX provide pharmaceutical export services?",
    answer:
      "SAV7 IMPEX handles pharmaceutical and healthcare product sourcing and trade enquiries. Specific products can be considered subject to applicable manufacturing, export, import, registration and regulatory requirements.",
  },
  {
    question: "What documents are required for international trade?",
    answer:
      "Documents may include commercial invoices, packing lists, bills of lading or airway bills, certificates of origin, product-specific certificates, customs declarations and insurance documents. Requirements vary according to the product and countries involved.",
  },
  {
    question: "Can I enquire about bulk product requirements?",
    answer:
      "Yes. You can share your product name, required quantity, specifications, destination country and expected timeline through our contact page or WhatsApp.",
  },
  {
    question: "Does SAV7 IMPEX coordinate international shipping?",
    answer:
      "Shipping and logistics arrangements can be discussed according to the product, shipment route, carrier availability and applicable handling requirements.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "Contact our team with your product requirements, quantity, destination country and timeline. We can review the enquiry and discuss the next steps.",
  },
  {
    question: "Does SAV7 IMPEX handle both gold and pharmaceutical products?",
    answer:
      "Yes. SAV7 IMPEX presents two business divisions: Gold & Precious Metals and Pharmaceuticals & Healthcare. Each division has its own product and regulatory considerations.",
  },
];

const benefits = [
  {
    number: "01",
    title: "Two Business Divisions",
    description:
      "A diversified business approach covering precious metals and pharmaceutical products.",
    color: "gold",
  },
  {
    number: "02",
    title: "Sourcing Coordination",
    description:
      "Product and supplier enquiries coordinated around your commercial requirements.",
    color: "green",
  },
  {
    number: "03",
    title: "Trade Documentation",
    description:
      "Attention to transaction-specific commercial and regulatory documentation.",
    color: "blue",
  },
  {
    number: "04",
    title: "International Focus",
    description:
      "Business enquiries and trade opportunities involving domestic and international markets.",
    color: "gold",
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white text-[#26384b]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* BREADCRUMB */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-[#e7ecf1] bg-[#f7f9fb] px-[5%] py-4 sm:px-[7%]"
      >
        <ol className="mx-auto flex max-w-[1250px] items-center gap-3 text-xs">
          <li>
            <Link
              href="/"
              className="font-semibold text-[#718096] transition hover:text-[#00875a]"
            >
              Home
            </Link>
          </li>
          <li className="text-[#b68b31]">/</li>
          <li className="font-bold text-[#102b46]">Services</li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#091c30] px-[5%] py-16 text-white sm:px-[7%] md:py-24">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full border border-white/[0.07]" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full border border-white/[0.07]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#00875a]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1250px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#55d6a4]/25 bg-[#00875a]/15 px-4 py-2 text-[10px] font-extrabold tracking-[0.18em] text-[#55d6a4]">
              <span className="h-2 w-2 rounded-full bg-[#55d6a4]" />
              IMPORT & EXPORT SERVICES
            </span>

            <h1 className="font-['Manrope'] text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-[54px]">
              Complete Import Export Services for{" "}
              <span className="text-[#d8b65b]">
                Gold, Silver & Pharmaceuticals
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-8 text-[#c0ccd8] sm:text-base">
              SAV7 IMPEX PRIVATE LIMITED connects product sourcing,
              documentation and trade coordination across precious metals,
              pharmaceuticals and healthcare products. We work around your
              business requirements and the applicable regulations for each
              transaction.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-lg bg-[#00875a] px-7 py-4 text-xs font-extrabold text-white transition hover:bg-[#006b46]"
              >
                Request a Business Quote <span>↗</span>
              </Link>

              <Link
                href="#core-services"
                className="inline-flex min-h-13 items-center justify-center rounded-lg border border-white/25 px-7 py-4 text-xs font-bold text-white transition hover:border-[#d8b65b] hover:text-[#d8b65b]"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-bold tracking-wider text-[#c0ccd8]">
              <span>✦ PRECIOUS METALS</span>
              <span>✚ PHARMACEUTICALS</span>
              <span>✧ GLOBAL TRADE</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white/10 sm:min-h-[420px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(0deg,rgba(9,28,48,0.8),rgba(9,28,48,0.08)),url('https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&q=85')",
                }}
              />

              <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/15 bg-[#091c30]/85 p-5 backdrop-blur-md sm:inset-x-7 sm:bottom-7">
                <span className="text-[9px] font-extrabold tracking-[0.2em] text-[#55d6a4]">
                  SAV7 IMPEX
                </span>
                <h2 className="mt-2 font-['Manrope'] text-xl font-extrabold text-white sm:text-2xl">
                  Connecting Products to Markets
                </h2>
                <p className="mt-2 text-xs leading-6 text-[#c0ccd8]">
                  Business sourcing and international trade coordination
                  across two sectors.
                </p>
              </div>
            </div>

            <div className="absolute -left-4 -top-5 hidden rounded-xl border border-[#e7ecf1] bg-white p-4 shadow-xl sm:block">
              <span className="block text-[9px] font-extrabold tracking-widest text-[#718096]">
                BUSINESS SECTORS
              </span>
              <strong className="mt-1 block font-['Manrope'] text-2xl font-extrabold text-[#102b46]">
                02
              </strong>
              <span className="text-[10px] font-semibold text-[#00875a]">
                Diversified Trade
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE HIGHLIGHTS */}
      <section className="border-b border-[#e7ecf1] bg-white px-[5%] py-6 sm:px-[7%]">
        <div className="mx-auto flex max-w-[1250px] flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center sm:justify-between">
          {[
            "GLOBAL SOURCING",
            "TRADE DOCUMENTATION",
            "LOGISTICS COORDINATION",
            "PAYMENT COORDINATION",
            "CUSTOMS SUPPORT",
          ].map((item, index) => (
            <div key={item} className="flex items-center gap-4">
              <span className="text-[10px] font-extrabold tracking-widest text-[#102b46]">
                {item}
              </span>
              {index !== 4 && (
                <span className="hidden text-[#b68b31] sm:inline">✦</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CORE SERVICES */}
      <section
        id="core-services"
        className="bg-white px-[5%] py-16 sm:px-[7%] md:py-24"
      >
        <div className="mx-auto max-w-[1250px]">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-flex rounded-full bg-[#eaf7f1] px-4 py-2 text-[10px] font-extrabold tracking-[0.18em] text-[#00875a]">
              OUR CORE SERVICES
            </span>
            <h2 className="font-['Manrope'] text-3xl font-extrabold text-[#102b46] sm:text-4xl">
              Import Export Services for{" "}
              <span className="text-[#00875a]">Your Business</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#718096]">
              Practical support across product sourcing, documentation,
              logistics and international trade coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, index) => {
              const gold = service.color === "gold";

              return (
                <article
                  key={service.title}
                  className="group rounded-2xl border border-[#e7ecf1] bg-white p-6 shadow-[0_5px_25px_rgba(9,28,48,0.035)] transition duration-300 hover:-translate-y-1 hover:border-[#cbd8d1] hover:shadow-xl sm:p-7"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div
                      className={`grid h-14 w-14 place-items-center rounded-xl text-2xl ${
                        gold
                          ? "bg-[#fbf5e9]"
                          : "bg-[#eaf7f1]"
                      }`}
                    >
                      {service.icon}
                    </div>
                    <span className="font-['Manrope'] text-2xl font-extrabold text-[#e7ecf1]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-['Manrope'] text-lg font-extrabold text-[#102b46]">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-[76px] text-xs leading-7 text-[#718096]">
                    {service.text}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className={`rounded-md px-3 py-2 text-[9px] font-bold ${
                          gold
                            ? "bg-[#fbf5e9] text-[#997323]"
                            : "bg-[#eaf7f1] text-[#00875a]"
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`mt-6 h-[2px] w-10 transition-all duration-300 group-hover:w-full ${
                      gold ? "bg-[#b68b31]" : "bg-[#00875a]"
                    }`}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIVISION SERVICES */}
      <section className="bg-[#f7f9fb] px-[5%] py-16 sm:px-[7%] md:py-24">
        <div className="mx-auto max-w-[1250px]">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-[10px] font-extrabold tracking-[0.18em] text-[#b68b31] shadow-sm">
              DIVISION-SPECIFIC SERVICES
            </span>
            <h2 className="font-['Manrope'] text-3xl font-extrabold text-[#102b46] sm:text-4xl">
              Specialised Services by{" "}
              <span className="text-[#00875a]">Business Division</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#718096]">
              Two distinct business sectors with different product
              specifications, sourcing requirements and regulatory
              considerations.
            </p>
          </div>

          <div className="space-y-8">
            {divisionServices.map((division) => {
              const gold = division.color === "gold";

              return (
                <article
                  key={division.division}
                  className="grid overflow-hidden rounded-2xl border border-[#e7ecf1] bg-white shadow-sm lg:grid-cols-2"
                >
                  <div className="relative min-h-[270px] overflow-hidden sm:min-h-[360px]">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition duration-700 hover:scale-105"
                      style={{
                        backgroundImage: `linear-gradient(0deg,rgba(9,28,48,0.72),rgba(9,28,48,0.08)),url("${division.image}")`,
                      }}
                    />
                    <div className="absolute bottom-7 left-7 right-7">
                      <span
                        className={`inline-flex rounded-md px-4 py-2 text-[9px] font-extrabold tracking-[0.16em] text-white ${
                          gold ? "bg-[#b68b31]" : "bg-[#00875a]"
                        }`}
                      >
                        {division.division}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-9 lg:p-11">
                    <span
                      className={`text-[10px] font-extrabold tracking-widest ${
                        gold ? "text-[#b68b31]" : "text-[#00875a]"
                      }`}
                    >
                      SAV7 IMPEX BUSINESS DIVISION
                    </span>

                    <h3 className="mt-3 font-['Manrope'] text-2xl font-extrabold leading-tight text-[#102b46] sm:text-3xl">
                      {division.heading}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#718096]">
                      {division.description}
                    </p>

                    <div className="my-7 grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2">
                      {division.services.map((service) => (
                        <div
                          key={service}
                          className="flex items-start gap-2.5 text-xs font-semibold leading-6 text-[#34485d]"
                        >
                          <span
                            className={`mt-0.5 font-extrabold ${
                              gold ? "text-[#b68b31]" : "text-[#00875a]"
                            }`}
                          >
                            ✓
                          </span>
                          {service}
                        </div>
                      ))}
                    </div>

                    <Link
                      href={division.link}
                      className={`inline-flex min-h-12 items-center gap-3 rounded-lg px-6 py-3 text-xs font-extrabold text-white transition hover:-translate-y-0.5 ${
                        gold
                          ? "bg-[#b68b31] hover:bg-[#967022]"
                          : "bg-[#00875a] hover:bg-[#006b46]"
                      }`}
                    >
                      Explore Division <span className="text-base">↗</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white px-[5%] py-16 sm:px-[7%] md:py-24">
        <div className="mx-auto max-w-[1250px]">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-flex rounded-full bg-[#eaf7f1] px-4 py-2 text-[10px] font-extrabold tracking-[0.18em] text-[#00875a]">
              HOW WE WORK
            </span>
            <h2 className="font-['Manrope'] text-3xl font-extrabold text-[#102b46] sm:text-4xl">
              Our 5-Step Trade Process
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#718096]">
              A structured approach to understanding your requirements and
              coordinating international business transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <article
                key={step.num}
                className="relative rounded-xl border border-[#e7ecf1] border-t-[3px] border-t-[#00875a] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="font-['Manrope'] text-4xl font-extrabold text-[#e3eee8]">
                  {step.num}
                </span>

                <h3 className="mt-5 font-['Manrope'] text-base font-extrabold text-[#102b46]">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs leading-7 text-[#718096]">
                  {step.desc}
                </p>

                {index !== 4 && (
                  <span className="absolute right-5 top-8 hidden text-lg text-[#b68b31] lg:block">
                    →
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="bg-[#f7f9fb] px-[5%] py-16 sm:px-[7%] md:py-24">
        <div className="mx-auto max-w-[1250px]">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-[10px] font-extrabold tracking-[0.18em] text-[#b68b31] shadow-sm">
              ADDITIONAL BUSINESS SUPPORT
            </span>
            <h2 className="font-['Manrope'] text-3xl font-extrabold text-[#102b46] sm:text-4xl">
              More Than Product Sourcing
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#718096]">
              Additional coordination services to support buyers, suppliers
              and international business enquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((service) => (
              <article
                key={service.title}
                className="rounded-xl border border-[#e7ecf1] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-[#eaf7f1] text-2xl">
                  {service.icon}
                </div>

                <h3 className="font-['Manrope'] text-base font-extrabold text-[#102b46]">
                  {service.title}
                </h3>

                <p className="mt-3 text-xs leading-7 text-[#718096]">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="relative overflow-hidden bg-[#091c30] px-[5%] py-16 text-white sm:px-[7%] md:py-20">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#00875a]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex rounded-full border border-[#55d6a4]/20 bg-[#00875a]/15 px-4 py-2 text-[10px] font-extrabold tracking-[0.18em] text-[#55d6a4]">
              REGULATORY & DOCUMENTATION
            </span>

            <h2 className="font-['Manrope'] text-3xl font-extrabold sm:text-4xl">
              Responsible Trade.{" "}
              <span className="text-[#d8b65b]">Appropriate Compliance.</span>
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#c0ccd8]">
              Gold and pharmaceutical products have different legal,
              licensing, customs and regulatory requirements. Documentation
              and permissions must be evaluated according to the product,
              transaction and countries involved.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Product Documentation"],
              ["02", "Import-Export Permissions"],
              ["03", "Customs Requirements"],
              ["04", "Regulatory Coordination"],
            ].map(([number, title]) => (
              <div
                key={number}
                className="rounded-xl border border-white/10 bg-white/[0.05] p-5"
              >
                <span className="font-['Manrope'] text-2xl font-extrabold text-[#d8b65b]">
                  {number}
                </span>
                <h3 className="mt-3 text-sm font-bold text-white">{title}</h3>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-[11px] leading-6 text-[#9aabba]">
            All activities are subject to applicable laws, product-specific
            permissions, registrations and documentation. Any certifications,
            licences or regulatory approvals should be verified against the
            actual company and product records before being represented as
            available.
          </p>
        </div>
      </section>

      {/* WHY SAV7 */}
      <section className="bg-white px-[5%] py-16 sm:px-[7%] md:py-24">
        <div className="mx-auto max-w-[1250px]">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-flex rounded-full bg-[#eaf7f1] px-4 py-2 text-[10px] font-extrabold tracking-[0.18em] text-[#00875a]">
              WHY SAV7 IMPEX
            </span>

            <h2 className="font-['Manrope'] text-3xl font-extrabold text-[#102b46] sm:text-4xl">
              A Diversified Approach to{" "}
              <span className="text-[#00875a]">International Trade</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const color =
                benefit.color === "gold"
                  ? "text-[#b68b31] border-t-[#b68b31]"
                  : benefit.color === "blue"
                    ? "text-[#287cbb] border-t-[#287cbb]"
                    : "text-[#00875a] border-t-[#00875a]";

              return (
                <article
                  key={benefit.number}
                  className={`rounded-xl border border-[#e7ecf1] border-t-[3px] ${color} bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <span className="font-['Manrope'] text-3xl font-extrabold opacity-40">
                    {benefit.number}
                  </span>
                  <h3 className="mt-5 font-['Manrope'] text-base font-extrabold text-[#102b46]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-xs leading-7 text-[#718096]">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="bg-[#f7f9fb] px-[5%] py-16 sm:px-[7%] md:py-20">
        <div className="mx-auto max-w-[1000px] rounded-2xl border border-[#e7ecf1] bg-white p-6 shadow-sm sm:p-10 lg:p-12">
          <span className="text-[10px] font-extrabold tracking-[0.18em] text-[#00875a]">
            SAV7 IMPEX PRIVATE LIMITED
          </span>

          <h2 className="mt-3 font-['Manrope'] text-2xl font-extrabold leading-tight text-[#102b46] sm:text-3xl">
            Import Export Services for Gold, Precious Metals and
            Pharmaceuticals
          </h2>

          <div className="mt-7 space-y-5 text-sm leading-8 text-[#64748b]">
            <p>
              International trade involves multiple stages, from identifying
              suitable products and suppliers to coordinating commercial
              documentation, transportation and delivery. Businesses involved
              in importing and exporting need to consider product
              specifications, pricing, shipment arrangements and the legal
              requirements of the countries involved.
            </p>

            <p>
              SAV7 IMPEX PRIVATE LIMITED operates across two business sectors:
              Gold & Precious Metals and Pharmaceuticals & Healthcare. This
              diversified approach brings different product categories under
              one business platform while recognising that each sector has
              its own sourcing, handling and regulatory requirements.
            </p>

            <h3 className="pt-3 font-['Manrope'] text-xl font-extrabold text-[#102b46]">
              Gold and Precious Metals Import Export
            </h3>

            <p>
              Gold and precious metals are specialised product categories
              that require careful attention to product specifications,
              quality information, transaction documentation and applicable
              trade permissions. Buyers and sellers may have different
              requirements depending on whether they are dealing with gold
              bullion, silver products or other precious metals.
            </p>

            <p>
              SAV7 IMPEX provides a business enquiry channel for gold and
              precious metals sourcing and trade coordination. Enquiries can
              include the type of product, quantity, purity or specification
              requirements, preferred transaction structure and destination
              market. Product eligibility and transaction arrangements must
              be checked against applicable Indian foreign trade, customs,
              foreign exchange and destination-country requirements.
            </p>

            <h3 className="pt-3 font-['Manrope'] text-xl font-extrabold text-[#102b46]">
              Pharmaceutical and Healthcare Import Export
            </h3>

            <p>
              Pharmaceutical trade requires product-specific documentation
              and regulatory consideration. Requirements can vary according
              to the medicine, formulation, active pharmaceutical ingredient,
              manufacturer, country of origin and destination market.
              Product registration, import permissions, manufacturing
              standards and labelling requirements may all be relevant.
            </p>

            <p>
              SAV7 IMPEX handles business enquiries involving generic
              medicines, active pharmaceutical ingredients, pharmaceutical
              formulations and eligible healthcare products. Buyers can
              share their required product specifications, dosage form,
              quantity, packaging requirements and destination country to
              begin a sourcing discussion.
            </p>

            <h3 className="pt-3 font-['Manrope'] text-xl font-extrabold text-[#102b46]">
              Global Sourcing and Supplier Coordination
            </h3>

            <p>
              Selecting a suitable supplier is an important part of
              international trade. Businesses should evaluate supplier
              capabilities, product specifications, commercial terms,
              documentation and relevant quality requirements before
              proceeding with a transaction.
            </p>

            <p>
              Our sourcing enquiries are structured around the buyer's
              requirements. Information such as product name, quantity,
              required specifications, country of origin and expected
              delivery timeline helps identify appropriate sourcing
              possibilities and the next steps for a commercial discussion.
            </p>

            <h3 className="pt-3 font-['Manrope'] text-xl font-extrabold text-[#102b46]">
              Trade Documentation and Logistics Coordination
            </h3>

            <p>
              Import and export transactions may involve commercial
              invoices, packing lists, bills of lading, airway bills,
              certificates of origin, customs declarations and product
              certificates. Pharmaceutical products and precious metals may
              require additional product-specific documentation.
            </p>

            <p>
              Transportation arrangements also depend on the nature of the
              goods. Precious metals and pharmaceutical products can require
              different handling, security, storage and transportation
              conditions. The appropriate arrangements should be confirmed
              with qualified logistics providers and relevant authorities
              before shipment.
            </p>

            <h3 className="pt-3 font-['Manrope'] text-xl font-extrabold text-[#102b46]">
              International Business Enquiries
            </h3>

            <p>
              SAV7 IMPEX welcomes business enquiries from buyers, suppliers,
              manufacturers, distributors and other trade partners. To help
              us understand your requirements, include the product category,
              quantity, destination country, specifications and expected
              timeline in your enquiry.
            </p>

            <p>
              Whether your requirement relates to gold bullion, silver,
              pharmaceutical formulations or healthcare products, our team
              can discuss the relevant sourcing and trade coordination
              possibilities.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-[#e7ecf1] pt-6">
            <Link
              href="/gold-precious-metals"
              className="text-xs font-extrabold text-[#b68b31] hover:underline"
            >
              Gold & Precious Metals →
            </Link>
            <Link
              href="/pharmaceuticals"
              className="text-xs font-extrabold text-[#00875a] hover:underline"
            >
              Pharmaceuticals →
            </Link>
            <Link
              href="/global-trade"
              className="text-xs font-extrabold text-[#102b46] hover:underline"
            >
              Global Trade →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-[5%] py-16 sm:px-[7%] md:py-24">
        <div className="mx-auto max-w-[950px]">
          <div className="mb-10 text-center">
            <span className="mb-4 inline-flex rounded-full bg-[#eaf7f1] px-4 py-2 text-[10px] font-extrabold tracking-[0.18em] text-[#00875a]">
              SERVICES FAQ
            </span>
            <h2 className="font-['Manrope'] text-3xl font-extrabold text-[#102b46] sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-sm text-[#718096]">
              Learn more about our products, services and trade enquiries.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-[#e7ecf1] bg-white p-5 transition open:border-[#c6ded1] open:bg-[#fbfefc] sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-['Manrope'] text-sm font-bold text-[#102b46] marker:content-none">
                  <span>
                    <span className="mr-3 text-[10px] font-extrabold text-[#00875a]">
                      0{index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-[#eaf7f1] text-lg text-[#00875a] transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 border-t border-[#e7ecf1] pt-4 text-xs leading-7 text-[#718096]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#091c30] px-[5%] py-16 text-white sm:px-[7%] md:py-20">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#b68b31]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1100px] text-center">
          <span className="inline-flex rounded-full border border-[#55d6a4]/20 bg-[#00875a]/15 px-4 py-2 text-[10px] font-extrabold tracking-[0.18em] text-[#55d6a4]">
            LET'S DISCUSS YOUR REQUIREMENTS
          </span>

          <h2 className="mx-auto mt-6 max-w-3xl font-['Manrope'] text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Looking for an Import Export{" "}
            <span className="text-[#d8b65b]">Business Partner?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#c0ccd8]">
            Tell us about your product, quantity, specifications and
            destination market. Contact SAV7 IMPEX to discuss your gold,
            precious metals, pharmaceutical and healthcare trade enquiries.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-lg bg-[#00875a] px-8 py-4 text-xs font-extrabold text-white transition hover:bg-[#006b46]"
            >
              Request a Business Quote ↗
            </Link>

            <a
              href="https://wa.me/919290934388"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-lg border border-white/25 px-8 py-4 text-xs font-extrabold text-white transition hover:border-[#d8b65b] hover:text-[#d8b65b]"
            >
              WhatsApp Us ↗
            </a>
          </div>

          <p className="mt-7 text-xs text-[#9aabba]">
            Email: sav7impex@gmail.com
            <span className="mx-3 text-[#b68b31]">|</span>
            Phone: +91 92909 34388
          </p>
        </div>
      </section>
    </main>
  );
}
