'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { OPEN_COOKIE_PREFERENCES_EVENT } from '@/components/CookieConsent';

const DOCS = [
  { label: 'Privacidad', href: '/legal/privacidad' },
  { label: 'Cookies', href: '/legal/cookies' },
  { label: 'Aviso Legal', href: '/legal/aviso-legal' },
];

export default function LegalNav() {
  const pathname = usePathname() ?? '';

  const openPreferences = () => {
    window.dispatchEvent(new CustomEvent(OPEN_COOKIE_PREFERENCES_EVENT));
  };

  return (
    <nav className="lgl-nav" aria-label="Navegación legal">
      <ul className="lgl-nav__list">
        {DOCS.map((doc) => {
          const isActive = pathname === doc.href || pathname === `${doc.href}/`;
          return (
            <li key={doc.href}>
              <Link
                href={doc.href}
                className="lgl-nav__link"
                aria-current={isActive ? 'page' : undefined}
                data-active={isActive || undefined}
              >
                {doc.label}
              </Link>
            </li>
          );
        })}
        <li>
          <button
            type="button"
            className="lgl-nav__link lgl-nav__link--button"
            onClick={openPreferences}
          >
            Preferencias de cookies
          </button>
        </li>
      </ul>

      <style>{`
        .lgl-nav__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .lgl-nav__link {
          display: block;
          width: 100%;
          padding: 9px 12px;
          font-size: 14px;
          font-weight: 600;
          color: var(--io-text-muted);
          text-decoration: none;
          border-radius: var(--io-radius-sm);
          transition: background-color 150ms ease, color 150ms ease;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          font-family: inherit;
        }
        .lgl-nav__link:hover {
          color: var(--io-action-hover);
          background: var(--io-bg-soft);
        }
        .lgl-nav__link[data-active] {
          color: var(--io-action-hover);
          background: var(--io-bg-soft);
        }
        .lgl-nav__link--button {
          border-top: 1px solid var(--io-border);
          margin-top: 4px;
          padding-top: 13px;
          border-radius: 0 0 var(--io-radius-sm) var(--io-radius-sm);
        }

        @media (max-width: 767px) {
          .lgl-nav__list {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 8px;
          }
          .lgl-nav__link {
            padding: 8px 14px;
            border: 1px solid var(--io-border);
            border-radius: 999px;
            background: #fff;
          }
          .lgl-nav__link[data-active] {
            border-color: var(--io-action);
          }
          .lgl-nav__link--button {
            border-top: 1px solid var(--io-border);
            margin-top: 0;
            padding-top: 8px;
            border-radius: 999px;
          }
        }
      `}</style>
    </nav>
  );
}
