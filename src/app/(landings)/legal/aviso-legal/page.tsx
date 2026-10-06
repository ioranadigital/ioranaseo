import type { Metadata } from 'next';
import LegalHero from '../components/LegalHero';

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
    <>
      <LegalHero
        title="Aviso legal"
        intro="Condiciones que rigen el uso de este sitio web y de nuestros servicios."
      />

      <div className="lgl-doc">
        <p>
          Bienvenido a IORANA SEO. Los siguientes términos y condiciones rigen el uso de nuestro sitio
          web y servicios. Al acceder y utilizar este sitio, aceptas cumplir con estos términos.
        </p>

        <div className="lgl-doc__section">
          <h2>1. Uso de licencia</h2>
          <p>
            Se te otorga una licencia limitada, no exclusiva y revocable para acceder y hacer uso del
            sitio web para propósitos legales únicamente. No está permitido modificar, reproducir o
            distribuir el contenido sin permiso expreso.
          </p>
        </div>

        <div className="lgl-doc__section">
          <h2>2. Descargo de responsabilidad</h2>
          <p>
            El contenido y servicios en este sitio se proporcionan &quot;tal como están&quot; sin
            garantías de ningún tipo, explícitas o implícitas. IORANA SEO no es responsable por ningún
            daño directo, indirecto, incidental o consecuente derivado del uso de este sitio.
          </p>
        </div>

        <div className="lgl-doc__section">
          <h2>3. Limitaciones de responsabilidad</h2>
          <p>
            En ningún caso IORANA SEO será responsable por pérdidas de datos, ganancias perdidas o
            cualquier daño especial, incidental o consecuente resultante del acceso o uso del sitio.
          </p>
        </div>

        <div className="lgl-doc__section">
          <h2>4. Modificaciones</h2>
          <p>
            IORANA SEO se reserva el derecho de modificar estos términos en cualquier momento. Los
            cambios serán efectivos al momento de su publicación en el sitio.
          </p>
        </div>

        <div className="lgl-doc__section">
          <h2>5. Contacto</h2>
          <p>
            Si tienes preguntas sobre estos términos, por favor contáctanos en{' '}
            <strong>info@ioranaseo.com</strong>.
          </p>
        </div>

        <p className="lgl-doc__updated">Última actualización: 2026</p>
      </div>
    </>
  );
}
