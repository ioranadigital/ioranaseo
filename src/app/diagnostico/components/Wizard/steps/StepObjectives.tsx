import { WizardFormData } from '../DiagnosticoWizard';

interface StepObjectivesProps {
  data: WizardFormData['objectives'];
  errors: Record<string, string>;
  objectiveOptions: string[];
  onChange: (data: WizardFormData['objectives']) => void;
  onNext: () => void;
  onPrevious: () => void;
  progress?: React.ReactNode;
}

export default function StepObjectives({
  data,
  errors,
  objectiveOptions,
  onChange,
  onNext,
  onPrevious,
  progress,
}: StepObjectivesProps) {
  const toggleObjective = (objective: string) => {
    const newSelected = data.selected.includes(objective)
      ? data.selected.filter((o) => o !== objective)
      : [...data.selected, objective];

    onChange({ ...data, selected: newSelected });
  };

  const handleNotesChange = (notes: string) => {
    onChange({ ...data, notes: notes.slice(0, 600) });
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
        ¿Qué quieres mejorar?
      </h2>

      {/* Copy */}
      <p
        style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '32px',
        }}
      >
        Puedes seleccionar varias opciones.
      </p>

      {/* Objective Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '32px' }}>
        {objectiveOptions.map((objective) => (
          <button
            key={objective}
            onClick={() => toggleObjective(objective)}
            style={{
              padding: '20px',
              textAlign: 'left',
              fontSize: '15px',
              fontWeight: 500,
              border: `1px solid ${
                data.selected.includes(objective) ? '#336FE6' : 'var(--io-border, #e0e0e0)'
              }`,
              borderRadius: 'var(--io-radius-md, 6px)',
              backgroundColor: data.selected.includes(objective) ? '#f0f4f8' : 'white',
              color: data.selected.includes(objective) ? '#2c3e50' : '#666',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}
            onMouseEnter={(e) => {
              if (!data.selected.includes(objective)) {
                e.currentTarget.style.borderColor = '#ccc';
                e.currentTarget.style.backgroundColor = '#fafbfc';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = data.selected.includes(objective)
                ? '#336FE6'
                : 'var(--io-border, #e0e0e0)';
              e.currentTarget.style.backgroundColor = data.selected.includes(objective)
                ? '#f0f4f8'
                : 'white';
            }}
          >
            <span>{objective}</span>
            {data.selected.includes(objective) && (
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: '#336FE6',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: 700,
                  flexShrink: 0,
                  marginLeft: '12px',
                }}
              >
                ✓
              </span>
            )}
          </button>
        ))}
      </div>

      {errors['objectives.selected'] && (
        <span style={{ fontSize: '12px', color: '#ef4444', marginBottom: '16px', display: 'block' }}>
          {errors['objectives.selected']}
        </span>
      )}

      {/* Notes Textarea */}
      <div style={{ marginTop: '32px', paddingTop: '32px', borderTop: '1px solid #e0e0e0' }}>
        <label
          style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: 600,
            marginBottom: '8px',
            color: '#2c3e50',
          }}
        >
          ¿Quieres contarnos algo más? <span style={{ color: '#999', fontSize: '12px' }}>(opcional)</span>
        </label>

        <textarea
          value={data.notes}
          onChange={(e) => handleNotesChange(e.target.value)}
          placeholder="Cuéntanos cualquier detalle que pueda ayudarnos a entender mejor tu negocio o tus objetivos."
          maxLength={600}
          rows={4}
          style={{
            width: '100%',
            padding: '12px 14px',
            fontSize: '14px',
            border: '1px solid var(--io-border, #e0e0e0)',
            borderRadius: 'var(--io-radius-md, 6px)',
            fontFamily: 'inherit',
            resize: 'vertical',
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

        {/* Character Counter */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '8px',
            fontSize: '12px',
            color: '#999',
          }}
        >
          {data.notes.length} / 600
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
