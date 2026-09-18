import type { Metadata } from 'next';
import HomeLayoutClient from './HomeLayoutClient';

// ORPHAN ROUTE: next.config.mjs has a permanent redirect "/home" -> "/",
// so this layout/page tree is unreachable in production. The real Home
// lives at src/app/(landings)/page.tsx, which renders Hero and friends
// directly (no layout.tsx in between). Kept for now per audit — not
// deleted without confirming nothing else references it. Its former
// styles.css (deleted) was fully duplicated by the responsive <style>
// blocks each component (Hero, LandingsHeader, PresenciaDigital) now
// owns internally, and had zero effect on the live "/" route.

export const metadata: Metadata = {
  title: 'Home | IORANA SEO',
  description:
    'Diseñamos y mejoramos tu web, visibilidad y campañas para que te encuentren, entiendan lo que haces y contacten contigo.',
  openGraph: {
    title: 'Home | IORANA SEO',
    description:
      'Diseñamos y mejoramos tu web, visibilidad y campañas para que te encuentren, entiendan lo que haces y contacten contigo.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HomeLayoutClient>{children}</HomeLayoutClient>;
}
