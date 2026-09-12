'use client';

export default function Methodology() {
  const layers = [
    {
      title: 'Estrategia',
      description: 'Análisis de tu negocio y oportunidades.',
    },
    {
      title: 'Diseño',
      description: 'Interfaz moderna y responsiva.',
    },
    {
      title: 'SEO',
      description: 'Optimización técnica y en página.',
    },
    {
      title: 'Conversión',
      description: 'CTA y medición de resultados.',
    },
  ];

  return (
    <section
      id="como-trabajamos"
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
            No diseñamos primero y pensamos en el marketing después
          </h2>
        </div>

        {/* 4-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
        >
          {layers.map((layer, index) => (
            <div
              key={layer.title}
              style={{
                padding: '32px 24px',
                backgroundColor: 'white',
                borderRadius: 'var(--io-radius-md)',
                border: '1px solid var(--io-border)',
                textAlign: 'center',
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  color: 'var(--io-action)',
                  marginBottom: '16px',
                }}
              >
                {index + 1}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--io-text)',
                  margin: '0 0 12px 0',
                }}
              >
                {layer.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: 'var(--io-text-muted)',
                  margin: '0',
                }}
              >
                {layer.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 1024px) {
            section {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 768px) {
            section {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </section>
  );
}
