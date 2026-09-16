'use client';

import type { Metadata } from 'next';
import Hero from './home/components/Hero';
import PresenciaDigital from './home/components/PresenciaDigital';
import NuestroSistema from './home/components/NuestroSistema';
import TodoLoQueNecesitas from './home/components/TodoLoQueNecesitas';
import PorDondeEmpezar from './home/components/PorDondeEmpezar';
import FAQAnalisis from './home/components/FAQAnalisis';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PresenciaDigital />
      <NuestroSistema />
      <TodoLoQueNecesitas />
      <PorDondeEmpezar />
      <FAQAnalisis />
    </>
  );
}
