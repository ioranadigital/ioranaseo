'use client';

import Image from 'next/image';
import { Monitor, Search, Megaphone, Target, MapPin, TrendingUp, Users, ChartColumn } from 'lucide-react';

// Generic small-business interior photo used purely as a demonstrative "screen" inside
// the laptop/phone mockup — not a real Iorana SEO client, no brand/logo involved.
const MOCKUP_PHOTO_SRC = '/assets/img/home/hero-small-business.webp';


/** Microvisuales de las tarjetas flotantes (SVG inline, decorativos, sin métricas reales). */
const svgFill = { display: 'block', width: '100%', height: '100%' } as const;

function MapMini() {
  return (
    <svg viewBox="0 0 120 64" preserveAspectRatio="xMidYMid slice" style={svgFill} aria-hidden="true" focusable="false">
      <rect width="120" height="64" fill="#e9f0ff" />
      <path d="M-4 52 Q30 36 62 46 T126 30" fill="none" stroke="#bcd2fb" strokeWidth="9" strokeLinecap="round" />
      <rect x="76" y="6" width="38" height="22" rx="5" fill="#d3efe2" />
      <rect x="6" y="8" width="26" height="18" rx="4" fill="#dce7fc" />
      <path d="M0 30 H120 M44 0 V64 M92 0 V64" stroke="#fff" strokeWidth="5" />
      <path d="M0 14 L120 44" stroke="#fff" strokeWidth="3" />
      <circle cx="62" cy="24" r="12" fill="var(--io-accent)" fillOpacity="0.25" />
      <path d="M62 38 C55 30 53 27 53 23 a9 9 0 0 1 18 0 c0 4 -2 7 -9 15 Z" fill="var(--io-accent)" />
      <circle cx="62" cy="23" r="3.4" fill="#fff" />
      <rect x="74" y="44" width="38" height="14" rx="4" fill="#fff" />
      <circle cx="81" cy="51" r="3" fill="#3bb08a" />
      <rect x="87" y="49" width="20" height="4" rx="2" fill="#c9d3e6" />
    </svg>
  );
}

function CampaignMini() {
  return (
    <svg viewBox="0 0 120 64" preserveAspectRatio="xMidYMid slice" style={svgFill} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="hc-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5b8ff0" />
          <stop offset="1" stopColor="#336fe6" />
        </linearGradient>
        <linearGradient id="hc-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4a27c" stopOpacity="0.35" />
          <stop offset="1" stopColor="#f4a27c" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="120" height="64" fill="#eef3ff" />
      <path d="M0 16 H120 M0 32 H120 M0 48 H120" stroke="#dbe5fa" strokeWidth="1" />
      <rect x="10" y="40" width="12" height="18" rx="3" fill="url(#hc-bar)" opacity="0.4" />
      <rect x="28" y="30" width="12" height="28" rx="3" fill="url(#hc-bar)" opacity="0.6" />
      <rect x="46" y="35" width="12" height="23" rx="3" fill="url(#hc-bar)" opacity="0.75" />
      <rect x="64" y="18" width="12" height="40" rx="3" fill="url(#hc-bar)" />
      <path d="M10 44 L34 30 L52 34 L70 16 L108 8 V58 H10 Z" fill="url(#hc-area)" />
      <polyline points="10,44 34,30 52,34 70,16 108,8" fill="none" stroke="var(--io-accent)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="108" cy="8" r="3.4" fill="#fff" stroke="var(--io-accent)" strokeWidth="2" />
      <rect x="84" y="36" width="30" height="14" rx="7" fill="#fff" />
      <path d="M92 44 L96 39.5 L100 44 M96 40 V47" fill="none" stroke="#3bb08a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="103" y="41.5" width="7" height="3.5" rx="1.75" fill="#c9d3e6" />
    </svg>
  );
}

