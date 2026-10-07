'use client';

import Image from 'next/image';

const CARDS = [
  { title: 'Generación de contactos', copy: 'Capta clientes interesados en tu negocio.', img: '/assets/img/campanas/objetivo-generacion-contactos.webp' },
  { title: 'Ventas y reservas', copy: 'Impulsa ventas online o reservas.', img: '/assets/img/campanas/objetivo-ventas-y-reservas.webp' },
  { title: 'Reconocimiento de marca', copy: 'Llega a más personas y da a conocer tu negocio.', img: '/assets/img/campanas/objetivo-reconocimiento-de-marca.webp' },
];

export default function Objetivos() {
  return (
    <section className="ob-section">
      <div className="ob-container">
        <div className="ob-header">
          <span className="ob-eyebrow">Soluciones para diferentes objetivos</span>
          <h2 className="ob-title">Llega al cliente adecuado en el momento adecuado</h2>
        </div>

        <div className="ob-grid">
          {CARDS.map((c) => (
            <article key={c.title} className="ob-card">
              <span className="ob-card__media">
                <Image src={c.img} alt="" width={800} height={800} sizes="(max-width: 767px) 280px, 320px" className="ob-card__img" />
              </span>
              <h3 className="ob-card__title">{c.title}</h3>
              <p className="ob-card__copy">{c.copy}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .ob-section { padding: 56px 20px; background-color: #fff; }
        .ob-container { max-width: 1000px; margin: 0 auto; }
        .ob-header { text-align: center; margin-bottom: 32px; }
        .ob-eyebrow {
          display: inline-block; background: var(--io-bg-soft); color: var(--io-action); font-size: 12px;
          font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 6px 14px;
          border-radius: var(--io-radius-md); margin-bottom: 14px;
        }
        .ob-title { font-size: clamp(24px, 3.6vw, 32px); font-weight: 700; color: var(--io-text); line-height: 1.25; margin: 0 auto; max-width: 560px; }

        .ob-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .ob-card {
          display: flex; flex-direction: column; align-items: center; text-align: center; gap: 8px;
          padding: 22px 16px; background: var(--io-bg-soft); border: 1px solid var(--io-border); border-radius: var(--io-radius-lg);
        }
        .ob-card__media { display: block; width: 100%; aspect-ratio: 1 / 1; background: #fff; border-radius: var(--io-radius-md); overflow: hidden; margin-bottom: 6px; }
        .ob-card__img { display: block; width: 100%; height: 100%; object-fit: contain; }
        .ob-card__title { font-size: 16px; font-weight: 700; color: var(--io-text); margin: 4px 0 0; }
        .ob-card__copy { font-size: 13.5px; line-height: 1.45; color: var(--io-text-muted); margin: 0; }

        @media (max-width: 767px) {
          .ob-section { padding: 40px 20px; }
          .ob-header { margin-bottom: 24px; }
          .ob-grid { grid-template-columns: 1fr; gap: 12px; }
          .ob-card { padding: 16px; }
          .ob-card__media { max-width: 280px; }
        }
        @media (max-width: 430px) { .ob-section { padding: 32px 16px; } }
      `}</style>
    </section>
  );
}
