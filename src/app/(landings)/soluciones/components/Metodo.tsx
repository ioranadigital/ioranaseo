'use client';

import { Search, ListChecks, Zap, TrendingUp } from 'lucide-react';

export default function Metodo() {
  const pasos = [
    {
      numero: '01',
      titulo: 'Analizamos',
      copy: 'Situación, negocio, competencia y datos.',
      icon: Search,
    },
    {
      numero: '02',
      titulo: 'Priorizamos',
      copy: 'Identificamos la oportunidad con mayor impacto.',
      icon: ListChecks,
    },
    {
      numero: '03',
      titulo: 'Implementamos',
      copy: 'Ponemos en marcha las capacidades necesarias.',
      icon: Zap,
    },
    {
      numero: '04',
      titulo: 'Medimos y mejoramos',
      copy: 'Analizamos resultados y decidimos el siguiente paso.',
      icon: TrendingUp,
    },
  ];

  return (
    <section
      className="metodo-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'white',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              color: 'var(--io-text)',
              lineHeight: 1.2,
              margin: '0 0 16px 0',
            }}
          >
            Trabajamos desde el problema, no desde el servicio
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--io-text-muted)',
              lineHeight: 1.6,
              margin: '0',
              maxWidth: '560px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Primero entendemos qué necesita tu negocio. Después decidimos qué
            capacidades tienen más sentido.
          </p>
        </div>

        <div
          className="metodo-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            position: 'relative',
          }}
        >
          <div className="metodo-connector" />

          {pasos.map((paso) => {
            const Icon = paso.icon;
            return (
              <div
                key={paso.numero}
                className="metodo-item"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '10px',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <div
                  className="metodo-numero"
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--io-bg-soft)',
                    border: '2px solid var(--io-action)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '15px',
                    fontWeight: 800,
                    color: 'var(--io-action)',
                  }}
                >
                  {paso.numero}
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                  }}
                >
                  <Icon size={17} strokeWidth={2} style={{ color: 'var(--io-action)', flexShrink: 0 }} />
                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: 800,
                      color: 'var(--io-text)',
                      margin: '0',
                      lineHeight: 1.3,
                    }}
                  >
                    {paso.titulo}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--io-text-muted)',
                    margin: '0',
                    lineHeight: 1.55,
                  }}
                >
                  {paso.copy}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
