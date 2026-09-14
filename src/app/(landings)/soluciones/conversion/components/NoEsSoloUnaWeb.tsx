'use client';

import { LayoutDashboard, MessageSquareText, ChartNoAxesColumnIncreasing } from 'lucide-react';

export default function NoEsSoloUnaWeb() {
  const conceptos = [
    {
      icon: LayoutDashboard,
      titulo: 'Sin una buena experiencia, los usuarios se van',
      copy: 'Priorizamos webs claras, rápidas y orientadas a la acción, para que los visitantes encuentren lo que buscan y den el siguiente paso.',
    },
    {
      icon: MessageSquareText,
      titulo: 'Sin una propuesta de valor clara, no hay conversiones',
      copy: 'Te ayudamos a comunicar lo que te hace diferente, con mensajes simples y orientados a resultados.',
    },
    {
      icon: ChartNoAxesColumnIncreasing,
      titulo: 'Sin medición, es imposible mejorar',
      copy: 'Configuramos el tracking necesario para analizar qué funciona y optimizar de forma continua.',
    },
  ];

  return (
    <section
      className="sistema-conversion-section"
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
            No es solo una web, es un sistema de conversión
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
            Todos los elementos de tu web deben trabajar juntos para
            convertir más.
          </p>
        </div>

        <div
          className="sistema-conversion-grid"
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
