'use client';

import { Quote } from 'lucide-react';

export default function PrincipioDeTrabajo() {
  return (
    <section
      className="ct-principio-section"
      style={{
        padding: '60px 20px',
        backgroundColor: 'var(--io-bg)',
      }}
    >
      <div
        style={{
          maxWidth: '820px',
          margin: '0 auto',
          backgroundColor: 'var(--io-bg-soft)',
          borderRadius: 'var(--io-radius-lg)',
          padding: '48px 40px',
          textAlign: 'center',
        }}
      >
        <Quote
          size={28}
          strokeWidth={1.5}
          style={{ color: 'var(--io-action)', marginBottom: '20px' }}
        />
        <p
          className="ct-principio-texto"
          style={{
            fontSize: '22px',
            fontWeight: 600,
            color: 'var(--io-text)',
            lineHeight: 1.5,
            margin: '0',
            letterSpacing: '-0.01em',
          }}
        >
          No creemos en soluciones genéricas.
          <br />
          Creemos en entender, priorizar y ejecutar lo que realmente
          necesita tu negocio.
        </p>
      </div>
    </section>
  );
}
