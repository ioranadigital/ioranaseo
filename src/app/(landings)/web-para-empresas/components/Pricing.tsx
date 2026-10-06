'use client';

import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: 'Esencial',
      price: 'Desde 1.490 €',
      period: '+ IVA',
      description: 'Para negocios que necesitan una presencia profesional sencilla.',
      features: [
        'Diseño profesional',
        'Hasta 5 páginas',
        'SEO inicial',
        'Formulario de contacto',
      ],
      cta: 'Quiero este plan',
      href: '/contacto/',
      recommended: false,
    },
    {
      name: 'Web de Captación',
      price: '2.490 €',
      period: '+ IVA',
      description: 'Para convertir tu web en una verdadera herramienta comercial.',
      features: [
        'Diseño personalizado',
        'Hasta 8 páginas',
        'SEO desde el inicio',
        'Analytics y conversiones',
        'Formularios y CTA',
        'Orientación a captación',
      ],
      cta: 'Analizar mi proyecto',
      href: '/diagnostico/',
      recommended: true,
    },
    {
      name: 'Growth',
      price: 'Desde 3.490 €',
      period: '+ IVA',
      description:
        'Para proyectos que necesitan mayor alcance y capacidad de crecimiento.',
      features: [
        'Arquitectura ampliada',
        'SEO estratégico',
        'Landings adicionales',
        'Contenido optimizado',
        'Necesidades avanzadas',
        'Acompañamiento',
      ],
      cta: 'Quiero saber más',
      href: '/contacto/',
      recommended: false,
    },
  ];

  return (
    <section
      id="precios"
      className="pricing-section pr-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'var(--io-bg)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Title */}
        <div className="pr-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 44px)',
              fontWeight: 700,
              color: 'var(--io-text)',
              lineHeight: 1.2,
              margin: '0 0 24px 0',
            }}
          >
            Planes para cada necesidad
          </h2>
          <p
            style={{
              fontSize: '17px',
              color: 'var(--io-text-muted)',
              margin: '0',
              lineHeight: 1.5,
            }}
          >
            Una solución adaptada al momento de tu negocio.
          </p>
        </div>

        {/* 3 Cards — Recommended first on mobile */}
        <div
          className="pricing-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
            marginBottom: '60px',
          }}
        >
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`pricing-card pr-card ${plan.recommended ? 'recommended' : ''}`}
              style={{
                position: 'relative',
                padding: plan.recommended ? '48px 32px 40px' : '40px 32px',
                backgroundColor: 'white',
                borderRadius: 'var(--io-radius-md)',
                border: plan.recommended ? '3px solid var(--io-action)' : '1px solid var(--io-border)',
                display: 'flex',
                flexDirection: 'column',
                transform: plan.recommended ? 'translateY(-16px)' : 'translateY(0)',
                boxShadow: plan.recommended
                  ? '0 20px 50px rgba(51, 111, 230, 0.15)'
                  : '0 2px 8px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.2s',
                order: plan.recommended ? -1 : index,
              }}
            >
              {/* Badge */}
              {plan.recommended && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'var(--io-accent)',
                    color: 'var(--io-text)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  Recomendada
                </div>
              )}

              {/* Name */}
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--io-text)',
                  margin: '0 0 8px 0',
                  marginTop: plan.recommended ? '20px' : '0',
                }}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div
                className="pr-price"
                style={{
                  marginBottom: '24px',
                }}
              >
                <div
                  style={{
                    fontSize: '32px',
                    fontWeight: 700,
                    color: 'var(--io-action)',
                  }}
                >
                  {plan.price}
                </div>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--io-text-muted)',
                    margin: '4px 0 0 0',
                  }}
                >
                  {plan.period}
                </p>
              </div>

              {/* Description */}
              <p
                className="pr-desc"
                style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: 'var(--io-text-muted)',
                  margin: '0 0 24px 0',
                }}
              >
                {plan.description}
              </p>

              {/* Features */}
              <div
                className="pr-features"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  marginBottom: '32px',
                  flex: 1,
                }}
              >
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="pr-feature"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      fontSize: '14px',
                      color: 'var(--io-text-muted)',
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        color: 'var(--io-action)',
                        fontWeight: 700,
                        marginTop: '2px',
                      }}
                    >
                      •
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={plan.href}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '12px 24px',
                  backgroundColor: plan.recommended
                    ? 'var(--io-accent-dark)'
                    : 'var(--io-bg-soft)',
                  color: plan.recommended ? 'white' : 'var(--io-action)',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  borderRadius: 'var(--io-radius-md)',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  boxShadow: plan.recommended ? '0 6px 16px rgba(246, 119, 82, 0.35)' : 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = plan.recommended
                    ? 'var(--io-accent-dark-hover)'
                    : 'var(--io-border)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = plan.recommended
                    ? 'var(--io-accent-dark)'
                    : 'var(--io-bg-soft)';
                }}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Maintenance Note */}
        <div
          style={{
            textAlign: 'center',
            paddingTop: '20px',
            borderTop: '1px solid var(--io-border)',
          }}
        >
          <p
            style={{
              fontSize: '15px',
              color: 'var(--io-text-muted)',
              margin: '0',
              lineHeight: 1.5,
            }}
          >
            <strong>Mantenimiento opcional desde 59 €/mes + IVA.</strong>
            <br />
            Hosting, seguridad, copias de seguridad y actualizaciones.
          </p>
        </div>
      </div>

      <style>{`
        /* Micro polish: solo densidad/spacing en mobile — sin ocultar contenido ni cambiar precios */
        @media (max-width: 1024px) {
          .pr-section { padding: 60px 20px !important; }
        }
        @media (max-width: 767px) {
          .pr-section { padding: 40px 20px !important; }
          .pr-header { margin-bottom: 36px !important; }
        }
        @media (max-width: 430px) {
          .pr-section { padding: 32px 20px !important; }
          .pricing-grid { gap: 20px !important; margin-bottom: 32px !important; }
          .pr-card { padding: 28px 24px !important; }
          .pr-card.recommended { padding: 34px 24px 28px !important; }
          .pr-price { margin-bottom: 16px !important; }
          .pr-desc { margin-bottom: 16px !important; }
          .pr-features { gap: 8px !important; margin-bottom: 20px !important; }
        }
        @media (max-width: 375px) {
          .pr-section { padding: 32px 16px !important; }
        }
      `}</style>
    </section>
  );
}
