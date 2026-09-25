import Link from 'next/link';

interface SuccessStateProps {
  email: string;
  onBackClick: () => void;
}

export default function SuccessState({ email, onBackClick }: SuccessStateProps) {
  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          border: '1px solid var(--io-border, #e0e0e0)',
          borderRadius: 'var(--io-radius-lg, 8px)',
          padding: '60px 40px',
          textAlign: 'center',
          marginTop: '20px',
          marginBottom: '60px',
          animation: 'fadeInScale 0.4s ease-out',
        }}
      >
        {/* Success Icon */}
        <div
          style={{
            fontSize: '64px',
            marginBottom: '24px',
            animation: 'scaleIn 0.5s ease-out 0.2s both',
          }}
        >
          ✓
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#2c3e50',
            marginBottom: '12px',
            margin: '0 0 12px 0',
          }}
        >
          Ya tenemos la información necesaria.
        </h1>

        {/* Copy */}
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.6,
            color: '#666',
            marginBottom: '8px',
            maxWidth: '600px',
            margin: '0 auto 8px',
          }}
        >
          Revisaremos tu web y tu presencia digital con los datos que nos has facilitado.
        </p>

        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.6,
            color: '#666',
            marginBottom: '40px',
            maxWidth: '600px',
            margin: '0 auto 40px',
          }}
        >
          Te enviaremos tu diagnóstico al correo indicado:{' '}
          <strong style={{ color: '#336FE6' }}>{email}</strong>
        </p>

        {/* Button */}
        <Link href="/">
          <button
            style={{
              padding: '12px 32px',
              fontSize: '15px',
              fontWeight: 600,
              backgroundColor: '#336FE6',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--io-radius-md, 6px)',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              textDecoration: 'none',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2559C6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#336FE6';
            }}
          >
            Volver a IORANA SEO
          </button>
        </Link>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
