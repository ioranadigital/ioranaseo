'use client';

import React from 'react';
import LandingsHeader from '../components/LandingsHeader';
import LandingsFooter from '../components/LandingsFooter';
import LegalNav from './components/LegalNav';

interface LegalLayoutClientProps {
  children: React.ReactNode;
}

export default function LegalLayoutClient({ children }: LegalLayoutClientProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'var(--io-bg)',
        color: 'var(--io-text)',
      }}
    >
      <LandingsHeader />
      <main style={{ flex: 1 }}>
        <div className="lgl-shell">
          <aside className="lgl-shell__sidebar">
            <LegalNav />
          </aside>
          <div className="lgl-shell__content">{children}</div>
        </div>
      </main>
      <LandingsFooter />

      <style>{`
        .lgl-shell {
          max-width: 1080px;
          margin: 0 auto;
          padding: 48px 20px 64px;
          display: grid;
          grid-template-columns: 232px minmax(0, 1fr);
          gap: 48px;
          align-items: start;
        }
        .lgl-shell__sidebar {
          position: sticky;
          top: calc(var(--io-header-h, 64px) + 24px);
        }
        .lgl-shell__content {
          max-width: 800px;
          min-width: 0;
        }

        @media (max-width: 1023px) {
          .lgl-shell { gap: 32px; padding: 40px 20px 56px; }
        }
        @media (max-width: 767px) {
          .lgl-shell {
            grid-template-columns: 1fr;
            padding: 32px 20px 48px;
            gap: 24px;
          }
          .lgl-shell__sidebar { position: static; }
          .lgl-shell__content { max-width: none; }
        }
        @media (max-width: 430px) {
          .lgl-shell { padding: 24px 16px 40px; }
        }

        /* Shared reading typography for legal documents (Privacidad/Cookies/Aviso Legal). */
        .lgl-doc h2 {
          font-size: 20px; font-weight: 700; color: var(--io-text); margin: 32px 0 12px;
        }
        .lgl-doc h2:first-child { margin-top: 0; }
        .lgl-doc h3 {
          font-size: 16px; font-weight: 700; color: var(--io-text); margin: 20px 0 8px;
        }
        .lgl-doc p {
          font-size: 15px; line-height: 1.7; color: var(--io-text-muted); margin: 0 0 14px;
        }
        .lgl-doc ul {
          margin: 0 0 14px; padding-left: 20px; color: var(--io-text-muted); font-size: 15px; line-height: 1.7;
        }
        .lgl-doc li { margin-bottom: 4px; }
        .lgl-doc strong { color: var(--io-text); font-weight: 700; }
        .lgl-doc a { color: var(--io-action); }
        .lgl-doc a:hover { color: var(--io-action-hover); }
        .lgl-doc__section {
          padding-bottom: 20px; margin-bottom: 20px; border-bottom: 1px solid var(--io-border);
        }
        .lgl-doc__section:last-of-type { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
        .lgl-doc__updated {
          margin-top: 32px; padding-top: 20px; border-top: 1px solid var(--io-border);
          font-size: 13px; color: var(--io-text-muted);
        }
        .lgl-doc__note {
          margin: 0 0 14px; padding: 14px 16px; border-radius: var(--io-radius-md);
          background: var(--io-bg-soft); border: 1px solid var(--io-border);
          font-size: 14px; line-height: 1.6; color: var(--io-text-muted);
        }
        .lgl-doc table {
          width: 100%; border-collapse: collapse; margin: 0 0 16px; font-size: 13.5px;
        }
        .lgl-doc th, .lgl-doc td {
          text-align: left; padding: 8px 10px; border-bottom: 1px solid var(--io-border); color: var(--io-text-muted);
        }
        .lgl-doc th { color: var(--io-text); font-weight: 700; }
        @media (max-width: 767px) {
          .lgl-doc table { display: block; overflow-x: auto; }
        }
      `}</style>
    </div>
  );
}
