'use client';

import Link from 'next/link';
import { OPEN_COOKIE_PREFERENCES_EVENT } from '@/components/CookieConsent';

export default function HomeFooter() {
  const currentYear = new Date().getFullYear();

  // MVP de lanzamiento: mismo patrón/flag que LandingsHeader - Recursos y
  // Casos se retiran temporalmente de la navegación pública del footer
  // global (sin contenido editorial/casos reales todavía). Se conserva la
  // configuración completa para reactivarlos más adelante sin rehacer nada.
  const LAUNCH_MVP_SHOW_RECURSOS_Y_CASOS = false;

  const footerNavFull = [
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Cómo trabajamos', href: '/como-trabajamos' },
    { label: 'Casos', href: '#casos' },
    { label: 'Recursos', href: '#recursos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const footerNav = LAUNCH_MVP_SHOW_RECURSOS_Y_CASOS
    ? footerNavFull
    : footerNavFull.filter(
        (item) => item.label !== 'Recursos' && item.label !== 'Casos'
      );

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
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '50px',
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

          {/* Navegación */}
          <div>
            <h4
              style={{
                fontSize: '12px',
                fontWeight: 600,
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--io-text-muted)',
              }}
            >
              Navegación
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {footerNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{
                    fontSize: '14px',
                    color: 'var(--io-text-muted)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--io-action)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--io-text-muted)';
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4
              style={{
                fontSize: '12px',
                fontWeight: 600,
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--io-text-muted)',
              }}
            >
              Legal
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link
                href="/legal/privacidad"
                style={{
                  fontSize: '14px',
                  color: 'var(--io-text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--io-action)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--io-text-muted)';
                }}
              >
                Privacidad
              </Link>
              <Link
                href="/legal/cookies"
                style={{
                  fontSize: '14px',
                  color: 'var(--io-text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--io-action)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--io-text-muted)';
                }}
              >
                Cookies
              </Link>
              <Link
                href="/legal/aviso-legal"
                style={{
                  fontSize: '14px',
                  color: 'var(--io-text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--io-action)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--io-text-muted)';
                }}
              >
                Aviso Legal
              </Link>
              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent(OPEN_COOKIE_PREFERENCES_EVENT)
                  )
                }
                style={{
                  fontSize: '14px',
                  color: 'var(--io-text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
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
            Hecho en España
          </p>
        </div>
      </div>
    </footer>
  );
}
