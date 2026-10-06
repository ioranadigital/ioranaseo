interface WizardProgressProps {
  currentStep: number;
  totalSteps: number;
}

export default function WizardProgress({ currentStep, totalSteps }: WizardProgressProps) {
  const progressPercent = (currentStep / totalSteps) * 100;

  return (
    <div
      style={{
        marginBottom: '28px',
        animation: 'fadeInDown 0.3s ease-out',
      }}
    >
      {/* Step Counter */}
      <div
        style={{
          fontSize: '13px',
          fontWeight: 600,
          color: 'var(--io-text-muted)',
          marginBottom: '10px',
        }}
      >
        Paso {currentStep} de {totalSteps}
      </div>

      {/* Progress Bar */}
      <div
        style={{
          width: '100%',
          height: '6px',
          backgroundColor: 'var(--io-border)',
          borderRadius: '3px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${progressPercent}%`,
            height: '100%',
            backgroundColor: 'var(--io-action)',
            transition: 'width 0.3s ease-out',
          }}
        />
      </div>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
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
