interface LandingsLayoutWrapperProps {
  children: React.ReactNode;
}

export default function LandingsLayoutWrapper({
  children,
}: LandingsLayoutWrapperProps) {
  // LandingsLayoutWrapper solo pasa children
  // Cada route (home, web-para-empresas) controla su propio header/footer via su layout
  return children;
}
