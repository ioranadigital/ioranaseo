'use client';

import Hero from './components/Hero';
import QueSignificaVisibilidad from './components/QueSignificaVisibilidad';
import LasPalancas from './components/LasPalancas';
import QueHacemos from './components/QueHacemos';
import CasosDondeFalla from './components/CasosDondeFalla';
import QueNecesitasMejorar from './components/QueNecesitasMejorar';
import FAQAnalisis from './components/FAQAnalisis';

export default function VisibilidadPage() {
  return (
    <>
      <Hero />
      <QueSignificaVisibilidad />
      <LasPalancas />
      <QueHacemos />
      <CasosDondeFalla />
      <QueNecesitasMejorar />
      <FAQAnalisis />
    </>
  );
}