function LeadsMini() {
  const rows = [
    { y: 3, tone: '#3bb08a', av: '#f4a27c' },
    { y: 22, tone: '#f4a27c', av: '#5b8ff0' },
    { y: 41, tone: '#336fe6', av: '#3bb08a' },
  ];
  return (
    <svg viewBox="0 0 120 60" preserveAspectRatio="xMidYMid slice" style={svgFill} aria-hidden="true" focusable="false">
      {rows.map((r) => (
        <g key={r.y}>
          <rect x="1" y={r.y} width="118" height="16" rx="6" fill="#fff" stroke="#e1e8f5" />
          <circle cx="12" cy={r.y + 8} r="5.2" fill={r.av} />
          <circle cx="12" cy={r.y + 6.4} r="1.7" fill="#fff" />
          <path d={`M7.8 ${r.y + 11.4} a4.2 3.2 0 0 1 8.4 0`} fill="#fff" />
          <rect x="22" y={r.y + 4.5} width="36" height="3.5" rx="1.75" fill="#1f2a44" fillOpacity="0.8" />
          <rect x="22" y={r.y + 10} width="26" height="2.8" rx="1.4" fill="#c9d3e6" />
          <rect x="84" y={r.y + 3.5} width="30" height="9" rx="4.5" fill={r.tone} fillOpacity="0.18" />
          <circle cx="90" cy={r.y + 8} r="2" fill={r.tone} />
          <rect x="95" y={r.y + 6.6} width="14" height="2.8" rx="1.4" fill={r.tone} fillOpacity="0.7" />
        </g>
      ))}
    </svg>
  );
}

