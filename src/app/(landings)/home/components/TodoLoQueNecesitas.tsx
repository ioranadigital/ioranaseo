'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, ComponentType } from 'react';
import Link from 'next/link';
import {
  Globe,
  Search,
  MapPin,
  Megaphone,
  ChartColumn,
  TrendingUp,
  ChevronRight,
  ChevronUp,
  Monitor,
  MousePointerClick,
  Gauge,
  FileText,
  Store,
  Info,
  Target,
  Users,
  FileBarChart,
  Lightbulb,
  ClipboardList,
  FlaskConical,
} from 'lucide-react';
import {
  CapWebVisual,
  CapSeoVisual,
  CapMapsVisual,
  CapAdsVisual,
  CapAnalyticsVisual,
  CapCroVisual,
} from './CapabilityVisuals';

type IconType = ComponentType<{ size?: number; strokeWidth?: number }>;

interface MicroCard {
  Icon: IconType;
  title: string;
  copy: string;
  /** posición desktop/tablet dentro del stage (horizontal en %, vertical en px) */
  pos: CSSProperties;
}

interface Capacidad {
  label: string;
  frase: string;
  Icon: IconType;
  Visual: ComponentType<{ className?: string }>;
  /** Fotografía local (ver docs/instructions/CAPABILITY_PHOTOS.md). Si falta, se muestra un placeholder. */
  photo: string;
  alt: string;
  /** recorte de la foto en desktop / móvil */
  objectPosition: string;
  objectPositionMobile: string;
  cards: MicroCard[];
  /** índices de las 2 microcards más representativas para móvil */
  mobileCards: [number, number];
  /** lado de la foto donde se apilan las 2 microcards en móvil (el opuesto a la cara) */
  mobileSide: 'left' | 'right';
}

const PHOTO_DIR = '/assets/img/home/capabilities';

