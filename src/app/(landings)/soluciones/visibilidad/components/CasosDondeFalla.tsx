'use client';

import { EyeOff, ChartNoAxesColumnIncreasing, MapPin } from 'lucide-react';

export default function CasosDondeFalla() {
  const casos = [
    {
      icon: EyeOff,
      titulo: 'No apareces para búsquedas importantes',
      copy: 'Tu negocio no está posicionándose cuando tus clientes buscan lo que ofreces.',
    },
    {
      icon: ChartNoAxesColumnIncreasing,
      titulo: 'Recibes tráfico poco cualificado',
      copy: 'Consigues visitas, pero no corresponden a personas con intención real de convertirse en clientes.',
    },
    {
      icon: MapPin,
      titulo: 'Tu presencia local no destaca',
      copy: 'Otros negocios aparecen antes en Google Maps y búsquedas cercanas.',
    },
  ];

  return (
    <section
      className="casos-falla-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'white',
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
            Casos donde suele fallar la visibilidad
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
            Identificamos qué está frenando tu presencia para trabajar sobre
            el problema adecuado.
          </p>
        </div>

        <div
          className="casos-falla-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }}
        >
          {casos.map((caso) => {
            const Icon = caso.icon;
            return (
              <div
                key={caso.titulo}
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
                    maxWidth: '260px',
                  }}
                >
                  {caso.titulo}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--io-text-muted)',
                    margin: '0',
                    lineHeight: 1.6,
                    maxWidth: '260px',
                  }}
                >
                  {caso.copy}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
