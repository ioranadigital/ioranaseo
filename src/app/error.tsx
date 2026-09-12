'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main style={{ textAlign: 'center', padding: '80px 20px' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>Error</h1>
      <p style={{ fontSize: '20px', marginBottom: '32px', color: '#666' }}>
        Algo salió mal. Por favor, intenta de nuevo.
      </p>
      <button
        onClick={() => reset()}
        style={{
          padding: '12px 24px',
          backgroundColor: '#4D32A5',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Reintentar
      </button>
    </main>
  );
}
