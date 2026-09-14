'use client';

import React from 'react';
import LandingsHeader from '../../components/LandingsHeader';
import Footer from '../../home/components/Footer';

interface ConversionLayoutClientProps {
  children: React.ReactNode;
}

export default function ConversionLayoutClient({
  children,
}: ConversionLayoutClientProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'var(--io-bg)',
        color: 'var(--io-text)',
      }}
    >
      <LandingsHeader />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}
