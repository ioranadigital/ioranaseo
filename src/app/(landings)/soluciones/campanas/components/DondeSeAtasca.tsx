'use client';

import { ChartNoAxesColumnIncreasing, MousePointerClick, TriangleAlert, Gauge } from 'lucide-react';

export default function DondeSeAtasca() {
  const situaciones = [
    {
      icon: ChartNoAxesColumnIncreasing,
      titulo: 'Poco tráfico',
      copy: 'Las campañas no generan suficiente volumen de visitas cualificadas.',
    },
    {
      icon: MousePointerClick,
      titulo: 'Clics sin contacto',
      copy: 'Recibes visitas, pero no se convierten en leads ni ventas.',
    },
    {
      icon: TriangleAlert,
      titulo: 'Leads poco cualificados',
      copy: 'Llegan contactos, pero no tienen el perfil adecuado o todavía no están preparados para comprar.',
    },
    {
      icon: Gauge,
      titulo: 'Falta de medición',
      copy: 'No sabes qué campañas funcionan ni cuál está generando oportunidades reales.',
    },
  ];

  return (
    <section
      className="donde-atasca-section"
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
            ¿Dónde suele atascarse la captación?
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
            Identificamos el problema para activar la solución adecuada.
          </p>
        </div>

        <div
          className="donde-atasca-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
        >
          {situaciones.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.titulo}
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
                  {s.titulo}
                </h3>
                <p
                  style={{
                    fontSize: '13.5px',
                    color: 'var(--io-text-muted)',
                    margin: '0',
                    lineHeight: 1.6,
                  }}
                >
                  {s.copy}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
