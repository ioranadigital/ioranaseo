import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos Legales | IORANA SEO',
  description:
    'Términos y condiciones de uso de IORANA SEO. Lee nuestras políticas y acuerdos.',
  openGraph: {
    title: 'Términos Legales | IORANA SEO',
    description:
      'Términos y condiciones de uso de IORANA SEO. Lee nuestras políticas y acuerdos.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function LegalIndexPage() {
  return (
    <section
      style={{
        paddingTop: '60px',
        paddingBottom: '60px',
        paddingLeft: '20px',
        paddingRight: '20px',
        backgroundColor: 'var(--io-bg)',
      }}
    >
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <div className="legal-content">
          <h1
            style={{
              marginBottom: '32px',
              fontSize: '42px',
              fontWeight: '700',
              color: 'var(--io-text-primary)',
            }}
          >
            Información Legal
          </h1>

          <p
            style={{
              marginBottom: '24px',
              lineHeight: '1.6',
              color: 'var(--io-text-secondary)',
              fontSize: '16px',
            }}
          >
            En esta sección encontrarás información importante sobre nuestras políticas y términos de uso.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px',
              marginTop: '48px',
            }}
          >
            <a
              href="/legal/privacidad"
              style={{
                padding: '24px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--io-action)';
                e.currentTarget.style.backgroundColor = '#f9f9f9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e0e0e0';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <h3
                style={{
                  marginBottom: '12px',
                  fontSize: '20px',
                  fontWeight: '600',
                  color: 'var(--io-text-primary)',
                }}
              >
                Política de Privacidad
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--io-text-secondary)',
                  lineHeight: '1.5',
                }}
              >
                Conoce cómo tratamos tus datos personales y tus derechos.
              </p>
            </a>

            <a
              href="/legal/cookies"
              style={{
                padding: '24px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--io-action)';
                e.currentTarget.style.backgroundColor = '#f9f9f9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e0e0e0';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <h3
                style={{
                  marginBottom: '12px',
                  fontSize: '20px',
                  fontWeight: '600',
                  color: 'var(--io-text-primary)',
                }}
              >
                Política de Cookies
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--io-text-secondary)',
                  lineHeight: '1.5',
                }}
              >
                Información sobre las cookies que utilizamos en nuestro sitio.
              </p>
            </a>

            <a
              href="/legal/aviso-legal"
              style={{
                padding: '24px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--io-action)';
                e.currentTarget.style.backgroundColor = '#f9f9f9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e0e0e0';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <h3
                style={{
                  marginBottom: '12px',
                  fontSize: '20px',
                  fontWeight: '600',
                  color: 'var(--io-text-primary)',
                }}
              >
                Aviso Legal
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--io-text-secondary)',
                  lineHeight: '1.5',
                }}
              >
                Términos y condiciones de uso de nuestro sitio web.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