const CAPACIDADES: Capacidad[] = [
  {
    label: 'Web y landing pages',
    frase: 'Webs claras y preparadas para convertir visitas en oportunidades.',
    Icon: Globe,
    Visual: CapWebVisual,
    photo: `${PHOTO_DIR}/web-business.webp`,
    alt: 'Responsable de una cafetería con una tablet en su local',
    objectPosition: '100% 50%',
    objectPositionMobile: '50% 0%',
    cards: [
      { Icon: Monitor, title: 'Diseño responsive', copy: 'Preparada para todos los dispositivos.', pos: { left: '2%', bottom: 12 } },
      { Icon: MousePointerClick, title: 'CTA claros', copy: 'Recorridos pensados para facilitar el contacto.', pos: { left: '2%', top: 10 } },
      { Icon: Gauge, title: 'Carga rápida', copy: 'Una experiencia ágil desde el primer clic.', pos: { right: '1%', bottom: 2 } },
    ],
    mobileCards: [0, 1],
    mobileSide: 'left',
  },
  {
    label: 'SEO y SEO Local',
    frase: 'Visibilidad orgánica para aparecer cuando tus clientes buscan.',
    Icon: Search,
    Visual: CapSeoVisual,
    photo: `${PHOTO_DIR}/seo-business.webp`,
    alt: 'Diseñadora de moda en su taller, con el portátil abierto detrás',
    objectPosition: '100% 50%',
    objectPositionMobile: '50% 0%',
    cards: [
      { Icon: FileText, title: 'Contenido optimizado', copy: 'Información clara para buscadores y personas.', pos: { left: '2%', top: 12 } },
      { Icon: Search, title: 'Búsquedas relevantes', copy: 'Contenido alineado con lo que buscan tus clientes.', pos: { left: '40%', bottom: 2 } },
      { Icon: MapPin, title: 'Visibilidad local', copy: 'Presencia cuando buscan cerca de ti.', pos: { right: '0%', top: 0 } },
    ],
    mobileCards: [0, 2],
    mobileSide: 'left',
  },
  {
    label: 'Google Maps',
    frase: 'Presencia local para que te encuentren cerca.',
    Icon: MapPin,
    Visual: CapMapsVisual,
    photo: `${PHOTO_DIR}/maps-business.webp`,
    alt: 'Propietaria sonriendo en su tienda de cerámica',
    objectPosition: '0% 50%',
    objectPositionMobile: '50% 0%',
    cards: [
      { Icon: Store, title: 'Perfil optimizado', copy: 'Información completa y actualizada.', pos: { left: '3%', bottom: 16 } },
      { Icon: MapPin, title: 'Ubicación visible', copy: 'Más fácil de encontrar cuando están cerca.', pos: { left: '42%', top: 8 } },
      { Icon: Info, title: 'Información útil', copy: 'Horarios, servicios y datos claros.', pos: { right: '2%', bottom: 0 } },
    ],
    mobileCards: [0, 1],
    mobileSide: 'right',
  },
  {
    label: 'Google Ads y Meta Ads',
    frase: 'Campañas orientadas a generar demanda cualificada.',
    Icon: Megaphone,
    Visual: CapAdsVisual,
    photo: `${PHOTO_DIR}/ads-business.webp`,
    alt: 'Carpintero atendiendo una llamada con el móvil en su taller',
    objectPosition: '100% 50%',
    objectPositionMobile: '50% 0%',
    cards: [
      { Icon: Target, title: 'Audiencias relevantes', copy: 'Campañas dirigidas a las personas adecuadas.', pos: { left: '2%', top: 16 } },
      { Icon: Megaphone, title: 'Mensajes claros', copy: 'Creatividades alineadas con tu propuesta.', pos: { left: '36%', bottom: 6 } },
      { Icon: Users, title: 'Demanda cualificada', copy: 'Acciones orientadas a generar oportunidades.', pos: { right: '0%', top: 2 } },
    ],
    mobileCards: [0, 2],
    mobileSide: 'left',
  },
  {
    label: 'Analytics y medición',
    frase: 'Datos para entender qué funciona y dónde mejorar.',
    Icon: ChartColumn,
    Visual: CapAnalyticsVisual,
    photo: `${PHOTO_DIR}/analytics-business.webp`,
    alt: 'Dentista sonriendo en su clínica',
    objectPosition: '100% 50%',
    objectPositionMobile: '50% 0%',
    cards: [
      { Icon: ChartColumn, title: 'Datos claros', copy: 'Entender qué está funcionando.', pos: { left: '4%', bottom: 14 } },
      { Icon: FileBarChart, title: 'Informes útiles', copy: 'Información organizada para tomar decisiones.', pos: { left: '2%', top: 10 } },
      { Icon: Lightbulb, title: 'Oportunidades', copy: 'Detectar dónde merece la pena mejorar.', pos: { right: '0%', top: 4 } },
    ],
    mobileCards: [0, 2],
    mobileSide: 'left',
  },
  {
    label: 'CRO y mejora continua',
    frase: 'Optimización continua para convertir más visitas en oportunidades.',
    Icon: TrendingUp,
    Visual: CapCroVisual,
    photo: `${PHOTO_DIR}/cro-business.webp`,
    alt: 'Repartidor sonriendo desde su furgoneta con una hoja de pedido',
    objectPosition: '100% 50%',
    objectPositionMobile: '50% 0%',
    cards: [
      { Icon: ClipboardList, title: 'Formularios claros', copy: 'Menos fricción para contactar.', pos: { left: '2%', top: 8 } },
      { Icon: MousePointerClick, title: 'Experiencia sencilla', copy: 'Recorridos fáciles de entender.', pos: { left: '34%', bottom: 4 } },
      { Icon: FlaskConical, title: 'Pruebas y mejoras', copy: 'Optimización continua basada en comportamiento.', pos: { right: '2%', top: 0 } },
    ],
    mobileCards: [0, 2],
    mobileSide: 'left',
  },
];

/** Foto local con placeholder si el archivo aún no existe (sin imágenes externas). */
function CapPhoto({ src, alt, position, Icon }: { src: string; alt: string; position: string; Icon: IconType }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, [src]);

  return (
    <span className="tl-photo" data-missing={failed || undefined}>
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          src={src}
          alt={alt}
          width={1000}
          height={667}
          loading="lazy"
          decoding="async"
          style={{ objectPosition: position }}
          onError={() => setFailed(true)}
        />
      )}
      {failed && (
        <span className="tl-photo__ph" aria-hidden="true">
          <Icon size={44} strokeWidth={1.4} />
        </span>
      )}
    </span>
  );
}

