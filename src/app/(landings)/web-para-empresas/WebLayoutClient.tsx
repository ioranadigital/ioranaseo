'use client';

import React from 'react';
import LandingsHeader from '../components/LandingsHeader';
import LandingsFooter from '../components/LandingsFooter';

interface WebLayoutClientProps {
  children: React.ReactNode;
}

export default function WebLayoutClient({ children }: WebLayoutClientProps) {
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
      <LandingsFooter />
    </div>
  );
}
