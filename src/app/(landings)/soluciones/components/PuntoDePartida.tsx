'use client';

import { Monitor, Search, Megaphone, Target } from 'lucide-react';

export default function PuntoDePartida() {
  const situaciones = [
    {
      numero: '01',
      texto: 'Necesitas una base mejor',
      solucion: 'Web',
      icon: Monitor,
    },
    {
      numero: '02',
      texto: 'Necesitas que te encuentren',
      solucion: 'Visibilidad',
      icon: Search,
    },
    {
      numero: '03',
      texto: 'Necesitas atraer demanda',
      solucion: 'Campañas',
      icon: Megaphone,
    },
    {
      numero: '04',
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
                className="punto-partida-item"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '10px',
                  padding: '24px 16px',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: 'var(--io-text-muted)',
                  }}
                >
                  {s.numero}
                </span>
                <div
                  className="punto-partida-icon"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--io-bg-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--io-action)',
                    position: 'relative',
                    zIndex: 2,
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
