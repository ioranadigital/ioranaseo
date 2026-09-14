'use client';

import Link from 'next/link';
import { Monitor, Search, Megaphone, Target } from 'lucide-react';

export default function LasCuatroSoluciones() {
  const soluciones = [
    {
      id: 'web',
      eyebrow: '01 — WEB',
      icon: Monitor,
      titulo: 'Una base preparada para captar',
      copy: 'Diseñamos webs y landing pages claras, rápidas y orientadas a convertir visitas en oportunidades.',
      items: ['Web corporativa', 'Landing pages', 'Responsive', 'SEO inicial', 'Analytics'],
      cta: 'Ver Web de Captación →',
      href: '/web-para-empresas',
      bg: 'white',
    },
    {
      id: 'visibilidad',
      eyebrow: '02 — VISIBILIDAD',
      icon: Search,
      titulo: 'Aparece cuando tus clientes te buscan',
      copy: 'Mejoramos tu presencia en Google para que más personas encuentren tu negocio cuando necesitan lo que ofreces.',
      items: ['SEO', 'SEO Local', 'Google Maps', 'Contenidos', 'Optimización técnica'],
      cta: 'Ver soluciones de visibilidad →',
      href: '/soluciones/visibilidad',
      bg: 'soft',
    },
    {
      id: 'campanas',
      eyebrow: '03 — CAMPAÑAS',
      icon: Megaphone,
      titulo: 'Atrae demanda cuando necesitas acelerar',
      copy: 'Creamos y optimizamos campañas para llegar a personas con intención real de convertirse en clientes.',
      items: ['Google Ads', 'Meta Ads', 'Landing pages', 'Tracking', 'Optimización'],
      cta: 'Ver campañas →',
      href: '/soluciones/campanas',
      bg: 'soft',
    },
    {
      id: 'conversion',
      eyebrow: '04 — CONVERSIÓN',
      icon: Target,
      titulo: 'Convierte más visitas en oportunidades',
      copy: 'Analizamos cómo interactúan los usuarios con tu presencia digital y mejoramos los puntos que frenan la conversión.',
      items: ['Analytics', 'Tracking', 'CRO', 'Formularios', 'Optimización continua'],
      cta: 'Ver conversión →',
      href: '/soluciones/conversion',
      bg: 'white',
    },
  ];

  return (
    <section
      className="cuatro-soluciones-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'var(--io-bg)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Título de sección */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              color: 'var(--io-text)',
              lineHeight: 1.2,
              margin: '0 0 16px 0',
            }}
          >
            Soluciones para cada punto de captación
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--io-text-muted)',
              lineHeight: 1.6,
              margin: '0',
              maxWidth: '620px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Trabajamos sobre la pieza que más puede mejorar tus resultados y
            conectamos el resto cuando es necesario.
          </p>
        </div>

        <div
          className="cuatro-soluciones-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '28px',
          }}
        >
          {soluciones.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.id}
                className="solucion-card"
                style={{
                  backgroundColor: sol.bg === 'soft' ? 'var(--io-bg-soft)' : 'white',
                  border: '1.5px solid var(--io-border)',
                  borderRadius: 'var(--io-radius-lg)',
                  padding: '44px 40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px',
                }}
              >
                {/* Eyebrow numerado */}
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: 'var(--io-action)',
                  }}
                >
                  {sol.eyebrow}
                </div>

                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: 'var(--io-radius-md)',
                    backgroundColor: sol.bg === 'soft' ? 'white' : 'var(--io-bg-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--io-action)',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={26} strokeWidth={1.5} />
                </div>

                <h3
                  style={{
                    fontSize: '22px',
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
                    fontSize: '15px',
                    color: 'var(--io-text-muted)',
                    margin: '0',
                    lineHeight: 1.65,
                  }}
                >
                  {sol.copy}
                </p>

                <ul
                  style={{
                    listStyle: 'none',
                    margin: '4px 0 0 0',
                    padding: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {sol.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: '14px',
                        color: 'var(--io-text-muted)',
                        paddingLeft: '20px',
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
                    fontSize: '15px',
                    fontWeight: 600,
                    color: 'var(--io-action)',
                    textDecoration: 'none',
                    marginTop: 'auto',
                    paddingTop: '16px',
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
