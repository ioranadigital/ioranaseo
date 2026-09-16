import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviso Legal | IORANA SEO',
  description:
    'Aviso Legal y Términos de Uso de IORANA SEO. Lee nuestros términos y condiciones.',
  openGraph: {
    title: 'Aviso Legal | IORANA SEO',
    description:
      'Aviso Legal y Términos de Uso de IORANA SEO. Lee nuestros términos y condiciones.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function LegalNoticePage() {
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
            Aviso Legal
          </h1>

          <p
            style={{
              marginBottom: '24px',
              lineHeight: '1.6',
              color: 'var(--io-text-secondary)',
              fontSize: '16px',
            }}
          >
            Bienvenido a Iorana SEO. Los siguientes términos y condiciones rigen el uso de nuestro sitio
            web y servicios. Al acceder y utilizar este sitio, aceptas cumplir con estos términos.
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
            1. Uso de Licencia
          </h2>
          <p
            style={{
              marginBottom: '16px',
              lineHeight: '1.6',
              color: 'var(--io-text-secondary)',
            }}
          >
            Se te otorga una licencia limitada, no exclusiva y revocable para acceder y hacer uso del
            sitio web para propósitos legales únicamente. No está permitido modificar, reproducir o
            distribuir el contenido sin permiso expreso.
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
            2. Descargo de Responsabilidad
          </h2>
          <p
            style={{
              marginBottom: '16px',
              lineHeight: '1.6',
              color: 'var(--io-text-secondary)',
            }}
          >
            El contenido y servicios en este sitio se proporcionan "tal como están" sin garantías de
            ningún tipo, explícitas o implícitas. Iorana SEO no es responsable por ningún daño directo,
            indirecto, incidental o consecuente derivado del uso de este sitio.
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
            3. Limitaciones de Responsabilidad
          </h2>
          <p
            style={{
              marginBottom: '16px',
              lineHeight: '1.6',
              color: 'var(--io-text-secondary)',
            }}
          >
            En ningún caso Iorana SEO será responsable por pérdidas de datos, ganancias perdidas o
            cualquier daño especial, incidental o consecuente resultante del acceso o uso del sitio.
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
            4. Modificaciones
          </h2>
          <p
            style={{
              marginBottom: '16px',
              lineHeight: '1.6',
              color: 'var(--io-text-secondary)',
            }}
          >
            Iorana SEO se reserva el derecho de modificar estos términos en cualquier momento. Los cambios
            serán efectivos al momento de su publicación en el sitio.
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
            5. Contacto
          </h2>
          <p
            style={{
              marginBottom: '16px',
              lineHeight: '1.6',
              color: 'var(--io-text-secondary)',
            }}
          >
            Si tienes preguntas sobre estos términos, por favor contáctanos en:
            <br />
            <strong>Email: info@ioranaseo.com</strong>
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
