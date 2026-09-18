'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LandingsHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() ?? '';

  const isHomePage = pathname === '/' || pathname.startsWith('/home');

  useEffect(() => {
    if (!isHomePage) return;
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHomePage]);

  // En HOME el navbar es semitransparente (blanco 70% + blur) sobre el fondo del Hero; el borde aparece al hacer scroll o abrir el menú.
  const showBorder = !isHomePage || scrolled || mobileOpen;

  const isSolucionesPage = pathname.startsWith('/soluciones');
  const isComoTrabajamosPage = pathname.startsWith('/como-trabajamos');
  const isHomeVariant =
    pathname === '/' || pathname.startsWith('/home') || isSolucionesPage || isComoTrabajamosPage;

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
        position: isHomePage ? 'fixed' : 'sticky',
        top: 0,
        ...(isHomePage ? { left: 0, right: 0 } : {}),
        backgroundColor: isHomePage ? 'rgba(255, 255, 255, 0.7)' : 'white',
        ...(isHomePage
          ? { backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }
          : {}),
        borderBottom: showBorder ? '1px solid var(--io-border)' : '1px solid transparent',
        zIndex: 1000,
        boxShadow: isHomePage ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.08)',
        transition: 'background-color 0.3s, border-color 0.3s',
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
          :root {
            --io-header-h: 64px;
          }
          @media (max-width: 1023px) {
            :root {
              --io-header-h: 71px;
            }
          }
          @media (max-width: 430px) {
            :root {
              --io-header-h: 67px;
            }
          }
          .landings-header__nav-desktop {
            display: none;
          }
          .landings-header__hamburger {
            display: flex;
          }
          .landings-header__logo-img {
            height: 32px;
            width: auto;
          }
          @media (min-width: 1024px) {
            .landings-header__nav-desktop {
              display: flex;
            }
            .landings-header__hamburger {
              display: none;
            }
          }
          @media (max-width: 1023px) {
            .landings-header__logo-img {
              height: 28px;
            }
            .landings-header__cta {
              margin-left: auto;
            }
          }
          @media (max-width: 430px) {
            .landings-header__inner {
              padding: 12px 16px !important;
              gap: 8px !important;
            }
            .landings-header__logo-img {
              height: 26px;
            }
            .landings-header__cta {
              padding: 8px 14px !important;
            }
            .landings-header__hamburger {
              padding: 6px !important;
            }
          }
        `}
      </style>

      <div
        className="landings-header__inner"
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
        {/* Logo - Official IORANA SEO */}
        <Link
          href="/"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
          }}
          title="IORANA SEO"
        >
          <Image
            className="landings-header__logo-img"
            src="/assets/brand/iorana-seo-logo.png"
            alt="IORANA SEO"
            width={1000}
            height={150}
            priority
          />
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
          href="/contacto/"
          className="landings-header__cta"
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
          Contacto
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
            href="/contacto/"
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
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
}
