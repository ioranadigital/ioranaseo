'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Arquitectura final (GLOBAL_NAVIGATION_AUDIT.md): "Soluciones" es un dropdown
// con estas 5 entradas en TODAS las páginas normales, no un item más entre
// muchos. /web-para-empresas es hija conceptual de Soluciones aunque su URL
// no esté anidada bajo /soluciones/.
const SOLUTIONS_LINKS = [
  { label: 'Todas las soluciones', href: '/soluciones' },
  { label: 'Web para empresas', href: '/web-para-empresas' },
  { label: 'Visibilidad', href: '/soluciones/visibilidad' },
  { label: 'Campañas', href: '/soluciones/campanas' },
  { label: 'Conversión', href: '/soluciones/conversion' },
];

export default function LandingsHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() ?? '';
  const solutionsRef = useRef<HTMLDivElement>(null);
  const solutionsButtonRef = useRef<HTMLButtonElement>(null);

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
  const isWebParaEmpresasPage = pathname.startsWith('/web-para-empresas');
  // §6 del brief: /web-para-empresas activa "Soluciones" aunque su URL no
  // esté anidada bajo /soluciones/ — es su hija conceptual.
  const isSolucionesFamily = isSolucionesPage || isWebParaEmpresasPage;
  const isComoTrabajamosPage = pathname.startsWith('/como-trabajamos');
  const isQuienesSomosPage = pathname.startsWith('/quienes-somos');
  const isDiagnosticoPage = pathname.startsWith('/diagnostico');

  // Dropdown desktop: funciona con mouse (hover) Y teclado (Tab/Enter/Space
  // vía <button>, Escape), no depende exclusivamente de hover (§5). Cierra
  // al hacer click fuera o con Escape, devolviendo el foco al trigger.
  useEffect(() => {
    if (!solutionsOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSolutionsOpen(false);
        solutionsButtonRef.current?.focus();
      }
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [solutionsOpen]);

  // Menú mobile: Escape lo cierra por completo (§11).
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [mobileOpen]);

  // MVP de lanzamiento: Recursos y Casos se retiran temporalmente de la
  // navegación pública (no hay contenido editorial/casos reales todavía).
  // No se elimina la lógica ni los items por si se reactivan más adelante.
  const LAUNCH_MVP_SHOW_RECURSOS_Y_CASOS = false;

  // Navegación unificada (GLOBAL_NAVIGATION_AUDIT.md, 2026-09-28): la misma
  // arquitectura — Soluciones (dropdown, gestionado aparte) + Cómo trabajamos
  // — se aplica a TODAS las páginas normales (Home, Soluciones y sus 3
  // hijas, Web para empresas, Cómo trabajamos, Legal, Contacto). Antes,
  // /web-para-empresas mostraba su propia mini-nav de anclas ("Qué incluye"/
  // "Precios"); se retira del header en favor de la arquitectura global
  // consistente que pide el brief — esas secciones siguen existiendo en la
  // página, solo dejan de tener un atajo propio en el header global.
  // /diagnostico mantiene su Header mínimo aparte (ver isDiagnosticoPage).
  const navItemsFull = [
    { label: 'Cómo trabajamos', href: '/como-trabajamos' },
    { label: 'Quiénes somos', href: '/quienes-somos' },
    { label: 'Recursos', href: '#recursos' },
    { label: 'Casos', href: '#casos' },
  ];
  const navItems = isDiagnosticoPage
    ? []
    : LAUNCH_MVP_SHOW_RECURSOS_Y_CASOS
    ? navItemsFull
    : navItemsFull.filter((item) => item.label !== 'Recursos' && item.label !== 'Casos');

  const isSolutionItemActive = (href: string) =>
    href === '/soluciones' ? pathname === '/soluciones' || pathname === '/soluciones/' : pathname.startsWith(href);

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
          .landings-header__dropdown {
            position: absolute;
            top: calc(100% + 8px);
            left: 0;
            min-width: 226px;
            background: #fff;
            border: 1px solid var(--io-border);
            border-radius: var(--io-radius-md);
            box-shadow: 0 10px 28px rgba(15, 23, 42, 0.10);
            padding: 6px;
            z-index: 1100;
          }
          .landings-header__dropdown-link {
            display: block;
            padding: 9px 12px;
            border-radius: var(--io-radius-sm);
            font-size: 14px;
            text-decoration: none;
            transition: background-color 120ms ease;
          }
          .landings-header__dropdown-link:hover {
            background: var(--io-bg-soft);
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
        {!isDiagnosticoPage && (
        <nav
          className="landings-header__nav-desktop"
          style={{
            gap: '32px',
            alignItems: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {/* Sin onMouseEnter/onMouseLeave a propósito: combinar hover-open con
              el toggle del click producía un bug real (hover abría, y el
              click del mismo gesto lo volvía a cerrar). Un <button> con
              click/Enter/Espacio ya es mouse+teclado por definición (§5). */}
          <div
            ref={solutionsRef}
            style={{ position: 'relative' }}
          >
            <button
              ref={solutionsButtonRef}
              type="button"
              aria-haspopup="true"
              aria-expanded={solutionsOpen}
              aria-controls="landings-solutions-menu"
              onClick={() => setSolutionsOpen((o) => !o)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '14px',
                fontWeight: isSolucionesFamily ? 700 : 500,
                color: isSolucionesFamily ? 'var(--io-action)' : 'var(--io-text-muted)',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                fontFamily: 'inherit',
                whiteSpace: 'nowrap',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--io-action)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isSolucionesFamily
                  ? 'var(--io-action)'
                  : 'var(--io-text-muted)';
              }}
            >
              Soluciones
              <ChevronDown
                size={14}
                style={{
                  transition: 'transform 150ms ease',
                  transform: solutionsOpen ? 'rotate(180deg)' : 'none',
                }}
              />
            </button>

            {solutionsOpen && (
              <div id="landings-solutions-menu" role="menu" className="landings-header__dropdown">
                {SOLUTIONS_LINKS.map((item) => {
                  const isItemActive = isSolutionItemActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      className="landings-header__dropdown-link"
                      onClick={() => setSolutionsOpen(false)}
                      style={{
                        fontWeight: isItemActive ? 700 : 500,
                        color: isItemActive ? 'var(--io-action)' : 'var(--io-text)',
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {navItems.map((item) => {
            const isActive =
              (isComoTrabajamosPage && item.label === 'Cómo trabajamos') ||
              (isQuienesSomosPage && item.label === 'Quiénes somos');
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
        )}

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
        {!isDiagnosticoPage && (
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
        )}
      </div>

      {/* Mobile Menu - only ever opened below 1024px (hamburger hidden above that) */}
      {mobileOpen && !isDiagnosticoPage && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            padding: '16px 20px',
            backgroundColor: 'white',
            borderTop: '1px solid var(--io-border)',
          }}
        >
          {/* Soluciones — accordion expandible (§10/§11) */}
          <div>
            <button
              type="button"
              aria-expanded={mobileSolutionsOpen}
              aria-controls="landings-mobile-solutions-panel"
              onClick={() => setMobileSolutionsOpen((o) => !o)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                background: 'none',
                border: 'none',
                padding: '8px 0',
                fontFamily: 'inherit',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: isSolucionesFamily ? 700 : 400,
                color: isSolucionesFamily ? 'var(--io-action)' : 'var(--io-text-muted)',
              }}
            >
              Soluciones
              <ChevronDown
                size={16}
                style={{
                  transform: mobileSolutionsOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform 150ms ease',
                }}
              />
            </button>
            {mobileSolutionsOpen && (
              <div
                id="landings-mobile-solutions-panel"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                  paddingLeft: '12px',
                  paddingBottom: '8px',
                }}
              >
                {SOLUTIONS_LINKS.map((item) => {
                  const isItemActive = isSolutionItemActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      style={{
                        fontSize: '13.5px',
                        fontWeight: isItemActive ? 700 : 400,
                        color: isItemActive ? 'var(--io-action)' : 'var(--io-text-muted)',
                        textDecoration: 'none',
                        padding: '7px 0',
                      }}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileSolutionsOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {navItems.map((item) => {
            const isActiveMobile =
              (isComoTrabajamosPage && item.label === 'Cómo trabajamos') ||
              (isQuienesSomosPage && item.label === 'Quiénes somos');
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
          {/* Sin Contacto aquí a propósito (§10): el CTA ya está siempre
              visible en el header, fuera del hamburger, en todas las anchuras. */}
        </div>
      )}
    </header>
  );
}
