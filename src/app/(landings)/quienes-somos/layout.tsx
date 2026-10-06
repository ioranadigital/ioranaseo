import type { Metadata } from 'next';
import QuienesSomosLayoutClient from './QuienesSomosLayoutClient';

export const metadata: Metadata = {
  title: 'Quiénes somos | IORANA SEO',
  description:
    'Un equipo de especialistas en estrategia digital, SEO, campañas, analítica y tecnología, según lo que necesita cada proyecto.',
  openGraph: {
    title: 'Quiénes somos | IORANA SEO',
    description:
      'Un equipo de especialistas en estrategia digital, SEO, campañas, analítica y tecnología, según lo que necesita cada proyecto.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function QuienesSomosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <QuienesSomosLayoutClient>{children}</QuienesSomosLayoutClient>;
}
