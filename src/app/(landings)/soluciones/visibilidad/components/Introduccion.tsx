'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

/* Logos de canal definitivos aportados por el cliente. Ojo: las directrices de Google exigen aprobación previa para
   usar su «G» / iconos de producto en marketing (ver docs/analysis/VISIBILIDAD_VISUAL_ASSETS.md §3.2).
   Cada PNG tiene un padding transparente distinto, así que el tamaño de render se ajusta por logo para igualar el
   peso visual (contenido aparente ≈ 22–24 px; el PNG de Google está recortado al logo, sin margen dentro del círculo de 40 px). */
const LOGO_BASE = '/assets/img/visibilidad/canales';

function GoogleMark() {
  return <Image className="vi-logo" src={`${LOGO_BASE}/google.png`} alt="" width={24} height={24} />;
}

function MapsMark() {
  return <Image className="vi-logo" src={`${LOGO_BASE}/google-maps.png`} alt="" width={17} height={24} />;
}

function AssistantMark() {
  return <Image className="vi-logo" src={`${LOGO_BASE}/inteligencia-artificial.png`} alt="" width={23} height={23} />;
}

const CANALES = [
  { Mark: GoogleMark, title: 'Google', text: 'Buscan servicios, comparan y eligen.' },
  { Mark: MapsMark, title: 'Maps', text: 'Buscan negocios cercanos en su zona.' },
  { Mark: AssistantMark, title: 'Inteligencia artificial', text: 'Piden recomendaciones y opciones fiables.' },
];

export default function Introduccion() {
  return (
    <section className="vi-section">
      <div className="vi-container">
        <span className="vi-eyebrow">Visibilidad en buscadores e IA</span>
        <h2 className="vi-title">
          Tus clientes ya no buscan siempre <span className="vi-title__accent">de la misma manera</span>
        </h2>
        <p className="vi-copy">
          Algunos buscan servicios en Google. Otros comparan negocios cercanos en Maps. Y cada vez más
          personas utilizan asistentes de inteligencia artificial para informarse y encontrar soluciones.
          Trabajamos tu visibilidad para que tu negocio tenga una presencia clara, relevante y competitiva
          en los canales donde buscan tus clientes.
        </p>

        <div className="vi-row">
          {CANALES.map((c, i) => {
            const Mark = c.Mark;
            return (
              <Fragment key={c.title}>
                {i > 0 && (
                  <span className="vi-arrow" aria-hidden="true">
                    <ArrowRight size={18} strokeWidth={2.4} />
                  </span>
                )}
                <div className="vi-item">
                  <span className="vi-item__icon">
                    <Mark />
                  </span>
                  <div className="vi-item__copy">
                    <strong>{c.title}</strong>
                    <p>{c.text}</p>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>

      <style>{`
        .vi-section { padding: 56px 20px; background-color: #fff; }
        /* Contenedor del mismo ancho que el bloque de soluciones (1120px); el texto conserva su medida de lectura. */
        .vi-container { max-width: 1120px; margin: 0 auto; text-align: center; }
        .vi-eyebrow {
          display: inline-block; background: var(--io-bg-soft); color: var(--io-action); font-size: 12px;
          font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 6px 14px;
          border-radius: var(--io-radius-md); margin-bottom: 14px;
        }
        .vi-title { font-size: clamp(26px, 4vw, 36px); font-weight: 700; color: var(--io-text); line-height: 1.3; max-width: 900px; margin: 0 auto 16px; }
        .vi-title__accent { color: var(--io-action); display: block; }
        .vi-copy { font-size: 16px; line-height: 1.65; color: var(--io-text-muted); max-width: 780px; margin: 0 auto 36px; }

        /* Tres tarjetas independientes unidas por flechas de izquierda a derecha. */
        .vi-row { display: flex; align-items: stretch; justify-content: center; gap: 12px; }
        .vi-item {
          display: flex; align-items: center; gap: 14px; flex: 1 1 0; min-width: 0; padding: 22px 24px; text-align: left;
          background: var(--io-bg); border: 1px solid var(--io-border); border-radius: var(--io-radius-lg);
        }
        .vi-item__icon {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 40px; height: 40px;
          border-radius: 50%; background: #fff; border: 1px solid var(--io-border); color: var(--io-action);
        }
        .vi-logo { display: block; flex: none; object-fit: contain; }
        .vi-item__copy { text-align: left; min-width: 0; }
        .vi-item__copy strong { display: block; font-size: 15px; font-weight: 700; color: var(--io-text); }
        .vi-item__copy p { margin: 2px 0 0; font-size: 13px; line-height: 1.4; color: var(--io-text-muted); }
        .vi-arrow {
          align-self: center; flex: none; display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px;
          border-radius: 50%; background: #fff; border: 1px solid var(--io-border); color: var(--io-action);
        }

        /* Tablet: en fila, con el icono sobre el texto para que las tarjetas no queden estrechas. */
        @media (min-width: 768px) and (max-width: 1023px) {
          .vi-item { flex-direction: column; align-items: flex-start; gap: 12px; padding: 18px 16px; }
        }
        @media (max-width: 767px) {
          .vi-section { padding: 40px 20px; }
          .vi-row { flex-direction: column; align-items: stretch; gap: 10px; }
          .vi-item { flex: none; padding: 18px 20px; }
          .vi-arrow { transform: rotate(90deg); }
        }
        @media (max-width: 430px) { .vi-section { padding: 32px 16px; } }
      `}</style>
    </section>
  );
}