function DataMini() {
  return (
    <svg viewBox="0 0 120 64" preserveAspectRatio="xMidYMid slice" style={svgFill} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="hd-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#336fe6" stopOpacity="0.28" />
          <stop offset="1" stopColor="#336fe6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="120" height="64" fill="#eef3ff" />
      <circle cx="20" cy="18" r="11" fill="none" stroke="#d5e0f7" strokeWidth="6" />
      <path d="M20 7 A11 11 0 1 1 9.6 22.4" fill="none" stroke="#3bb08a" strokeWidth="6" strokeLinecap="round" />
      <rect x="40" y="10" width="34" height="5" rx="2.5" fill="#1f2a44" fillOpacity="0.8" />
      <rect x="40" y="20" width="22" height="3.5" rx="1.75" fill="#c9d3e6" />
      <rect x="88" y="9" width="26" height="12" rx="6" fill="#3bb08a" fillOpacity="0.18" />
      <path d="M94 17 L98 12.5 L102 17 M98 13 V19" fill="none" stroke="#2a9a73" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M0 52 L20 44 L40 48 L62 34 L84 38 L120 24 V64 H0 Z" fill="url(#hd-area)" />
      <polyline points="0,52 20,44 40,48 62,34 84,38 120,24" fill="none" stroke="var(--io-action)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="62" cy="34" r="3" fill="#fff" stroke="var(--io-action)" strokeWidth="2" />
    </svg>
  );
}

/** Chip de icono para el encabezado de las tarjetas flotantes. */
function CardIco({ Icon, tone }: { Icon: typeof MapPin; tone: 'blue' | 'peach' | 'green' }) {
  const tones = {
    blue: { bg: 'rgba(51, 111, 230, 0.12)', fg: 'var(--io-action)' },
    peach: { bg: 'rgba(244, 162, 124, 0.26)', fg: '#c8663a' },
    green: { bg: 'rgba(59, 176, 138, 0.16)', fg: '#23906b' },
  }[tone];
  return (
    <span
      className="hero-card-ico"
      aria-hidden="true"
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none',
        width: '24px', height: '24px', borderRadius: '50%', background: tones.bg, color: tones.fg,
      }}
    >
      <Icon size={13} strokeWidth={2.3} />
    </span>
  );
}

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
              color: '#fff',
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
              /* Hero CTA: melocotón oscuro + texto blanco (pasa contraste AA, a
                 diferencia de --io-accent puro con blanco). Sombra suave para
                 destacarlo del fondo. Hover = tono aún más oscuro. */
              .hero-cta {
                background-color: var(--io-accent-dark);
                box-shadow: 0 6px 16px rgba(246, 119, 82, 0.35);
              }
              .hero-cta:hover {
                background-color: var(--io-accent-dark-hover);
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

              /* 769-1279px: la tarjeta de mapa se compacta para no tapar el titular del portátil */
              @media (min-width: 769px) and (max-width: 1279px) {
                .hero-card-maps {
                  width: 140px !important;
                  height: 120px !important;
                  top: 4% !important;
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
                .hero-mockup-nav,
                .hero-mockup-cta,
                .hero-mockup-stats,
                .hero-mockup-addr,
                .hero-card-ico {
                  display: none !important;
                }
                .hero-mockup-body {
                  flex-direction: column !important;
                  gap: 6px !important;
                }
                .hero-mockup-body > div:first-child {
                  flex: 0 0 auto !important;
                }
                .hero-mockup-photo {
                  flex: 1 !important;
                  min-height: 0 !important;
                }
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
                  width: 108px !important;
                  height: 96px !important;
                  padding: 9px !important;
                  gap: 6px !important;
                }
                .hero-laptop-screen {
                  border-width: 3px !important;
                  border-top-width: 5px !important;
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
                  width: 96px !important;
                  height: auto !important;
                  min-height: 48px !important;
                  padding: 7px 8px !important;
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
              width: '150px',
              height: '148px',
              backgroundColor: 'white',
              border: '1px solid var(--io-border)',
              borderRadius: 'var(--io-radius-md)',
              boxShadow: '0 10px 28px rgba(15, 23, 42, 0.10), 0 1px 3px rgba(15, 23, 42, 0.05)',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              zIndex: 12,
            }}
          >
            <div className="hero-card-head" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
              <CardIco Icon={MapPin} tone="blue" />
              <div className="hero-card-text" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--io-text)', lineHeight: 1.25 }}>
                Te encuentran
                <br />
                en tu zona
              </div>
            </div>
            {/* Mini map preview — calles, parque, agua y pin */}
            <div
              className="hero-card-visual"
              style={{
                flex: 1,
                minHeight: 0,
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: 'inset 0 0 0 1px rgba(15, 23, 42, 0.05)',
              }}
            >
              <MapMini />
            </div>
          </div>

          {/* Opportunity card — desktop only (1280px+) */}
          <div
            className="hero-card hero-card-opportunity"
            style={{
              position: 'absolute',
              bottom: '14%',
              left: '1%',
              width: '148px',
              height: '138px',
              backgroundColor: 'var(--io-bg-soft)',
              border: '1px solid var(--io-border)',
              borderRadius: 'var(--io-radius-md)',
              boxShadow: '0 10px 28px rgba(15, 23, 42, 0.10), 0 1px 3px rgba(15, 23, 42, 0.05)',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              zIndex: 12,
            }}
          >
            <div className="hero-card-head" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
              <CardIco Icon={Users} tone="green" />
              <div className="hero-card-text" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--io-text)', lineHeight: 1.25 }}>
                Más
                <br />
                oportunidades
              </div>
            </div>
            {/* Mini interface preview — filas de contactos con estado */}
            <div
              className="hero-card-visual"
              style={{
                flex: 1,
                minHeight: 0,
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: 'inset 0 0 0 1px rgba(15, 23, 42, 0.05)',
              }}
            >
              <LeadsMini />
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
            {/* Laptop screen — chasis con bisel, cámara y brillo; interfaz de una web real */}
            <div
              className="hero-laptop-screen"
              style={{
                position: 'absolute',
                top: 0,
                left: '15px',
                width: '410px',
                height: '280px',
                backgroundColor: 'white',
                border: '5px solid #1c2538',
                borderTopWidth: '8px',
                borderRadius: '14px 14px 4px 4px',
                display: 'flex',
                flexDirection: 'column',
                padding: '12px 16px 14px',
                gap: '9px',
                boxShadow: '0 28px 48px rgba(15,23,42,0.20), 0 6px 14px rgba(15,23,42,0.10), inset 0 0 0 1px rgba(255,255,255,0.08)',
                zIndex: 10,
                overflow: 'hidden',
              }}
            >
              {/* Cámara */}
              <div style={{ position: 'absolute', top: '-5.5px', left: '50%', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#3a465f', transform: 'translateX(-50%)' }} />
              {/* Barra del navegador */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f28b6b' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f4c15d' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3bb08a' }} />
                <div
                  className="hero-mockup-addr"
                  style={{ flex: 1, maxWidth: '190px', height: '14px', marginLeft: '10px', borderRadius: '7px', backgroundColor: 'var(--io-bg-soft)', border: '1px solid var(--io-border)', display: 'flex', alignItems: 'center', gap: '5px', padding: '0 7px' }}
                >
                  <div style={{ width: '5px', height: '5px', borderRadius: '2px', backgroundColor: '#3bb08a' }} />
                  <div style={{ height: '3px', width: '60%', borderRadius: '2px', backgroundColor: 'var(--io-border)' }} />
                </div>
              </div>
              {/* Navegación de la web */}
              <div className="hero-mockup-nav" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0, paddingBottom: '7px', borderBottom: '1px solid var(--io-border)' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '4px', backgroundColor: 'var(--io-action)' }} />
                <div style={{ height: '5px', width: '34px', borderRadius: '3px', backgroundColor: 'var(--io-text)', opacity: 0.8 }} />
                <div style={{ flex: 1 }} />
                <div style={{ height: '4px', width: '22px', borderRadius: '2px', backgroundColor: 'var(--io-border)' }} />
                <div style={{ height: '4px', width: '22px', borderRadius: '2px', backgroundColor: 'var(--io-border)' }} />
                <div style={{ height: '4px', width: '22px', borderRadius: '2px', backgroundColor: 'var(--io-border)' }} />
                <div style={{ height: '14px', width: '44px', borderRadius: '7px', backgroundColor: 'var(--io-accent)' }} />
              </div>
              {/* Hero de la web: texto + CTA a la izquierda, foto a la derecha */}
              <div className="hero-mockup-body" style={{ flex: 1, minHeight: 0, display: 'flex', gap: '12px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: '0 0 44%', minWidth: 0 }}>
                  <div className="hero-mockup-title" style={{ fontSize: '16px', fontWeight: 800, color: 'var(--io-text)', lineHeight: 1.2, flexShrink: 0 }}>
                    Tu negocio
                    <br />
                    en buenas manos.
                  </div>
                  <div className="hero-mockup-copy" style={{ fontSize: '10.5px', color: 'var(--io-text-muted)', lineHeight: 1.4, flexShrink: 0 }}>
                    Una web preparada para atraer clientes.
                  </div>
                  <div className="hero-mockup-cta" style={{ display: 'flex', gap: '6px', marginTop: '2px' }}>
                    <div style={{ height: '16px', width: '50px', borderRadius: '8px', backgroundColor: 'var(--io-action)', boxShadow: '0 3px 6px rgba(51,111,230,0.3)' }} />
                    <div style={{ height: '16px', width: '38px', borderRadius: '8px', border: '1.5px solid var(--io-action)', boxSizing: 'border-box' }} />
                  </div>
                  <div className="hero-mockup-stats" style={{ display: 'flex', gap: '5px', marginTop: 'auto' }}>
                    {['#3bb08a', 'var(--io-accent)', 'var(--io-action)'].map((c) => (
                      <div key={c} style={{ flex: 1, height: '22px', borderRadius: '5px', backgroundColor: 'var(--io-bg-soft)', border: '1px solid var(--io-border)', padding: '4px 5px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <div style={{ height: '3px', width: '55%', borderRadius: '2px', backgroundColor: c }} />
                        <div style={{ height: '3px', width: '85%', borderRadius: '2px', backgroundColor: 'var(--io-border)' }} />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Mini site photo — protagonist: generic small-business interior, demonstrative only */}
                <div
                  className="hero-mockup-photo"
                  style={{
                    flex: 1,
                    minWidth: 0,
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '9px',
                    backgroundColor: 'var(--io-bg-soft)',
                    boxShadow: '0 4px 12px rgba(15,23,42,0.12)',
                  }}
                >
                  <Image
                    src={MOCKUP_PHOTO_SRC}
                    alt=""
                    fill
                    sizes="(max-width: 430px) 140px, (max-width: 768px) 180px, 400px"
                    style={{ objectFit: 'cover', objectPosition: '38% 30%' }}
                  />
                </div>
              </div>
              {/* Reflejo de pantalla */}
              <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(115deg, rgba(255,255,255,0.0) 55%, rgba(255,255,255,0.35) 56%, rgba(255,255,255,0.0) 70%)' }} />
            </div>

            {/* Laptop base/deck — bisagra, hendidura y bisel metálico */}
            <div
              className="hero-laptop-base"
              style={{
                position: 'absolute',
                top: '278px',
                left: 0,
                width: '440px',
                height: '16px',
                background: 'linear-gradient(180deg, #f1f2f5 0%, #d3d6dc 55%, #b4b8c0 100%)',
                borderRadius: '0 0 12px 12px',
                boxShadow: '0 10px 18px rgba(15,23,42,0.18), 0 2px 0 rgba(255,255,255,0.7) inset',
                zIndex: 9,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '64px',
                  height: '5px',
                  borderRadius: '0 0 6px 6px',
                  background: 'linear-gradient(180deg, #a3a8b1, #c3c7ce)',
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
                width: '174px',
                height: '154px',
                backgroundColor: 'white',
                border: '1px solid var(--io-border)',
                borderRadius: 'var(--io-radius-md)',
                boxShadow: '0 10px 28px rgba(15, 23, 42, 0.10), 0 1px 3px rgba(15, 23, 42, 0.05)',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                zIndex: 12,
              }}
            >
              <div className="hero-card-head" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                <CardIco Icon={TrendingUp} tone="peach" />
                <div className="hero-card-text" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--io-text)', lineHeight: 1.25 }}>
                  Genera demanda
                  <br />
                  cualificada
                </div>
              </div>
              {/* Mini KPI chart — barras + tendencia */}
              <div
                className="hero-card-visual"
                style={{
                  flex: 1,
                  minHeight: 0,
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: 'inset 0 0 0 1px rgba(15, 23, 42, 0.05)',
                }}
              >
                <CampaignMini />
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
                width: '152px',
                height: '142px',
                backgroundColor: 'white',
                border: '1px solid var(--io-border)',
                borderRadius: 'var(--io-radius-md)',
                boxShadow: '0 10px 28px rgba(15, 23, 42, 0.10), 0 1px 3px rgba(15, 23, 42, 0.05)',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                zIndex: 12,
              }}
            >
              <div className="hero-card-head" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                <CardIco Icon={ChartColumn} tone="blue" />
                <div className="hero-card-text" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--io-text)', lineHeight: 1.25 }}>
                  Datos para
                  <br />
                  mejorar
                </div>
              </div>
              {/* Mini dashboard — indicador + área de tendencia */}
              <div
                className="hero-card-visual"
                style={{
                  flex: 1,
                  minHeight: 0,
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: 'inset 0 0 0 1px rgba(15, 23, 42, 0.05)',
                }}
              >
                <DataMini />
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
