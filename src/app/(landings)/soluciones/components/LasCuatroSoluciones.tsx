'use client';

import Link from 'next/link';
import type { CSSProperties } from 'react';
import { Monitor, Search, Megaphone, Target } from 'lucide-react';

// Compact micro-visual per capability — same visual language as the Hero,
// scaled down to a secondary role (~20-30% of the card). No fake metrics.
function MicroVisual({ id, innerBg }: { id: string; innerBg: string }) {
  const wrap: CSSProperties = {
    height: '52px',
    borderRadius: 'var(--io-radius-md)',
    backgroundColor: innerBg,
    display: 'flex',
    alignItems: 'center',
    padding: '0 12px',
    gap: '8px',
    overflow: 'hidden',
  };

  if (id === 'web') {
    return (
      <div style={wrap}>
        <div style={{ display: 'flex', gap: '3px', flexShrink: 0 }}>
          <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--io-border)' }} />
          <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--io-border)' }} />
          <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--io-accent)' }} />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <div style={{ height: '4px', width: '70%', backgroundColor: 'var(--io-border)', borderRadius: '2px' }} />
          <div style={{ height: '4px', width: '45%', backgroundColor: 'var(--io-action)', borderRadius: '2px' }} />
        </div>
      </div>
    );
  }

  if (id === 'visibilidad') {
    return (
      <div style={wrap}>
        <Search size={13} strokeWidth={2.5} style={{ color: 'var(--io-action)', flexShrink: 0 }} />
        <div style={{ flex: 1, height: '3px', backgroundColor: 'var(--io-border)', borderRadius: '1px' }} />
        <svg viewBox="0 0 60 24" style={{ width: '48px', height: '20px', flexShrink: 0 }}>
          <path d="M0,18 Q15,6 30,15 T60,9" fill="none" stroke="var(--io-border)" strokeWidth="2" />
          <circle cx="42" cy="12" r="2.5" fill="var(--io-action)" />
        </svg>
      </div>
    );
  }

  if (id === 'campanas') {
    return (
      <div style={{ ...wrap, alignItems: 'flex-end', position: 'relative' }}>
        <div style={{ width: '6px', height: '30%', backgroundColor: 'var(--io-action)', opacity: 0.4, borderRadius: '1px' }} />
        <div style={{ width: '6px', height: '55%', backgroundColor: 'var(--io-action)', opacity: 0.6, borderRadius: '1px' }} />
        <div style={{ width: '6px', height: '40%', backgroundColor: 'var(--io-action)', opacity: 0.8, borderRadius: '1px' }} />
        <div style={{ width: '6px', height: '75%', backgroundColor: 'var(--io-action)', borderRadius: '1px' }} />
        <svg viewBox="0 0 100 30" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <polyline points="0,26 25,16 50,19 75,7 100,3" fill="none" stroke="var(--io-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }

  // conversion — mini funnel
  return (
    <div style={{ ...wrap, flexDirection: 'column', justifyContent: 'center', gap: '4px', padding: '8px 16px' }}>
      <div style={{ width: '90%', height: '6px', backgroundColor: 'var(--io-border)', borderRadius: '2px' }} />
      <div style={{ width: '58%', height: '6px', backgroundColor: 'var(--io-action)', opacity: 0.6, borderRadius: '2px' }} />
      <div style={{ width: '30%', height: '6px', backgroundColor: 'var(--io-action)', borderRadius: '2px' }} />
    </div>
  );
}

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

                <MicroVisual id={sol.id} innerBg={sol.bg === 'soft' ? 'white' : 'var(--io-bg-soft)'} />

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