function MicroCardView({ card, index }: { card: MicroCard; index: number }) {
  const accent = index === 2;
  const Icon = card.Icon;
  return (
    <div className="tl-mc" data-n={index} style={card.pos}>
      <span className={`tl-mc__icon${accent ? ' is-accent' : ''}`} aria-hidden="true">
        <Icon size={14} strokeWidth={2.2} />
      </span>
      <span className="tl-mc__text">
        <strong>{card.title}</strong>
        <span>{card.copy}</span>
      </span>
    </div>
  );
}

export default function TodoLoQueNecesitas() {
  // Desktop/tablet: seleccionada (click / Enter / Space) + vista previa por hover (solo ratón).
  const [selected, setSelected] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  // Móvil: acordeón compacto, una sola capacidad expandida (todas cerradas al inicio).
  const [expanded, setExpanded] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const shown = hover ?? selected;
  const current = CAPACIDADES[shown];
  const CurrentVisual = current.Visual;

  const onSelect = (i: number) => {
    if (isMobile) setExpanded(expanded === i ? null : i);
    else setSelected(i);
  };

  return (
    <section className="todo-section tl-section">
      <div className="tl-grid">
        <div className="tl-left">
          <h2 className="tl-title">Todo lo que necesitas para captar mejor</h2>
          <p className="tl-sub">Una estrategia conectada, desde tu presencia digital hasta la conversión.</p>

          <ul className="tl-list">
            {CAPACIDADES.map((c, i) => {
              const Icon = c.Icon;
              const active = isMobile ? expanded === i : shown === i;
              const open = isMobile && expanded === i;
              return (
                <li
                  key={c.label}
                  className={`tl-li${active ? ' is-active' : ''}`}
                  onPointerEnter={(e) => {
                    if (!isMobile && e.pointerType === 'mouse') setHover(i);
                  }}
                  onPointerLeave={(e) => {
                    if (!isMobile && e.pointerType === 'mouse') setHover(null);
                  }}
                >
                  <button
                    type="button"
                    className="tl-item"
                    onClick={() => onSelect(i)}
                    {...(isMobile
                      ? { 'aria-expanded': open, 'aria-controls': `tl-more-${i}` }
                      : { 'aria-pressed': selected === i, 'aria-controls': 'tl-panel' })}
                  >
                    <span className="tl-item__icon" aria-hidden="true">
                      <Icon size={16} strokeWidth={2.1} />
                    </span>
                    <span className="tl-item__label">{c.label}</span>
                    <span className="tl-item__dot" aria-hidden="true" />
                    {isMobile && (
                      <span className="tl-item__chev" aria-hidden="true">
                        {open ? <ChevronUp size={18} strokeWidth={2.2} /> : <ChevronRight size={18} strokeWidth={2.2} />}
                      </span>
                    )}
                  </button>
                  {open && (
                    <div id={`tl-more-${i}`} className="tl-more tl-in">
                      <div className="tl-more__stage">
                        <CapPhoto src={c.photo} alt={c.alt} position={c.objectPositionMobile} Icon={c.Icon} />
                        <div className={`tl-more__cards is-${c.mobileSide}`}>
                          {c.mobileCards.map((k, n) => {
                            const CardIcon = c.cards[k].Icon;
                            return (
                              <div key={k} className="tl-mcm">
                                <span className={`tl-mc__icon${n === 1 ? ' is-accent' : ''}`} aria-hidden="true">
                                  <CardIcon size={14} strokeWidth={2.2} />
                                </span>
                                <strong>{c.cards[k].title}</strong>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <p>{c.frase}</p>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <Link href="/soluciones/" className="tl-cta">
            Ver todas las soluciones <span aria-hidden="true">→</span>
          </Link>
        </div>

        {!isMobile && (
          <div id="tl-panel" className="tl-panel" role="region" aria-label="Detalle de la capacidad">
            <div className="tl-panel__bar" aria-hidden="true">
              <span className="tl-dots">
                <i />
                <i />
                <i />
              </span>
              <span className="tl-panel__tag">{current.label}</span>
            </div>
            <div key={shown} className="tl-panel__body tl-in">
              <div className="tl-stage">
                <CapPhoto src={current.photo} alt={current.alt} position={current.objectPosition} Icon={current.Icon} />
                <div className="tl-ui" aria-hidden="true">
                  <CurrentVisual className="tl-ui__svg" />
                </div>
                {current.cards.map((card, n) => (
                  <MicroCardView key={card.title} card={card} index={n} />
                ))}
              </div>
              <p className="tl-panel__copy">{current.frase}</p>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .tl-section { padding: 64px 20px 68px; background-color: #fff; }
        .tl-grid {
          max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: minmax(0, 38fr) minmax(0, 62fr);
          gap: 40px; align-items: stretch;
        }
        .tl-left { display: flex; flex-direction: column; min-width: 0; }
        .tl-title {
          font-size: clamp(26px, 2.5vw, 32px); font-weight: 700; color: var(--io-text); line-height: 1.2; margin: 0 0 8px;
        }
        .tl-sub { font-size: 15px; line-height: 1.5; color: var(--io-text-muted); margin: 0 0 12px; max-width: 460px; }

        .tl-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 3px; }
        .tl-li {
          border: 1.5px solid transparent; border-radius: var(--io-radius-md); background: #fff;
          transition: border-color 150ms ease, background-color 150ms ease;
        }
        .tl-li:hover { border-color: var(--io-border); }
        .tl-li.is-active { border-color: var(--io-action); background: var(--io-bg-soft); }
        .tl-item {
          display: flex; align-items: center; gap: 12px; width: 100%; padding: 4px 10px; text-align: left;
          font-family: inherit; color: inherit; cursor: pointer; background: none; border: none; border-radius: var(--io-radius-md);
        }
        .tl-item:focus-visible { outline: 2px solid var(--io-action); outline-offset: 2px; }
        .tl-item__icon {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 26px; height: 26px;
          border-radius: 50%; background: var(--io-bg-soft); color: var(--io-action);
          transition: background-color 150ms ease, color 150ms ease;
        }
        .tl-li.is-active .tl-item__icon { background: var(--io-action); color: #fff; }
        .tl-item__label { flex: 1; font-size: 15px; font-weight: 600; color: var(--io-text); line-height: 1.3; }
        .tl-item__dot {
          flex: none; width: 7px; height: 7px; border-radius: 50%; background: var(--io-accent);
          opacity: 0; transition: opacity 150ms ease;
        }
        .tl-li.is-active .tl-item__dot { opacity: 1; }
        .tl-item__chev { display: inline-flex; flex: none; color: var(--io-text-muted); }
        .tl-li.is-active .tl-item__chev { color: var(--io-action); }

        .tl-cta {
          display: inline-flex; align-items: center; gap: 8px; align-self: flex-start; margin-top: 10px;
          font-size: 15px; font-weight: 600; color: var(--io-action); text-decoration: none; transition: gap 200ms ease;
        }
        .tl-cta:hover { gap: 12px; }
        .tl-cta:focus-visible { outline: 2px solid var(--io-action); outline-offset: 3px; border-radius: 2px; }

        /* Panel compartido: workspace / interfaz (altura constante al cambiar de capacidad) */
        .tl-panel {
          display: flex; flex-direction: column; min-width: 0; overflow: hidden; background: var(--io-bg-soft);
          border: 1px solid var(--io-border); border-radius: var(--io-radius-lg);
        }
        .tl-panel__bar {
          display: flex; align-items: center; gap: 12px; padding: 10px 14px; background: #fff;
          border-bottom: 1px solid var(--io-border);
        }
        .tl-dots { display: inline-flex; gap: 6px; }
        .tl-dots i { width: 8px; height: 8px; border-radius: 50%; background: var(--io-brand); display: block; }
        .tl-panel__tag {
          font-size: 12px; font-weight: 700; letter-spacing: 0.03em; color: var(--io-text);
          padding: 3px 10px; border: 1px solid var(--io-border); border-radius: 999px; background: var(--io-bg-soft);
        }
        .tl-panel__body {
          position: relative; flex: 1; display: flex; flex-direction: column; align-items: stretch; justify-content: center;
          gap: 10px; padding: 14px 20px; overflow: hidden;
        }
        .tl-panel__body::before, .tl-panel__body::after {
          content: ''; position: absolute; border-radius: 50%; pointer-events: none; filter: blur(40px);
        }
        .tl-panel__body::before { width: 240px; height: 240px; right: -40px; top: -60px; background: rgba(51, 111, 230, 0.16); }
        .tl-panel__body::after { width: 200px; height: 200px; left: -50px; bottom: -70px; background: rgba(244, 162, 124, 0.20); }
        .tl-panel__body > * { position: relative; z-index: 1; }
        .tl-panel__copy { margin: 0; min-height: 22px; font-size: 15px; line-height: 1.5; color: var(--io-text-muted); text-align: center; font-weight: 500; }

        /* Composición: foto (≈60%) + interfaz superpuesta + microcards flotantes */
        .tl-stage { position: relative; width: 100%; height: 300px; }
        .tl-photo {
          position: absolute; left: 0; top: 0; width: 58%; height: 100%; display: block; overflow: hidden;
          border-radius: 16px; background: linear-gradient(135deg, #dbe7ff 0%, #fbe3d6 100%);
        }
        .tl-photo img { display: block; width: 100%; height: 100%; object-fit: cover; }
        .tl-photo__ph { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: rgba(51, 111, 230, 0.45); }
        .tl-ui { position: absolute; right: 0; top: 50%; width: 52%; transform: translateY(-50%); z-index: 2; }
        .tl-ui__svg { display: block; width: 100%; height: auto; filter: drop-shadow(0 8px 20px rgba(15, 23, 42, 0.12)); }
        .tl-mc {
          position: absolute; z-index: 3; display: flex; align-items: flex-start; gap: 8px; width: 190px; padding: 8px 10px;
          background: #fff; border: 1px solid var(--io-border); border-radius: 14px; box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08);
        }
        .tl-mc__icon {
          display: inline-flex; align-items: center; justify-content: center; flex: none; width: 24px; height: 24px;
          border-radius: 50%; background: rgba(51, 111, 230, 0.12); color: var(--io-action);
        }
        .tl-mc__icon.is-accent { background: rgba(244, 162, 124, 0.25); color: #c8663a; }
        .tl-mc__text { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
        .tl-mc__text strong { font-size: 12.5px; font-weight: 700; color: var(--io-text); line-height: 1.25; }
        .tl-mc__text span { font-size: 11.5px; line-height: 1.3; color: var(--io-text-muted); }

        .tl-in { animation: tl-fade 200ms ease-out; }
        @keyframes tl-fade { from { opacity: 0; transform: translateY(3px); } to { opacity: 1; transform: none; } }

        .tl-more { display: none; }

        /* Tablet: mantiene dos columnas; composición simplificada (2 microcards) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .tl-section { padding: 56px 20px; }
          .tl-grid { gap: 24px; }
          .tl-title { font-size: 26px; }
          .tl-panel__body { padding: 14px; gap: 8px; }
          .tl-stage { height: 250px; }
          .tl-mc { width: 156px; }
          .tl-mc[data-n='0'] { left: 2% !important; right: auto !important; top: auto !important; bottom: 8px !important; }
          .tl-mc[data-n='1'] { left: auto !important; right: 1% !important; top: auto !important; bottom: 0 !important; }
          .tl-mc[data-n='2'] { display: none; }
          .tl-mc__text span { display: none; }
        }

        /* Mobile: acordeón compacto; foto + máx. 2 microcards + 1 frase; sin panel */
        @media (max-width: 767px) {
          .tl-section { padding: 44px 20px; }
          .tl-item { padding: 8px 10px; }
          .tl-item__icon { width: 30px; height: 30px; }
          .tl-grid { grid-template-columns: 1fr; gap: 0; }
          .tl-title { font-size: 26px; }
          .tl-panel { display: none; }
          .tl-more { display: flex; flex-direction: column; gap: 8px; padding: 0 10px 10px; }
          .tl-more__stage { position: relative; height: 150px; }
          .tl-more__stage .tl-photo { width: 100%; border-radius: 12px; }
          .tl-more__cards { position: absolute; bottom: 8px; width: 46%; display: flex; flex-direction: column; gap: 6px; }
          .tl-more__cards.is-left { left: 8px; }
          .tl-more__cards.is-right { right: 8px; }
          .tl-mcm {
            min-width: 0; display: flex; align-items: center; gap: 6px; padding: 5px 8px;
            background: #fff; border: 1px solid var(--io-border); border-radius: 12px; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
          }
          .tl-mcm strong { font-size: 12px; font-weight: 700; color: var(--io-text); line-height: 1.2; min-width: 0; }
          .tl-more p { margin: 0; font-size: 14px; line-height: 1.45; color: var(--io-text-muted); }
        }

        @media (prefers-reduced-motion: reduce) {
          .tl-li, .tl-item__icon, .tl-item__dot, .tl-cta { transition: none; }
          .tl-in { animation: none; }
        }
      `}</style>
    </section>
  );
}
