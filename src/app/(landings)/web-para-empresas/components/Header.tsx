'use client';

import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="landing-header"
      style={{
        padding: '14px 20px',
        backgroundColor: 'white',
        borderBottom: '1px solid var(--io-border)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: '18px',
            fontWeight: 800,
            color: 'var(--io-text)',
            letterSpacing: '-0.01em',
          }}
        >
          IORANA SEO
        </div>

        {/* Desktop: Nav + CTA */}
        <nav
          className="desktop-nav"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          <a href="#que-incluye" style={{ fontSize: '14px', color: 'var(--io-text-muted)', textDecoration: 'none' }}>
            Qué incluye
          </a>
          <a href="#metodo" style={{ fontSize: '14px', color: 'var(--io-text-muted)', textDecoration: 'none' }}>
            Cómo trabajamos
          </a>
          <a href="#precios" style={{ fontSize: '14px', color: 'var(--io-text-muted)', textDecoration: 'none' }}>
            Precios
          </a>
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: 'var(--io-action)',
              color: 'white',
              fontSize: '14px',
              fontWeight: 600,
              border: 'none',
              borderRadius: 'var(--io-radius-md)',
              cursor: 'pointer',
            }}
          >
            Analizar
          </button>
        </nav>

        {/* Mobile: Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            marginRight: '-8px',
          }}
          aria-label="Menu"
        >
          <div style={{ width: '24px', height: '2px', backgroundColor: 'var(--io-text)' }} />
          <div style={{ width: '24px', height: '2px', backgroundColor: 'var(--io-text)' }} />
          <div style={{ width: '24px', height: '2px', backgroundColor: 'var(--io-text)' }} />
        </button>
      </div>

      {/* Mobile: Dropdown Menu */}
      {menuOpen && (
        <nav
          className="mobile-menu"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginTop: '16px',
            paddingTop: '16px',
            borderTop: '1px solid var(--io-border)',
          }}
        >
          <a
            href="#que-incluye"
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: '15px',
              color: 'var(--io-text)',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            Qué incluye
          </a>
          <a
            href="#metodo"
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: '15px',
              color: 'var(--io-text)',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            Cómo trabajamos
          </a>
          <a
            href="#precios"
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: '15px',
              color: 'var(--io-text)',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            Precios
          </a>
          <button
            style={{
              padding: '12px 20px',
              backgroundColor: 'var(--io-action)',
              color: 'white',
              fontSize: '15px',
              fontWeight: 600,
              border: 'none',
              borderRadius: 'var(--io-radius-md)',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Analizar mi proyecto
          </button>
        </nav>
      )}

      {/* Responsive Styles */}
      <style>
        {`
          @media (min-width: 1025px) {
            .landing-header {
              padding: 16px 20px !important;
            }
            .desktop-nav {
              display: flex !important;
            }
            .mobile-menu-btn {
              display: none !important;
            }
            .mobile-menu {
              display: none !important;
            }
          }
          @media (max-width: 375px) {
            .landing-header {
              padding: 12px 16px !important;
            }
            .mobile-menu-btn {
              padding: 6px !important;
              margin-right: -6px !important;
            }
            .mobile-menu-btn > div {
              width: 22px !important;
            }
            .mobile-menu {
              gap: 12px !important;
              margin-top: 12px !important;
              padding-top: 12px !important;
            }
            .mobile-menu a,
            .mobile-menu button {
              font-size: 14px !important;
              padding: 10px 12px !important;
            }
          }
        `}
      </style>
    </header>
  );
}
