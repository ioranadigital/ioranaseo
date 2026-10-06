'use client';

import { useEffect, useRef, useState } from 'react';
import DiagnosticoIntro from './DiagnosticoIntro';
import WizardProgress from './WizardProgress';
import StepBusiness from './steps/StepBusiness';
import StepPresence from './steps/StepPresence';
import StepObjectives from './steps/StepObjectives';
import StepDelivery from './steps/StepDelivery';
import SuccessState from './SuccessState';

export interface WizardFormData {
  business: {
    company: string;
    website: string;
    noWebsite: boolean;
    sector: string;
    market: string;
    customerType: 'b2b' | 'b2c' | 'both' | '';
  };
  presence: {
    channels: string[];
    profiles: Array<{ type: string; url: string }>;
  };
  objectives: {
    selected: string[];
    notes: string;
  };
  contact: {
    name: string;
    email: string;
    phone: string;
    privacyAccepted: boolean;
  };
}

type WizardStep = 'intro' | 1 | 2 | 3 | 4 | 'success';

const CHANNEL_OPTIONS = [
  'Google Business Profile',
  'SEO',
  'Google Ads',
  'Meta Ads',
  'Redes sociales',
  'Email marketing',
  'Ninguno',
  'No lo sé',
];

const PROFILE_TYPES = [
  'Google Business Profile',
  'Instagram',
  'LinkedIn',
  'Facebook',
  'TikTok',
  'YouTube',
  'Otro',
];

const OBJECTIVE_OPTIONS = [
  'Necesito una web',
  'Quiero que me encuentren más',
  'Quiero conseguir más clientes',
  'Quiero mejorar mis campañas',
  'Quiero convertir más visitas',
  'Quiero mejorar mi presencia digital en general',
  'No tengo claro por dónde empezar',
];

