
import type { Metadata } from "next";

import Hero from "./components/Hero";
import About from "./components/About";
import BusinessDivisions from "./components/BusinessDivisions";
import Services from "./components/Services";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import Trust from "./components/Trust";
import CTA from "./components/CTA";
import TradeProcess from "./components/TradeProcess";
import Markets from "./components/Markets";

const BASE_URL = "https://www.sav7impex.in";

export const metadata: Metadata = {
  title:
    "SAV7 IMPEX PRIVATE LIMITED | Gold, Silver & Pharmaceutical Import Export Company India",

  description:
    "SAV7 IMPEX PRIVATE LIMITED is an India-based diversified import and export business focused on gold, silver, precious metals, pharmaceutical products, generic medicines, API sourcing and healthcare products.",

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    title:
      "SAV7 IMPEX PRIVATE LIMITED | Gold, Precious Metals & Pharmaceuticals",

    description:
      "Explore gold and precious metals, pharmaceutical products, generic medicines, API sourcing and healthcare product business enquiries with SAV7 IMPEX, India.",

    url: BASE_URL,

    siteName: "SAV7 IMPEX PRIVATE LIMITED",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SAV7 IMPEX PRIVATE LIMITED - Global Trade Business",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SAV7 IMPEX PRIVATE LIMITED",
    description:
      "Gold, silver, precious metals, pharmaceuticals and healthcare product business enquiries from India.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SAV7 IMPEX PRIVATE LIMITED",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  email: "sav7impex@gmail.com",
  telephone: "+91 92909 34388",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  description:
    "India-based diversified import and export business focused on gold, precious metals, pharmaceuticals and healthcare products.",
  knowsAbout: [
    "Gold",
    "Silver",
    "Precious Metals",
    "Pharmaceutical Products",
    "Generic Medicines",
    "Active Pharmaceutical Ingredients",
    "Healthcare Products",
    "International Trade",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SAV7 IMPEX PRIVATE LIMITED",
  url: BASE_URL,
  inLanguage: "en-IN",
};

export default function Home() {
  return (
    <main>
      {/* Homepage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      {/* Homepage sections */}
      <Hero />

      <About />

      <BusinessDivisions />

      <Services />

      <Products />

      <Markets />

      <TradeProcess />

      <WhyUs />

      <Trust />

      <CTA />
    </main>
  );
}
