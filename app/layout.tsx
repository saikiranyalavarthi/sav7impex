
import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

const BASE_URL = "https://www.sav7impex.in";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:
      "SAV7 IMPEX PRIVATE LIMITED | Gold, Precious Metals & Pharmaceuticals",
    template: "%s | SAV7 IMPEX",
  },

  description:
    "SAV7 IMPEX PRIVATE LIMITED is a Hyderabad, India-based import and export business focused on gold, silver, precious metals, pharmaceutical products, generic medicines, API sourcing and healthcare products.",

  applicationName: "SAV7 IMPEX",

  keywords: [
    "SAV7 IMPEX",
    "SAV7 IMPEX PRIVATE LIMITED",
    "Gold Import Export India",
    "Gold Trading India",
    "Precious Metals Trading",
    "Silver Products India",
    "Pharmaceutical Export India",
    "Generic Medicines",
    "API Sourcing India",
    "Healthcare Products",
    "Import Export Company Hyderabad",
  ],

  authors: [{ name: "SAV7 IMPEX PRIVATE LIMITED" }],
  creator: "SAV7 IMPEX PRIVATE LIMITED",
  publisher: "SAV7 IMPEX PRIVATE LIMITED",

  openGraph: {
    title:
      "SAV7 IMPEX PRIVATE LIMITED | Gold, Precious Metals & Pharmaceuticals",
    description:
      "Explore gold, silver, precious metals, pharmaceutical products, generic medicines, API sourcing and healthcare product business enquiries.",
    url: BASE_URL,
    siteName: "SAV7 IMPEX PRIVATE LIMITED",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SAV7 IMPEX PRIVATE LIMITED",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SAV7 IMPEX PRIVATE LIMITED",
    description:
      "Gold, precious metals, pharmaceuticals and healthcare products from India.",
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

  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-white font-sans text-[#26384b] antialiased">

        {/* Google Tag Manager - No JavaScript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KPX5G6SM"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
            title="Google Tag Manager"
          />
        </noscript>

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
        >
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KPX5G6SM');
          `}
        </Script>

        {/* Website Navbar */}
        <Navbar />

        {/* Website Pages */}
        {children}

        {/* Floating WhatsApp / Contact Buttons */}
        <FloatingButtons />

        {/* Website Footer */}
        <Footer />

      </body>
    </html>
  );
}
