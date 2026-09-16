import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies | IORANA SEO',
  description:
    'Política de cookies de IORANA SEO. Información sobre las cookies que utilizamos.',
  openGraph: {
    title: 'Política de Cookies | IORANA SEO',
    description:
      'Política de cookies de IORANA SEO. Información sobre las cookies que utilizamos.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function CookiesPage() {
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
            Política de Cookies
          </h1>

          <p
            style={{
              marginBottom: '24px',
              lineHeight: '1.6',
              color: 'var(--io-text-secondary)',
              fontSize: '16px',
            }}
          >
            Este sitio utiliza cookies para mejorar la experiencia del usuario. Al continuar navegando,
            aceptas el uso de cookies de acuerdo con nuestra política.
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
            ¿Qué son las cookies?
          </h2>
          <p
            style={{
              marginBottom: '16px',
              lineHeight: '1.6',
              color: 'var(--io-text-secondary)',
            }}
          >
            Las cookies son pequeños archivos de texto que se almacenan en tu navegador. Se utilizan para
            recordar preferencias, mejorar la funcionalidad del sitio y analizar el uso.
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
            Tipos de Cookies
          </h2>
          <ul
            style={{
              marginBottom: '16px',
              marginLeft: '20px',
              color: 'var(--io-text-secondary)',
              lineHeight: '1.6',
            }}
          >
            <li>
              <strong>Cookies Esenciales:</strong> Necesarias para el funcionamiento básico del sitio
            </li>
            <li>
              <strong>Cookies de Análisis:</strong> Nos ayudan a entender cómo usas el sitio
            </li>
            <li>
              <strong>Cookies de Funcionalidad:</strong> Mejoran la experiencia del usuario
            </li>
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
            Cómo Gestionar Cookies
          </h2>
          <p
            style={{
              marginBottom: '16px',
              lineHeight: '1.6',
              color: 'var(--io-text-secondary)',
            }}
          >
            Puedes controlar y eliminar cookies desde la configuración de tu navegador. Sin embargo,
            algunas cookies son necesarias para que el sitio funcione correctamente.
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
