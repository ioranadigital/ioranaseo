'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import ContactoForm from './components/ContactoForm';

export default function ContactoClient() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ backgroundColor: 'white', color: 'var(--io-text)' }}>
      {/* Main Content Section */}
      <section
        style={{
          paddingTop: 'calc(60px + var(--io-header-h, 64px))',
          paddingBottom: '80px',
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
      >
        <style>{`
          @media (max-width: 1023px) {
            .contacto-main-grid {
              display: flex !important;
              flex-direction: column !important;
              gap: 40px !important;
            }
          }
        `}</style>

        <div
          className="contacto-main-grid"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: '80px',
            alignItems: 'start',
          }}
        >
          {/* LEFT: Editorial */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {/* Eyebrow */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: 'var(--io-text-muted)',
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '2px',
                  backgroundColor: 'var(--io-accent)',
                }}
              />
              CONTACTO
            </div>

            {/* H1 + Copy */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h1
                style={{
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  margin: 0,
                  letterSpacing: '-0.01em',
                }}
              >
                Hablemos de tu proyecto.
              </h1>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  fontSize: '16px',
                  lineHeight: 1.65,
                  color: 'var(--io-text-muted)',
                }}
              >
                <p style={{ margin: 0 }}>
                  Si tienes un proyecto, una consulta o quieres mejorar tu presencia digital, cuéntanos brevemente qué necesitas.
                </p>
                <p style={{ margin: 0 }}>
                  No necesitas saber exactamente qué servicio contratar. Entender tu situación y tus objetivos es suficiente para empezar.
                </p>
              </div>
            </div>

            {/* Benefits List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--io-text-muted)',
                    marginBottom: '16px',
                  }}
                >
                  Puedes contactarnos para
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Crear o mejorar tu web.',
                  'Ganar visibilidad en buscadores y Maps.',
                  'Lanzar o mejorar campañas.',
                  'Mejorar la conversión de tu presencia digital.',
                  'Plantearnos una colaboración o resolver una duda.',
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-start',
                      fontSize: '15px',
                      lineHeight: 1.5,
                      color: 'var(--io-text)',
                    }}
                  >
                    <CheckCircle2
                      size={20}
                      strokeWidth={1.5}
                      style={{
                        color: 'var(--io-action)',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                height: '1px',
                backgroundColor: 'var(--io-border)',
                margin: '12px 0',
              }}
            />

            {/* Secondary CTA */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  margin: 0,
                  color: 'var(--io-text)',
                }}
              >
                ¿No tienes claro por dónde empezar?
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: 'var(--io-text-muted)',
                  margin: 0,
                  marginBottom: '8px',
                }}
              >
                Si sabes que necesitas mejorar tu presencia digital pero no tienes claro qué priorizar, podemos empezar analizando tu situación.
              </p>
              <Link
                href="/diagnostico/"
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: 'var(--io-action)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--io-action-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--io-action)';
                }}
              >
                Analizar mi proyecto →
              </Link>
            </div>
          </div>

          {/* RIGHT: Form Card */}
          <ContactoForm onSubmitted={() => setSubmitted(true)} submitted={submitted} />
        </div>
      </section>
    </div>
  );
}
