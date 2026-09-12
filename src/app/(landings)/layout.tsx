import { Manrope } from 'next/font/google';
import LandingsLayoutWrapper from './components/LandingsLayoutWrapper';

const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  preload: true,
});

export default function LandingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={manrope.variable} style={{ fontFamily: 'var(--font-manrope, Manrope, sans-serif)' }}>
      <LandingsLayoutWrapper>{children}</LandingsLayoutWrapper>
    </div>
  );
}