export default function DiagnosticoWizard() {
  const [currentStep, setCurrentStep] = useState<WizardStep>('intro');
  const [leaving, setLeaving] = useState(false);
  const isFirstRender = useRef(true);

  // Landing → wizard: fade corto de salida y después se monta el wizard (nunca conviven).
  const handleStart = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setCurrentStep(1);
      return;
    }
    setLeaving(true);
    window.setTimeout(() => {
      setCurrentStep(1);
      setLeaving(false);
    }, 180);
  };

  // Al cambiar de estado/paso, la vista vuelve arriba (bajo el header sticky).
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.scrollTo({ top: 0 });
  }, [currentStep]);
  const [formData, setFormData] = useState<WizardFormData>({
    business: {
      company: '',
      website: '',
      noWebsite: false,
      sector: '',
      market: '',
      customerType: '',
    },
    presence: {
      channels: [],
      profiles: [],
    },
    objectives: {
      selected: [],
      notes: '',
    },
    contact: {
      name: '',
      email: '',
      phone: '',
      privacyAccepted: false,
    },
  });

  const [stepErrors, setStepErrors] = useState<Record<string, string>>({});

  const handleUpdateFormData = (section: keyof WizardFormData, data: any) => {
    setFormData((prev) => ({
      ...prev,
      [section]: data,
    }));
    // Clear errors for this section when user makes changes
    const errorKeys = Object.keys(stepErrors).filter((k) => k.startsWith(section));
    if (errorKeys.length > 0) {
      const newErrors = { ...stepErrors };
      errorKeys.forEach((k) => delete newErrors[k]);
      setStepErrors(newErrors);
    }
  };

  const validateStep = (step: number): boolean => {
    const errors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.business.company.trim()) {
        errors['business.company'] = 'Empresa/marca requerida';
      }
      if (!formData.business.noWebsite && !formData.business.website.trim()) {
        errors['business.website'] = 'Web requerida (o marca que no tienes web)';
      }
      if (!formData.business.sector.trim()) {
        errors['business.sector'] = 'Sector requerido';
      }
    }

    if (step === 2) {
      if (formData.presence.channels.length === 0) {
        errors['presence.channels'] = 'Selecciona al menos un canal';
      }
    }

    if (step === 3) {
      if (formData.objectives.selected.length === 0) {
        errors['objectives.selected'] = 'Selecciona al menos un objetivo';
      }
    }

    if (step === 4) {
      if (!formData.contact.name.trim()) {
        errors['contact.name'] = 'Nombre requerido';
      }
      if (!formData.contact.email.trim()) {
        errors['contact.email'] = 'Email requerido';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact.email)) {
        errors['contact.email'] = 'Email inválido';
      }
      if (!formData.contact.privacyAccepted) {
        errors['contact.privacy'] = 'Debes aceptar la política de privacidad';
      }
    }

    setStepErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    const stepNum = typeof currentStep === 'number' ? currentStep : 0;
    if (validateStep(stepNum)) {
      if (currentStep === 1) {
        setCurrentStep(2);
      } else if (currentStep === 2) {
        setCurrentStep(3);
      } else if (currentStep === 3) {
        setCurrentStep(4);
      } else if (currentStep === 4) {
        handleSubmit();
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep === 1) {
      setCurrentStep('intro');
    } else if (currentStep === 2) {
      setCurrentStep(1);
    } else if (currentStep === 3) {
      setCurrentStep(2);
    } else if (currentStep === 4) {
      setCurrentStep(3);
    }
  };

  const handleSubmit = async () => {
    // Prepare payload for future backend integration
    const payload = {
      business: formData.business,
      presence: formData.presence,
      objectives: formData.objectives,
      contact: formData.contact,
      timestamp: new Date().toISOString(),
    };

    console.log('Submission payload (PENDING BACKEND):', payload);

    // TODO: When backend is ready, implement:
    // const response = await fetch('/api/diagnostico', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(payload),
    // });

    // For now, just show success state
    setCurrentStep('success');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--io-bg, #F8FAFC)', paddingTop: currentStep === 'intro' ? 0 : '20px', paddingBottom: currentStep === 'intro' ? 0 : '60px' }}>
      {currentStep === 'intro' && (
        <div className={leaving ? 'dg-leave' : undefined}>
          <DiagnosticoIntro onStart={handleStart} />
        </div>
      )}

      {currentStep !== 'intro' && (
      <div className="dg-enter">

      {currentStep === 1 && (
        <div style={{ maxWidth: '860px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
          <StepBusiness
            data={formData.business}
            errors={stepErrors}
            onChange={(data) => handleUpdateFormData('business', data)}
            onNext={handleNext}
            onPrevious={handlePrevious}
            progress={<WizardProgress currentStep={currentStep as number} totalSteps={4} />}
          />
        </div>
      )}

      {currentStep === 2 && (
        <div style={{ maxWidth: '860px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
          <StepPresence
            data={formData.presence}
            errors={stepErrors}
            profileTypes={PROFILE_TYPES}
            channelOptions={CHANNEL_OPTIONS}
            onChange={(data) => handleUpdateFormData('presence', data)}
            onNext={handleNext}
            onPrevious={handlePrevious}
            progress={<WizardProgress currentStep={currentStep as number} totalSteps={4} />}
          />
        </div>
      )}

      {currentStep === 3 && (
        <div style={{ maxWidth: '860px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
          <StepObjectives
            data={formData.objectives}
            errors={stepErrors}
            objectiveOptions={OBJECTIVE_OPTIONS}
            onChange={(data) => handleUpdateFormData('objectives', data)}
            onNext={handleNext}
            onPrevious={handlePrevious}
            progress={<WizardProgress currentStep={currentStep as number} totalSteps={4} />}
          />
        </div>
      )}

      {currentStep === 4 && (
        <div style={{ maxWidth: '860px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
          <StepDelivery
            data={formData.contact}
            formSummary={{
              website: formData.business.website || formData.business.company,
              channels: formData.presence.channels,
              objectives: formData.objectives.selected,
            }}
            errors={stepErrors}
            onChange={(data) => handleUpdateFormData('contact', data)}
            onNext={handleNext}
            onPrevious={handlePrevious}
            progress={<WizardProgress currentStep={currentStep as number} totalSteps={4} />}
          />
        </div>
      )}

      {currentStep === 'success' && (
        <SuccessState
          email={formData.contact.email}
          onBackClick={() => {
            // Reset wizard
            setCurrentStep('intro');
            setFormData({
              business: {
                company: '',
                website: '',
                noWebsite: false,
                sector: '',
                market: '',
                customerType: '',
              },
              presence: {
                channels: [],
                profiles: [],
              },
              objectives: {
                selected: [],
                notes: '',
              },
              contact: {
                name: '',
                email: '',
                phone: '',
                privacyAccepted: false,
              },
            });
            setStepErrors({});
          }}
        />
      )}
      </div>
      )}
    </div>
  );
}
