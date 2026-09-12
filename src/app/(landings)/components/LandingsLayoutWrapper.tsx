'use client';

import React from 'react';
import LandingsHeader from './LandingsHeader';
import LandingsFooter from './LandingsFooter';

interface LandingsLayoutWrapperProps {
  children: React.ReactNode;
}

export default function LandingsLayoutWrapper({
  children,
}: LandingsLayoutWrapperProps) {
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
