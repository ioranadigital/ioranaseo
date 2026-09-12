import type { Metadata } from 'next';
import './styles.css';

export const metadata: Metadata = {
  title: 'Home | IORANA SEO',
  description:
    'Diseñamos y mejoramos tu web, visibilidad y campañas para que te encuentren, entiendan lo que haces y contacten contigo.',
  openGraph: {
    title: 'Home | IORANA SEO',
    description:
      'Diseñamos y mejoramos tu web, visibilidad y campañas para que te encuentren, entiendan lo que haces y contacten contigo.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
