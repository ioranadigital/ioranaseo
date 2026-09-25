import { ShieldCheck } from 'lucide-react';

interface DiagnosticoIntroProps {
  onStart: () => void;
}

export default function DiagnosticoIntro({ onStart }: DiagnosticoIntroProps) {
  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '40px',
        paddingBottom: '60px',
        textAlign: 'center',
      }}
    >
      {/* Eyebrow */}
      <div
        style={{
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          color: '#F4A27C',
          marginBottom: '24px',
        }}
      >
        DIAGNÓSTICO DIGITAL GRATUITO
      </div>

      {/* H1 */}
      <h1
        style={{
          fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: 700,
          color: '#2c3e50',
          marginBottom: '24px',
          lineHeight: 1.2,
        }}
      >
        Descubre qué deberías mejorar primero.
      </h1>

      {/* Copy */}
      <p
        style={{
          fontSize: '16px',
          lineHeight: 1.6,
          color: '#666',
          marginBottom: '40px',
          maxWidth: '620px',
          margin: '0 auto 40px',
        }}
      >
        Cuéntanos brevemente cómo es tu negocio y tu presencia digital. Analizaremos tu web y la
        información pública disponible para detectar las principales oportunidades de mejora.
      </p>

      {/* CTA Button */}
      <button
        onClick={onStart}
        style={{
          padding: '14px 32px',
          backgroundColor: '#336FE6',
          color: 'white',
          fontSize: '16px',
          fontWeight: 600,
          border: 'none',
          borderRadius: 'var(--io-radius-md, 6px)',
          cursor: 'pointer',
          transition: 'background-color 0.2s',
          marginBottom: '32px',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#2559C6';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#336FE6';
        }}
      >
        Empezar diagnóstico
      </button>

      {/* Trust Copy */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          fontSize: '13px',
          color: '#666',
        }}
      >
        <ShieldCheck size={16} color="#336FE6" />
        <span>Sin acceso a tus cuentas. Nunca te pediremos contraseñas.</span>
      </div>
    </div>
  );
}
