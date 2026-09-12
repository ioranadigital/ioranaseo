'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LandingsHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Qué incluye', href: '#que-incluye' },
    { label: 'Cómo trabajamos', href: '#como-trabajamos' },
    { label: 'Precios', href: '#precios' },
  ];

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

        {/* Desktop Nav - Solo visible en desktop */}
        <nav
          style={{
            display: 'flex',
            gap: '32px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          className="hidden md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                fontSize: '14px',
                fontWeight: 500,
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

        {/* CTA Button - Desktop */}
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
          className="hidden sm:block"
        >
          Analizar mi proyecto
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '22px',
            color: 'var(--io-text)',
            padding: '8px',
            flexShrink: 0,
          }}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
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
          className="md:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                fontSize: '14px',
                color: 'var(--io-text-muted)',
                textDecoration: 'none',
                padding: '8px 0',
              }}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
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
