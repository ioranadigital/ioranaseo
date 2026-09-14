import type { Metadata } from 'next';
import './styles.css';
import CampanasLayoutClient from './CampanasLayoutClient';

export const metadata: Metadata = {
  title: 'Soluciones de Campañas | IORANA SEO',
  description:
    'Campañas de Google Ads y Meta Ads conectadas con landing pages, tracking y optimización continua para conseguir más leads y ventas para tu negocio.',
  openGraph: {
    title: 'Soluciones de Campañas | IORANA SEO',
    description:
      'Campañas de Google Ads y Meta Ads conectadas con landing pages, tracking y optimización continua para conseguir más leads y ventas para tu negocio.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function CampanasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CampanasLayoutClient>{children}</CampanasLayoutClient>;
}
