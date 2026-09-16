'use client';

import type { Metadata } from 'next';
import LandingsHeader from './components/LandingsHeader';
import Footer from './home/components/Footer';
import Hero from './home/components/Hero';
import PresenciaDigital from './home/components/PresenciaDigital';
import NuestroSistema from './home/components/NuestroSistema';
import TodoLoQueNecesitas from './home/components/TodoLoQueNecesitas';
import PorDondeEmpezar from './home/components/PorDondeEmpezar';
import FAQAnalisis from './home/components/FAQAnalisis';

export default function HomePage() {
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
      <main style={{ flex: 1 }}>
        <Hero />
        <PresenciaDigital />
        <NuestroSistema />
        <TodoLoQueNecesitas />
        <PorDondeEmpezar />
        <FAQAnalisis />
      </main>
      <Footer />
    </div>
  );
}
