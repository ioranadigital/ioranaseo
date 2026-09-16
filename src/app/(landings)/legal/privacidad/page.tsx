import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | IORANA SEO',
  description:
    'Política de privacidad de IORANA SEO. Conoce cómo protegemos tus datos personales.',
  openGraph: {
    title: 'Política de Privacidad | IORANA SEO',
    description:
      'Política de privacidad de IORANA SEO. Conoce cómo protegemos tus datos personales.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function PrivacyPage() {
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
          maxWidth: '900px',
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
            Política de Privacidad
          </h1>

          <p
            style={{
              marginBottom: '24px',
              lineHeight: '1.6',
              color: 'var(--io-text-secondary)',
              fontSize: '16px',
            }}
          >
            La información personal que recopilamos se utiliza exclusivamente para proporcionar nuestros
            servicios y mejorar tu experiencia. No compartimos tu información con terceros sin tu
            consentimiento expreso.
          </p>

          <h2
            style={{
              marginTop: '40px',
              marginBottom: '20px',
              fontSize: '24px',
              fontWeight: '600',
              color: 'var(--io-text-primary)',
            }}
          >
            1. Recopilación de Datos
          </h2>
          <p
            style={{
              marginBottom: '16px',
              lineHeight: '1.6',
              color: 'var(--io-text-secondary)',
            }}
          >
            Recopilamos información personal cuando utilizas nuestro sitio web, incluyendo tu nombre,
            correo electrónico, teléfono y otros datos que voluntariamente nos proporcionas a través de
            formularios de contacto.
          </p>

          <h2
            style={{
              marginTop: '40px',
              marginBottom: '20px',
              fontSize: '24px',
              fontWeight: '600',
              color: 'var(--io-text-primary)',
            }}
          >
            2. Uso de Datos
          </h2>
          <p
            style={{
              marginBottom: '16px',
              lineHeight: '1.6',
              color: 'var(--io-text-secondary)',
            }}
          >
            Utilizamos tus datos para:
          </p>
          <ul
            style={{
              marginBottom: '16px',
              marginLeft: '20px',
              color: 'var(--io-text-secondary)',
              lineHeight: '1.6',
            }}
          >
            <li>Proporcionar nuestros servicios de marketing digital</li>
            <li>Enviar comunicaciones relacionadas con tu solicitud</li>
            <li>Mejorar nuestros servicios y experiencia del usuario</li>
            <li>Cumplir con obligaciones legales</li>
          </ul>

          <h2
            style={{
              marginTop: '40px',
              marginBottom: '20px',
              fontSize: '24px',
              fontWeight: '600',
              color: 'var(--io-text-primary)',
            }}
          >
            3. Protección de Datos
          </h2>
          <p
            style={{
              marginBottom: '16px',
              lineHeight: '1.6',
              color: 'var(--io-text-secondary)',
            }}
          >
            Implementamos medidas técnicas y organizativas para proteger tu información personal contra
            acceso no autorizado, alteración, divulgación o destrucción.
          </p>

          <h2
            style={{
              marginTop: '40px',
              marginBottom: '20px',
              fontSize: '24px',
              fontWeight: '600',
              color: 'var(--io-text-primary)',
            }}
          >
            4. Derechos del Usuario
          </h2>
          <p
            style={{
              marginBottom: '16px',
              lineHeight: '1.6',
              color: 'var(--io-text-secondary)',
            }}
          >
            Tienes derecho a acceder, rectificar, suprimir u oponerle a nuestro procesamiento de tus
            datos personales. Para ejercer estos derechos, contáctanos en:{' '}
            <strong>info@ioranaseo.com</strong>
          </p>

          <h2
            style={{
              marginTop: '40px',
              marginBottom: '20px',
              fontSize: '24px',
              fontWeight: '600',
              color: 'var(--io-text-primary)',
            }}
          >
            5. Cambios en Esta Política
          </h2>
          <p
            style={{
              marginBottom: '16px',
              lineHeight: '1.6',
              color: 'var(--io-text-secondary)',
            }}
          >
            Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Los
            cambios serán efectivos al momento de su publicación en este sitio.
          </p>

          <div
            style={{
              marginTop: '48px',
              paddingTop: '24px',
              borderTop: '1px solid #e0e0e0',
            }}
          >
            <p
              style={{
                fontSize: '14px',
                color: 'var(--io-text-secondary)',
              }}
            >
              Última actualización: 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
