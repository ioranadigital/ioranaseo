import type { Metadata } from 'next';
import './styles.css';
import VisibilidadLayoutClient from './VisibilidadLayoutClient';

export const metadata: Metadata = {
  title: 'Soluciones de Visibilidad | IORANA SEO',
  description:
    'Trabajamos SEO, SEO Local, Google Maps y contenidos para que tu negocio gane visibilidad en búsquedas con intención real.',
  openGraph: {
    title: 'Soluciones de Visibilidad | IORANA SEO',
    description:
      'Trabajamos SEO, SEO Local, Google Maps y contenidos para que tu negocio gane visibilidad en búsquedas con intención real.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function VisibilidadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <VisibilidadLayoutClient>{children}</VisibilidadLayoutClient>;
}
