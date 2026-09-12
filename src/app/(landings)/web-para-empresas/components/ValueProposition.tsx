'use client';

export default function ValueProposition() {
  const items = [
    {
      title: 'Que te encuentren',
      description: 'Posicionamiento en buscadores.',
    },
    {
      title: 'Que entiendan',
      description: 'Diseño claro que comunica valor.',
    },
    {
      title: 'Que contacten',
      description: 'CTA optimizados para conversión.',
    },
  ];

  return (
    <section
      id="que-incluye"
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
            Tener una web ya no es suficiente
          </h2>
        </div>

        {/* Visual Flow */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '60px',
          }}
        >
          {items.map((item, index) => (
            <div key={item.title} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  minWidth: '120px',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--io-bg-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderLeft: '3px solid var(--io-action)',
                  }}
                />
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--io-text)',
                    margin: '0',
                    textAlign: 'center',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--io-text-muted)',
                    margin: '0',
                    textAlign: 'center',
                  }}
                >
                  {item.description}
                </p>
              </div>
              {index < items.length - 1 && (
                <div
                  style={{
                    fontSize: '20px',
                    color: 'var(--io-border)',
                    fontWeight: 300,
                    marginBottom: '40px',
                  }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
