'use client';

export default function OurMethod() {
  const steps = [
    {
      number: '01',
      title: 'Estrategia',
      description: 'Entendemos tu negocio, clientes y objetivos.',
    },
    {
      number: '02',
      title: 'Diseño',
      description: 'Creamos una experiencia clara, atractiva y fácil de utilizar.',
    },
    {
      number: '03',
      title: 'SEO',
      description:
        'Preparamos tu web para que pueda ser encontrada desde el lanzamiento.',
    },
    {
      number: '04',
      title: 'Conversión',
      description:
        'Diseñamos puntos de contacto que transforman visitas en oportunidades.',
    },
  ];

  return (
    <section
      className="method-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'var(--io-bg)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                backgroundColor: 'var(--io-accent)',
              }}
            />
            <h2
              style={{
                fontSize: 'clamp(32px, 5vw, 44px)',
                fontWeight: 700,
                color: 'var(--io-text)',
                lineHeight: 1.2,
                margin: '0',
              }}
            >
              Nuestro método
            </h2>
            <div
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                backgroundColor: 'var(--io-accent)',
              }}
            />
          </div>
          <p
            style={{
              fontSize: '17px',
              color: 'var(--io-text-muted)',
              margin: '0',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.5,
            }}
          >
            Un proceso claro pensado desde el principio para captar mejor.
          </p>
        </div>

        {/* 4-Step Process with connectors */}
        <div
          className="method-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            position: 'relative',
          }}
        >
          {/* Horizontal connector line - stronger */}
          <div
            style={{
              position: 'absolute',
              top: '56px',
              left: '12.5%',
              right: '12.5%',
              height: '2px',
              backgroundColor: 'var(--io-action)',
              zIndex: 0,
              opacity: 0.25,
            }}
            className="hidden lg:block"
          />

          {/* Connector arrows */}
          <div
            style={{
              position: 'absolute',
              top: '46px',
              left: '26%',
              width: '8px',
              height: '8px',
              color: 'var(--io-action)',
              fontSize: '16px',
              zIndex: 1,
              opacity: 0.4,
            }}
            className="hidden lg:flex"
          >
            ▶
          </div>
          <div
            style={{
              position: 'absolute',
              top: '46px',
              left: '51%',
              width: '8px',
              height: '8px',
              color: 'var(--io-action)',
              fontSize: '16px',
              zIndex: 1,
              opacity: 0.4,
            }}
            className="hidden lg:flex"
          >
            ▶
          </div>
          <div
            style={{
              position: 'absolute',
              top: '46px',
              left: '76%',
              width: '8px',
              height: '8px',
              color: 'var(--io-action)',
              fontSize: '16px',
              zIndex: 1,
              opacity: 0.4,
            }}
            className="hidden lg:flex"
          >
            ▶
          </div>

          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                padding: '32px 24px',
                backgroundColor: 'white',
                borderRadius: 'var(--io-radius-md)',
                border: '1.5px solid var(--io-action)',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
                opacity: 0.95,
              }}
            >
              {/* Number - Circle on top or inline */}
              <div
                className="method-number"
                style={{
                  position: 'absolute',
                  top: '-42px',
                  left: '50%',
                  transform: 'translateX(-50%)',
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
                }}
              >
                {step.number}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '19px',
                  fontWeight: 700,
                  color: 'var(--io-text)',
                  margin: '16px 0 12px 0',
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: 'var(--io-text-muted)',
                  margin: '0',
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive */}
      <style>
        {`
          @media (max-width: 1024px) {
            .method-section {
              padding: 60px 20px;
            }
            .method-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 430px) {
            .method-section {
              padding: 32px 20px;
            }
            .method-grid {
              grid-template-columns: 1fr !important;
              gap: 16px !important;
            }
            .method-number {
              top: 16px !important;
              position: static !important;
              transform: none !important;
              width: 40px !important;
              height: 40px !important;
              margin-bottom: 12px !important;
              border: 2px solid var(--io-action) !important;
              font-size: 16px !important;
            }
          }
          @media (max-width: 375px) {
            .method-section {
              padding: 32px 16px;
            }
          }
        `}
      </style>
    </section>
  );
}
