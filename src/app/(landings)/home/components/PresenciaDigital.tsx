import Image from 'next/image';

const IMG_BASE = '/assets/img/home/presencia-digital';

const STEPS = [
  {
    id: 'encuentran',
    title: 'Te encuentran',
    description: 'Trabajamos tu visibilidad para aparecer cuando tus clientes buscan lo que ofreces.',
    image: `${IMG_BASE}/te-encuentran.webp`,
  },
  {
    id: 'entienden',
    title: 'Te entienden',
    description: 'Organizamos tu presencia digital para comunicar con claridad qué haces y por qué elegirte.',
    image: `${IMG_BASE}/te-entienden.webp`,
  },
  {
    id: 'contactan',
    title: 'Contactan',
    description: 'Diseñamos recorridos, campañas y puntos de contacto para generar oportunidades.',
    image: `${IMG_BASE}/contactan.webp`,
  },
];

export default function PresenciaDigital() {
  return (
    <section className="presencia-section pj-section">
      <div className="pj-container">
        <div className="pj-header">
          <h2 className="pj-title">De la presencia digital a las oportunidades</h2>
          <p className="pj-sub">
            No se trata solo de estar online. Se trata de convertir esa presencia en negocio.
          </p>
        </div>

        <ol className="pj-grid">
          {STEPS.map((step) => (
            <li key={step.id} className="pj-card">
              <div className="pj-card__media">
                <Image
                  src={step.image}
                  alt=""
                  width={724}
                  height={724}
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 340px, 90vw"
                  className="pj-card__img"
                />
              </div>
              <div className="pj-card__text">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        .pj-section { padding: 68px 20px; background-color: #fff; }
        .pj-container { max-width: 1280px; margin: 0 auto; }
        .pj-header { text-align: center; margin-bottom: 32px; }
        .pj-title {
          font-size: clamp(28px, 4.4vw, 40px); font-weight: 700; color: var(--io-text);
          line-height: 1.2; margin: 0 0 10px;
        }
        .pj-sub { font-size: 16px; color: var(--io-text-muted); margin: 0 auto; max-width: 600px; }

        .pj-grid {
          list-style: none; margin: 0 auto; padding: 0; max-width: 1200px;
          display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 40px; align-items: stretch;
        }
        .pj-card {
          position: relative; display: flex; flex-direction: column; min-width: 0; overflow: visible;
          background: #fff; border: 1px solid var(--io-border); border-radius: var(--io-radius-lg);
          box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05);
          transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
        }
        .pj-card:hover {
          transform: translateY(-3px); box-shadow: 0 8px 22px rgba(15, 23, 42, 0.09);
          border-color: color-mix(in srgb, var(--io-action) 35%, var(--io-border));
        }
        .pj-card__media { padding: 12px 12px 0; }
        .pj-card__img { display: block; width: 100%; height: auto; aspect-ratio: 1 / 0.88; object-fit: cover; object-position: center; border-radius: var(--io-radius-md); }
        .pj-card__text { padding: 20px 24px 26px; }
        .pj-card__text h3 { font-size: 20px; font-weight: 800; color: var(--io-text); margin: 0 0 12px; line-height: 1.2; }
        .pj-card__text p { font-size: 15px; line-height: 1.55; color: var(--io-text-muted); margin: 0; font-weight: 500; max-width: 34ch; }

        /* Flechas sutiles entre tarjetas (solo desktop) */
        .pj-card:not(:last-child)::after {
          content: ''; position: absolute; top: 38%; right: -27px; width: 10px; height: 10px;
          border-top: 2px solid var(--io-border); border-right: 2px solid var(--io-border);
          transform: rotate(45deg); pointer-events: none;
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .pj-section { padding: 56px 20px; }
          .pj-grid { gap: 20px; }
          .pj-card:not(:last-child)::after { display: none; }
          .pj-card__media { padding: 8px 8px 0; }
          .pj-card__text { padding: 16px 16px 20px; }
          .pj-card__text h3 { font-size: 18px; margin-bottom: 8px; }
          .pj-card__text p { font-size: 14px; }
        }
        @media (max-width: 767px) {
          .pj-section { padding: 44px 20px; }
          .pj-header { margin-bottom: 24px; }
          .pj-sub { font-size: 15px; }
          .pj-grid { grid-template-columns: minmax(0, 1fr); gap: 20px; max-width: 420px; }
          .pj-card:not(:last-child)::after { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pj-card { transition: none; }
          .pj-card:hover { transform: none; }
        }
      `}</style>
    </section>
  );
}
