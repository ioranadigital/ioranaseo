'use client';

import Hero from './components/Hero';
import PresenciaDigital from './components/PresenciaDigital';
import NuestroSistema from './components/NuestroSistema';
import TodoLoQueNecesitas from './components/TodoLoQueNecesitas';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PresenciaDigital />
      <NuestroSistema />
      <TodoLoQueNecesitas />
    </>
  );
}
