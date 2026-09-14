'use client';

import { Users, Target, Zap, TrendingUp } from 'lucide-react';

export default function ComoTrabajamosContigo() {
  const pasos = [
    {
      numero: '01',
      titulo: 'Analizamos',
      copy: 'Nos reunimos contigo para entender tu negocio, tus objetivos y los principales retos.',
      icon: Users,
    },
    {
      numero: '02',
      titulo: 'Priorizamos',
      copy: 'Identificamos las oportunidades con mayor impacto y definimos un plan de acción realista.',
      icon: Target,
    },
    {
      numero: '03',
      titulo: 'Implementamos',
      copy: 'Ponemos en marcha las soluciones necesarias, coordinando todos los elementos de forma ágil y ordenada.',
      icon: Zap,
    },
    {
      numero: '04',
      titulo: 'Medimos y mejoramos',
      copy: 'Analizamos resultados, ajustamos la estrategia y seguimos optimizando para conseguir un crecimiento continuo.',
      icon: TrendingUp,
    },
  ];

  return (
    <section
      className="ct-timeline-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'white',
      }}
    >
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
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
            Cómo trabajamos contigo
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--io-text-muted)',
              lineHeight: 1.6,
              margin: '0',
            }}
          >
            Un proceso colaborativo, claro y orientado a resultados.
          </p>
        </div>

        <div
          className="ct-timeline"
          style={{ position: 'relative' }}
        >
          {/* Línea vertical continua */}
          <div
            className="ct-timeline-line"
            style={{
              position: 'absolute',
              top: '28px',
              bottom: '28px',
              left: '27px',
              width: '2px',
              backgroundColor: 'var(--io-border)',
            }}
          />

          {pasos.map((paso, index) => {
            const Icon = paso.icon;
            return (
              <div
                key={paso.numero}
                className="ct-timeline-item"
                style={{
                  display: 'flex',
                  gap: '24px',
                  marginBottom: index < pasos.length - 1 ? '48px' : '0',
                  position: 'relative',
                }}
              >
                <div
                  className="ct-timeline-numero"
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    border: '2px solid var(--io-action)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 1,
                    color: 'var(--io-action)',
                  }}
                >
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                <div style={{ paddingTop: '8px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '10px',
                      marginBottom: '6px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: 'var(--io-accent)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {paso.numero}
                    </span>
                    <h3
                      style={{
                        fontSize: '19px',
                        fontWeight: 700,
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
                      fontSize: '14.5px',
                      color: 'var(--io-text-muted)',
                      margin: '0',
                      lineHeight: 1.6,
                      maxWidth: '520px',
                    }}
                  >
                    {paso.copy}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
