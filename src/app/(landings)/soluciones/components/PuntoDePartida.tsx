'use client';

import { Monitor, Search, Megaphone, Target } from 'lucide-react';

export default function PuntoDePartida() {
  const situaciones = [
    {
      texto: 'Necesitas una base mejor',
      solucion: 'Web',
      icon: Monitor,
    },
    {
      texto: 'Necesitas que te encuentren',
      solucion: 'Visibilidad',
      icon: Search,
    },
    {
      texto: 'Necesitas atraer demanda',
      solucion: 'Campañas',
      icon: Megaphone,
    },
    {
      texto: 'Necesitas convertir mejor',
      solucion: 'Conversión',
      icon: Target,
    },
  ];

  return (
    <section
      className="punto-partida-section"
      style={{
        padding: '60px 20px',
        backgroundColor: 'white',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: 'clamp(26px, 4vw, 36px)',
              fontWeight: 700,
              color: 'var(--io-text)',
              lineHeight: 1.2,
              margin: '0 0 16px 0',
            }}
          >
            Cada negocio tiene un punto de partida diferente
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--io-text-muted)',
              lineHeight: 1.6,
              margin: '0',
              maxWidth: '620px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Algunos necesitan una nueva web. Otros ya tienen tráfico pero no
            convierten. Y otros necesitan ganar visibilidad o acelerar la
            captación con campañas.
          </p>
        </div>

        <div
          className="punto-partida-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }}
        >
          {situaciones.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.solucion}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '12px',
                  padding: '24px 16px',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--io-radius-md)',
                    backgroundColor: 'var(--io-bg-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--io-action)',
                  }}
                >
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--io-text-muted)',
                    margin: '0',
                    lineHeight: 1.4,
                  }}
                >
                  {s.texto}
                </p>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'var(--io-accent)',
                  }}
                >
                  → {s.solucion}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
