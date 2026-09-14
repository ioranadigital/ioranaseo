'use client';

import { Coffee, Sprout, NotebookPen } from 'lucide-react';

export default function NosImplicamos() {
  return (
    <section
      className="ct-implicamos-section"
      style={{
        padding: '80px 20px',
        backgroundColor: 'white',
      }}
    >
      <div
        className="ct-implicamos-grid"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.1fr',
          gap: '50px',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Left: Visual — escena de escritorio (Opción C) */}
        <div
          className="ct-implicamos-visual"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '360px',
            backgroundColor: 'var(--io-bg)',
            borderRadius: 'var(--io-radius-lg)',
            border: '1px solid var(--io-border)',
            padding: '40px 30px',
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          {/* Luz natural — glow discreto superior derecho */}
          <div
            style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '190px',
              height: '190px',
              borderRadius: '50%',
              backgroundColor: 'rgba(244,162,124,0.08)',
              filter: 'blur(10px)',
              zIndex: 0,
            }}
          />

          <div
            className="ct-implicamos-visual-inner"
            style={{ position: 'relative', width: '100%', zIndex: 1 }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* Pantalla del portátil — contenido abstracto (notas de trabajo) */}
              <div
                style={{
                  backgroundColor: 'white',
                  border: '3px solid var(--io-text)',
                  borderRadius: '10px 10px 4px 4px',
                  padding: '16px',
                  boxShadow: '0 10px 28px rgba(0,0,0,0.1)',
                  width: '100%',
                  maxWidth: '280px',
                }}
              >
                <div style={{ width: '55%', height: '6px', backgroundColor: 'var(--io-action)', borderRadius: '1px', marginBottom: '12px' }} />
                <div style={{ width: '100%', height: '4px', backgroundColor: 'var(--io-border)', borderRadius: '1px', marginBottom: '8px' }} />
                <div style={{ width: '85%', height: '4px', backgroundColor: 'var(--io-border)', borderRadius: '1px', marginBottom: '8px' }} />
                <div style={{ width: '92%', height: '4px', backgroundColor: 'var(--io-border)', borderRadius: '1px', marginBottom: '14px' }} />
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '14px', height: '14px', borderRadius: '4px', border: '1.5px solid var(--io-action)' }} />
                  <div style={{ flex: 1, height: '14px', display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '60%', height: '4px', backgroundColor: 'var(--io-border)', borderRadius: '1px' }} />
                  </div>
                </div>
              </div>

              {/* Base del portátil */}
              <div
                style={{
                  width: 'calc(100% + 26px)',
                  maxWidth: '306px',
                  height: '12px',
                  backgroundColor: 'var(--io-text)',
                  borderRadius: '0 0 6px 6px',
                  marginTop: '2px',
                }}
              />

              {/* Superficie del escritorio */}
              <div
                style={{
                  width: '100%',
                  height: '1px',
                  backgroundColor: 'var(--io-border)',
                  marginTop: '28px',
                }}
              />

              {/* Props: café + planta */}
              <div
                className="ct-implicamos-props-row"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  maxWidth: '280px',
                  marginTop: '20px',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    border: '1.5px solid var(--io-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--io-action)',
                  }}
                >
                  <Coffee size={19} strokeWidth={1.5} />
                </div>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    border: '1.5px solid var(--io-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--io-text)',
                  }}
                >
                  <Sprout size={19} strokeWidth={1.5} />
                </div>
              </div>

              {/* Badge: notas colaborativas */}
              <div
                style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '-8px',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--io-bg-soft)',
                  border: '1.5px solid var(--io-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--io-action)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                }}
              >
                <NotebookPen size={18} strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Copy */}
        <div>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              color: 'var(--io-text)',
              lineHeight: 1.2,
              margin: '0 0 20px 0',
            }}
          >
            Nos implicamos de verdad en tu negocio
          </h2>
          <p
            style={{
              fontSize: '17px',
              color: 'var(--io-text-muted)',
              lineHeight: 1.65,
              margin: '0',
              maxWidth: '520px',
            }}
          >
            No queremos ser un proveedor al que simplemente envías tareas.
            Trabajamos contigo para entender el contexto, tomar mejores
            decisiones y mantener una visión global del proyecto.
          </p>
        </div>
      </div>
    </section>
  );
}
