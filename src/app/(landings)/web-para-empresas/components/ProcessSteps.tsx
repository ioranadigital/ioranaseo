'use client';

export default function ProcessSteps() {
  const steps = [
    {
      number: '01',
      title: 'Análisis',
      description: 'Entendemos tu negocio.',
    },
    {
      number: '02',
      title: 'Arquitectura',
      description: 'Planificamos la estructura.',
    },
    {
      number: '03',
      title: 'Diseño y desarrollo',
      description: 'Creamos tu web.',
    },
    {
      number: '04',
      title: 'SEO + Medición',
      description: 'Optimizamos y medimos.',
    },
    {
      number: '05',
      title: 'Lanzamiento',
      description: 'Publicación en producción.',
    },
  ];

  return (
    <section
      style={{
        padding: '80px 20px',
        backgroundColor: 'var(--io-bg)',
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
            Cómo trabajamos
          </h2>
          <p
            style={{
              fontSize: '14px',
              color: 'var(--io-text-muted)',
              margin: '0',
            }}
          >
            Plazo habitual: 4–6 semanas
          </p>
        </div>

        {/* Process Timeline - Horizontal */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '20px',
            position: 'relative',
            paddingTop: '40px',
          }}
        >
          {/* Connector Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '0',
              right: '0',
              height: '2px',
              backgroundColor: 'var(--io-border)',
              zIndex: 0,
            }}
            className="hidden md:block"
          />

          {/* Steps */}
          {steps.map((step, index) => (
            <div
              key={step.number}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {/* Number Circle */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  border: '3px solid var(--io-action)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--io-action)',
                  marginBottom: '16px',
                }}
              >
                {step.number.substring(0, 1)}
              </div>

              {/* Title and Description */}
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'var(--io-text)',
                  margin: '0 0 8px 0',
                  textAlign: 'center',
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: '13px',
                  lineHeight: 1.5,
                  color: 'var(--io-text-muted)',
                  margin: '0',
                  textAlign: 'center',
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <style>
          {`
            @media (max-width: 768px) {
              section > div > div:last-child {
                flex-direction: column;
                gap: 24px;
              }
              section > div > div:last-child::before {
                content: '';
                position: absolute;
                left: 24px;
                top: 48px;
                bottom: 0;
                width: 2px;
                background: var(--io-border);
              }
            }
          `}
        </style>
      </div>
    </section>
  );
}
