
"use client";

import { useMemo, useState } from "react";
import { genericMedicines } from "../data/generic-medicines";

const WHATSAPP_NUMBER = "919290934388";

export default function GenericMedicineCatalogue() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return genericMedicines.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.type.toLowerCase().includes(query);

      const matchesFilter =
        filter === "All" || product.type === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const getEnquiryLink = (productName: string) => {
    const message = `Hello SAV7 IMPEX, I would like to enquire about the following pharmaceutical product:\n\nProduct: ${productName}\n\nPlease share the relevant product specifications, availability, MOQ, pricing and applicable documentation requirements.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="product-catalogue"
      className="bg-[#f7f9fb] px-5 py-20 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#00875a]">
            SAV7 IMPEX PRODUCT PORTFOLIO
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#102b46] sm:text-4xl lg:text-5xl">
            Generic Medicines Catalogue
          </h2>

          <p className="mt-5 text-sm leading-8 text-[#718096] sm:text-base">
            Browse the pharmaceutical products listed in our product
            catalogue. Submit a business enquiry for product-specific
            specifications, quantities and destination-market requirements.
          </p>
        </div>

        {/* Search and filters */}
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="grid gap-4 md:grid-cols-[1fr_auto]">
            <div>
              <label
                htmlFor="medicine-search"
                className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#526477]"
              >
                Search products
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400">
                  ⌕
                </span>

                <input
                  id="medicine-search"
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search medicine name..."
                  className="w-full rounded-xl border border-slate-200 bg-[#f9fafb] py-4 pl-11 pr-4 text-sm text-[#102b46] outline-none transition placeholder:text-slate-400 focus:border-[#00875a] focus:ring-2 focus:ring-[#00875a]/10"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="medicine-filter"
                className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#526477]"
              >
                Product type
              </label>

              <select
                id="medicine-filter"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
                className="w-full min-w-44 rounded-xl border border-slate-200 bg-[#f9fafb] px-4 py-4 text-sm text-[#102b46] outline-none focus:border-[#00875a] md:w-auto"
              >
                <option value="All">All products</option>
                <option value="Tablet">Tablets</option>
                <option value="Capsule">Capsules</option>
              </select>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-bold text-[#102b46]">
                {filteredProducts.length}
              </span>{" "}
              of {genericMedicines.length} listed products
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setFilter("All");
              }}
              className="text-xs font-bold text-[#00875a] transition hover:text-[#102b46]"
            >
              Clear filters
            </button>
          </div>
        </div>

        {/* Product cards */}
        {filteredProducts.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#00875a]/40 hover:shadow-xl hover:shadow-[#102b46]/5"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf7f1] text-sm font-black text-[#00875a]">
                    Rx
                  </span>

                  <span className="rounded-full bg-[#f0f4f7] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#526477]">
                    {product.type}
                  </span>
                </div>

                <div className="mt-5 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#00875a]">
                    Product No. {String(product.id).padStart(2, "0")}
                  </p>

                  <h3 className="mt-2 text-base font-bold leading-7 text-[#102b46]">
                    {product.name}
                  </h3>

                  {product.remark && (
                    <p className="mt-3 text-xs leading-6 text-slate-500">
                      {product.remark}
                    </p>
                  )}
                </div>

                <a
                  href={getEnquiryLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#00875a] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#006b47]"
                >
                  <span>Enquire on WhatsApp</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <div className="text-4xl text-slate-300">⌕</div>
            <h3 className="mt-4 text-lg font-bold text-[#102b46]">
              No products found
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Try another product name or change the product type filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setFilter("All");
              }}
              className="mt-5 rounded-lg bg-[#102b46] px-5 py-3 text-sm font-bold text-white hover:bg-[#00875a]"
            >
              Show all products
            </button>
          </div>
        )}

        {/* Enquiry note */}
        <div className="mt-10 rounded-2xl border border-[#e7d8b6] bg-[#fbf5e9] p-5 sm:p-6">
          <h3 className="font-bold text-[#79612f]">
            Product enquiry information
          </h3>
          <p className="mt-2 text-xs leading-7 text-[#79612f] sm:text-sm">
            This catalogue is for business enquiries only. Product
            availability, specifications, minimum order quantities, pricing,
            packaging, documentation and regulatory eligibility must be
            confirmed separately for each product and destination market.
            Product listings do not constitute an offer for sale or a
            representation of current stock. Not intended for patient
            treatment or self-medication.
          </p>
        </div>
      </div>
    </section>
  );
}
