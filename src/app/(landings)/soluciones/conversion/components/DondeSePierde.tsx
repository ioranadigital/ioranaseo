'use client';

import { Route, MessageSquareText, ClipboardList, ChartNoAxesColumnIncreasing } from 'lucide-react';

export default function DondeSePierde() {
  const problemas = [
    {
      icon: Route,
      titulo: 'Experiencia confusa',
      copy: 'Los usuarios no encuentran lo que buscan y abandonan antes de dar el siguiente paso.',
    },
    {
      icon: MessageSquareText,
      titulo: 'Propuesta poco clara',
      copy: 'El mensaje no transmite suficiente valor o no genera la confianza necesaria para avanzar.',
    },
    {
      icon: ClipboardList,
      titulo: 'Formularios con fricción',
      copy: 'Procesos largos o complejos hacen que algunos usuarios abandonen antes de contactar.',
    },
    {
      icon: ChartNoAxesColumnIncreasing,
      titulo: 'Falta de medición',
      copy: 'No sabes qué funciona ni dónde estás perdiendo oportunidades.',
    },
  ];

  return (
    <section
      className="donde-pierde-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'white',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
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
            ¿Dónde suele perderse la conversión?
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
            Identificamos los problemas más habituales para trabajar sobre
            la oportunidad adecuada.
          </p>
        </div>

        <div
          className="donde-pierde-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
        >
          {problemas.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.titulo}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--io-bg-soft)',
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
                    lineHeight: 1.35,
                  }}
                >
                  {p.titulo}
                </h3>
                <p
                  style={{
                    fontSize: '13.5px',
                    color: 'var(--io-text-muted)',
                    margin: '0',
                    lineHeight: 1.6,
                  }}
                >
                  {p.copy}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
