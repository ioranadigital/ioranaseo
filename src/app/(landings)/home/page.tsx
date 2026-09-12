'use client';

import Hero from './components/Hero';
import PresenciaDigital from './components/PresenciaDigital';
import NuestroSistema from './components/NuestroSistema';
import TodoLoQueNecesitas from './components/TodoLoQueNecesitas';
import PorDondeEmpezar from './components/PorDondeEmpezar';
import FAQAnalisis from './components/FAQAnalisis';

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
