import { WizardFormData } from '../DiagnosticoWizard';

interface StepDeliveryProps {
  data: WizardFormData['contact'];
  formSummary: {
    website: string;
    channels: string[];
    objectives: string[];
  };
  errors: Record<string, string>;
  onChange: (data: WizardFormData['contact']) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function StepDelivery({
  data,
  formSummary,
  errors,
  onChange,
  onNext,
  onPrevious,
}: StepDeliveryProps) {
  const handleChange = (field: keyof typeof data, value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div
      style={{
        backgroundColor: 'white',
        border: '1px solid var(--io-border, #e0e0e0)',
        borderRadius: 'var(--io-radius-lg, 8px)',
        padding: '40px 32px',
        marginTop: '20px',
        marginBottom: '40px',
        animation: 'fadeIn 0.3s ease-out',
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontSize: '24px',
          fontWeight: 700,
          color: '#2c3e50',
          marginBottom: '12px',
        }}
      >
        ¿Dónde te enviamos el diagnóstico?
      </h2>

      {/* Copy */}
      <p
        style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '32px',
        }}
      >
        Déjanos tus datos para poder enviarte el análisis cuando esté listo.
      </p>

      {/* Summary Section */}
      <div
        style={{
          backgroundColor: '#f8f9fa',
          border: '1px solid #e0e0e0',
          borderRadius: 'var(--io-radius-md, 6px)',
          padding: '20px',
          marginBottom: '32px',
        }}
      >
        <h3
          style={{
            fontSize: '13px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: '#666',
            marginBottom: '16px',
            marginTop: 0,
          }}
        >
          TU SOLICITUD
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Web */}
          <div>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#999' }}>Web:</span>
            <span style={{ fontSize: '14px', color: '#2c3e50', marginLeft: '8px' }}>
              {formSummary.website || '(no proporcionado)'}
            </span>
          </div>

          {/* Channels */}
          {formSummary.channels.length > 0 && (
            <div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#999' }}>Canales:</span>
              <span style={{ fontSize: '14px', color: '#2c3e50', marginLeft: '8px' }}>
                {formSummary.channels.join(' · ')}
              </span>
            </div>
          )}

          {/* Objectives */}
          {formSummary.objectives.length > 0 && (
            <div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#999' }}>Objetivos:</span>
              <span style={{ fontSize: '14px', color: '#2c3e50', marginLeft: '8px' }}>
                {formSummary.objectives.join(' · ')}
              </span>
            </div>
          )}
        </div>

        <button
          onClick={onPrevious}
          style={{
            marginTop: '16px',
            padding: '6px 12px',
            fontSize: '12px',
            fontWeight: 600,
            backgroundColor: 'white',
            color: '#336FE6',
            border: '1px solid #336FE6',
            borderRadius: 'var(--io-radius-md, 6px)',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f0f4f8';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'white';
          }}
        >
          Editar
        </button>
      </div>

      {/* Contact Form */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px' }}>
        {/* Nombre */}
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '8px',
              color: '#2c3e50',
            }}
          >
            Nombre <span style={{ color: '#F4A27C' }}>*</span>
          </label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Tu nombre"
            style={{
              width: '100%',
              padding: '12px 14px',
              fontSize: '15px',
              border: `1px solid ${errors['contact.name'] ? '#ef4444' : 'var(--io-border, #e0e0e0)'}`,
              borderRadius: 'var(--io-radius-md, 6px)',
              fontFamily: 'inherit',
              transition: 'border-color 0.2s',
              outline: 'none',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#336FE6';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = errors['contact.name']
                ? '#ef4444'
                : 'var(--io-border, #e0e0e0)';
            }}
          />
          {errors['contact.name'] && (
            <span style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px', display: 'block' }}>
              {errors['contact.name']}
            </span>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '8px',
              color: '#2c3e50',
            }}
          >
            Email profesional <span style={{ color: '#F4A27C' }}>*</span>
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="tu@email.com"
            style={{
              width: '100%',
              padding: '12px 14px',
              fontSize: '15px',
              border: `1px solid ${errors['contact.email'] ? '#ef4444' : 'var(--io-border, #e0e0e0)'}`,
              borderRadius: 'var(--io-radius-md, 6px)',
              fontFamily: 'inherit',
              transition: 'border-color 0.2s',
              outline: 'none',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#336FE6';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = errors['contact.email']
                ? '#ef4444'
                : 'var(--io-border, #e0e0e0)';
            }}
          />
          {errors['contact.email'] && (
            <span style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px', display: 'block' }}>
              {errors['contact.email']}
            </span>
          )}
        </div>

        {/* Teléfono (Optional) */}
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '8px',
              color: '#2c3e50',
            }}
          >
            Teléfono <span style={{ color: '#999', fontSize: '12px' }}>(opcional)</span>
          </label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="+34 123 456 789"
            style={{
              width: '100%',
              padding: '12px 14px',
              fontSize: '15px',
              border: '1px solid var(--io-border, #e0e0e0)',
              borderRadius: 'var(--io-radius-md, 6px)',
              fontFamily: 'inherit',
              transition: 'border-color 0.2s',
              outline: 'none',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#336FE6';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'var(--io-border, #e0e0e0)';
            }}
          />
        </div>
      </div>

      {/* Privacy Checkbox */}
      <div
        style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-start',
          marginBottom: '32px',
          padding: '16px',
          backgroundColor: '#fafbfc',
          borderRadius: 'var(--io-radius-md, 6px)',
          border: `1px solid ${errors['contact.privacy'] ? '#ef4444' : '#e0e0e0'}`,
        }}
      >
        <input
          type="checkbox"
          id="privacy"
          checked={data.privacyAccepted}
          onChange={(e) => handleChange('privacyAccepted', e.target.checked)}
          style={{
            marginTop: '4px',
            cursor: 'pointer',
            accentColor: '#336FE6',
            width: '18px',
            height: '18px',
            flexShrink: 0,
          }}
        />
        <label
          htmlFor="privacy"
          style={{
            fontSize: '13px',
            color: '#666',
            cursor: 'pointer',
            lineHeight: 1.5,
          }}
        >
          He leído y acepto la{' '}
          <a
            href="/legal/privacidad/"
            style={{
              color: '#336FE6',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Política de Privacidad
          </a>
          . <span style={{ color: '#F4A27C' }}>*</span>
        </label>
      </div>

      {errors['contact.privacy'] && (
        <span style={{ fontSize: '12px', color: '#ef4444', marginBottom: '16px', display: 'block' }}>
          {errors['contact.privacy']}
        </span>
      )}

      {/* Trust Message */}
      <p
        style={{
          fontSize: '12px',
          color: '#999',
          marginBottom: '32px',
          lineHeight: 1.5,
        }}
      >
        Analizamos únicamente información pública. Nunca te pediremos acceso ni contraseñas.
      </p>

      {/* Navigation */}
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'space-between' }}>
        <button
          onClick={onPrevious}
          style={{
            padding: '12px 24px',
            fontSize: '14px',
            fontWeight: 600,
            border: '1px solid #e0e0e0',
            backgroundColor: 'white',
            borderRadius: 'var(--io-radius-md, 6px)',
            cursor: 'pointer',
            color: '#666',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f8f9fa';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'white';
          }}
        >
          ← Anterior
        </button>
        <button
          onClick={onNext}
          style={{
            padding: '12px 32px',
            fontSize: '14px',
            fontWeight: 600,
            backgroundColor: '#336FE6',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--io-radius-md, 6px)',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#2559C6';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#336FE6';
          }}
        >
          Solicitar diagnóstico gratuito
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
