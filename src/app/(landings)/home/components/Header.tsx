'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function HomeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Cómo trabajamos', href: '#como-trabajamos' },
    { label: 'Recursos', href: '#recursos' },
    { label: 'Casos', href: '#casos' },
  ];

  return (
    <header
      className="landing-header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'white',
        borderBottom: '1px solid var(--io-border)',
        padding: '12px 20px',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            fontSize: '18px',
            fontWeight: 700,
            color: 'var(--io-text)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            minWidth: '120px',
          }}
        >
          IORANA SEO
        </a>

        {/* Desktop Nav */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--io-text)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--io-action)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--io-text)';
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contacto"
          style={{
            padding: '10px 20px',
            backgroundColor: 'var(--io-action)',
            color: 'white',
            fontSize: '14px',
            fontWeight: 600,
            borderRadius: 'var(--io-radius-md)',
            textDecoration: 'none',
            display: 'inline-block',
            minHeight: '40px',
            display: 'flex',
            alignItems: 'center',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--io-action-hover)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--io-action)';
          }}
        >
          Analizar mi proyecto
        </a>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: 'var(--io-text)',
          }}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            paddingTop: '16px',
            borderTop: '1px solid var(--io-border)',
            marginTop: '12px',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--io-text)',
                textDecoration: 'none',
                padding: '8px 0',
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            style={{
              padding: '10px 16px',
              backgroundColor: 'var(--io-action)',
              color: 'white',
              fontSize: '14px',
              fontWeight: 600,
              borderRadius: 'var(--io-radius-md)',
              textDecoration: 'none',
              display: 'inline-block',
              marginTop: '8px',
              textAlign: 'center',
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            Analizar mi proyecto
          </a>
        </div>
      )}
    </header>
  );
}
