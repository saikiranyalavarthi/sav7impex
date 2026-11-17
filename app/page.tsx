
import type { Metadata } from "next";

import Hero from "./components/Hero";
import About from "./components/About";
import BusinessDivisions from "./components/BusinessDivisions";
import Services from "./components/Services";
import Products from "./components/Products";

import WhyUs from "./components/WhyUs";
import Trust from "./components/Trust";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import TradeProcess from "./components/TradeProcess";
import Markets from "./components/Markets";

export const metadata: Metadata = {
  title:
    "SAV7 IMPEX | Gold, Silver & Pharmaceutical Import Export Company",
  description:
    "SAV7 IMPEX PRIVATE LIMITED is an India-based import export company specializing in gold, silver, precious metals, pharmaceuticals, healthcare products and global commodity trading.",
  alternates: {
    canonical: "https://www.sav7impex.in/",
  },
  openGraph: {
    title: "SAV7 IMPEX | Global Import & Export Solutions",
    description:
      "Gold, precious metals, pharmaceutical products and international trading solutions from India.",
    url: "https://www.sav7impex.in/",
    siteName: "SAV7 IMPEX PRIVATE LIMITED",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <BusinessDivisions />
      <Services />
      <Products />
      <Markets/>
     <TradeProcess/>
      <WhyUs />
      <Trust />
      <CTA />
   
    </main>
  );
}
