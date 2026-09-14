'use client';

import Link from 'next/link';
import { Monitor, Search, Megaphone, Target } from 'lucide-react';

export default function UnEnfoqueIntegral() {
  const capacidades = [
    {
      id: 'web',
      icon: Monitor,
      titulo: 'Web',
      copy: 'Una base preparada para captar.',
      href: '/web-para-empresas',
    },
    {
      id: 'visibilidad',
      icon: Search,
      titulo: 'Visibilidad',
      copy: 'Para que te encuentren.',
      href: '/soluciones/visibilidad',
    },
    {
      id: 'campanas',
      icon: Megaphone,
      titulo: 'Campañas',
      copy: 'Para generar demanda.',
      href: '/soluciones/campanas',
    },
    {
      id: 'conversion',
      icon: Target,
      titulo: 'Conversión',
      copy: 'Para transformar visitas en oportunidades.',
      href: '/soluciones/conversion',
    },
  ];

  return (
    <section
      className="ct-enfoque-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'var(--io-bg)',
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
            Un enfoque integral
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--io-text-muted)',
              lineHeight: 1.6,
              margin: '0',
              maxWidth: '580px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Conectamos estrategia, web, visibilidad, campañas y conversión
            para que todo trabaje en la misma dirección.
          </p>
        </div>

        <div
          className="ct-enfoque-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            marginBottom: '32px',
          }}
        >
          {capacidades.map((c) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.id}
                href={c.href}
                className="ct-enfoque-card"
                style={{
                  backgroundColor: 'white',
                  border: '1.5px solid var(--io-border)',
                  borderRadius: 'var(--io-radius-lg)',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s',
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
                    fontSize: '17px',
                    fontWeight: 700,
                    color: 'var(--io-text)',
                    margin: '0',
                  }}
                >
                  {c.titulo}
                </h3>
                <p
                  style={{
                    fontSize: '13.5px',
                    color: 'var(--io-text-muted)',
                    margin: '0',
                    lineHeight: 1.5,
                  }}
                >
                  {c.copy}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Resultado combinado — no secuencial, todas convergen aquí */}
        <div
          style={{
            textAlign: 'center',
            paddingTop: '8px',
          }}
        >
          <span
            style={{
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--io-accent)',
              letterSpacing: '0.02em',
            }}
          >
            ✦ Más oportunidades para tu negocio
          </span>
        </div>
      </div>
    </section>
  );
}
