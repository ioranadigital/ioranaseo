import { Manrope } from 'next/font/google';

// /diagnostico vive fuera del route group (landings), así que no hereda su
// wrapper de Manrope. Sin él, el body cae al serif por defecto del navegador.
const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  preload: true,
});

export default function DiagnosticoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${manrope.variable} diagnostico-root`}
      style={{ fontFamily: 'var(--font-manrope, Manrope, sans-serif)' }}
    >
      <style>{`
        .diagnostico-root button,
        .diagnostico-root input,
        .diagnostico-root textarea,
        .diagnostico-root select {
          font-family: inherit;
        }
        .diagnostico-root .dg-leave {
          opacity: 0;
          transform: translateY(-6px);
          transition: opacity 180ms ease, transform 180ms ease;
        }
        .diagnostico-root .dg-enter {
          animation: dg-enter 200ms ease-out;
        }
        @keyframes dg-enter {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .diagnostico-root .dg-leave { transition: none; }
          .diagnostico-root .dg-enter { animation: none; }
        }
        @media (max-width: 480px) {
          .diagnostico-root .diag-card {
            padding: 24px 20px 32px !important;
          }
        }
      `}</style>
      {children}
    </div>
  );
}
