'use client';

import { Monitor, Search, Megaphone, Target, MapPin, TrendingUp, Users } from 'lucide-react';

export default function Hero() {
  const capabilities = [
    {
      icon: Monitor,
      label: 'Web',
      desc: 'Una base preparada para captar.',
    },
    {
      icon: Search,
      label: 'Visibilidad',
      desc: 'Aparece cuando te buscan.',
    },
    {
      icon: Megaphone,
      label: 'Campañas',
      desc: 'Atrae demanda cualificada.',
    },
    {
      icon: Target,
      label: 'Conversión',
      desc: 'Convierte visitas en oportunidades.',
    },
  ];

  return (
    <section
      className="hero-section"
      style={{
        paddingTop: '60px',
        paddingBottom: '60px',
        paddingLeft: '20px',
        paddingRight: '20px',
        background: 'linear-gradient(180deg, white 0%, rgba(244, 162, 124, 0.04) 100%)',
      }}
    >
      <div
        className="hero-grid"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '50px',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Left: Content */}
        <div>
          {/* Eyebrow */}
          <div
            className="hero-eyebrow"
            style={{
              display: 'inline-block',
              backgroundColor: 'var(--io-bg-soft)',
              color: 'var(--io-action)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              padding: '8px 16px',
              borderRadius: 'var(--io-radius-md)',
              marginBottom: '24px',
              textTransform: 'uppercase',
            }}
          >
            Captación digital para pequeños negocios y pymes
          </div>

          {/* H1 */}
          <h1
            className="hero-h1"
            style={{
              fontSize: 'clamp(32px, 5.2vw, 56px)',
              fontWeight: 800,
              color: 'var(--io-text)',
              lineHeight: 1.2,
              margin: '0 0 24px 0',
              maxWidth: '100%',
              letterSpacing: '-0.01em',
            }}
          >
            Convierte tu presencia digital en oportunidades.
          </h1>

          {/* Description */}
          <p
            className="hero-description"
            style={{
              fontSize: '18px',
              lineHeight: 1.65,
              color: 'var(--io-text-muted)',
              margin: '0 0 32px 0',
              maxWidth: '500px',
            }}
          >
            Diseñamos y mejoramos tu web, visibilidad y campañas para que te encuentren, entiendan lo que haces y contacten contigo.
          </p>

          {/* CTA */}
          <button
            className="hero-cta"
            style={{
              padding: '14px 32px',
              backgroundColor: 'var(--io-action)',
              color: 'white',
              fontSize: '16px',
              fontWeight: 600,
              border: 'none',
              borderRadius: 'var(--io-radius-md)',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              minHeight: '48px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--io-action-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--io-action)';
            }}
          >
            Analizar mi proyecto
          </button>

          {/* Capabilities - 4 items with icons */}
          <div
            className="hero-capabilities"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
              marginTop: '64px',
              paddingTop: '48px',
              borderTop: '1px solid var(--io-border)',
            }}
          >
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  style={{
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  {/* Icon circle - More prominent */}
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--io-bg-soft)',
                      border: '2.5px solid var(--io-action)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                      color: 'var(--io-action)',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={28} strokeWidth={1.5} />
                  </div>

                  {/* Label - Stronger hierarchy */}
                  <div
                    style={{
                      fontSize: '15px',
                      fontWeight: 800,
                      color: 'var(--io-text)',
                      marginBottom: '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      lineHeight: 1.2,
                    }}
                  >
                    {item.label}
                  </div>

                  {/* Description - Improved legibility */}
                  <div
                    style={{
                      fontSize: '13px',
                      color: 'var(--io-text-muted)',
                      lineHeight: 1.6,
                      fontWeight: 500,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Visual Storytelling */}
        <div
          className="hero-visual"
          aria-hidden="true"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '420px',
            backgroundColor: 'white',
            borderRadius: 'var(--io-radius-lg)',
            border: '1px solid var(--io-border)',
            padding: '40px 30px',
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <style>
            {`
              @media (max-width: 1023px) {
                .hero-grid {
                  grid-template-columns: 1fr !important;
                  gap: 40px !important;
                }
              }

              @media (max-width: 768px) {
                .hero-grid {
                  grid-template-columns: 1fr !important;
                  gap: 32px !important;
                }
                .hero-capabilities {
                  grid-template-columns: repeat(2, 1fr) !important;
                  gap: 16px !important;
                  margin-top: 40px !important;
                }
                .hero-visual {
                  min-height: 300px !important;
                }
              }

              @media (max-width: 430px) {
                .hero-section {
                  padding-top: 40px !important;
                  padding-bottom: 40px !important;
                }
                .hero-h1 {
                  font-size: 28px !important;
                  margin-bottom: 16px !important;
                }
                .hero-description {
                  font-size: 14px !important;
                  margin-bottom: 24px !important;
                }
                .hero-capabilities {
                  grid-template-columns: repeat(2, 1fr) !important;
                  gap: 12px !important;
                  margin-top: 32px !important;
                  padding-top: 32px !important;
                  border-top: 1px solid var(--io-border);
                }
                .hero-visual {
                  min-height: 280px !important;
                  padding: 20px 15px !important;
                }
              }

              /* Secondary decorative pieces: full composition only at true desktop (1280px+) */
              @media (max-width: 1279px) {
                .hero-visual-note,
                .hero-card-opportunity {
                  display: none !important;
                }
              }

              /* Tablet/mobile: drop the measurement card, keep Maps + Campaign + mockup */
              @media (max-width: 1023px) {
                .hero-card-measurement {
                  display: none !important;
                }
              }

              /* 768px: compact mockup + 2 cards, smaller mobile phone */
              @media (max-width: 768px) {
                .hero-mockup-desktop {
                  width: 140px !important;
                  height: 165px !important;
                }
                .hero-mockup-mobile {
                  width: 58px !important;
                  height: 84px !important;
                }
                .hero-card-maps,
                .hero-card-campaign {
                  width: 78px !important;
                  height: 64px !important;
                  padding: 8px !important;
                  gap: 4px !important;
                }
                .hero-card-icon {
                  width: 22px !important;
                  height: 22px !important;
                }
                .hero-card-text {
                  font-size: 10px !important;
                  line-height: 1.25 !important;
                }
              }

              /* 375-430px: tightest composition, mobile phone dropped for zero-overflow safety */
              @media (max-width: 430px) {
                .hero-mockup-desktop {
                  width: 110px !important;
                  height: 128px !important;
                }
                .hero-mockup-mobile {
                  display: none !important;
                }
                .hero-card-maps,
                .hero-card-campaign {
                  width: 68px !important;
                  height: 56px !important;
                  padding: 6px !important;
                  gap: 3px !important;
                }
                .hero-card-icon {
                  width: 18px !important;
                  height: 18px !important;
                }
                .hero-card-text {
                  font-size: 9px !important;
                  line-height: 1.2 !important;
                }
              }
            `}
          </style>

          {/* Decorative background — halos + dots (no information, purely textural) */}
          <div
            style={{
              position: 'absolute',
              top: '-50px',
              left: '-50px',
              width: '220px',
              height: '220px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, rgba(59,130,246,0) 70%)',
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-60px',
              right: '-60px',
              width: '240px',
              height: '240px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(244,162,124,0.09) 0%, rgba(244,162,124,0) 70%)',
              zIndex: 0,
            }}
          />
          <div style={{ position: 'absolute', top: '34%', left: '9%', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--io-border)', zIndex: 1 }} />
          <div style={{ position: 'absolute', bottom: '30%', right: '10%', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--io-accent)', opacity: 0.5, zIndex: 1 }} />

          {/* Visual note — floating annotation above the composition (desktop only) */}
          <div
            className="hero-visual-note"
            style={{
              position: 'absolute',
              top: '2%',
              left: '50%',
              transform: 'translateX(-50%) rotate(-2deg)',
              textAlign: 'center',
              zIndex: 15,
            }}
          >
            <div
              style={{
                fontSize: '13px',
                fontStyle: 'italic',
                fontWeight: 700,
                color: 'var(--io-text)',
                lineHeight: 1.35,
                whiteSpace: 'nowrap',
              }}
            >
              Más visibilidad.
              <br />
              Más oportunidades.
            </div>
            <div
              style={{
                width: '70%',
                height: '2px',
                backgroundColor: '#F4A27C',
                borderRadius: '2px',
                margin: '4px auto 0',
              }}
            />
          </div>

          {/* Maps card */}
          <div
            className="hero-card hero-card-maps"
            style={{
              position: 'absolute',
              top: '12%',
              left: '3%',
              width: '98px',
              height: '80px',
              backgroundColor: 'white',
              border: '1px solid var(--io-border)',
              borderRadius: 'var(--io-radius-md)',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              zIndex: 12,
            }}
          >
            <div
              className="hero-card-icon"
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                backgroundColor: 'var(--io-bg-soft)',
                color: 'var(--io-action)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <MapPin size={14} strokeWidth={2} />
            </div>
            <div className="hero-card-text" style={{ fontSize: '11px', fontWeight: 700, color: 'var(--io-text)', lineHeight: 1.3 }}>
              Te encuentran
              <br />
              en tu zona
            </div>
          </div>

          {/* Campaign card */}
          <div
            className="hero-card hero-card-campaign"
            style={{
              position: 'absolute',
              top: '6%',
              right: '4%',
              width: '102px',
              height: '84px',
              backgroundColor: 'var(--io-action)',
              borderRadius: 'var(--io-radius-md)',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              zIndex: 12,
            }}
          >
            <div
              className="hero-card-icon"
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Megaphone size={14} strokeWidth={2} />
            </div>
            <div className="hero-card-text" style={{ fontSize: '11px', fontWeight: 700, color: 'white', lineHeight: 1.3 }}>
              Genera demanda
              <br />
              cualificada
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', marginTop: 'auto' }}>
              <div style={{ width: '4px', height: '8px', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '1px' }} />
              <div style={{ width: '4px', height: '13px', backgroundColor: 'rgba(255,255,255,0.75)', borderRadius: '1px' }} />
              <div style={{ width: '4px', height: '10px', backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: '1px' }} />
            </div>
          </div>

          {/* Measurement card — hidden below 1024px */}
          <div
            className="hero-card hero-card-measurement"
            style={{
              position: 'absolute',
              bottom: '4%',
              right: '2%',
              width: '96px',
              height: '80px',
              backgroundColor: 'white',
              border: '1px solid var(--io-border)',
              borderRadius: 'var(--io-radius-md)',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              zIndex: 12,
            }}
          >
            <div
              className="hero-card-icon"
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                backgroundColor: 'var(--io-bg-soft)',
                color: 'var(--io-action)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <TrendingUp size={14} strokeWidth={2} />
            </div>
            <div className="hero-card-text" style={{ fontSize: '11px', fontWeight: 700, color: 'var(--io-text)', lineHeight: 1.3 }}>
              Datos para
              <br />
              mejorar
            </div>
            <svg viewBox="0 0 60 20" style={{ width: '100%', height: '16px', marginTop: 'auto' }}>
              <polyline
                points="0,17 15,11 30,13 45,5 60,3"
                fill="none"
                stroke="var(--io-action)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Opportunity card — desktop only (1280px+) */}
          <div
            className="hero-card hero-card-opportunity"
            style={{
              position: 'absolute',
              bottom: '16%',
              left: '3%',
              width: '92px',
              height: '72px',
              backgroundColor: 'var(--io-bg-soft)',
              border: '1px solid var(--io-border)',
              borderRadius: 'var(--io-radius-md)',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              zIndex: 12,
            }}
          >
            <div
              className="hero-card-icon"
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: 'white',
                color: 'var(--io-action)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Users size={13} strokeWidth={2} />
            </div>
            <div className="hero-card-text" style={{ fontSize: '11px', fontWeight: 700, color: 'var(--io-text)', lineHeight: 1.3 }}>
              Más
              <br />
              oportunidades
            </div>
          </div>

          {/* Main device mockup — protagonist: web + mobile companion */}
          <div
            className="hero-mockup-desktop"
            style={{
              position: 'absolute',
              left: '50%',
              top: '47%',
              transform: 'translate(-50%, -50%)',
              width: '200px',
              height: '235px',
              backgroundColor: 'white',
              border: '3px solid var(--io-text)',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              padding: '12px',
              gap: '8px',
              boxShadow: '0 16px 32px rgba(15,23,42,0.14)',
              zIndex: 10,
            }}
          >
            {/* Browser chrome dots */}
            <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--io-border)' }} />
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--io-border)' }} />
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--io-accent)' }} />
            </div>
            {/* Hero block */}
            <div style={{ flex: 1, backgroundColor: 'var(--io-bg-soft)', borderRadius: '4px' }} />
            {/* Text lines */}
            <div style={{ height: '5px', width: '100%', backgroundColor: 'var(--io-border)', borderRadius: '2px', flexShrink: 0 }} />
            <div style={{ height: '5px', width: '70%', backgroundColor: 'var(--io-border)', borderRadius: '2px', flexShrink: 0 }} />
            {/* CTA block */}
            <div style={{ height: '14px', width: '50%', backgroundColor: 'var(--io-action)', borderRadius: '4px', flexShrink: 0 }} />
          </div>

          {/* Mobile companion — overlaps the bottom-center of the desktop mockup */}
          <div
            className="hero-mockup-mobile"
            style={{
              position: 'absolute',
              left: '50%',
              bottom: '2%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '115px',
              backgroundColor: 'white',
              border: '3px solid var(--io-text)',
              borderRadius: '14px',
              display: 'flex',
              flexDirection: 'column',
              padding: '8px 6px',
              gap: '5px',
              boxShadow: '0 10px 22px rgba(15,23,42,0.14)',
              zIndex: 11,
            }}
          >
            <div style={{ width: '20px', height: '3px', borderRadius: '2px', backgroundColor: 'var(--io-border)', alignSelf: 'center', flexShrink: 0 }} />
            <div style={{ flex: 1, backgroundColor: 'var(--io-bg-soft)', borderRadius: '3px' }} />
            <div style={{ height: '4px', width: '100%', backgroundColor: 'var(--io-border)', borderRadius: '2px', flexShrink: 0 }} />
            <div style={{ height: '4px', width: '60%', backgroundColor: 'var(--io-border)', borderRadius: '2px', flexShrink: 0 }} />
          </div>
        </div>
      </div>
    </section>
  );
}
