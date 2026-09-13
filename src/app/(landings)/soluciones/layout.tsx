import type { Metadata } from 'next';
import './styles.css';
import SolucionesLayoutClient from './SolucionesLayoutClient';

export const metadata: Metadata = {
  title: 'Soluciones | IORANA SEO',
  description:
    'Web, visibilidad, campañas y conversión conectadas para ayudarte a generar más oportunidades.',
  openGraph: {
    title: 'Soluciones | IORANA SEO',
    description:
      'Web, visibilidad, campañas y conversión conectadas para ayudarte a generar más oportunidades.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function SolucionesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SolucionesLayoutClient>{children}</SolucionesLayoutClient>;
}
