import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SAV7 IMPEX PRIVATE LIMITED",
    template: "%s | SAV7 IMPEX",
  },
  description:
    "SAV7 IMPEX PRIVATE LIMITED is a Hyderabad-based import export company specializing in gold, silver, and global commodity trading. GST, IEC & BIS certified.",
  keywords: [
    "Gold Import Export India",
    "Hyderabad Export Company",
    "Gold Trading Company India",
    "SAV7 Impex",
    "Precious Metals Export",
  ],
  authors: [{ name: "SAV7 IMPEX" }],
  metadataBase: new URL("https://yourdomain.com"), // change later

  openGraph: {
    title: "SAV7 IMPEX PRIVATE LIMITED",
    description:
      "Trusted gold import export company in India. GST & IEC certified global trading.",
    url: "https://yourdomain.com",
    siteName: "SAV7 IMPEX",
    images: [
      {
        url: "/og-image.jpg", // add later
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SAV7 IMPEX PRIVATE LIMITED",
    description: "Gold import export company India",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-[#0B0B0F] text-white font-sans antialiased">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}