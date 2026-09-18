import type { Metadata } from 'next';
import LandingsHeader from '../components/LandingsHeader';
import HomeFooter from '../home/components/Footer';
import ContactoClient from './ContactoClient';

export const metadata: Metadata = {
  title: 'Contacto | IORANA SEO',
  description: 'Contacta con IORANA SEO. Cuéntanos qué quieres mejorar en tu presencia digital y nos pondremos en contacto para valorar cómo podemos ayudarte.',
  alternates: {
    canonical: 'https://www.ioranaseo.com/contacto/',
  },
};

export default function ContactoPage() {
  return (
    <>
      <LandingsHeader />
      <main>
        <ContactoClient />
      </main>
      <HomeFooter />
    </>
  );
}
