import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import LandingClient from "./LandingClient";

export const metadata: Metadata = {
  title: "Análisis Gratuito de Visibilidad Digital | IoranaSEO",
  description:
    "Multiplica tus clientes apareciendo donde ya te están buscando. Solicita tu análisis gratuito de SEO, Google y presencia digital sin compromiso.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: "Análisis Gratuito de Visibilidad Digital | IoranaSEO",
    description:
      "Multiplica tus clientes apareciendo donde ya te están buscando. Solicita tu análisis gratuito sin compromiso.",
    url: siteConfig.url("/diagnostico"),
  },
  alternates: {
    canonical: siteConfig.url("/diagnostico"),
  },
};

export default function LandingPage() {
  return <LandingClient />;
}
