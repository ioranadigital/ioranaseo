'use client';

import Link from 'next/link';
import { Monitor, Search, Megaphone, Target, ArrowRight } from 'lucide-react';

export default function LasCuatroSoluciones() {
  const soluciones = [
    {
      id: 'web',
      icon: Monitor,
      titulo: 'Una base preparada para captar',
      copy: 'Diseñamos webs y landing pages claras, rápidas y orientadas a convertir visitas en oportunidades.',
      items: ['Web corporativa', 'Landing pages', 'Responsive', 'SEO inicial', 'Analytics'],
      cta: 'Ver Web de Captación →',
      href: '/web-para-empresas',
    },
    {
      id: 'visibilidad',
      icon: Search,
      titulo: 'Aparece cuando tus clientes te buscan',
      copy: 'Mejoramos tu presencia en Google para que más personas encuentren tu negocio cuando necesitan lo que ofreces.',
      items: ['SEO', 'SEO Local', 'Google Maps', 'Contenidos', 'Optimización técnica'],
      cta: 'Ver soluciones de visibilidad →',
      href: '/soluciones/visibilidad',
    },
    {
      id: 'campanas',
      icon: Megaphone,
      titulo: 'Atrae demanda cuando necesitas acelerar',
      copy: 'Creamos y optimizamos campañas para llegar a personas con intención real de convertirse en clientes.',
      items: ['Google Ads', 'Meta Ads', 'Landing pages', 'Tracking', 'Optimización'],
      cta: 'Ver campañas →',
      href: '/soluciones/campanas',
    },
    {
      id: 'conversion',
      icon: Target,
      titulo: 'Convierte más visitas en oportunidades',
      copy: 'Analizamos cómo interactúan los usuarios con tu presencia digital y mejoramos los puntos que frenan la conversión.',
      items: ['Analytics', 'Tracking', 'CRO', 'Formularios', 'Optimización continua'],
      cta: 'Ver conversión →',
      href: '/soluciones/conversion',
    },
  ];

  return (
    <section
      className="cuatro-soluciones-section"
      style={{
        padding: '60px 20px',
        backgroundColor: 'var(--io-bg)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          className="cuatro-soluciones-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
          }}
        >
          {soluciones.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.id}
                className="solucion-card"
                style={{
                  backgroundColor: 'white',
                  border: '1.5px solid var(--io-border)',
                  borderRadius: 'var(--io-radius-lg)',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
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
                  <Icon size={24} strokeWidth={1.5} />
                </div>

                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: 'var(--io-text)',
                    margin: '0',
                    lineHeight: 1.25,
                  }}
                >
                  {sol.titulo}
                </h3>

                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--io-text-muted)',
                    margin: '0',
                    lineHeight: 1.6,
                  }}
                >
                  {sol.copy}
                </p>

                <ul
                  style={{
                    listStyle: 'none',
                    margin: '0',
                    padding: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  {sol.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: '13px',
                        color: 'var(--io-text-muted)',
                        paddingLeft: '18px',
                        position: 'relative',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: '0',
                          color: 'var(--io-action)',
                          fontWeight: 600,
                        }}
                      >
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={sol.href}
                  className="solucion-cta"
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--io-action)',
                    textDecoration: 'none',
                    marginTop: 'auto',
                    paddingTop: '8px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  {sol.cta}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
