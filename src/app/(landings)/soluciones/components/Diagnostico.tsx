'use client';

import Link from 'next/link';
import { Monitor, Search, Megaphone, Target, HelpCircle } from 'lucide-react';

export default function Diagnostico() {
  const situaciones = [
    {
      problema: 'No tengo una buena web',
      solucion: 'Web de Captación',
      href: '/web-para-empresas',
      icon: Monitor,
    },
    {
      problema: 'Mi negocio no aparece cuando lo buscan',
      solucion: 'Visibilidad',
      href: '/soluciones/visibilidad',
      icon: Search,
    },
    {
      problema: 'Necesito conseguir clientes más rápido',
      solucion: 'Campañas',
      href: '/soluciones/campanas',
      icon: Megaphone,
    },
    {
      problema: 'Tengo tráfico pero pocos contactos',
      solucion: 'Conversión',
      href: '/soluciones/conversion',
      icon: Target,
    },
  ];

  return (
    <section
      className="diagnostico-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'var(--io-bg)',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Título */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              color: 'var(--io-text)',
              lineHeight: 1.2,
              margin: '0 0 16px 0',
            }}
          >
            ¿Por dónde debería empezar?
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--io-text-muted)',
              margin: '0',
            }}
          >
            Identifica qué está frenando ahora mismo tu captación.
          </p>
        </div>

        {/* 4 opciones compactas en 2x2 */}
        <div
          className="diagnostico-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginBottom: '20px',
          }}
        >
          {situaciones.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.solucion}
                href={s.href}
                className="diagnostico-item"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '18px 20px',
                  backgroundColor: 'white',
                  border: '1.5px solid var(--io-border)',
                  borderRadius: 'var(--io-radius-md)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--io-radius-md)',
                    backgroundColor: 'var(--io-bg-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--io-action)',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={19} strokeWidth={1.5} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: '14px',
                      color: 'var(--io-text-muted)',
                      lineHeight: 1.4,
                      marginBottom: '2px',
                    }}
                  >
                    {s.problema}
                  </div>
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 700,
                      color: 'var(--io-text)',
                    }}
                  >
                    → {s.solucion}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Opción destacada: No sé cuál es el problema */}
        <div
          className="diagnostico-featured"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            padding: '28px 32px',
            backgroundColor: 'var(--io-action)',
            borderRadius: 'var(--io-radius-lg)',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                flexShrink: 0,
              }}
            >
              <HelpCircle size={24} strokeWidth={1.5} />
            </div>
            <div>
              <div style={{ fontSize: '17px', fontWeight: 700, color: 'white' }}>
                No sé cuál es el problema
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)' }}>
                Te ayudamos a identificarlo.
              </div>
            </div>
          </div>

          <Link
            href="#analisis"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 22px',
              backgroundColor: 'white',
              color: 'var(--io-action)',
              fontSize: '14px',
              fontWeight: 700,
              borderRadius: 'var(--io-radius-md)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            Analizar mi proyecto
          </Link>
        </div>
      </div>
    </section>
  );
}
