import type { Metadata } from 'next';
import Link from 'next/link';
import LegalHero from './components/LegalHero';

export const metadata: Metadata = {
  title: 'Información Legal | IORANA SEO',
  description:
    'Política de privacidad, política de cookies y aviso legal de IORANA SEO.',
  openGraph: {
    title: 'Información Legal | IORANA SEO',
    description:
      'Política de privacidad, política de cookies y aviso legal de IORANA SEO.',
    type: 'website',
    locale: 'es_ES',
  },
};

const DOCS = [
  {
    href: '/legal/privacidad',
    title: 'Política de Privacidad',
    text: 'Cómo tratamos y protegemos tus datos personales.',
  },
  {
    href: '/legal/cookies',
    title: 'Política de Cookies',
    text: 'Qué cookies utiliza este sitio y cómo puedes gestionarlas.',
  },
  {
    href: '/legal/aviso-legal',
    title: 'Aviso Legal',
    text: 'Condiciones de uso del sitio web.',
  },
];

export default function LegalIndexPage() {
  return (
    <>
      <LegalHero
        title="Información legal"
        intro="Encuentra aquí nuestra política de privacidad, la política de cookies y el aviso legal del sitio."
      />

      <div className="lgl-index">
        {DOCS.map((doc) => (
          <Link key={doc.href} href={doc.href} className="lgl-index__card">
            <h2 className="lgl-index__title">{doc.title}</h2>
            <p className="lgl-index__text">{doc.text}</p>
          </Link>
        ))}
      </div>

      <style>{`
        .lgl-index { display: flex; flex-direction: column; gap: 12px; }
        .lgl-index__card {
          display: block; padding: 20px; border: 1px solid var(--io-border); border-radius: var(--io-radius-lg);
          background: #fff; text-decoration: none; transition: border-color 180ms ease, box-shadow 180ms ease;
        }
        .lgl-index__card:hover {
          border-color: var(--io-action);
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.06);
        }
        .lgl-index__title { font-size: 16px; font-weight: 700; color: var(--io-text); margin: 0 0 4px; }
        .lgl-index__text { font-size: 14px; line-height: 1.5; color: var(--io-text-muted); margin: 0; }
      `}</style>
    </>
  );
}
