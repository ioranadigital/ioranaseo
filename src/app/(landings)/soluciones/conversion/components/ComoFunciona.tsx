'use client';

import { Search, SlidersHorizontal, Wrench, ChartNoAxesColumnIncreasing } from 'lucide-react';

export default function ComoFunciona() {
  const pasos = [
    {
      numero: '01',
      titulo: 'Análisis',
      copy: 'Analizamos tu web, tus datos y el comportamiento de tus usuarios para identificar oportunidades.',
      icon: Search,
    },
    {
      numero: '02',
      titulo: 'Optimización',
      copy: 'Mejoramos la estructura, el diseño y los contenidos para eliminar fricciones y facilitar la conversión.',
      icon: SlidersHorizontal,
    },
    {
      numero: '03',
      titulo: 'Implementación',
      copy: 'Aplicamos cambios, configuramos formularios, eventos y herramientas de medición.',
      icon: Wrench,
    },
    {
      numero: '04',
      titulo: 'Medición y mejora',
      copy: 'Analizamos resultados, hacemos pruebas y optimizamos continuamente para conseguir más leads y ventas.',
      icon: ChartNoAxesColumnIncreasing,
    },
  ];

  return (
    <section
      className="como-funciona-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'white',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              color: 'var(--io-text)',
              lineHeight: 1.2,
              margin: '0 0 16px 0',
            }}
          >
            Cómo funciona nuestro proceso de conversión
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--io-text-muted)',
              lineHeight: 1.6,
              margin: '0',
              maxWidth: '560px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Un método claro y probado para analizar, optimizar y aumentar
            tus resultados.
          </p>
        </div>

        <div
          className="como-funciona-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            position: 'relative',
          }}
        >
          <div className="como-funciona-connector" />

          {pasos.map((paso) => {
            const Icon = paso.icon;
            return (
              <div
                key={paso.numero}
                className="como-funciona-item"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '10px',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <div
                  className="como-funciona-numero"
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--io-bg-soft)',
                    border: '2px solid var(--io-action)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '15px',
                    fontWeight: 800,
                    color: 'var(--io-action)',
                  }}
                >
                  {paso.numero}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <Icon size={17} strokeWidth={2} style={{ color: 'var(--io-action)', flexShrink: 0 }} />
                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: 800,
                      color: 'var(--io-text)',
                      margin: '0',
                      lineHeight: 1.3,
                    }}
                  >
                    {paso.titulo}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: '13.5px',
                    color: 'var(--io-text-muted)',
                    margin: '0',
                    lineHeight: 1.6,
                    maxWidth: '250px',
                  }}
                >
                  {paso.copy}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
