'use client';

export default function VisibilityToResults() {
  return (
    <section
      className="visibility-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'white',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 44px)',
              fontWeight: 700,
              color: 'var(--io-text)',
              lineHeight: 1.2,
              margin: '0 0 24px 0',
            }}
          >
            De la visibilidad a los resultados
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--io-text-muted)',
              margin: '0',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Una web que trabaja para tu negocio en cada etapa del proceso.
          </p>
        </div>

        {/* 3-Step Flow */}
        <div
          className="steps-flow"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          {/* Step 1 */}
          <div
            style={{
              flex: '1 1 280px',
              maxWidth: '340px',
            }}
          >
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: 'var(--io-text)',
                margin: '0 0 12px 0',
                lineHeight: 1.2,
              }}
            >
              Que te encuentren
            </h3>
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.6,
                color: 'var(--io-text-muted)',
                margin: '0',
              }}
            >
              Preparamos tu web para aparecer cuando tus clientes buscan servicios
              como los tuyos.
            </p>
          </div>

          {/* Arrow */}
          <div
            className="visibility-arrow"
            style={{
              fontSize: '28px',
              color: 'var(--io-action)',
              flex: '0 0 auto',
              display: 'flex',
              alignItems: 'center',
              marginTop: '20px',
              opacity: 0.6,
            }}
          >
            →
          </div>

          {/* Step 2 */}
          <div
            style={{
              flex: '1 1 280px',
              maxWidth: '340px',
            }}
          >
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: 'var(--io-text)',
                margin: '0 0 12px 0',
                lineHeight: 1.2,
              }}
            >
              Que entiendan lo que haces
            </h3>
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.6,
                color: 'var(--io-text-muted)',
                margin: '0',
              }}
            >
              Organizamos diseño y contenido para comunicar claramente qué haces
              y por qué elegirte.
            </p>
          </div>

          {/* Arrow */}
          <div
            className="visibility-arrow"
            style={{
              fontSize: '28px',
              color: 'var(--io-action)',
              flex: '0 0 auto',
              display: 'flex',
              alignItems: 'center',
              marginTop: '20px',
              opacity: 0.6,
            }}
          >
            →
          </div>

          {/* Step 3 */}
          <div
            style={{
              flex: '1 1 280px',
              maxWidth: '340px',
            }}
          >
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: 'var(--io-text)',
                margin: '0 0 12px 0',
                lineHeight: 1.2,
              }}
            >
              Que contacten
            </h3>
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.6,
                color: 'var(--io-text-muted)',
                margin: '0',
              }}
            >
              Facilitamos llamadas, formularios y acciones para convertir visitas
              en oportunidades.
            </p>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>
        {`
          @media (max-width: 1024px) {
            .visibility-section {
              padding: 60px 20px;
            }
          }
          @media (max-width: 768px) {
            .visibility-section {
              padding: 40px 20px;
            }
            .steps-flow {
              gap: 12px !important;
            }
          }
          @media (max-width: 430px) {
            .visibility-section {
              padding: 32px 20px;
            }
          }
          @media (max-width: 375px) {
            .visibility-section {
              padding: 32px 16px;
            }
          }
        `}
      </style>
    </section>
  );
}
