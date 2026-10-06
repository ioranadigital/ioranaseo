'use client';

import SolucionesLayoutClient from './SolucionesLayoutClient';
import Hero from './components/Hero';
import NuestrasSoluciones from './components/NuestrasSoluciones';
import ComoSeConectan from './components/ComoSeConectan';
import DiagnosticoClosing from './components/DiagnosticoClosing';

export default function SolucionesPage() {
  return (
    <SolucionesLayoutClient>
      <Hero />
      <NuestrasSoluciones />
      <ComoSeConectan />
      <DiagnosticoClosing />
    </SolucionesLayoutClient>
  );
}
