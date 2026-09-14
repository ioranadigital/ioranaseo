'use client';

import React from 'react';
import LandingsHeader from '../../components/LandingsHeader';
import Footer from '../../home/components/Footer';

interface CampanasLayoutClientProps {
  children: React.ReactNode;
}

export default function CampanasLayoutClient({
  children,
}: CampanasLayoutClientProps) {
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
