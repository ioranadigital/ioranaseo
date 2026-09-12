import type { Metadata } from 'next';
import './styles.css';
import WebLayoutClient from './WebLayoutClient';

export const metadata: Metadata = {
  title: 'Web para Empresas | IORANA SEO',
  description:
    'Diseñamos tu web para que las personas te encuentren, entiendan lo que haces y se pongan en contacto contigo.',
  openGraph: {
    title: 'Web para Empresas | IORANA SEO',
    description:
      'Diseñamos tu web para que las personas te encuentren, entiendan lo que haces y se pongan en contacto contigo.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function WebParaEmpresasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <WebLayoutClient>{children}</WebLayoutClient>;
}
