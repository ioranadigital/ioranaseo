'use client';

import Hero from './components/Hero';
import Introduccion from './components/Introduccion';
import TresFormas from './components/TresFormas';
import ComoTrabajamos from './components/ComoTrabajamos';
import Comercializacion from './components/Comercializacion';
import AnalisisVisibilidad from './components/AnalisisVisibilidad';
import FAQAnalisis from './components/FAQAnalisis';

export default function VisibilidadPage() {
  return (
    <>
      <Hero />
      <Introduccion />
      <TresFormas />
      <ComoTrabajamos />
      <Comercializacion />
      <AnalisisVisibilidad />
      <FAQAnalisis />
    </>
  );
}
