'use client';

import Link from 'next/link';

export default function CTAFinal() {
  return (
    <section
      className="ct-cta-final-section"
      style={{
        padding: '60px 20px',
        backgroundColor: 'var(--io-bg)',
      }}
    >
      <div
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          backgroundColor: 'var(--io-bg-soft)',
          borderRadius: 'var(--io-radius-lg)',
          padding: '48px 40px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(24px, 3.4vw, 32px)',
            fontWeight: 700,
            color: 'var(--io-text)',
            lineHeight: 1.25,
            margin: '0 0 14px 0',
          }}
        >
          ¿Listo para dar el siguiente paso?
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: 'var(--io-text-muted)',
            lineHeight: 1.6,
            margin: '0 0 28px 0',
          }}
        >
          Cuéntanos tu proyecto y te ayudaremos a identificar dónde existe
          la mejor oportunidad para mejorar tus resultados.
        </p>

        <Link
          href="#contacto"
          className="ct-cta-final-button"
          style={{
            display: 'inline-block',
            padding: '14px 32px',
            backgroundColor: 'var(--io-action)',
            color: 'white',
            fontSize: '16px',
            fontWeight: 600,
            borderRadius: 'var(--io-radius-md)',
            textDecoration: 'none',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--io-action-hover)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--io-action)';
          }}
        >
          Analizar mi proyecto →
        </Link>
      </div>
    </section>
  );
}
