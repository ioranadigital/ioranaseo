'use client';

import { useState } from 'react';

interface ContactoFormProps {
  onSubmitted?: () => void;
  submitted?: boolean;
}

const MOTIVOS = [
  { value: 'necesito_web', label: 'Necesito una web' },
  { value: 'mejorar_visibilidad', label: 'Quiero mejorar mi visibilidad' },
  { value: 'lanzar_campanas', label: 'Quiero lanzar o mejorar campañas' },
  { value: 'mejorar_conversion', label: 'Quiero mejorar la conversión' },
  { value: 'estrategia_digital', label: 'Necesito una estrategia digital' },
  { value: 'no_claro', label: 'No tengo claro qué necesito' },
  { value: 'otro', label: 'Otro' },
];

const MAX_MESSAGE_LENGTH = 600;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactoForm({ onSubmitted, submitted: propsSubmitted }: ContactoFormProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    motivo: '',
    mensaje: '',
    utilizas: '',
    privacidad: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(propsSubmitted || false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'Nombre requerido';
    if (!formData.email.trim()) newErrors.email = 'Email requerido';
    if (formData.email && !EMAIL_PATTERN.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.empresa.trim()) newErrors.empresa = 'Empresa requerida';
    if (!formData.motivo) newErrors.motivo = 'Selecciona un motivo';
    if (!formData.mensaje.trim()) newErrors.mensaje = 'Cuéntanos qué necesitas';
    if (!formData.privacidad) newErrors.privacidad = 'Debes aceptar la política de privacidad';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          empresa: formData.empresa,
          telefono: formData.telefono,
          motivo: formData.motivo,
          mensaje: formData.mensaje,
          utilizas: formData.utilizas,
          privacidad: formData.privacidad,
        }),
      });

      const result = await response.json();

      if (result.ok) {
        setSubmitted(true);
        if (onSubmitted) onSubmitted();
      } else if (result.reason === 'rate_limited') {
        setErrors({ submit: 'Demasiados intentos. Intenta más tarde.' });
      } else if (result.reason === 'email_not_configured') {
        setSubmitted(true);
        if (onSubmitted) onSubmitted();
      } else {
        setErrors({ submit: 'Error al enviar. Intenta de nuevo.' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'Error de conexión. Intenta de nuevo.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        style={{
          backgroundColor: 'white',
          border: '1px solid var(--io-border)',
          borderRadius: 'var(--io-radius-lg)',
          padding: '40px 32px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          minHeight: '400px',
          justifyContent: 'center',
        }}
      >
        <div style={{ fontSize: '48px', color: 'var(--io-action)' }}>✓</div>
        <h3
          style={{
            fontSize: '24px',
            fontWeight: 700,
            color: 'var(--io-text)',
            margin: 0,
          }}
        >
          Consulta enviada.
        </h3>
        <p
          style={{
            fontSize: '16px',
            color: 'var(--io-text-muted)',
            margin: 0,
            maxWidth: '400px',
            lineHeight: 1.6,
          }}
        >
          Hemos recibido tu mensaje. Te responderemos para entender tu proyecto y proponer la mejor solución.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: 'white',
        border: '1px solid var(--io-border)',
        borderRadius: 'var(--io-radius-lg)',
        padding: '32px 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <h2
        style={{
          fontSize: '20px',
          fontWeight: 700,
          color: 'var(--io-text)',
          margin: 0,
          marginBottom: '12px',
        }}
      >
        Cuéntanos qué necesitas.
      </h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        {/* Row 1: Nombre | Email */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {/* Nombre */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label
              htmlFor="nombre"
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--io-text)',
              }}
            >
              Nombre y apellidos <span style={{ color: 'var(--io-accent)' }}>*</span>
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              autoComplete="name"
              value={formData.nombre}
              onChange={handleChange}
              required
              style={{
                padding: '12px 14px',
                fontSize: '15px',
                backgroundColor: 'white',
                border: `1px solid ${errors.nombre ? '#ef4444' : 'var(--io-border)'}`,
                borderRadius: 'var(--io-radius-md)',
                fontFamily: 'inherit',
                color: 'var(--io-text)',
                transition: 'border-color 0.2s',
                outline: 'none',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--io-action)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = errors.nombre ? '#ef4444' : 'var(--io-border)';
              }}
              aria-describedby={errors.nombre ? 'nombre-error' : undefined}
            />
            {errors.nombre && (
              <span id="nombre-error" style={{ fontSize: '12px', color: '#ef4444' }}>
                {errors.nombre}
              </span>
            )}
          </div>

          {/* Email */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label
              htmlFor="email"
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--io-text)',
              }}
            >
              Email profesional <span style={{ color: 'var(--io-accent)' }}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                padding: '12px 14px',
                fontSize: '15px',
                backgroundColor: 'white',
                border: `1px solid ${errors.email ? '#ef4444' : 'var(--io-border)'}`,
                borderRadius: 'var(--io-radius-md)',
                fontFamily: 'inherit',
                color: 'var(--io-text)',
                transition: 'border-color 0.2s',
                outline: 'none',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--io-action)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = errors.email ? '#ef4444' : 'var(--io-border)';
              }}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <span id="email-error" style={{ fontSize: '12px', color: '#ef4444' }}>
                {errors.email}
              </span>
            )}
          </div>
        </div>

        {/* Row 2: Empresa | Teléfono */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {/* Empresa */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label
              htmlFor="empresa"
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--io-text)',
              }}
            >
              Empresa <span style={{ color: 'var(--io-accent)' }}>*</span>
            </label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              autoComplete="organization"
              value={formData.empresa}
              onChange={handleChange}
              required
              style={{
                padding: '12px 14px',
                fontSize: '15px',
                backgroundColor: 'white',
                border: `1px solid ${errors.empresa ? '#ef4444' : 'var(--io-border)'}`,
                borderRadius: 'var(--io-radius-md)',
                fontFamily: 'inherit',
                color: 'var(--io-text)',
                transition: 'border-color 0.2s',
                outline: 'none',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--io-action)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = errors.empresa ? '#ef4444' : 'var(--io-border)';
              }}
              aria-describedby={errors.empresa ? 'empresa-error' : undefined}
            />
            {errors.empresa && (
              <span id="empresa-error" style={{ fontSize: '12px', color: '#ef4444' }}>
                {errors.empresa}
              </span>
            )}
          </div>

          {/* Teléfono */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label
              htmlFor="telefono"
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--io-text)',
              }}
            >
              Teléfono <span style={{ color: 'var(--io-text-muted)' }}>(opcional)</span>
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              autoComplete="tel"
              value={formData.telefono}
              onChange={handleChange}
              style={{
                padding: '12px 14px',
                fontSize: '15px',
                backgroundColor: 'white',
                border: '1px solid var(--io-border)',
                borderRadius: 'var(--io-radius-md)',
                fontFamily: 'inherit',
                color: 'var(--io-text)',
                transition: 'border-color 0.2s',
                outline: 'none',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--io-action)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--io-border)';
              }}
            />
          </div>
        </div>

        {/* Motivo de contacto */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label
            htmlFor="motivo"
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--io-text)',
            }}
          >
            Motivo de contacto <span style={{ color: 'var(--io-accent)' }}>*</span>
          </label>
          <select
            id="motivo"
            name="motivo"
            value={formData.motivo}
            onChange={handleChange}
            required
            style={{
              padding: '12px 14px',
              fontSize: '15px',
              backgroundColor: 'white',
              border: `1px solid ${errors.motivo ? '#ef4444' : 'var(--io-border)'}`,
              borderRadius: 'var(--io-radius-md)',
              fontFamily: 'inherit',
              color: formData.motivo ? 'var(--io-text)' : 'var(--io-text-muted)',
              transition: 'border-color 0.2s',
              outline: 'none',
              cursor: 'pointer',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--io-action)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = errors.motivo ? '#ef4444' : 'var(--io-border)';
            }}
            aria-describedby={errors.motivo ? 'motivo-error' : undefined}
          >
            <option value="">Selecciona una opción</option>
            {MOTIVOS.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>
          {errors.motivo && (
            <span id="motivo-error" style={{ fontSize: '12px', color: '#ef4444' }}>
              {errors.motivo}
            </span>
          )}
        </div>

        {/* Mensaje */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label
            htmlFor="mensaje"
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--io-text)',
            }}
          >
            ¿En qué podemos ayudarte? <span style={{ color: 'var(--io-accent)' }}>*</span>
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            maxLength={MAX_MESSAGE_LENGTH}
            placeholder="Cuéntanos brevemente qué quieres mejorar, qué objetivo tienes o qué proyecto quieres poner en marcha."
            rows={5}
            style={{
              padding: '12px 14px',
              fontSize: '15px',
              backgroundColor: 'white',
              border: `1px solid ${errors.mensaje ? '#ef4444' : 'var(--io-border)'}`,
              borderRadius: 'var(--io-radius-md)',
              fontFamily: 'inherit',
              color: 'var(--io-text)',
              transition: 'border-color 0.2s',
              outline: 'none',
              resize: 'vertical',
              lineHeight: 1.5,
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--io-action)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = errors.mensaje ? '#ef4444' : 'var(--io-border)';
            }}
            aria-describedby={errors.mensaje ? 'mensaje-error' : undefined}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '12px',
              color: 'var(--io-text-muted)',
            }}
          >
            <span>No necesitas utilizar términos técnicos.</span>
            <span>{formData.mensaje.length} / {MAX_MESSAGE_LENGTH}</span>
          </div>
          {errors.mensaje && (
            <span id="mensaje-error" style={{ fontSize: '12px', color: '#ef4444' }}>
              {errors.mensaje}
            </span>
          )}
        </div>

        {/* Qué utilizas actualmente */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label
            htmlFor="utilizas"
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--io-text)',
            }}
          >
            ¿Qué utilizas actualmente? <span style={{ color: 'var(--io-text-muted)' }}>(opcional)</span>
          </label>
          <input
            type="text"
            id="utilizas"
            name="utilizas"
            value={formData.utilizas}
            onChange={handleChange}
            placeholder="Por ejemplo: web propia, Google Business Profile, SEO, Google Ads, Meta Ads..."
            style={{
              padding: '12px 14px',
              fontSize: '15px',
              backgroundColor: 'white',
              border: '1px solid var(--io-border)',
              borderRadius: 'var(--io-radius-md)',
              fontFamily: 'inherit',
              color: 'var(--io-text)',
              transition: 'border-color 0.2s',
              outline: 'none',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--io-action)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'var(--io-border)';
            }}
          />
        </div>

        {/* Privacy */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'flex-start',
            marginTop: '6px',
          }}
        >
          <input
            type="checkbox"
            id="privacidad"
            name="privacidad"
            checked={formData.privacidad}
            onChange={handleChange}
            style={{
              marginTop: '4px',
              cursor: 'pointer',
              accentColor: 'var(--io-action)',
              width: '18px',
              height: '18px',
              flexShrink: 0,
            }}
            aria-describedby={errors.privacidad ? 'privacidad-error' : undefined}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
            <label
              htmlFor="privacidad"
              style={{
                fontSize: '14px',
                color: 'var(--io-text-muted)',
                cursor: 'pointer',
                lineHeight: 1.5,
              }}
            >
              He leído y acepto la{' '}
              <a
                href="/legal/privacidad/"
                style={{
                  color: 'var(--io-action)',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                Política de Privacidad
              </a>
              .
            </label>
            {errors.privacidad && (
              <span id="privacidad-error" style={{ fontSize: '12px', color: '#ef4444' }}>
                {errors.privacidad}
              </span>
            )}
          </div>
        </div>

        {/* Submit */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              padding: '14px 28px',
              backgroundColor: isSubmitting ? 'var(--io-action)' : 'var(--io-action)',
              color: 'white',
              fontSize: '16px',
              fontWeight: 600,
              border: 'none',
              borderRadius: 'var(--io-radius-md)',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s',
              opacity: isSubmitting ? 0.7 : 1,
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) e.currentTarget.style.backgroundColor = 'var(--io-action-hover)';
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting) e.currentTarget.style.backgroundColor = 'var(--io-action)';
            }}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar consulta'}
          </button>

          <p
            style={{
              fontSize: '13px',
              color: 'var(--io-text-muted)',
              margin: 0,
              lineHeight: 1.5,
              textAlign: 'center',
            }}
          >
            Revisaremos tu mensaje para entender el contexto antes de responder.
          </p>
        </div>

        {errors.submit && (
          <div style={{ fontSize: '14px', color: '#ef4444', textAlign: 'center' }}>
            {errors.submit}
          </div>
        )}
      </form>
    </div>
  );
}
