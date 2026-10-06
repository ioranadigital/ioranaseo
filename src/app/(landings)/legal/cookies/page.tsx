import type { Metadata } from 'next';
import LegalHero from '../components/LegalHero';

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
    <>
      <LegalHero
        title="Política de cookies"
        intro="Qué son las cookies, qué categorías utilizamos realmente y cómo puedes cambiar tu elección en cualquier momento."
      />

      <div className="lgl-doc">
        <div className="lgl-doc__section">
          <h2>¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos que un sitio web puede guardar en tu navegador para
            recordar información entre visitas. En este sitio, tu elección de cookies se guarda mediante{' '}
            <strong>almacenamiento local del navegador (localStorage)</strong>, no mediante una cookie
            HTTP tradicional.
          </p>
        </div>

        <div className="lgl-doc__section">
          <h2>Categorías que utilizamos</h2>
          <p>
            Actualmente el panel de preferencias de este sitio distingue dos categorías:
          </p>
          <ul>
            <li>
              <strong>Necesarias:</strong> imprescindibles para el funcionamiento básico del sitio.
              Siempre activas, no se pueden desactivar.
            </li>
            <li>
              <strong>Analítica:</strong> nos ayudaría a entender cómo se usa el sitio para mejorarlo.
              Solo se activa si das tu consentimiento.
            </li>
          </ul>
          <p className="lgl-doc__note">
            Estado actual: el sitio no tiene instalado ningún script de analítica (Google Analytics u
            otro) en el momento de esta revisión. Aceptar la categoría &quot;Analítica&quot; guarda tu
            preferencia para cuando se active, pero hoy no se envía ni se recibe ningún dato de
            medición ni se instala ninguna cookie de terceros.
          </p>
        </div>

        <div className="lgl-doc__section">
          <h2>Cookies y almacenamiento en uso</h2>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Finalidad</th>
                <th>Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>iorana-cookie-consent</td>
                <td>localStorage (necesaria)</td>
                <td>Recuerda tu elección de cookies para no volver a preguntarte</td>
                <td>Hasta que borres los datos del sitio en tu navegador</td>
              </tr>
            </tbody>
          </table>
          <p>
            No se listan cookies de analítica o de terceros porque, a fecha de esta política, no hay
            ninguna activa en el sitio.
          </p>
        </div>

        <div className="lgl-doc__section">
          <h2>Cómo cambiar tu elección</h2>
          <p>
            Puedes modificar tu elección en cualquier momento desde{' '}
            <strong>&quot;Preferencias de cookies&quot;</strong>, disponible en el pie de página de
            cualquier sección del sitio y en la navegación de esta página legal.
          </p>
          <p>
            También puedes eliminar cookies y datos de sitios directamente desde la configuración de tu
            navegador.
          </p>
        </div>

        <p className="lgl-doc__updated">Última actualización: 2026</p>
      </div>
    </>
  );
}
