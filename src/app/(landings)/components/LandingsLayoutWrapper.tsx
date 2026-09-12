'use client';

import React, { useEffect, useState } from 'react';
import LandingsHeader from './LandingsHeader';
import LandingsFooter from './LandingsFooter';
import HomeFooter from '../../home/components/Footer';

interface LandingsLayoutWrapperProps {
  children: React.ReactNode;
}

export default function LandingsLayoutWrapper({
  children,
}: LandingsLayoutWrapperProps) {
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(window.location.pathname.startsWith('/home'));
  }, []);

  const Footer = isHome ? HomeFooter : LandingsFooter;

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
