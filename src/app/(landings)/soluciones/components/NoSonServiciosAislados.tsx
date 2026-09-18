'use client';

import { ArrowRight } from 'lucide-react';

// Símbolo simplificado por capacidad — mismo lenguaje visual que el Hero y
// las 4 solution cards, pero reducido a su forma esencial (nivel de detalle
// bajo, coherente con la jerarquía Hero > cards > este bloque).
function NodeSymbol({ id }: { id: string }) {
  if (id === 'web') {
    return (
      <div style={{ width: '22px', height: '18px', border: '1.5px solid var(--io-action)', borderRadius: '3px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ height: '4px', backgroundColor: 'var(--io-action)' }} />
      </div>
    );
  }
  if (id === 'visibilidad') {
    return (
      <div
        style={{
          width: '14px',
          height: '14px',
          borderRadius: '50% 50% 50% 0',
          backgroundColor: 'var(--io-action)',
          transform: 'rotate(-45deg)',
        }}
      />
    );
  }
  if (id === 'campanas') {
    return (
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '20px' }}>
        <div style={{ width: '4px', height: '45%', backgroundColor: 'var(--io-action)', opacity: 0.5, borderRadius: '1px' }} />
        <div style={{ width: '4px', height: '70%', backgroundColor: 'var(--io-action)', opacity: 0.75, borderRadius: '1px' }} />
        <div style={{ width: '4px', height: '100%', backgroundColor: 'var(--io-action)', borderRadius: '1px' }} />
      </div>
    );
  }
  // conversion — mini funnel
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
      <div style={{ width: '20px', height: '5px', backgroundColor: 'var(--io-border)', borderRadius: '1px' }} />
      <div style={{ width: '12px', height: '5px', backgroundColor: 'var(--io-action)', borderRadius: '1px' }} />
      <div style={{ width: '6px', height: '5px', backgroundColor: 'var(--io-accent)', borderRadius: '1px' }} />
    </div>
  );
}

export default function NoSonServiciosAislados() {
  const ideas = [
    {
      titulo: 'Una web sin visibilidad recibe pocas oportunidades',
      copy: 'Tener una buena web es solo el principio. También necesitan encontrarte.',
    },
    {
      titulo: 'El tráfico sin conversión se desperdicia',
      copy: 'Conseguir visitas sirve de poco si tu presencia digital no facilita el siguiente paso.',
    },
    {
      titulo: 'Sin medición es difícil saber qué funciona',
      copy: 'Medimos los puntos clave para decidir dónde seguir mejorando.',
    },
  ];

  const piezas = [
    { id: 'web', label: 'Web' },
    { id: 'visibilidad', label: 'Visibilidad' },
    { id: 'campanas', label: 'Campañas' },
    { id: 'conversion', label: 'Conversión' },
  ];

  return (
    <section
      className="no-aislados-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'white',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Título */}
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
            No son servicios aislados
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
            Cada pieza cumple una función. Los mejores resultados aparecen
            cuando trabajan juntas.
          </p>
        </div>

        {/* Tres ideas */}
        <div
          className="no-aislados-ideas"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
            marginBottom: '64px',
          }}
        >
          {ideas.map((idea) => (
            <div key={idea.titulo} style={{ maxWidth: '340px' }}>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--io-text)',
                  margin: '0 0 8px 0',
                  lineHeight: 1.5,
                }}
              >
                {idea.titulo}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--io-text-muted)',
                  margin: '0',
                  lineHeight: 1.6,
                }}
              >
                {idea.copy}
              </p>
            </div>
          ))}
        </div>

        {/* Visual del sistema: Web -> Visibilidad -> Campañas -> Conversión + Medición transversal */}
        <div
          className="sistema-visual"
          style={{
            backgroundColor: 'var(--io-bg-soft)',
            borderRadius: 'var(--io-radius-lg)',
            padding: '40px 32px 28px',
          }}
        >
          <div
            className="sistema-visual-row"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {piezas.map((pieza, index) => {
              return (
                <div
                  key={pieza.label}
                  className="sistema-visual-item"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <div
                    className="sistema-visual-node"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        border: '1.5px solid var(--io-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <NodeSymbol id={pieza.id} />
                    </div>
                    <span
                      style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: 'var(--io-text)',
                      }}
                    >
                      {pieza.label}
                    </span>
                  </div>

                  {index < piezas.length - 1 && (
                    <ArrowRight
                      className="sistema-visual-arrow"
                      size={18}
                      strokeWidth={2}
                      style={{
                        color: 'var(--io-border)',
                        margin: '0 20px',
                        flexShrink: 0,
                        alignSelf: 'flex-start',
                        marginTop: '18px',
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Capa transversal: Medición */}
          <div
            className="sistema-medicion"
            style={{
              marginTop: '28px',
              paddingTop: '14px',
              borderTop: '1.5px dashed var(--io-border)',
              textAlign: 'center',
            }}
          >
            <span
              style={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--io-accent)',
              }}
            >
              ✦ Medición — capa transversal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
