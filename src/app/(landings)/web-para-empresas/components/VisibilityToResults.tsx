'use client';

import Image from 'next/image';
import { Search, Pencil, CircleCheck, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    id: 'encuentran',
    title: 'Que te encuentren',
    text: 'Preparamos tu web para aparecer cuando tus clientes buscan servicios como los tuyos.',
    Icon: Search,
    tone: 'blue',
    photo: '/assets/img/web-para-empresas/journey/encontrar.webp',
    alt: 'Persona escribiendo en un portátil que muestra resultados de búsqueda',
  },
  {
    id: 'entienden',
    title: 'Que entiendan lo que haces',
    text: 'Organizamos diseño y contenido para comunicar claramente qué haces y por qué elegirte.',
    Icon: Pencil,
    tone: 'green',
    photo: '/assets/img/web-para-empresas/journey/entender.webp',
    alt: 'Dos personas revisando contenido juntas frente a un portátil',
  },
  {
    id: 'contactan',
    title: 'Que contacten',
    text: 'Facilitamos llamadas, formularios y acciones para convertir visitas en oportunidades.',
    Icon: CircleCheck,
    tone: 'peach',
    photo: '/assets/img/web-para-empresas/journey/contactar.webp',
    alt: 'Mano sosteniendo un móvil con un formulario de contacto',
  },
];

export default function VisibilityToResults() {
  return (
    <section className="wj-section">
      <div className="wj-container">
        <div className="wj-header">
          <h2 className="wj-title">De la visibilidad a los resultados</h2>
          <p className="wj-sub">Una web preparada para captar, explicada paso a paso.</p>
        </div>

        <ol className="wj-row">
          {STEPS.map((s, i) => {
            const Icon = s.Icon;
            return (
              <li key={s.id} className={`wj-step wj-step--${s.tone}`}>
                <div className="wj-card">
                  <div className="wj-head">
                    <span className="wj-icon" aria-hidden="true">
                      <Icon size={20} strokeWidth={2.2} />
                    </span>
                    <div className="wj-head__txt">
                      <span className="wj-num">{`0${i + 1}`}</span>
                      <h3 className="wj-step__title">{s.title}</h3>
                    </div>
                  </div>
                  <p className="wj-step__text">{s.text}</p>
                  <div className="wj-photo">
                    <Image
                      src={s.photo}
                      alt={s.alt}
                      fill
                      sizes="(min-width: 1024px) 304px, (min-width: 768px) 213px, 92vw"
                      className="wj-photo__img"
                    />
                  </div>
                </div>
                {i < STEPS.length - 1 && (
                  <span className="wj-arrow" aria-hidden="true">
                    <ArrowRight size={18} strokeWidth={2} />
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>

      <style>{`
        .wj-section { padding: 56px 20px; background-color: #fff; }
        .wj-container { max-width: 1120px; margin: 0 auto; }
        .wj-header { text-align: center; margin-bottom: 40px; }
        .wj-title {
          font-size: clamp(28px, 4.4vw, 40px); font-weight: 700; color: var(--io-text);
          line-height: 1.2; margin: 0 0 10px;
        }
        .wj-sub { font-size: 16px; color: var(--io-text-muted); margin: 0 auto; max-width: 560px; }

        .wj-row { --wj-gap: 44px; list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--wj-gap); }
        .wj-step { position: relative; display: flex; }

        /* Acento por tarjeta: solo icono, número y fondo del icono (azul / verde / melocotón). */
        .wj-step--blue { --wj-c: var(--io-action); --wj-soft: rgba(51, 111, 230, 0.12); }
        .wj-step--green { --wj-c: #15803d; --wj-soft: rgba(21, 128, 61, 0.12); }
        .wj-step--peach { --wj-c: var(--io-accent-dark-hover); --wj-soft: rgba(244, 162, 124, 0.28); }

        .wj-card {
          display: flex; flex: 1; flex-direction: column; min-width: 0; padding: 20px; background: var(--io-bg);
          border: 1px solid rgba(51, 111, 230, 0.22); border-radius: var(--io-radius-lg); box-shadow: 0 1px 2px rgba(15, 23, 42, 0.02);
          transition: transform 250ms ease, border-color 250ms ease, box-shadow 250ms ease;
        }
        .wj-head { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
        .wj-icon {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 40px; height: 40px;
          border-radius: 12px; background: var(--wj-soft); color: var(--wj-c);
        }
        .wj-head__txt { min-width: 0; }
        .wj-num { display: block; font-size: 12px; font-weight: 700; letter-spacing: 0.05em; line-height: 1.2; color: var(--wj-c); }
        .wj-step__title { font-size: 18px; font-weight: 700; color: var(--io-text); margin: 2px 0 0; line-height: 1.25; }
        .wj-step__text { flex: 1; font-size: 14.5px; line-height: 1.55; color: var(--io-text-muted); margin: 0 0 18px; }

        .wj-photo { position: relative; aspect-ratio: 4 / 3; overflow: hidden; border-radius: var(--io-radius-md); background: var(--io-bg-soft); }
        .wj-photo__img { object-fit: cover; transition: transform 300ms ease; }

        @media (hover: hover) {
          .wj-card:hover { transform: translateY(-2px); border-color: rgba(51, 111, 230, 0.45); box-shadow: 0 8px 20px rgba(15, 23, 42, 0.07); }
          .wj-card:hover .wj-photo__img { transform: scale(1.01); }
        }

        /* Flecha en el hueco entre tarjetas: no invade ninguna. */
        .wj-arrow {
          position: absolute; top: 0; right: calc(var(--wj-gap) * -1); width: var(--wj-gap); height: 100%;
          display: flex; align-items: center; justify-content: center; color: var(--io-action); opacity: 0.85; pointer-events: none;
        }

        @media (max-width: 1024px) {
          .wj-section { padding: 48px 20px; }
        }
        /* Títulos de hasta dos líneas: cabecera de altura fija para que las descripciones queden alineadas. */
        @media (min-width: 768px) and (max-width: 1119px) { .wj-head { min-height: 62px; } }
        @media (min-width: 768px) and (max-width: 1023px) {
          .wj-row { --wj-gap: 28px; }
          .wj-card { padding: 16px; }
          .wj-icon { width: 36px; height: 36px; border-radius: 10px; }
          .wj-step__title { font-size: 16.5px; }
          .wj-step__text { font-size: 14px; }
        }
        @media (max-width: 767px) {
          .wj-section { padding: 40px 20px; }
          .wj-header { margin-bottom: 28px; }
          .wj-sub { font-size: 15px; }
          .wj-row { --wj-gap: 34px; grid-template-columns: 1fr; }
          .wj-arrow { top: auto; right: 0; bottom: calc(var(--wj-gap) * -1); width: 100%; height: var(--wj-gap); }
          .wj-arrow svg { transform: rotate(90deg); }
        }
        @media (max-width: 375px) {
          .wj-section { padding: 32px 16px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .wj-card, .wj-photo__img { transition: none; }
          .wj-card:hover, .wj-card:hover .wj-photo__img { transform: none; }
        }
      `}</style>
    </section>
  );
}
