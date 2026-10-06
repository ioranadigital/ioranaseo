import { WizardFormData } from '../DiagnosticoWizard';

interface StepBusinessProps {
  data: WizardFormData['business'];
  errors: Record<string, string>;
  onChange: (data: WizardFormData['business']) => void;
  onNext: () => void;
  onPrevious: () => void;
  progress?: React.ReactNode;
}

export default function StepBusiness({
  data,
  errors,
  onChange,
  onNext,
  onPrevious,
  progress,
}: StepBusinessProps) {
  const handleChange = (field: keyof typeof data, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const handleNoWebsiteToggle = () => {
    onChange({
      ...data,
      noWebsite: !data.noWebsite,
      website: !data.noWebsite ? '' : data.website,
    });
  };

  return (
    <div
      className="diag-card"
      style={{
        backgroundColor: 'white',
        border: '1px solid var(--io-border, #e0e0e0)',
        borderRadius: 'var(--io-radius-lg, 8px)',
        padding: '28px 32px 40px',
        marginTop: '20px',
        marginBottom: '40px',
        animation: 'fadeIn 0.3s ease-out',
      }}
    >
      {progress}

      {/* Title */}
      <h2
        style={{
          fontSize: '24px',
          fontWeight: 700,
          color: '#2c3e50',
          marginBottom: '12px',
        }}
      >
        Cuéntanos sobre tu negocio
      </h2>

      {/* Copy */}
      <p
        style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '32px',
        }}
      >
        Necesitamos un poco de contexto para saber qué debemos analizar.
      </p>

      {/* Form Fields */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Empresa / Marca */}
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
            Empresa / marca <span style={{ color: '#F4A27C' }}>*</span>
          </label>
          <input
            type="text"
            value={data.company}
            onChange={(e) => handleChange('company', e.target.value)}
            placeholder="Ej: TechSolutions SL"
            style={{
              width: '100%',
              padding: '12px 14px',
              fontSize: '15px',
              border: `1px solid ${errors['business.company'] ? '#ef4444' : 'var(--io-border, #e0e0e0)'}`,
              borderRadius: 'var(--io-radius-md, 6px)',
              fontFamily: 'inherit',
              transition: 'border-color 0.2s',
              outline: 'none',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#336FE6';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = errors['business.company']
                ? '#ef4444'
                : 'var(--io-border, #e0e0e0)';
            }}
          />
          {errors['business.company'] && (
            <span style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px', display: 'block' }}>
              {errors['business.company']}
            </span>
          )}
        </div>

        {/* Web URL */}
        <div>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '8px', alignItems: 'center' }}>
            <label
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#2c3e50',
                margin: 0,
              }}
            >
              Página web {!data.noWebsite && <span style={{ color: '#F4A27C' }}>*</span>}
            </label>
          </div>
          <input
            type="url"
            value={data.website}
            onChange={(e) => handleChange('website', e.target.value)}
            placeholder="https://ejemplo.com"
            disabled={data.noWebsite}
            style={{
              width: '100%',
              padding: '12px 14px',
              fontSize: '15px',
              border: `1px solid ${errors['business.website'] ? '#ef4444' : 'var(--io-border, #e0e0e0)'}`,
              borderRadius: 'var(--io-radius-md, 6px)',
              fontFamily: 'inherit',
              transition: 'border-color 0.2s',
              outline: 'none',
              opacity: data.noWebsite ? 0.5 : 1,
            }}
            onFocus={(e) => {
              if (!data.noWebsite) e.currentTarget.style.borderColor = '#336FE6';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = errors['business.website']
                ? '#ef4444'
                : 'var(--io-border, #e0e0e0)';
            }}
          />
          {errors['business.website'] && (
            <span style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px', display: 'block' }}>
              {errors['business.website']}
            </span>
          )}

          {/* No Website Checkbox */}
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '12px',
              fontSize: '14px',
              color: '#666',
              cursor: 'pointer',
            }}
          >
            <input
              type="checkbox"
              checked={data.noWebsite}
              onChange={handleNoWebsiteToggle}
              style={{
                cursor: 'pointer',
                width: '18px',
                height: '18px',
                accentColor: '#336FE6',
              }}
            />
            No tengo página web
          </label>
        </div>

        {/* Sector / Actividad */}
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
            Sector / actividad <span style={{ color: '#F4A27C' }}>*</span>
          </label>
          <input
            type="text"
            value={data.sector}
            onChange={(e) => handleChange('sector', e.target.value)}
            placeholder="Ej: Software, E-commerce, Consultoría"
            style={{
              width: '100%',
              padding: '12px 14px',
              fontSize: '15px',
              border: `1px solid ${errors['business.sector'] ? '#ef4444' : 'var(--io-border, #e0e0e0)'}`,
              borderRadius: 'var(--io-radius-md, 6px)',
              fontFamily: 'inherit',
              transition: 'border-color 0.2s',
              outline: 'none',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#336FE6';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = errors['business.sector']
                ? '#ef4444'
                : 'var(--io-border, #e0e0e0)';
            }}
          />
          {errors['business.sector'] && (
            <span style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px', display: 'block' }}>
              {errors['business.sector']}
            </span>
          )}
        </div>

        {/* Zona / Mercado (Optional) */}
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
            Zona / mercado <span style={{ color: '#999', fontSize: '12px' }}>(opcional)</span>
          </label>
          <input
            type="text"
            value={data.market}
            onChange={(e) => handleChange('market', e.target.value)}
            placeholder="Ej: Madrid, Nacional, Europa"
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

        {/* B2B / B2C Selection */}
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '12px',
              color: '#2c3e50',
            }}
          >
            Tipo de cliente <span style={{ color: '#999', fontSize: '12px' }}>(opcional)</span>
          </label>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {['B2B', 'B2C', 'Ambos'].map((type) => (
              <button
                key={type}
                onClick={() => handleChange('customerType', type.toLowerCase().replace('ambos', 'both') as any)}
                style={{
                  padding: '10px 16px',
                  fontSize: '14px',
                  fontWeight: 500,
                  border: `1px solid ${
                    data.customerType === type.toLowerCase().replace('ambos', 'both')
                      ? '#336FE6'
                      : '#e0e0e0'
                  }`,
                  borderRadius: 'var(--io-radius-md, 6px)',
                  backgroundColor:
                    data.customerType === type.toLowerCase().replace('ambos', 'both')
                      ? '#f0f4f8'
                      : 'white',
                  color:
                    data.customerType === type.toLowerCase().replace('ambos', 'both')
                      ? '#336FE6'
                      : '#666',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (data.customerType !== type.toLowerCase().replace('ambos', 'both')) {
                    e.currentTarget.style.borderColor = '#ccc';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    data.customerType === type.toLowerCase().replace('ambos', 'both')
                      ? '#336FE6'
                      : '#e0e0e0';
                }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', gap: '12px', marginTop: '40px', justifyContent: 'space-between' }}>
        <button
          onClick={onPrevious}
          style={{
            padding: '12px 24px',
            whiteSpace: 'nowrap',
            flexShrink: 0,
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
            whiteSpace: 'nowrap',
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
          Continuar →
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
