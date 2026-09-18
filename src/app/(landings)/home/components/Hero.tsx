'use client';

import Image from 'next/image';
import { Monitor, Search, Megaphone, Target } from 'lucide-react';

// Generic small-business interior photo used purely as a demonstrative "screen" inside
// the laptop/phone mockup — not a real Iorana SEO client, no brand/logo involved.
const MOCKUP_PHOTO_SRC = '/assets/img/home/hero-small-business.webp';

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
        paddingTop: 'calc(60px + var(--io-header-h, 64px))',
        paddingBottom: '60px',
        paddingLeft: '20px',
        paddingRight: '20px',
        backgroundColor: '#F9FBFF',
        backgroundImage: "url('/assets/img/home/hero-bg.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="hero-grid"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '0.85fr 1fr',
          gridTemplateAreas: '"copy visual" "caps visual"',
          columnGap: '50px',
          rowGap: '40px',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Copy: eyebrow, H1, description, CTA */}
        <div className="hero-copy" style={{ gridArea: 'copy' }}>
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
              color: 'var(--io-text)',
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
          >
            Analizar mi proyecto
          </button>
        </div>

        {/* Visual: Visual Storytelling */}
        <div
          className="hero-visual"
          aria-hidden="true"
          style={{
            gridArea: 'visual',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '490px',
            maxWidth: '650px',
            backgroundColor: 'transparent',
            border: 'none',
            padding: '30px 20px',
            position: 'relative',
            width: '100%',
          }}
        >
          <style>
            {`
              /* Hero CTA: peach accent + dark text (white on peach fails contrast). Hover = slightly deeper peach. */
              .hero-cta {
                background-color: var(--io-accent);
              }
              .hero-cta:hover {
                background-color: #F2955F;
              }
              @media (min-width: 1024px) {
                .hero-cta {
                  margin-left: 24px;
                }
              }

              /* Tablet/mobile: force explicit row order copy -> visual -> caps (grid areas, not DOM order) */
              @media (max-width: 1023px) {
                .hero-grid {
                  display: grid !important;
                  grid-template-columns: 1fr !important;
                  grid-template-areas: "copy" "visual" "caps" !important;
                  column-gap: 0 !important;
                  row-gap: 40px !important;
                }
              }

              @media (max-width: 768px) {
                .hero-grid {
                  row-gap: 32px !important;
                }
                .hero-capabilities {
                  grid-template-columns: repeat(2, 1fr) !important;
                  gap: 16px !important;
                }
                .hero-visual {
                  min-height: 310px !important;
                }
              }

              @media (max-width: 430px) {
                .hero-section {
                  padding-top: calc(40px + var(--io-header-h, 67px)) !important;
                  padding-bottom: 40px !important;
                }
                .hero-grid {
                  row-gap: 24px !important;
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
                  padding-top: 32px !important;
                  border-top: 1px solid var(--io-border);
                }
                .hero-visual {
                  min-height: 280px !important;
                  padding: 16px 15px !important;
                }
              }

              /* Secondary decorative pieces: full composition only at true desktop (1280px+) */
              @media (max-width: 1279px) {
                .hero-visual-note,
                .hero-card-opportunity {
                  display: none !important;
                }
              }

              /* Campaign card overhangs the laptop's top-right corner further only where the column has room */
              @media (min-width: 1280px) {
                .hero-card-campaign {
                  right: -60px !important;
                }
              }

              /* Tablet/mobile: drop the measurement card, keep Maps + Campaign + mockup */
              @media (max-width: 1023px) {
                .hero-card-measurement {
                  display: none !important;
                }
              }

              /* 768px: compact laptop+phone composition, smaller phone, nav hidden for airiness */
              @media (max-width: 768px) {
                .hero-mockup-desktop {
                  width: 206px !important;
                  height: 157px !important;
                }
                .hero-laptop-screen {
                  width: 190px !important;
                  height: 150px !important;
                  left: 8px !important;
                  padding: 10px !important;
                  gap: 6px !important;
                  border-radius: 10px 10px 3px 3px !important;
                }
                .hero-laptop-base {
                  width: 206px !important;
                  height: 7px !important;
                  top: 148px !important;
                }
                .hero-mockup-title {
                  font-size: 12px !important;
                  line-height: 1.15 !important;
                }
                .hero-mockup-copy {
                  display: none !important;
                }
                .hero-mockup-mobile {
                  width: 76px !important;
                  height: 132px !important;
                  right: -6px !important;
                  bottom: -14px !important;
                  border-radius: 16px !important;
                  padding: 10px 7px !important;
                  gap: 5px !important;
                }
                .hero-mockup-mobile-title {
                  font-size: 8px !important;
                }
                .hero-card-maps,
                .hero-card-campaign {
                  width: 92px !important;
                  height: 92px !important;
                  padding: 9px !important;
                  gap: 6px !important;
                }
                .hero-card-campaign {
                  top: -64px !important;
                  right: -20px !important;
                }
                .hero-card-text {
                  font-size: 12px !important;
                  line-height: 1.3 !important;
                }
              }

              /* 375-430px: tightest composition — phone dropped, microcard visual strips dropped for max clarity */
              @media (max-width: 430px) {
                .hero-mockup-desktop {
                  width: 176px !important;
                  height: 129px !important;
                }
                .hero-laptop-screen {
                  width: 164px !important;
                  height: 122px !important;
                  left: 6px !important;
                  padding: 9px !important;
                  gap: 5px !important;
                  border-radius: 9px 9px 3px 3px !important;
                }
                .hero-laptop-base {
                  width: 176px !important;
                  height: 7px !important;
                  top: 120px !important;
                }
                .hero-mockup-title {
                  font-size: 11px !important;
                  line-height: 1.15 !important;
                }
                .hero-mockup-mobile {
                  display: none !important;
                }
                .hero-card-visual {
                  display: none !important;
                }
                .hero-card-maps {
                  top: 9% !important;
                  left: 4% !important;
                }
                .hero-card-campaign {
                  top: -36px !important;
                  right: -14px !important;
                }
                .hero-card-maps,
                .hero-card-campaign {
                  width: 80px !important;
                  height: 48px !important;
                  padding: 7px !important;
                }
                .hero-card-text {
                  font-size: 11px !important;
                  line-height: 1.25 !important;
                }
              }
            `}
          </style>

          {/* Decorative dots — purely textural, positions stay within 0-100% so they never create scrollable overflow */}
          <div style={{ position: 'absolute', top: '34%', left: '9%', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--io-border)', zIndex: 1 }} />
          <div style={{ position: 'absolute', bottom: '30%', right: '10%', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--io-accent)', opacity: 0.5, zIndex: 1 }} />

          {/* Visual note — floating brand annotation, top-right of the stage (desktop only) */}
          <div
            className="hero-visual-note"
            style={{
              position: 'absolute',
              top: '-54px',
              right: 'calc(2% + 40px)',
              textAlign: 'right',
              transform: 'rotate(-2deg)',
              zIndex: 15,
            }}
          >
            <div
              style={{
                fontSize: '18px',
                fontStyle: 'italic',
                fontWeight: 800,
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
                width: '75%',
                height: '4px',
                backgroundColor: 'var(--io-accent)',
                borderRadius: '2px',
                margin: '7px 0 0 auto',
              }}
            />
          </div>

          {/* Maps card */}
          <div
            className="hero-card hero-card-maps"
            style={{
              position: 'absolute',
              top: '10%',
              left: '0%',
              width: '132px',
              height: '128px',
              backgroundColor: 'white',
              border: '1px solid var(--io-border)',
              borderRadius: 'var(--io-radius-md)',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              zIndex: 12,
            }}
          >
            <div className="hero-card-text" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--io-text)', lineHeight: 1.3 }}>
              Te encuentran
              <br />
              en tu zona
            </div>
            {/* Mini map preview — abstract streets + pin */}
            <div
              className="hero-card-visual"
              style={{
                flex: 1,
                minHeight: 0,
                position: 'relative',
                borderRadius: '6px',
                backgroundColor: 'var(--io-bg-soft)',
                overflow: 'hidden',
              }}
            >
              <svg viewBox="0 0 100 40" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                <path d="M0,30 Q25,10 50,25 T100,15" fill="none" stroke="var(--io-border)" strokeWidth="2" />
                <path d="M0,8 Q30,26 60,10 T100,28" fill="none" stroke="var(--io-border)" strokeWidth="1.5" opacity="0.6" />
              </svg>
              <div
                style={{
                  position: 'absolute',
                  top: '36%',
                  left: '54%',
                  width: '9px',
                  height: '9px',
                  borderRadius: '50% 50% 50% 0',
                  backgroundColor: 'var(--io-action)',
                  transform: 'rotate(-45deg)',
                }}
              />
            </div>
          </div>

          {/* Opportunity card — desktop only (1280px+) */}
          <div
            className="hero-card hero-card-opportunity"
            style={{
              position: 'absolute',
              bottom: '14%',
              left: '1%',
              width: '128px',
              height: '116px',
              backgroundColor: 'var(--io-bg-soft)',
              border: '1px solid var(--io-border)',
              borderRadius: 'var(--io-radius-md)',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              zIndex: 12,
            }}
          >
            <div className="hero-card-text" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--io-text)', lineHeight: 1.3 }}>
              Más
              <br />
              oportunidades
            </div>
            {/* Mini interface preview — result-style rows */}
            <div
              className="hero-card-visual"
              style={{
                flex: 1,
                minHeight: 0,
                borderRadius: '6px',
                backgroundColor: 'white',
                padding: '6px',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                justifyContent: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#22c55e', flexShrink: 0 }} />
                <div style={{ height: '4px', width: '60%', backgroundColor: 'var(--io-border)', borderRadius: '2px' }} />
              </div>
              <div style={{ height: '4px', width: '40%', backgroundColor: 'var(--io-border)', borderRadius: '2px', marginLeft: '9px' }} />
            </div>
          </div>

          {/* Main device mockup — laptop + phone, showing the same coherent mini site */}
          <div
            className="hero-mockup-desktop"
            style={{
              position: 'absolute',
              left: '54%',
              top: '48%',
              transform: 'translate(-50%, -50%)',
              width: '440px',
              height: '300px',
              zIndex: 10,
            }}
          >
            {/* Laptop screen — wider/shorter for a clear landscape device silhouette */}
            <div
              className="hero-laptop-screen"
              style={{
                position: 'absolute',
                top: 0,
                left: '15px',
                width: '410px',
                height: '280px',
                backgroundColor: 'white',
                border: '4px solid var(--io-text)',
                borderRadius: '14px 14px 4px 4px',
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                gap: '10px',
                boxShadow: '0 20px 40px rgba(15,23,42,0.14)',
                zIndex: 10,
              }}
            >
              {/* Browser chrome dots */}
              <div style={{ display: 'flex', gap: '7px', flexShrink: 0 }}>
                <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: 'var(--io-border)' }} />
                <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: 'var(--io-border)' }} />
                <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: 'var(--io-accent)' }} />
              </div>
              {/* Mini site title */}
              <div className="hero-mockup-title" style={{ fontSize: '17px', fontWeight: 800, color: 'var(--io-text)', lineHeight: 1.2, flexShrink: 0 }}>
                Tu negocio
                <br />
                en buenas manos.
              </div>
              {/* Mini site copy */}
              <div className="hero-mockup-copy" style={{ fontSize: '11px', color: 'var(--io-text-muted)', lineHeight: 1.4, flexShrink: 0 }}>
                Una web preparada para atraer clientes.
              </div>
              {/* Mini site photo — protagonist: generic small-business interior, demonstrative only */}
              <div
                className="hero-mockup-photo"
                style={{
                  flex: 1,
                  minHeight: 0,
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  backgroundColor: 'var(--io-bg-soft)',
                }}
              >
                <Image
                  src={MOCKUP_PHOTO_SRC}
                  alt=""
                  fill
                  sizes="(max-width: 430px) 140px, (max-width: 768px) 180px, 400px"
                  style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
                />
              </div>
            </div>

            {/* Laptop base/deck */}
            <div
              className="hero-laptop-base"
              style={{
                position: 'absolute',
                top: '278px',
                left: 0,
                width: '440px',
                height: '16px',
                background: 'linear-gradient(180deg, #e4e5e8 0%, #c9cbd0 100%)',
                borderRadius: '0 0 10px 10px',
                boxShadow: '0 6px 10px rgba(15,23,42,0.12)',
                zIndex: 9,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '50px',
                  height: '4px',
                  borderRadius: '0 0 4px 4px',
                  backgroundColor: '#b9bcc2',
                }}
              />
            </div>

            {/* Phone — in front, slightly to the right, showing the same mini site. Realistic vertical proportion + thick bezel */}
            <div
              className="hero-mockup-mobile"
              style={{
                position: 'absolute',
                right: '-16px',
                bottom: '-30px',
                width: '112px',
                height: '210px',
                backgroundColor: 'white',
                border: '4px solid var(--io-text)',
                borderRadius: '22px',
                display: 'flex',
                flexDirection: 'column',
                padding: '13px 9px',
                gap: '7px',
                boxShadow: '0 14px 28px rgba(15,23,42,0.18)',
                zIndex: 11,
              }}
            >
              {/* Speaker/notch */}
              <div style={{ width: '34px', height: '5px', borderRadius: '3px', backgroundColor: 'var(--io-border)', alignSelf: 'center', flexShrink: 0 }} />
              {/* Header: small brand mark */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '2px', backgroundColor: 'var(--io-action)', flexShrink: 0 }} />
                <div style={{ height: '4px', width: '32px', backgroundColor: 'var(--io-border)', borderRadius: '2px' }} />
              </div>
              {/* Short title */}
              <div className="hero-mockup-mobile-title" style={{ fontSize: '10px', fontWeight: 800, color: 'var(--io-text)', lineHeight: 1.15, whiteSpace: 'nowrap', flexShrink: 0 }}>
                Tu negocio
              </div>
              {/* Small visual block — protagonist: same photo as the laptop, cropped for a taller frame */}
              <div
                style={{
                  flex: 1,
                  minHeight: 0,
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '6px',
                  backgroundColor: 'var(--io-bg-soft)',
                }}
              >
                <Image
                  src={MOCKUP_PHOTO_SRC}
                  alt=""
                  fill
                  sizes="220px"
                  style={{ objectFit: 'cover', objectPosition: '42% center' }}
                />
              </div>
            </div>

            {/* Microcards anchored to the laptop (positions are relative to the mockup so they never cover the phone) */}
            {/* Campaign card — soft background so it never outweighs the main mockup */}
            <div
              className="hero-card hero-card-campaign"
              style={{
                position: 'absolute',
                top: '-46px',
                right: '-22px',
                width: '142px',
                height: '134px',
                backgroundColor: 'white',
                border: '1px solid var(--io-border)',
                borderRadius: 'var(--io-radius-md)',
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                zIndex: 12,
              }}
            >
              <div className="hero-card-text" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--io-text)', lineHeight: 1.3 }}>
                Genera demanda
                <br />
                cualificada
              </div>
              {/* Mini KPI chart — ascending bars + trend line */}
              <div
                className="hero-card-visual"
                style={{
                  flex: 1,
                  minHeight: 0,
                  position: 'relative',
                  borderRadius: '6px',
                  backgroundColor: 'var(--io-bg-soft)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: '4px',
                  padding: '6px',
                }}
              >
                <div style={{ width: '6px', height: '30%', backgroundColor: 'var(--io-action)', opacity: 0.35, borderRadius: '2px' }} />
                <div style={{ width: '6px', height: '55%', backgroundColor: 'var(--io-action)', opacity: 0.55, borderRadius: '2px' }} />
                <div style={{ width: '6px', height: '40%', backgroundColor: 'var(--io-action)', opacity: 0.7, borderRadius: '2px' }} />
                <div style={{ width: '6px', height: '80%', backgroundColor: 'var(--io-action)', borderRadius: '2px' }} />
                <svg viewBox="0 0 100 40" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                  <polyline points="0,35 30,20 55,25 78,8 100,4" fill="none" stroke="var(--io-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Measurement card — hidden below 1024px */}
            <div
              className="hero-card hero-card-measurement"
              style={{
                position: 'absolute',
                top: '306px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '130px',
                height: '124px',
                backgroundColor: 'white',
                border: '1px solid var(--io-border)',
                borderRadius: 'var(--io-radius-md)',
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                zIndex: 12,
              }}
            >
              <div className="hero-card-text" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--io-text)', lineHeight: 1.3 }}>
                Datos para
                <br />
                mejorar
              </div>
              {/* Mini dashboard — KPI dot + sparkline */}
              <div
                className="hero-card-visual"
                style={{
                  flex: 1,
                  minHeight: 0,
                  borderRadius: '6px',
                  backgroundColor: 'var(--io-bg-soft)',
                  padding: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  gap: '4px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--io-action)' }} />
                  <div style={{ height: '4px', width: '28px', backgroundColor: 'var(--io-border)', borderRadius: '2px' }} />
                </div>
                <svg viewBox="0 0 60 20" style={{ width: '100%', height: '18px' }}>
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
            </div>
          </div>
        </div>

        {/* Capabilities - 4 items with icons (compact summary, not a second hero) */}
        <div
          className="hero-capabilities"
          style={{
            gridArea: 'caps',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            paddingTop: '28px',
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
                {/* Icon circle - compact with warm accent */}
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--io-bg-soft)',
                    border: '2px solid var(--io-action)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '10px',
                    color: 'var(--io-accent)',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={21} strokeWidth={1.5} />
                </div>

                {/* Label */}
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 800,
                    color: 'var(--io-text)',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    lineHeight: 1.2,
                  }}
                >
                  {item.label}
                </div>

                {/* Description */}
                <div
                  style={{
                    fontSize: '12px',
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
    </section>
  );
}
