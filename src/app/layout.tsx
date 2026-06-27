import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBottomBar from "@/components/MobileBottomBar";
import JsonLd from "@/components/JsonLd";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drtanwarsirmaths.com"),
  title: {
    default: "Dr. Tanwar Sir Maths - Best Maths Teacher & IIT-JEE Coach in Kota",
    template: "%s | Dr. Tanwar Sir Maths",
  },
  description:
    "Learn from the best maths teacher in Kota, Dr. Tanwar Sir (Ph.D. in Mathematics) - Kota's most trusted educator for IIT-JEE. Live + Offline classes, 500+ students, Top 100 rankers. Book a free demo today!",
  keywords: [
    "best maths teacher",
    "best maths teacher in Kota",
    "IIT JEE Maths",
    "JEE Maths coaching",
    "Kota maths teacher",
    "Dr Tanwar Sir",
    "JEE Main maths",
    "JEE Advanced maths",
    "NEET maths",
    "maths coaching Kota",
  ],
  openGraph: {
    title: "Dr. Tanwar Sir Maths - Best Maths Teacher & IIT-JEE Coach in Kota",
    description:
      "Learn from the best maths teacher in Kota. Ph.D. qualified educator. 500+ students, Top 100 JEE rankers. Live + Offline classes.",
    url: "https://drtanwarsirmaths.com",
    siteName: "Dr. Tanwar Sir Maths",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Dr. Tanwar Sir Maths",
  url: "https://drtanwarsirmaths.com",
  logo: "https://drtanwarsirmaths.com/wp-content/uploads/2026/03/tanswar-sir-logo-png-without-transparent.png",
  description:
    "IIT-JEE Maths coaching by the best maths teacher in Kota, Dr. Tanwar Sir (Ph.D. Mathematics)",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kota",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  telephone: "+918118853033",
  email: "tanwarsirmaths@gmail.com",
  sameAs: [],
  founder: {
    "@type": "Person",
    name: "Dr. Tanwar Sir",
    jobTitle: "Ph.D. Mathematics Educator",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Dr. Tanwar Sir Maths",
  image:
    "https://drtanwarsirmaths.com/wp-content/uploads/2026/03/tanswar-sir-logo-png-without-transparent.png",
  url: "https://drtanwarsirmaths.com",
  telephone: "+918118853033",
  email: "tanwarsirmaths@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kota",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  priceRange: "₹2,999 - ₹6,999/month",
  openingHours: "Mo-Sa 08:00-21:00",
  areaServed: "India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileBottomBar />
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
      </body>
    </html>
  );
}

