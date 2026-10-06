'use client';

import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import { OPEN_COOKIE_PREFERENCES_EVENT } from '@/components/CookieConsent';

const linkStyle: CSSProperties = {
  fontSize: '14px',
  color: 'var(--io-text-muted)',
  textDecoration: 'none',
  transition: 'color 0.2s',
};

const headingStyle: CSSProperties = {
  fontSize: '12px',
  fontWeight: 600,
  marginBottom: '12px',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color: 'var(--io-text-muted)',
};

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      style={linkStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--io-action)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'var(--io-text-muted)';
      }}
    >
      {children}
    </Link>
  );
}

// Arquitectura final (GLOBAL_NAVIGATION_AUDIT.md, 2026-09-28): 4 columnas —
// Marca / Soluciones / Navegación / Legal — igual en LandingsFooter y en
// HomeFooter (home/components/Footer.tsx), las dos únicas implementaciones
// de footer del sitio.
const SOLUTIONS_LINKS = [
  { label: 'Todas las soluciones', href: '/soluciones' },
  { label: 'Web para empresas', href: '/web-para-empresas' },
  { label: 'Visibilidad', href: '/soluciones/visibilidad' },
  { label: 'Campañas', href: '/soluciones/campanas' },
  { label: 'Conversión', href: '/soluciones/conversion' },
];

export default function LandingsFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#F8FAFC',
        color: 'var(--io-text)',
        padding: '60px 20px 40px',
        marginTop: '80px',
        borderTop: '1px solid var(--io-border)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Main Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '50px',
          }}
        >
          {/* Brand */}
          <div>
            <h3
              style={{
                fontSize: '16px',
                fontWeight: 700,
                marginBottom: '12px',
                color: 'var(--io-text)',
              }}
            >
              IORANA SEO
            </h3>
            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.6,
                color: 'var(--io-text-muted)',
                margin: '0',
              }}
            >
              Captación digital para pequeños negocios y PYMEs.
            </p>
          </div>

          {/* Soluciones */}
          <div>
            <h4 style={headingStyle}>Soluciones</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {SOLUTIONS_LINKS.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Navegación */}
          <div>
            <h4 style={headingStyle}>Navegación</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <FooterLink href="/como-trabajamos">Cómo trabajamos</FooterLink>
              <FooterLink href="/quienes-somos">Quiénes somos</FooterLink>
              <FooterLink href="/contacto/">Contacto</FooterLink>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 style={headingStyle}>Legal</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <FooterLink href="/legal/privacidad">Privacidad</FooterLink>
              <FooterLink href="/legal/cookies">Cookies</FooterLink>
              <FooterLink href="/legal/aviso-legal">Aviso Legal</FooterLink>
              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent(OPEN_COOKIE_PREFERENCES_EVENT)
                  )
                }
                style={{
                  ...linkStyle,
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--io-action)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--io-text-muted)';
                }}
              >
                Preferencias de cookies
              </button>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: '1px solid var(--io-border)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '13px',
            color: 'var(--io-text-muted)',
          }}
        >
          <p style={{ margin: 0 }}>
            © {currentYear} IORANA SEO. Todos los derechos reservados.
          </p>
          <p style={{ margin: 0 }}>
            © NEOSUMA
          </p>
        </div>
      </div>
    </footer>
  );
}
