'use client';

import React from 'react';
import LandingsHeader from '../components/LandingsHeader';
import Footer from './components/Footer';

interface HomeLayoutClientProps {
  children: React.ReactNode;
}

export default function HomeLayoutClient({ children }: HomeLayoutClientProps) {
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
