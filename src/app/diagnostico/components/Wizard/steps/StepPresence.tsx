import { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { WizardFormData } from '../DiagnosticoWizard';

interface StepPresenceProps {
  data: WizardFormData['presence'];
  errors: Record<string, string>;
  channelOptions: string[];
  profileTypes: string[];
  onChange: (data: WizardFormData['presence']) => void;
  onNext: () => void;
  onPrevious: () => void;
  progress?: React.ReactNode;
}

export default function StepPresence({
  data,
  errors,
  channelOptions,
  profileTypes,
  onChange,
  onNext,
  onPrevious,
  progress,
}: StepPresenceProps) {
  const [showProfileAdder, setShowProfileAdder] = useState(false);
  const [selectedProfileType, setSelectedProfileType] = useState('');
  const [profileUrl, setProfileUrl] = useState('');

  const toggleChannel = (channel: string) => {
    let newChannels: string[];

    if (channel === 'Ninguno' || channel === 'No lo sé') {
      // Exclusive options
      if (data.channels.includes(channel)) {
        newChannels = [];
      } else {
        newChannels = [channel];
      }
    } else {
      // Remove exclusive options if present
      if (data.channels.includes('Ninguno')) {
        newChannels = data.channels.filter((c) => c !== 'Ninguno');
      } else if (data.channels.includes('No lo sé')) {
        newChannels = data.channels.filter((c) => c !== 'No lo sé');
      } else {
        newChannels = data.channels.includes(channel)
          ? data.channels.filter((c) => c !== channel)
          : [...data.channels, channel];
      }
    }

    onChange({ ...data, channels: newChannels });
  };

  const addProfile = () => {
    if (!selectedProfileType || !profileUrl.trim()) return;

    const newProfile = {
      type: selectedProfileType,
      url: profileUrl.trim(),
    };

    // Max 6 profiles
    if (data.profiles.length < 6) {
      onChange({
        ...data,
        profiles: [...data.profiles, newProfile],
      });
      setSelectedProfileType('');
      setProfileUrl('');
      setShowProfileAdder(false);
    }
  };

  const removeProfile = (index: number) => {
    onChange({
      ...data,
      profiles: data.profiles.filter((_, i) => i !== index),
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
        ¿Cómo es tu presencia digital actualmente?
      </h2>

      {/* Copy */}
      <p
        style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '32px',
        }}
      >
        Selecciona los canales que utilizas.
      </p>

      {/* Channel Chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
        {channelOptions.map((channel) => (
          <button
            key={channel}
            onClick={() => toggleChannel(channel)}
            style={{
              padding: '10px 16px',
              fontSize: '14px',
              fontWeight: 500,
              border: `1px solid ${
                data.channels.includes(channel) ? '#336FE6' : 'var(--io-border, #e0e0e0)'
              }`,
              borderRadius: 'var(--io-radius-md, 6px)',
              backgroundColor: data.channels.includes(channel) ? '#f0f4f8' : 'white',
              color: data.channels.includes(channel) ? '#336FE6' : '#666',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              if (!data.channels.includes(channel)) {
                e.currentTarget.style.borderColor = '#ccc';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = data.channels.includes(channel)
                ? '#336FE6'
                : 'var(--io-border, #e0e0e0)';
            }}
          >
            {channel}
          </button>
        ))}
      </div>

      {errors['presence.channels'] && (
        <span style={{ fontSize: '12px', color: '#ef4444', marginBottom: '16px', display: 'block' }}>
          {errors['presence.channels']}
        </span>
      )}

      {/* Profile Adder */}
      {data.channels.some((c) => !['Ninguno', 'No lo sé'].includes(c)) && (
        <div style={{ marginTop: '32px', paddingTop: '32px', borderTop: '1px solid #e0e0e0' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px',
            }}
          >
            <label
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#2c3e50',
                margin: 0,
              }}
            >
              Perfiles para analizar
            </label>
            {data.profiles.length < 6 && (
              <button
                onClick={() => setShowProfileAdder(!showProfileAdder)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontWeight: 600,
                  backgroundColor: '#f0f4f8',
                  border: '1px solid #ccc',
                  borderRadius: 'var(--io-radius-md, 6px)',
                  cursor: 'pointer',
                  color: '#336FE6',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e6ecf5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f0f4f8';
                }}
              >
                <Plus size={14} />
                Añadir perfil
              </button>
            )}
          </div>

          {/* Profile Input Form */}
          {showProfileAdder && (
            <div
              style={{
                backgroundColor: '#f8f9fa',
                padding: '16px',
                borderRadius: 'var(--io-radius-md, 6px)',
                marginBottom: '16px',
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
              }}
            >
              <select
                value={selectedProfileType}
                onChange={(e) => setSelectedProfileType(e.target.value)}
                style={{
                  flex: 1,
                  minWidth: '200px',
                  padding: '10px 12px',
                  fontSize: '14px',
                  border: '1px solid var(--io-border, #e0e0e0)',
                  borderRadius: 'var(--io-radius-md, 6px)',
                  fontFamily: 'inherit',
                  outline: 'none',
                }}
              >
                <option value="">Selecciona red</option>
                {profileTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              <input
                type="url"
                value={profileUrl}
                onChange={(e) => setProfileUrl(e.target.value)}
                placeholder="https://..."
                style={{
                  flex: 1,
                  minWidth: '200px',
                  padding: '10px 12px',
                  fontSize: '14px',
                  border: '1px solid var(--io-border, #e0e0e0)',
                  borderRadius: 'var(--io-radius-md, 6px)',
                  fontFamily: 'inherit',
                  outline: 'none',
                }}
              />

              <button
                onClick={addProfile}
                style={{
                  padding: '10px 20px',
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
                Añadir
              </button>

              <button
                onClick={() => setShowProfileAdder(false)}
                style={{
                  padding: '10px 20px',
                  fontSize: '14px',
                  fontWeight: 600,
                  backgroundColor: 'white',
                  color: '#666',
                  border: '1px solid #e0e0e0',
                  borderRadius: 'var(--io-radius-md, 6px)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                Cancelar
              </button>
            </div>
          )}

          {/* Display Added Profiles */}
          {data.profiles.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {data.profiles.map((profile, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 12px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: 'var(--io-radius-md, 6px)',
                    fontSize: '13px',
                  }}
                >
                  <div>
                    <span style={{ fontWeight: 600, color: '#336FE6' }}>{profile.type}</span>
                    <span style={{ color: '#999', marginLeft: '8px' }}>
                      {profile.url.length > 40 ? profile.url.substring(0, 40) + '...' : profile.url}
                    </span>
                  </div>
                  <button
                    onClick={() => removeProfile(index)}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#999',
                      padding: 0,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {data.profiles.length >= 6 && (
            <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>
              Máximo 6 perfiles alcanzado
            </p>
          )}
        </div>
      )}

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
