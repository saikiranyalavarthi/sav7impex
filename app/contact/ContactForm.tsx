
"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  division: string;
  product: string;
  quantity: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  division: "",
  product: "",
  quantity: "",
  message: "",
};

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#26384b] outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-[#00875a] focus:ring-4 focus:ring-[#00875a]/10";

const labelClass =
  "mb-2 block text-[11px] font-bold tracking-[0.12em] text-[#526174]";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const [waUrl, setWaUrl] = useState("");

  const update = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setStatus("idle");
    setWaUrl("");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `
NEW BUSINESS ENQUIRY
SAV7 IMPEX PRIVATE LIMITED

Full Name: ${form.name}
Company: ${form.company || "Not provided"}
Email: ${form.email}
Phone / WhatsApp: ${form.phone}
Country: ${form.country}
Business Division: ${form.division}
Product Requirement: ${form.product || "Not specified"}
Quantity: ${form.quantity || "Not specified"}

Message:
${form.message}
    `.trim();

    const url = `https://wa.me/919290934388?text=${encodeURIComponent(message)}`;

    setWaUrl(url);
    setStatus("ready");

    // Open WhatsApp directly from the user's submit action.
    window.open(url, "_blank");
  };

  return (
    <section
      id="enquiry-form"
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_70px_rgba(16,43,70,0.08)]"
    >
      {/* Top accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#00875a] via-[#c9a227] to-[#102b46]" />

      <div className="p-5 sm:p-8 lg:p-10">
        {/* Heading */}
        <div className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00875a]/15 bg-[#eaf7f1] px-3.5 py-2">
            <span className="h-2 w-2 rounded-full bg-[#00875a]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#00875a]">
              Business Enquiry
            </span>
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-[#102b46] sm:text-3xl">
            Request a Quotation
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
            Tell us about your product requirements. Share your enquiry with
            our team through WhatsApp for further discussion.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal information */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-[#102b46]">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#102b46]/5 text-xs text-[#102b46]">
                01
              </span>
              Personal Information
            </h3>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  FULL NAME *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={update}
                  placeholder="Enter your full name"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="company" className={labelClass}>
                  COMPANY NAME
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={form.company}
                  onChange={update}
                  placeholder="Your company name"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  EMAIL ADDRESS *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={update}
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  PHONE / WHATSAPP *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={form.phone}
                  onChange={update}
                  placeholder="+91 98765 43210"
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          <div className="h-px bg-slate-100" />

          {/* Business requirements */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-[#102b46]">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#c9a227]/10 text-xs text-[#a17a21]">
                02
              </span>
              Business Requirements
            </h3>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="country" className={labelClass}>
                  DESTINATION COUNTRY *
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  required
                  autoComplete="country-name"
                  value={form.country}
                  onChange={update}
                  placeholder="Enter destination country"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="division" className={labelClass}>
                  BUSINESS DIVISION *
                </label>
                <select
                  id="division"
                  name="division"
                  required
                  value={form.division}
                  onChange={update}
                  className={inputClass}
                >
                  <option value="">Select business division</option>
                  <option value="Gold & Precious Metals">
                    Gold & Precious Metals
                  </option>
                  <option value="Pharmaceuticals & Healthcare">
                    Pharmaceuticals & Healthcare
                  </option>
                  <option value="Both Divisions">Both Divisions</option>
                </select>
              </div>

              <div>
                <label htmlFor="product" className={labelClass}>
                  PRODUCT REQUIREMENT
                </label>
                <input
                  id="product"
                  name="product"
                  type="text"
                  value={form.product}
                  onChange={update}
                  placeholder="e.g. Gold bullion, generic medicines"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="quantity" className={labelClass}>
                  REQUIRED QUANTITY
                </label>
                <input
                  id="quantity"
                  name="quantity"
                  type="text"
                  value={form.quantity}
                  onChange={update}
                  placeholder="e.g. 10 kg, 1 container"
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          <div className="h-px bg-slate-100" />

          {/* Message */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-[#102b46]">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#00875a]/10 text-xs text-[#00875a]">
                03
              </span>
              Additional Information
            </h3>

            <label htmlFor="message" className={labelClass}>
              YOUR MESSAGE *
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={update}
              placeholder="Describe your product specifications, delivery destination, expected timeline or other requirements..."
              className={`${inputClass} min-h-[140px] resize-y`}
            />
          </div>

          {/* Submit */}
          <div className="space-y-4 pt-2">
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#00875a] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#00875a]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006e49] hover:shadow-xl hover:shadow-[#00875a]/25 focus:outline-none focus:ring-4 focus:ring-[#00875a]/20"
            >
              Continue to WhatsApp
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            {status === "ready" && (
              <div
                role="status"
                className="rounded-xl border border-[#00875a]/20 bg-[#eaf7f1] p-4"
              >
                <p className="text-sm font-bold text-[#006e49]">
                  Your enquiry is ready!
                </p>
                <p className="mt-1 text-xs leading-6 text-slate-600">
                  WhatsApp should open with your enquiry details. Please press
                  Send in WhatsApp to complete your submission.
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#00875a] underline underline-offset-4"
                >
                  Open WhatsApp manually →
                </a>
              </div>
            )}

            <p className="text-center text-[11px] leading-6 text-slate-400">
              By continuing, you agree to be contacted by SAV7 IMPEX PRIVATE
              LIMITED regarding your enquiry. Please avoid sharing sensitive
              personal or financial information.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
