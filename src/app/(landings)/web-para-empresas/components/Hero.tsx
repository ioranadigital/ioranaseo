'use client';

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        paddingTop: '60px',
        paddingBottom: '60px',
        paddingLeft: '20px',
        paddingRight: '20px',
        backgroundColor: 'var(--io-bg)',
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
            Web para pequeños negocios y pymes
          </div>

          {/* H1 - 2 lines in desktop, 2-3 in mobile */}
          <h1
            className="hero-h1"
            style={{
              fontSize: 'clamp(32px, 5.2vw, 56px)',
              fontWeight: 800,
              color: 'var(--io-text)',
              lineHeight: 1.2,
              marginBottom: '24px',
              margin: '0 0 24px 0',
              maxWidth: '100%',
              letterSpacing: '-0.01em',
            }}
          >
            Una web preparada
            <br />
            para captar clientes.
          </h1>

          {/* Description */}
          <p
            className="hero-description"
            style={{
              fontSize: '18px',
              lineHeight: 1.65,
              color: 'var(--io-text-muted)',
              marginBottom: '32px',
              margin: '0 0 32px 0',
              maxWidth: '500px',
            }}
          >
            Diseñamos tu web para que las personas te encuentren, entiendan lo
            que haces y se pongan en contacto contigo.
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

          {/* Benefits — 2x2 on mobile, 4 on desktop */}
          <div
            className="benefits-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
              marginTop: '48px',
              paddingTop: '32px',
              borderTop: '1px solid var(--io-border)',
            }}
          >
            {[
              'SEO desde el inicio',
              'Medición incluida',
              '100 % responsive',
              'Preparada para convertir',
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--io-text-muted)',
                  lineHeight: 1.4,
                }}
              >
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--io-action)',
                    flexShrink: 0,
                    marginTop: '6px',
                  }}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Mockup Visual */}
        <div
          className="hero-mockup"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '420px',
            backgroundColor: 'var(--io-bg-soft)',
            borderRadius: 'var(--io-radius-lg)',
            border: '1px solid var(--io-border)',
            padding: '40px 20px',
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          {/* Desktop mockup */}
          <div
            style={{
              display: 'flex',
              gap: '24px',
              alignItems: 'flex-end',
            }}
          >
            {/* Desktop Web — More realistic */}
            <div
              style={{
                width: '280px',
                height: '180px',
                backgroundColor: 'white',
                borderRadius: '8px',
                border: '8px solid #1a1a1a',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Header / Navigation Bar */}
              <div
                style={{
                  height: '24px',
                  backgroundColor: 'white',
                  borderBottom: '1px solid var(--io-border)',
                  padding: '6px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                }}
              >
                {/* Logo */}
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--io-action)',
                    flexShrink: 0,
                  }}
                />
                {/* Nav Links */}
                <div
                  style={{
                    display: 'flex',
                    gap: '3px',
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      width: '8px',
                      height: '2px',
                      backgroundColor: 'var(--io-border)',
                      borderRadius: '1px',
                    }}
                  />
                  <div
                    style={{
                      width: '8px',
                      height: '2px',
                      backgroundColor: 'var(--io-border)',
                      borderRadius: '1px',
                    }}
                  />
                  <div
                    style={{
                      width: '6px',
                      height: '2px',
                      backgroundColor: 'var(--io-border)',
                      borderRadius: '1px',
                    }}
                  />
                </div>
                {/* CTA small */}
                <div
                  style={{
                    width: '16px',
                    height: '3px',
                    backgroundColor: 'var(--io-action)',
                    borderRadius: '1px',
                    flexShrink: 0,
                  }}
                />
              </div>
              {/* Hero / Content Section */}
              <div
                style={{
                  flex: 1,
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                {/* Hero Title */}
                <div
                  style={{
                    height: '12px',
                    backgroundColor: 'var(--io-action)',
                    borderRadius: '2px',
                    width: '90%',
                  }}
                />
                {/* Hero Subtitle */}
                <div
                  style={{
                    height: '5px',
                    backgroundColor: 'var(--io-border)',
                    borderRadius: '1px',
                    width: '75%',
                  }}
                />
                {/* Visual area (image) */}
                <div
                  style={{
                    flex: 1,
                    backgroundColor: 'var(--io-bg)',
                    borderRadius: '2px',
                    marginTop: '3px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {/* Small accent dot */}
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--io-action)',
                      opacity: 0.2,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Mobile Web — Responsive version */}
            <div
              style={{
                width: '110px',
                height: '160px',
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '6px solid #1a1a1a',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Mobile Header */}
              <div
                style={{
                  height: '20px',
                  backgroundColor: 'white',
                  borderBottom: '1px solid var(--io-border)',
                  padding: '5px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '6px',
                }}
              >
                {/* Logo */}
                <div
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--io-action)',
                    flexShrink: 0,
                  }}
                />
                {/* Menu icon */}
                <div
                  style={{
                    width: '4px',
                    height: '3px',
                    backgroundColor: 'var(--io-border)',
                    borderRadius: '1px',
                    flexShrink: 0,
                  }}
                />
              </div>
              {/* Mobile Hero / Content */}
              <div
                style={{
                  flex: 1,
                  padding: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}
              >
                {/* Hero Title */}
                <div
                  style={{
                    height: '8px',
                    backgroundColor: 'var(--io-action)',
                    borderRadius: '1px',
                    width: '85%',
                  }}
                />
                {/* Hero Subtitle */}
                <div
                  style={{
                    height: '3px',
                    backgroundColor: 'var(--io-border)',
                    borderRadius: '1px',
                    width: '60%',
                  }}
                />
                {/* Visual area */}
                <div
                  style={{
                    flex: 1,
                    backgroundColor: 'var(--io-bg)',
                    borderRadius: '1px',
                    marginTop: '2px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    paddingBottom: '2px',
                    paddingLeft: '2px',
                  }}
                >
                  {/* Button indicator */}
                  <div
                    style={{
                      width: '10px',
                      height: '2px',
                      backgroundColor: 'var(--io-action)',
                      borderRadius: '1px',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Accent note with small accent bar */}
          <div
            style={{
              position: 'absolute',
              bottom: '24px',
              right: '24px',
              fontSize: '11px',
              color: 'var(--io-accent)',
              fontWeight: 700,
              lineHeight: 1.4,
              textAlign: 'right',
            }}
          >
            ✦ Negocios locales.
            <br />
            Grandes oportunidades.
          </div>
        </div>
      </div>

      {/* Responsive Grid adjustments */}
      <style>
        {`
          @media (max-width: 1024px) {
            .hero-section {
              paddingTop: 60px !important;
              paddingBottom: 60px !important;
            }
            .hero-grid {
              grid-template-columns: 1fr !important;
              gap: 60px !important;
            }
          }
          @media (max-width: 768px) {
            .hero-section {
              paddingTop: 40px !important;
              paddingBottom: 40px !important;
            }
            .hero-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
            .benefits-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 16px !important;
            }
          }
          @media (max-width: 430px) {
            .hero-section {
              paddingTop: 32px !important;
              paddingBottom: 32px !important;
            }
            .hero-grid {
              grid-template-columns: 1fr !important;
              gap: 24px !important;
            }
            .benefits-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 12px !important;
              marginTop: 24px !important;
            }
            .hero-cta {
              width: 100% !important;
              padding: 16px 20px !important;
              font-size: 15px !important;
            }
            .hero-h1 {
              font-size: 36px !important;
              line-height: 1.25 !important;
            }
          }
          @media (max-width: 375px) {
            .hero-section {
              padding-top: 32px !important;
              padding-bottom: 32px !important;
              padding-left: 16px !important;
              padding-right: 16px !important;
            }
            .hero-grid {
              grid-template-columns: 1fr !important;
              gap: 24px !important;
              align-items: stretch !important;
            }
            .hero-eyebrow {
              font-size: 11px !important;
              padding: 6px 12px !important;
              margin-bottom: 16px !important;
            }
            .hero-h1 {
              font-size: 32px !important;
              line-height: 1.35 !important;
              max-width: 100% !important;
              margin-bottom: 14px !important;
            }
            .hero-description {
              font-size: 14px !important;
              max-width: 100% !important;
              margin-bottom: 18px !important;
              line-height: 1.6 !important;
            }
            .hero-cta {
              width: 100% !important;
              padding: 12px 16px !important;
              font-size: 14px !important;
              min-height: 44px !important;
            }
            .benefits-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 8px !important;
              margin-top: 16px !important;
              padding-top: 16px !important;
              border-top: 1px solid var(--io-border) !important;
            }
            .benefits-grid > div {
              font-size: 11px !important;
              line-height: 1.4 !important;
              gap: 6px !important;
            }
            .hero-mockup {
              min-height: 280px !important;
              padding: 24px 16px !important;
              margin-top: 8px !important;
            }
          }
        `}
      </style>
    </section>
  );
}
