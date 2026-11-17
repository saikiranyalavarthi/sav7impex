import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#091c30] px-[7%] pb-5 pt-16">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 pb-12 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.1fr] lg:gap-9">
        {/* BRAND */}
        <div className="col-span-2 md:col-span-3 lg:col-span-1">
          <Link href="/" className="inline-flex items-center gap-3 text-white">
            <span className="grid h-[43px] w-[43px] place-items-center rounded-md bg-[#00875a] text-sm font-extrabold">
              S7
            </span>
            <span className="font-['Manrope'] text-xl font-extrabold">
              SAV7
              <small className="mt-0.5 block text-[8px] tracking-wider text-[#aab9c7]">
                IMPEX PRIVATE LIMITED
              </small>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-[11px] leading-relaxed text-[#aab9c7]">
            A diversified India-based import and export company focused on gold,
            precious metals, pharmaceuticals and global trade.
          </p>
        </div>

        {/* COMPANY */}
        <div className="flex flex-col gap-3">
          <h4 className="mb-2 text-[13px] font-bold text-white">Company</h4>
          {[
            { label: "About Us", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Products", href: "/products" },
            { label: "Contact", href: "/contact" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="text-[11px] text-[#aab9c7] transition hover:text-[#55d6a4]">
              {l.label}
            </Link>
          ))}
        </div>

        {/* GOLD */}
        <div className="flex flex-col gap-3">
          <h4 className="mb-2 text-[13px] font-bold text-white">Gold Division</h4>
          {[
            { label: "Gold & Bullion", href: "/gold-precious-metals" },
            { label: "Silver Products", href: "/silver-products" },
            { label: "Precious Metals", href: "/precious-metals" },
            { label: "Gold Import Export", href: "/gold-import-export" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="text-[11px] text-[#aab9c7] transition hover:text-[#55d6a4]">
              {l.label}
            </Link>
          ))}
        </div>

        {/* PHARMA */}
        <div className="flex flex-col gap-3">
          <h4 className="mb-2 text-[13px] font-bold text-white">Pharma Division</h4>
          {[
            { label: "Pharmaceuticals", href: "/pharmaceuticals" },
            { label: "Generic Medicines", href: "/generic-medicines" },
            { label: "API Sourcing", href: "/api-sourcing" },
            { label: "Healthcare Products", href: "/healthcare-products" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="text-[11px] text-[#aab9c7] transition hover:text-[#55d6a4]">
              {l.label}
            </Link>
          ))}
        </div>

        {/* CONTACT */}
        <div className="flex flex-col gap-3">
          <h4 className="mb-2 text-[13px] font-bold text-white">Get In Touch</h4>
          <span className="text-[11px] text-[#aab9c7]">2nd Floor, Plot No 278, Srinivas Nagar, Housing Colony, 4th Lane,Nizampet, Hyderabad, Hyderabad, Telangana, 500090</span>
          <a href="tel:+919290934388" className="text-[11px] text-[#aab9c7] transition hover:text-[#55d6a4]">
            +91 92909 34388
          </a>
          <a href="mailto:info@sav7impex.in" className="break-all text-[11px] text-[#aab9c7] transition hover:text-[#55d6a4]">
            info@sav7impex.in
          </a>
          <a href="https://www.sav7impex.in/" className="text-[11px] text-[#aab9c7] transition hover:text-[#55d6a4]">
            www.sav7impex.in
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1400px] flex-col gap-3 border-t border-white/10 pt-5 text-[10px] text-[#93a6b7] md:flex-row md:justify-between">
        <span>© {new Date().getFullYear()} SAV7 IMPEX PRIVATE LIMITED. All Rights Reserved.</span>
        <span>India | Global Import & Export</span>
      </div>
    </footer>
  );
}