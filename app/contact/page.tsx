
import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact SAV7 IMPEX | Gold, Precious Metals & Pharma Enquiries",
  description:
    "Contact SAV7 IMPEX PRIVATE LIMITED in Hyderabad, India. Submit enquiries for gold, silver, precious metals, pharmaceuticals and healthcare products. Call, WhatsApp or email our team.",
  alternates: {
    canonical: "https://www.sav7impex.in/contact",
  },
  openGraph: {
    title: "Contact SAV7 IMPEX PRIVATE LIMITED",
    description:
      "Contact SAV7 IMPEX for international trade enquiries covering precious metals, pharmaceuticals and healthcare products.",
    url: "https://www.sav7impex.in/contact",
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
  "@type": "ContactPage",
  name: "Contact SAV7 IMPEX PRIVATE LIMITED",
  url: "https://www.sav7impex.in/contact",
  mainEntity: {
    "@type": "Organization",
    name: "SAV7 IMPEX PRIVATE LIMITED",
    url: "https://www.sav7impex.in",
    email: "sav7impex@gmail.com",
    telephone: "+91-92909-34388",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-92909-34388",
      email: "sav7impex@gmail.com",
      contactType: "business enquiries",
    },
    sameAs: ["https://wa.me/919290934388"],
  },
};

const contactMethods = [
  {
    icon: "☎",
    label: "PHONE",
    value: "+91 92909 34388",
    note: "Speak with our team",
    href: "tel:+919290934388",
    external: false,
    color: "navy",
  },
  {
    icon: "◉",
    label: "WHATSAPP",
    value: "Chat With Us",
    note: "Send your business enquiry",
    href: "https://wa.me/919290934388",
    external: true,
    color: "green",
  },
  {
    icon: "✉",
    label: "EMAIL",
    value: "sav7impex@gmail.com",
    note: "Share your requirements",
    href: "mailto:sav7impex@gmail.com",
    external: false,
    color: "gold",
  },
  {
    icon: "◎",
    label: "WEBSITE",
    value: "www.sav7impex.in",
    note: "Explore our business",
    href: "https://www.sav7impex.in",
    external: true,
    color: "navy",
  },
];

const enquirySteps = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Tell us about your product, required quantity, specifications and destination country.",
  },
  {
    number: "02",
    title: "Requirement Review",
    description:
      "Your enquiry can be reviewed for sourcing availability, commercial feasibility and applicable requirements.",
  },
  {
    number: "03",
    title: "Discuss Commercial Terms",
    description:
      "Discuss pricing, payment terms, documentation and delivery requirements where applicable.",
  },
  {
    number: "04",
    title: "Next Steps",
    description:
      "Proceed with further discussions and transaction arrangements after the relevant details are confirmed.",
  },
];

