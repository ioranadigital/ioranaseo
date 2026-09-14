'use client';

import SolucionesLayoutClient from './SolucionesLayoutClient';
import Hero from './components/Hero';
import PuntoDePartida from './components/PuntoDePartida';
import LasCuatroSoluciones from './components/LasCuatroSoluciones';
import NoSonServiciosAislados from './components/NoSonServiciosAislados';
import Diagnostico from './components/Diagnostico';
import Metodo from './components/Metodo';
import FAQAnalisis from './components/FAQAnalisis';

export default function SolucionesPage() {
  return (
    <SolucionesLayoutClient>
      <Hero />
      <PuntoDePartida />
      <LasCuatroSoluciones />
      <NoSonServiciosAislados />
      <Diagnostico />
      <Metodo />
      <FAQAnalisis />
    </SolucionesLayoutClient>
  );
}
