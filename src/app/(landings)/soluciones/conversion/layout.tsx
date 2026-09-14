import type { Metadata } from 'next';
import './styles.css';
import ConversionLayoutClient from './ConversionLayoutClient';

export const metadata: Metadata = {
  title: 'Soluciones de Conversión | IORANA SEO',
  description:
    'Diseñamos y optimizamos tu web, landing pages y embudos de conversión para que cada visita cuente y consigas más leads y ventas para tu negocio.',
  openGraph: {
    title: 'Soluciones de Conversión | IORANA SEO',
    description:
      'Diseñamos y optimizamos tu web, landing pages y embudos de conversión para que cada visita cuente y consigas más leads y ventas para tu negocio.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function ConversionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ConversionLayoutClient>{children}</ConversionLayoutClient>;
}