const faqs = [
  {
    question: "How can I contact SAV7 IMPEX?",
    answer:
      "You can contact SAV7 IMPEX by calling +91 92909 34388, sending a WhatsApp message to the same number, emailing sav7impex@gmail.com or submitting the enquiry form on this page.",
  },
  {
    question: "What products can I enquire about?",
    answer:
      "You can enquire about gold bullion, gold doré, silver, precious metals, pharmaceutical products, generic medicines, APIs, finished formulations and healthcare product categories. Specific products are subject to sourcing availability and applicable regulations.",
  },
  {
    question: "What information should I include in my enquiry?",
    answer:
      "Please include your product category, product specifications, required quantity, destination country, preferred delivery timeline and any relevant documentation or regulatory requirements.",
  },
  {
    question: "How long does it take to receive a response?",
    answer:
      "Response times depend on the enquiry and the information provided. Complex product, sourcing or international trade requirements may require additional review before a detailed response can be provided.",
  },
  {
    question: "Can international buyers contact SAV7 IMPEX?",
    answer:
      "Yes. International buyers, importers, distributors and business organisations can contact us with their product and destination-country requirements. Any proposed transaction is subject to applicable laws and regulatory requirements.",
  },
  {
    question: "Can I arrange a business meeting?",
    answer:
      "You can contact our team to discuss arranging a business meeting in Hyderabad or an online discussion. Meeting arrangements should be confirmed in advance.",
  },
  {
    question: "Are there minimum order quantities?",
    answer:
      "Minimum quantities depend on the product, supplier availability, specifications and transaction requirements. Please share your required quantity so it can be reviewed.",
  },
  {
    question: "Can you confirm whether my country is supported?",
    answer:
      "Share your destination country and product requirements with us. Import permissions, product eligibility, sourcing availability and other relevant conditions need to be assessed before confirming whether a transaction can proceed.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <span className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#A77D28]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
        {eyebrow}
      </span>

      <h2 className="text-3xl font-extrabold tracking-tight text-[#102B46] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-sm leading-8 text-slate-500 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default function ContactPage() {
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
          <span className="text-[#102B46]">Contact Us</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#091C30]">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#C9A227]/15" />
        <div className="absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-[#C9A227]/15" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#00875A]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-3 rounded-full border border-[#C9A227]/30 bg-white/5 px-4 py-2 text-[10px] font-extrabold tracking-[0.2em] text-[#E1BD62]">
              <span className="h-2 w-2 rounded-full bg-[#C9A227]" />
              GET IN TOUCH WITH SAV7 IMPEX
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s Start a
              <span className="block text-[#D8B65B]">
                Business Conversation.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-8 text-slate-300 sm:text-base">
              Have an international trade requirement? Connect with SAV7
              IMPEX PRIVATE LIMITED to discuss gold, silver, precious metals,
              pharmaceutical products and healthcare business enquiries.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/919290934388"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[#C9A227] px-7 py-4 text-center text-sm font-extrabold text-[#102B46] transition hover:bg-[#E0BB50]"
              >
                WhatsApp Us →
              </a>

              <a
                href="tel:+919290934388"
                className="rounded-lg border border-white/30 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-white hover:text-[#102B46]"
              >
                Call +91 92909 34388
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold text-slate-300">
              <span>✦ Gold & Precious Metals</span>
              <span>✦ Pharmaceuticals</span>
              <span>✦ Healthcare</span>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl border border-[#C9A227]/20" />

            <div className="relative overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1200&q=85"
                alt="Contact SAV7 IMPEX business team"
                className="h-[350px] w-full object-cover sm:h-[450px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071827]/90 via-[#071827]/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <span className="text-xs font-extrabold tracking-[0.2em] text-[#D8B65B]">
                  SAV7 IMPEX PRIVATE LIMITED
                </span>

                <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                  Your Enquiry Starts Here.
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-200">
                  Hyderabad, Telangana, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-4 px-5 py-7 text-[10px] font-extrabold tracking-[0.16em] text-[#102B46] sm:text-xs">
          <span>PHONE SUPPORT</span>
          <span className="text-[#C9A227]">✦</span>
          <span>WHATSAPP ENQUIRIES</span>
          <span className="text-[#C9A227]">✦</span>
          <span>EMAIL COMMUNICATION</span>
          <span className="text-[#00875A]">✦</span>
          <span>INTERNATIONAL BUSINESS</span>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="GET IN TOUCH"
            title="Connect With Our Team"
            description="Choose your preferred communication channel and share your business requirements with SAV7 IMPEX."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((contact) => {
              const accent =
                contact.color === "green"
                  ? "text-[#00875A] bg-[#EAF7F1]"
                  : contact.color === "gold"
                    ? "text-[#A77D28] bg-[#FBF5E9]"
                    : "text-[#102B46] bg-[#EDF2F7]";

              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={
                    contact.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group rounded-2xl border border-slate-200 bg-white p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-[#C9A227]/50 hover:shadow-xl"
                >
                  <div
                    className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-3xl font-bold ${accent}`}
                  >
                    {contact.icon}
                  </div>

                  <span className="mt-6 block text-[10px] font-extrabold tracking-[0.2em] text-[#00875A]">
                    {contact.label}
                  </span>

                  <h3 className="mt-3 break-words text-base font-extrabold text-[#102B46] transition group-hover:text-[#A77D28]">
                    {contact.value}
                  </h3>

                  <p className="mt-3 text-xs text-slate-400">
                    {contact.note}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold text-[#A77D28]">
                    Connect Now <span>→</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT FORM + INFORMATION */}
      <section className="bg-[#F7F9FB] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            {/* LEFT INFORMATION */}
            <div>
              <span className="text-xs font-extrabold tracking-[0.2em] text-[#A77D28]">
                CONTACT INFORMATION
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#102B46] sm:text-4xl">
                Tell Us What
                <span className="block text-[#00875A]">
                  You Are Looking For.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                Share your product requirements and destination details.
                Our team can review your enquiry and discuss the relevant
                commercial and regulatory considerations.
              </p>

              {/* COMPANY DETAILS */}
              <div className="mt-9 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
                <h3 className="text-xl font-extrabold text-[#102B46]">
                  SAV7 IMPEX PRIVATE LIMITED
                </h3>

                <p className="mt-2 text-xs font-semibold tracking-wider text-[#A77D28]">
                  INTERNATIONAL IMPORT & EXPORT BUSINESS
                </p>

                <div className="mt-8 space-y-7">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FBF5E9] text-xl">
                      📍
                    </div>

                    <div>
                      <h4 className="text-xs font-extrabold tracking-widest text-[#102B46]">
                        LOCATION
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        Hyderabad, Telangana, India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF7F1] text-xl">
                      📞
                    </div>

                    <div>
                      <h4 className="text-xs font-extrabold tracking-widest text-[#102B46]">
                        PHONE
                      </h4>
                      <a
                        href="tel:+919290934388"
                        className="mt-2 block text-sm font-semibold text-slate-500 transition hover:text-[#00875A]"
                      >
                        +91 92909 34388
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF7F1] text-xl">
                      💬
                    </div>

                    <div>
                      <h4 className="text-xs font-extrabold tracking-widest text-[#102B46]">
                        WHATSAPP
                      </h4>
                      <a
                        href="https://wa.me/919290934388"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 block text-sm font-semibold text-slate-500 transition hover:text-[#00875A]"
                      >
                        +91 92909 34388
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FBF5E9] text-xl">
                      ✉️
                    </div>

                    <div>
                      <h4 className="text-xs font-extrabold tracking-widest text-[#102B46]">
                        EMAIL
                      </h4>
                      <a
                        href="mailto:sav7impex@gmail.com"
                        className="mt-2 block break-all text-sm font-semibold text-slate-500 transition hover:text-[#A77D28]"
                      >
                        sav7impex@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-100 pt-6">
                  <h4 className="text-xs font-extrabold tracking-widest text-[#102B46]">
                    BUSINESS DIVISIONS
                  </h4>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      href="/gold-precious-metals"
                      className="rounded-lg bg-[#FBF5E9] px-3 py-2 text-xs font-bold text-[#98701E] transition hover:bg-[#F4E8CC]"
                    >
                      Gold & Precious Metals
                    </Link>

                    <Link
                      href="/pharmaceuticals"
                      className="rounded-lg bg-[#EAF7F1] px-3 py-2 text-xs font-bold text-[#00875A] transition hover:bg-[#D7F0E4]"
                    >
                      Pharmaceuticals
                    </Link>
                  </div>
                </div>
              </div>

              {/* WHATSAPP CTA */}
              <div className="mt-6 rounded-2xl bg-[#091C30] p-7 text-white sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00875A] text-2xl">
                  💬
                </div>

                <h3 className="mt-5 text-xl font-extrabold">
                  Prefer WhatsApp?
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Send your product details, quantity and destination
                  requirements directly to our business contact.
                </p>

                <a
                  href="https://wa.me/919290934388"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-3 rounded-lg bg-[#00875A] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#00734D]"
                >
                  Start WhatsApp Chat <span>→</span>
                </a>
              </div>
            </div>

            {/* RIGHT: EXISTING CONTACT FORM */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9 lg:p-10">
              <span className="text-xs font-extrabold tracking-[0.2em] text-[#A77D28]">
                BUSINESS ENQUIRY FORM
              </span>

              <h2 className="mt-4 text-2xl font-extrabold text-[#102B46] sm:text-3xl">
                Send Your Enquiry
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Complete the form below with your contact details and
                business requirements.
              </p>

              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY PROCESS */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="HOW IT WORKS"
            title="From Enquiry to Business Discussion"
            description="A straightforward process to help understand your international trade requirements."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {enquirySteps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-4xl font-black text-[#C9A227]/50">
                  {step.number}
                </span>

                <h3 className="mt-6 text-lg font-extrabold text-[#102B46]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {step.description}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-[#00875A]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-[#F7F9FB] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="OUR LOCATION"
            title="Connect With Us From Hyderabad, India"
            description="SAV7 IMPEX PRIVATE LIMITED is based in Hyderabad, Telangana, India. Contact us to discuss business enquiries and meeting arrangements."
          />

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
            <iframe
              title="Map of Hyderabad, Telangana, India"
              src="https://www.google.com/maps?q=Hyderabad,Telangana,India&output=embed"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <h3 className="text-lg font-extrabold text-[#102B46]">
                  Hyderabad, Telangana, India
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  SAV7 IMPEX PRIVATE LIMITED
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Hyderabad%2C+Telangana%2C+India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#102B46] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#00875A]"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <span className="text-xs font-extrabold tracking-[0.2em] text-[#A77D28]">
            CONTACT SAV7 IMPEX
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#102B46] sm:text-4xl">
            Contact SAV7 IMPEX PRIVATE LIMITED for International Trade
            Enquiries
          </h2>

          <div className="mt-8 space-y-6 text-sm leading-8 text-slate-600">
            <p>
              SAV7 IMPEX PRIVATE LIMITED is an India-based business focused
              on international trade opportunities in Gold & Precious Metals
              and Pharmaceuticals & Healthcare. Based in Hyderabad,
              Telangana, the company provides a contact point for domestic
              and international business enquiries related to its product
              categories.
            </p>

            <h3 className="pt-3 text-xl font-extrabold text-[#102B46]">
              Gold and Precious Metals Enquiries
            </h3>

            <p>
              Businesses interested in gold bullion, gold doré, silver and
              other precious metals can contact SAV7 IMPEX to discuss product
              specifications, quantities, sourcing requirements and
              destination markets. Precious metals transactions may involve
              product verification, origin documentation, applicable
              permissions and customs requirements. The specific conditions
              must be assessed for each proposed transaction.
            </p>

            <h3 className="pt-3 text-xl font-extrabold text-[#102B46]">
              Pharmaceutical and Healthcare Enquiries
            </h3>

            <p>
              Pharmaceutical distributors, importers and other businesses
              can contact SAV7 IMPEX regarding generic medicines, APIs,
              finished formulations and healthcare product categories.
              Product enquiries should include the required formulation,
              strength, dosage form, quantity and destination country.
              Pharmaceutical imports and exports are subject to applicable
              product registrations, manufacturing documentation and
              destination-country regulatory requirements.
            </p>

            <h3 className="pt-3 text-xl font-extrabold text-[#102B46]">
              Information to Include in Your Business Enquiry
            </h3>

            <p>
              To help review your enquiry, include the product name,
              specifications, required quantity, delivery destination and
              preferred timeline. For pharmaceutical enquiries, include
              relevant product details such as composition, strength and
              dosage form. For precious metals enquiries, include purity,
              weight, format and other relevant specifications.
            </p>

            <p>
              You can also mention any documentation, packaging, import
              permissions or other requirements that may apply to your
              intended transaction. Providing clear details helps establish
              the scope of the enquiry and the next steps for discussion.
            </p>

            <h3 className="pt-3 text-xl font-extrabold text-[#102B46]">
              International Business Communication
            </h3>

            <p>
              SAV7 IMPEX can receive enquiries from businesses in India and
              international markets. Buyers can use the contact form, email,
              telephone or WhatsApp to share their requirements. International
              enquiries should specify the destination country so that
              product availability and applicable trade conditions can be
              considered.
            </p>

            <h3 className="pt-3 text-xl font-extrabold text-[#102B46]">
              Contact Details
            </h3>

            <p>
              To discuss a potential business requirement, contact SAV7
              IMPEX PRIVATE LIMITED in Hyderabad, Telangana, India. Call{" "}
              <a
                href="tel:+919290934388"
                className="font-bold text-[#00875A] hover:underline"
              >
                +91 92909 34388
              </a>
              , send a message through{" "}
              <a
                href="https://wa.me/919290934388"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#00875A] hover:underline"
              >
                WhatsApp
              </a>
              , or email{" "}
              <a
                href="mailto:sav7impex@gmail.com"
                className="font-bold text-[#00875A] hover:underline"
              >
                sav7impex@gmail.com
              </a>
              . You can also explore the{" "}
              <Link
                href="/markets"
                className="font-bold text-[#00875A] hover:underline"
              >
                international markets
              </Link>{" "}
              and{" "}
              <Link
                href="/services"
                className="font-bold text-[#00875A] hover:underline"
              >
                business services
              </Link>{" "}
              pages for additional information.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7F9FB] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="CONTACT FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about contacting SAV7 IMPEX and submitting business enquiries."
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
      <section className="relative overflow-hidden bg-[#091C30] px-5 py-20 sm:px-8 lg:py-24">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#C9A227]/20" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#00875A]/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-xs font-extrabold tracking-[0.2em] text-[#D8B65B]">
            LET&apos;S CONNECT
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Have a Business
            <span className="block text-[#D8B65B]">
              Requirement to Discuss?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-300">
            Connect with SAV7 IMPEX to discuss your requirements for
            precious metals, pharmaceuticals and healthcare products.
            We look forward to hearing from you.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/919290934388"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#C9A227] px-8 py-4 text-sm font-extrabold text-[#102B46] transition hover:bg-[#E0BB50]"
            >
              WhatsApp Us →
            </a>

            <a
              href="mailto:sav7impex@gmail.com"
              className="rounded-lg border border-white/30 px-8 py-4 text-sm font-extrabold text-white transition hover:bg-white hover:text-[#102B46]"
            >
              Send an Email
            </a>
          </div>

          <p className="mt-10 text-xs text-slate-400">
            SAV7 IMPEX PRIVATE LIMITED · Hyderabad, Telangana, India
          </p>
        </div>
      </section>
    </main>
  );
}
