'use client';

import React, { useEffect, useState } from 'react';
import LandingsHeader from './LandingsHeader';
import LandingsFooter from './LandingsFooter';

interface LandingsLayoutWrapperProps {
  children: React.ReactNode;
}

export default function LandingsLayoutWrapper({
  children,
}: LandingsLayoutWrapperProps) {
  const [isHome, setIsHome] = useState(false);

  React.useEffect(() => {
    setIsHome(window.location.pathname.startsWith('/home'));
  }, []);

  // /home tiene su propio layout (HomeLayoutClient) con header/footer
  // LandingsLayoutWrapper solo renderiza children para que HomeLayoutClient controle
  if (isHome) {
    return children;
  }

  // /web-para-empresas: renderiza header + children + footer
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
