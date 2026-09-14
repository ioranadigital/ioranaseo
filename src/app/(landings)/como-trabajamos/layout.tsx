import type { Metadata } from 'next';
import './styles.css';
import ComoTrabajamosLayoutClient from './ComoTrabajamosLayoutClient';

export const metadata: Metadata = {
  title: 'Cómo trabajamos | IORANA SEO',
  description:
    'Nos implicamos en cada proyecto como un equipo más, combinando estrategia, experiencia y ejecución para conseguir resultados reales.',
  openGraph: {
    title: 'Cómo trabajamos | IORANA SEO',
    description:
      'Nos implicamos en cada proyecto como un equipo más, combinando estrategia, experiencia y ejecución para conseguir resultados reales.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function ComoTrabajamosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ComoTrabajamosLayoutClient>{children}</ComoTrabajamosLayoutClient>;
}
