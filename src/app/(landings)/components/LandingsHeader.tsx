'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function LandingsHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isHomeVariant, setIsHomeVariant] = useState(false);
  const [isSolucionesPage, setIsSolucionesPage] = useState(false);
  const [isComoTrabajamosPage, setIsComoTrabajamosPage] = useState(false);

  useEffect(() => {
    const pathname = window.location.pathname;
    setIsHomeVariant(
      pathname === '/' ||
        pathname.startsWith('/home') ||
        pathname.startsWith('/soluciones') ||
        pathname.startsWith('/como-trabajamos')
    );
    setIsSolucionesPage(pathname.startsWith('/soluciones'));
    setIsComoTrabajamosPage(pathname.startsWith('/como-trabajamos'));
  }, []);

  // MVP de lanzamiento: Recursos y Casos se retiran temporalmente de la
  // navegación pública (no hay contenido editorial/casos reales todavía).
  // No se elimina la lógica ni los items por si se reactivan más adelante.
  const LAUNCH_MVP_SHOW_RECURSOS_Y_CASOS = false;

  // Navegación dinámica basada en la ruta (Home y Soluciones comparten variante)
  const navItemsFull = isHomeVariant
    ? [
        { label: 'Soluciones', href: isSolucionesPage ? '/soluciones' : '#soluciones' },
        { label: 'Cómo trabajamos', href: '/como-trabajamos' },
        { label: 'Recursos', href: '#recursos' },
        { label: 'Casos', href: '#casos' },
      ]
    : [
        { label: 'Qué incluye', href: '#que-incluye' },
        { label: 'Cómo trabajamos', href: '/como-trabajamos' },
        { label: 'Precios', href: '#precios' },
      ];

  const navItems = LAUNCH_MVP_SHOW_RECURSOS_Y_CASOS
    ? navItemsFull
    : navItemsFull.filter(
        (item) => item.label !== 'Recursos' && item.label !== 'Casos'
      );

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        backgroundColor: 'white',
        borderBottom: '1px solid var(--io-border)',
        zIndex: 1000,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
      }}
    >
      {/*
        Responsive visibility is handled with plain CSS media queries
        instead of Tailwind's `hidden`/`md:flex` utilities: Tailwind is
        not currently being compiled by PostCSS in this project (no
        postcss.config registering @tailwindcss/postcss), so those
        utility classes render as no-ops. Using real CSS here guarantees
        the header behaves correctly regardless of that separate issue.
      */}
      <style>
        {`
          .landings-header__nav-desktop {
            display: none;
          }
          .landings-header__hamburger {
            display: flex;
          }
          @media (min-width: 1024px) {
            .landings-header__nav-desktop {
              display: flex;
            }
            .landings-header__hamburger {
              display: none;
            }
          }
        `}
      </style>

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '12px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        {/* Logo - Wordmark */}
        <Link
          href="/"
          style={{
            fontSize: '16px',
            fontWeight: 800,
            color: 'var(--io-text)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexShrink: 0,
            letterSpacing: '-0.01em',
          }}
        >
          IORANA SEO
        </Link>

        {/* Desktop Nav - visible only from 1024px */}
        <nav
          className="landings-header__nav-desktop"
          style={{
            gap: '32px',
            alignItems: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {navItems.map((item) => {
            const isActive =
              (isSolucionesPage && item.label === 'Soluciones') ||
              (isComoTrabajamosPage && item.label === 'Cómo trabajamos');
            return (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  fontSize: '14px',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--io-action)' : 'var(--io-text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--io-action)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isActive
                    ? 'var(--io-action)'
                    : 'var(--io-text-muted)';
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button - always visible (all breakpoints) */}
        <Link
          href="#contacto"
          style={{
            padding: '10px 20px',
            backgroundColor: 'var(--io-action)',
            color: 'white',
            fontSize: '14px',
            fontWeight: 600,
            borderRadius: 'var(--io-radius-md)',
            textDecoration: 'none',
            transition: 'background-color 0.2s',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--io-action-hover)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--io-action)';
          }}
        >
          Analizar mi proyecto
        </Link>

        {/* Mobile Menu Button - visible below 1024px */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="landings-header__hamburger"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '22px',
            color: 'var(--io-text)',
            padding: '8px',
            flexShrink: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu - only ever opened below 1024px (hamburger hidden above that) */}
      {mobileOpen && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '16px 20px',
            backgroundColor: 'white',
            borderTop: '1px solid var(--io-border)',
          }}
        >
          {navItems.map((item) => {
            const isActiveMobile =
              (isSolucionesPage && item.label === 'Soluciones') ||
              (isComoTrabajamosPage && item.label === 'Cómo trabajamos');
            return (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  fontSize: '14px',
                  fontWeight: isActiveMobile ? 700 : 400,
                  color: isActiveMobile ? 'var(--io-action)' : 'var(--io-text-muted)',
                  textDecoration: 'none',
                  padding: '8px 0',
                }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="#contacto"
            style={{
              padding: '10px 16px',
              backgroundColor: 'var(--io-action)',
              color: 'white',
              fontSize: '14px',
              fontWeight: 600,
              borderRadius: 'var(--io-radius-md)',
              textDecoration: 'none',
              textAlign: 'center',
            }}
            onClick={() => setMobileOpen(false)}
          >
            Analizar mi proyecto
          </Link>
        </div>
      )}
    </header>
  );
}
