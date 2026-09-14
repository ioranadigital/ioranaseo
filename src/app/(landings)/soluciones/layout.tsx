import type { Metadata } from 'next';
import './styles.css';

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
  // Header/footer se renderizan solo en page.tsx (vía SolucionesLayoutClient),
  // NO aquí — este layout.tsx también envuelve rutas hijas como
  // /soluciones/visibilidad/, que tienen su propio header+footer.
  return children;
}
