import type { Metadata } from "next";
import LandingClient from "./LandingClient";

export const metadata: Metadata = {
  title: "Análisis Gratuito de Visibilidad Digital | IoranaSEO",
  description:
    "Multiplica tus clientes apareciendo donde ya te están buscando. Solicita tu análisis gratuito de SEO, Google y presencia digital sin compromiso.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: "Análisis Gratuito de Visibilidad Digital | IoranaSEO",
    description:
      "Multiplica tus clientes apareciendo donde ya te están buscando. Solicita tu análisis gratuito sin compromiso.",
    url: "https://iorana.dev/diagnostico",
  },
  alternates: {
    canonical: "https://iorana.dev/diagnostico",
  },
};

export default function LandingPage() {
  return <LandingClient />;
}
