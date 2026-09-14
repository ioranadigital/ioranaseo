'use client';

import { Handshake, Network, ListChecks, Target } from 'lucide-react';

export default function CuatroAtributos() {
  const atributos = [
    {
      icon: Handshake,
      titulo: 'Cercanía y compromiso',
      copy: 'Tu proyecto también es el nuestro.',
    },
    {
      icon: Network,
      titulo: 'Experiencia multidisciplinar',
      copy: 'Conectamos distintas capacidades según lo que necesite tu negocio.',
    },
    {
      icon: ListChecks,
      titulo: 'Método y orden',
      copy: 'Pasamos de la estrategia a la acción con un proceso claro.',
    },
    {
      icon: Target,
      titulo: 'Resultados a largo plazo',
      copy: 'Medimos, aprendemos y mejoramos continuamente.',
    },
  ];

  return (
    <section
      className="ct-atributos-section"
      style={{
        padding: '60px 20px',
        backgroundColor: 'white',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          className="ct-atributos-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
        >
          {atributos.map((a) => {
            const Icon = a.icon;
            return (
              <div
                key={a.titulo}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--io-radius-md)',
                    backgroundColor: 'var(--io-bg-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--io-action)',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: 'var(--io-text)',
                    margin: '0',
                    lineHeight: 1.3,
                  }}
                >
                  {a.titulo}
                </h3>
                <p
                  style={{
                    fontSize: '13.5px',
                    color: 'var(--io-text-muted)',
                    margin: '0',
                    lineHeight: 1.6,
                  }}
                >
                  {a.copy}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
