'use client';

import { Activity, LayoutTemplate, SlidersHorizontal } from 'lucide-react';

export default function NoSonAnunciosAislados() {
  const conceptos = [
    {
      icon: Activity,
      titulo: 'Sin un buen tracking, estás a ciegas',
      copy: 'Medimos cada clic, conversión y fuente para saber qué funciona y tomar mejores decisiones.',
    },
    {
      icon: LayoutTemplate,
      titulo: 'Sin una landing optimizada, pierdes oportunidades',
      copy: 'Llevamos el tráfico a páginas diseñadas para convertir, con mensajes claros y formularios eficaces.',
    },
    {
      icon: SlidersHorizontal,
      titulo: 'Sin optimización, el rendimiento cae',
      copy: 'Analizamos datos, probamos variantes y ajustamos continuamente para conseguir mejores resultados.',
    },
  ];

  return (
    <section
      className="no-anuncios-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'var(--io-bg)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              color: 'var(--io-text)',
              lineHeight: 1.2,
              margin: '0 0 16px 0',
            }}
          >
            No son anuncios aislados
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
            Las campañas de verdad funcionan cuando todo está conectado.
          </p>
        </div>

        <div
          className="no-anuncios-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }}
        >
          {conceptos.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.titulo}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '14px',
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    border: '1.5px solid var(--io-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--io-action)',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={23} strokeWidth={1.5} />
                </div>
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: 'var(--io-text)',
                    margin: '0',
                    lineHeight: 1.4,
                    maxWidth: '280px',
                  }}
                >
                  {c.titulo}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--io-text-muted)',
                    margin: '0',
                    lineHeight: 1.6,
                    maxWidth: '280px',
                  }}
                >
                  {c.copy}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
