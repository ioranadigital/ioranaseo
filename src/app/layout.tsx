import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: siteConfig.metadataBase,
  title: "IoranaSEO - Agencia de Marketing Digital",
  description:
    "Expertos en SEO, Google Ads, Facebook Ads y soluciones digitales. Posicionamiento de empresas en buscadores y redes sociales.",
  keywords: [
    "SEO",
    "Google Ads",
    "Facebook Ads",
    "Marketing Digital",
    "Posicionamiento Web",
    "Agencia Digital",
  ],
  authors: [{ name: "IoranaSEO" }],
  creator: "IoranaSEO",
  publisher: "IoranaSEO",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.origin,
    siteName: "IoranaSEO",
    title: "IoranaSEO - Agencia de Marketing Digital",
    description:
      "Expertos en SEO, Google Ads, Facebook Ads y soluciones digitales.",
    images: [
      {
        url: siteConfig.url("/og-image.png"),
        width: 1200,
        height: 630,
        alt: "IoranaSEO - Agencia de Marketing Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IoranaSEO - Agencia de Marketing Digital",
    description:
      "Expertos en SEO, Google Ads, Facebook Ads y soluciones digitales.",
    images: [siteConfig.url("/og-image.png")],
    creator: "@iorana",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: siteConfig.origin,
    languages: {
      es: siteConfig.origin,
      en: siteConfig.url("/en"),
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Hind:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Spline+Sans:wght@300;400;500;600;700&family=Catamaran:wght@100;200;300;400;500;600;700;800;900&display=swap"
        />

        {/* DNS Prefetch */}
        <link
          rel="dns-prefetch"
          href="https://zvehtloitnuglyjtxwye.supabase.co"
        />

        {/* Favicons */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color */}
        <meta name="theme-color" content="#4D32A5" />
        <meta name="msapplication-TileColor" content="#4D32A5" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "IoranaSEO",
              url: siteConfig.origin,
              logo: siteConfig.url("/logo.png"),
              description:
                "Agencia de marketing digital especializada en SEO, Google Ads, Facebook Ads y soluciones digitales",
              sameAs: [
                "https://twitter.com/iorana",
                "https://linkedin.com/company/iorana",
              ],
              contact: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                email: "honatuya@gmail.com",
              },
            }),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: siteConfig.origin,
              name: "IoranaSEO",
              description:
                "Agencia de marketing digital especializada en SEO y soluciones digitales",
              potentialAction: {
                "@type": "SearchAction",
                target: siteConfig.url("/search?q={search_term_string}"),
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
