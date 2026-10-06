import type { Metadata } from 'next';
import LegalHero from '../components/LegalHero';

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
    <>
      <LegalHero
        title="Política de privacidad"
        intro="Información sobre cómo tratamos y protegemos tus datos personales."
      />

      <div className="lgl-doc">
        <p>
          La información personal que recopilamos se utiliza exclusivamente para proporcionar nuestros
          servicios y mejorar tu experiencia. No compartimos tu información con terceros sin tu
          consentimiento expreso.
        </p>

        <div className="lgl-doc__section">
          <h2>1. Recopilación de datos</h2>
          <p>
            Recopilamos información personal cuando utilizas nuestro sitio web, incluyendo tu nombre,
            correo electrónico, teléfono y otros datos que voluntariamente nos proporcionas a través de
            formularios de contacto.
          </p>
        </div>

        <div className="lgl-doc__section">
          <h2>2. Uso de datos</h2>
          <p>Utilizamos tus datos para:</p>
          <ul>
            <li>Proporcionar nuestros servicios de marketing digital</li>
            <li>Enviar comunicaciones relacionadas con tu solicitud</li>
            <li>Mejorar nuestros servicios y experiencia del usuario</li>
            <li>Cumplir con obligaciones legales</li>
          </ul>
        </div>

        <div className="lgl-doc__section">
          <h2>3. Protección de datos</h2>
          <p>
            Implementamos medidas técnicas y organizativas para proteger tu información personal contra
            acceso no autorizado, alteración, divulgación o destrucción.
          </p>
        </div>

        <div className="lgl-doc__section">
          <h2>4. Derechos del usuario</h2>
          <p>
            Tienes derecho a acceder, rectificar, suprimir u oponerte a nuestro procesamiento de tus
            datos personales. Para ejercer estos derechos, contáctanos en{' '}
            <strong>info@ioranaseo.com</strong>.
          </p>
        </div>

        <div className="lgl-doc__section">
          <h2>5. Cambios en esta política</h2>
          <p>
            Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Los
            cambios serán efectivos al momento de su publicación en este sitio.
          </p>
        </div>

        <p className="lgl-doc__updated">Última actualización: 2026</p>
      </div>
    </>
  );
}
