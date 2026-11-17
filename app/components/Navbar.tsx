"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const goldLinks = [
  { name: "Gold & Precious Metals", href: "/gold-precious-metals" },
  { name: "Gold Import & Export", href: "/gold-import-export" },
  { name: "Silver Products", href: "/silver-products" },
  { name: "Precious Metals Trading", href: "/precious-metals" },
];

const pharmaLinks = [
  { name: "Pharmaceuticals", href: "/pharmaceuticals" },
  { name: "Generic Medicines", href: "/generic-medicines" },
  { name: "API Sourcing", href: "/api-sourcing" },
  { name: "Healthcare Products", href: "/healthcare-products" },
];

const mainLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [goldOpen, setGoldOpen] = useState(false);
  const [pharmaOpen, setPharmaOpen] = useState(false);
  const [mobileGoldOpen, setMobileGoldOpen] = useState(false);
  const [mobilePharmaOpen, setMobilePharmaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const goldRef = useRef<HTMLDivElement>(null);
  const pharmaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setGoldOpen(false);
    setPharmaOpen(false);
    setMobileGoldOpen(false);
    setMobilePharmaOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (goldRef.current && !goldRef.current.contains(e.target as Node)) setGoldOpen(false);
      if (pharmaRef.current && !pharmaRef.current.contains(e.target as Node)) setPharmaOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setGoldOpen(false);
        setPharmaOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setGoldOpen(false);
    setPharmaOpen(false);
    setMobileGoldOpen(false);
    setMobilePharmaOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isGoldActive = goldLinks.some((l) => pathname === l.href);
  const isPharmaActive = pharmaLinks.some((l) => pathname === l.href);

  const navLinkBase =
    "inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-bold transition-colors duration-200 hover:text-[#00875a] text-[#34485d]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] w-full border-b border-[#102b4614] bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_8px_30px_rgba(9,28,48,0.08)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[70px] w-[90%] max-w-[1450px] items-center justify-between gap-4 sm:h-[76px] lg:h-[84px]">
        {/* LOGO */}
        <Link href="/" className="inline-flex flex-shrink-0 items-center gap-3" aria-label="SAV7 IMPEX Home">
          <span className="grid h-[39px] w-[39px] place-items-center rounded-lg bg-[#102b46] text-[15px] font-extrabold text-white sm:h-[43px] sm:w-[43px]">
            S<span className="ml-0.5 font-black text-[#b68b31]">7</span>
          </span>
          <span className="flex flex-col leading-tight">
            <strong className="font-['Manrope'] text-[17px] font-extrabold tracking-tight text-[#091c30] sm:text-xl">
              SAV7 IMPEX
            </strong>
            <small className="mt-0.5 text-[8px] font-bold tracking-[1.5px] text-[#718096]">
              PRIVATE LIMITED
            </small>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="ml-auto hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {mainLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${navLinkBase} h-[84px] ${isActive(item.href) ? "text-[#00875a]" : ""}`}
            >
              {item.name}
            </Link>
          ))}

          {/* GOLD DROPDOWN */}
          <div className="relative" ref={goldRef}>
            <button
              type="button"
              onClick={() => { setGoldOpen((p) => !p); setPharmaOpen(false); }}
              aria-expanded={goldOpen}
              aria-haspopup="true"
              className={`${navLinkBase} h-[84px] ${isGoldActive ? "text-[#00875a]" : ""}`}
            >
              Gold & Metals
              <span className={`inline-block text-xs transition-transform duration-200 ${goldOpen ? "rotate-180" : ""}`}>⌄</span>
            </button>

            <div
              role="menu"
              className={`absolute left-1/2 top-[calc(100%-5px)] z-[1010] w-[275px] -translate-x-1/2 rounded-b-lg border border-[#e7ecf1] border-t-[3px] border-t-[#b68b31] bg-white p-3 shadow-[0_18px_45px_rgba(9,28,48,0.13)] transition-all duration-200 ${
                goldOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"
              }`}
            >
              <div className="mb-2 rounded-md bg-[#fbf5e9] p-3.5">
                <span className="mb-1.5 block text-[9px] font-extrabold tracking-wider text-[#b68b31]">
                  PRECIOUS METALS DIVISION
                </span>
                <strong className="font-['Manrope'] text-sm text-[#102b46]">Gold & Precious Metals</strong>
              </div>
              {goldLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  className={`flex items-center justify-between rounded-md p-3 text-xs font-semibold transition hover:bg-[#eaf7f1] hover:text-[#00875a] ${
                    pathname === item.href ? "bg-[#eaf7f1] text-[#00875a]" : "text-[#26384b]"
                  }`}
                >
                  {item.name}
                  <span className="text-[#b68b31]">→</span>
                </Link>
              ))}
            </div>
          </div>

          {/* PHARMA DROPDOWN */}
          <div className="relative" ref={pharmaRef}>
            <button
              type="button"
              onClick={() => { setPharmaOpen((p) => !p); setGoldOpen(false); }}
              aria-expanded={pharmaOpen}
              aria-haspopup="true"
              className={`${navLinkBase} h-[84px] ${isPharmaActive ? "text-[#00875a]" : ""}`}
            >
              Pharma
              <span className={`inline-block text-xs transition-transform duration-200 ${pharmaOpen ? "rotate-180" : ""}`}>⌄</span>
            </button>

            <div
              role="menu"
              className={`absolute left-1/2 top-[calc(100%-5px)] z-[1010] w-[275px] -translate-x-1/2 rounded-b-lg border border-[#e7ecf1] border-t-[3px] border-t-[#00875a] bg-white p-3 shadow-[0_18px_45px_rgba(9,28,48,0.13)] transition-all duration-200 ${
                pharmaOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"
              }`}
            >
              <div className="mb-2 rounded-md bg-[#eaf7f1] p-3.5">
                <span className="mb-1.5 block text-[9px] font-extrabold tracking-wider text-[#00875a]">
                  HEALTHCARE DIVISION
                </span>
                <strong className="font-['Manrope'] text-sm text-[#102b46]">Pharmaceutical Products</strong>
              </div>
              {pharmaLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  className={`flex items-center justify-between rounded-md p-3 text-xs font-semibold transition hover:bg-[#eaf7f1] hover:text-[#00875a] ${
                    pathname === item.href ? "bg-[#eaf7f1] text-[#00875a]" : "text-[#26384b]"
                  }`}
                >
                  {item.name}
                  <span className="text-[#b68b31]">→</span>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/markets"
            className={`${navLinkBase} h-[84px] ${isActive("/markets") ? "text-[#00875a]" : ""}`}
          >
            Our Markets
          </Link>
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden flex-shrink-0 items-center gap-2.5 lg:flex">
          <Link
            href="/contact"
            className="inline-flex min-h-[43px] items-center justify-center gap-2 rounded-md bg-[#102b46] px-4 text-[11px] font-extrabold text-white transition hover:bg-[#00875a]"
          >
            Contact Us ↗
          </Link>
          <a
            href="https://wa.me/919290934388"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="grid h-[43px] w-[43px] place-items-center rounded-md bg-[#eaf7f1] text-[22px] text-[#00875a] transition hover:bg-[#00875a] hover:text-white"
          >
            ◉
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-[43px] w-[43px] flex-col items-center justify-center gap-1.5 rounded-md border border-[#e7ecf1] bg-white lg:hidden"
        >
          <span className={`h-0.5 w-[21px] bg-[#102b46] transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-[21px] bg-[#102b46] transition ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-[21px] bg-[#102b46] transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed left-0 right-0 top-[70px] z-[999] h-[calc(100dvh-70px)] overflow-y-auto border-t border-[#e7ecf1] bg-white shadow-lg transition-transform duration-200 sm:top-[76px] sm:h-[calc(100dvh-76px)] ${
          menuOpen ? "block translate-y-0 opacity-100" : "hidden"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex flex-col px-6 py-4">
          {mainLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`flex min-h-[54px] w-full items-center justify-between border-b border-[#e7ecf1] text-[13px] font-bold ${
                isActive(item.href) ? "text-[#00875a]" : "text-[#102b46]"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* MOBILE GOLD */}
          <div>
            <button
              type="button"
              onClick={() => setMobileGoldOpen((p) => !p)}
              className={`flex min-h-[54px] w-full items-center justify-between border-b border-[#e7ecf1] text-[13px] font-bold ${
                isGoldActive ? "text-[#00875a]" : "text-[#102b46]"
              }`}
            >
              <span>Gold & Precious Metals</span>
              <span className="text-xl text-[#b68b31]">{mobileGoldOpen ? "−" : "+"}</span>
            </button>
            <div className={`flex-col bg-[#f7f9fb] px-4 py-2 ${mobileGoldOpen ? "flex" : "hidden"}`}>
              {goldLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded border-b border-[#e7ecf1] py-3 text-xs ${
                    pathname === item.href ? "font-bold text-[#00875a]" : "text-[#718096]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* MOBILE PHARMA */}
          <div>
            <button
              type="button"
              onClick={() => setMobilePharmaOpen((p) => !p)}
              className={`flex min-h-[54px] w-full items-center justify-between border-b border-[#e7ecf1] text-[13px] font-bold ${
                isPharmaActive ? "text-[#00875a]" : "text-[#102b46]"
              }`}
            >
              <span>Pharmaceuticals</span>
              <span className="text-xl text-[#b68b31]">{mobilePharmaOpen ? "−" : "+"}</span>
            </button>
            <div className={`flex-col bg-[#f7f9fb] px-4 py-2 ${mobilePharmaOpen ? "flex" : "hidden"}`}>
              {pharmaLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded border-b border-[#e7ecf1] py-3 text-xs ${
                    pathname === item.href ? "font-bold text-[#00875a]" : "text-[#718096]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/markets"
            onClick={closeMenu}
            className={`flex min-h-[54px] items-center border-b border-[#e7ecf1] text-[13px] font-bold ${
              isActive("/markets") ? "text-[#00875a]" : "text-[#102b46]"
            }`}
          >
            Our Markets
          </Link>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-4 flex min-h-[48px] items-center justify-center rounded-md bg-[#102b46] text-sm font-bold text-white"
          >
            Contact Us ↗
          </Link>
          <a
            href="https://wa.me/919290934388"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex min-h-[48px] items-center justify-center rounded-md bg-[#00875a] text-sm font-bold text-white"
          >
            WhatsApp Enquiry
          </a>

          <div className="mt-7 text-center text-xs font-extrabold text-[#102b46]">
            SAV7 IMPEX PRIVATE LIMITED
            <span className="mt-1.5 block text-[10px] font-medium text-[#718096]">
              Global Trade • Gold • Pharmaceuticals
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}