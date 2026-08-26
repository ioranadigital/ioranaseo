"use client";
import { FC, ReactNode, CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/trackEvent";
import { LANDING_COLORS, LANDING_FONT } from "./landingTheme";

interface LandingCtaButtonProps {
  eventName: string;
  children: ReactNode;
  variant?: "accent" | "white" | "outline";
  size?: "md" | "lg";
  style?: CSSProperties;
  href?: string;
}

const LandingCtaButton: FC<LandingCtaButtonProps> = ({
  eventName,
  children,
  variant = "accent",
  size = "md",
  style,
  href = "#lead-form",
}) => {
  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    fontFamily: LANDING_FONT,
    fontWeight: 700,
    textDecoration: "none",
    borderRadius: "14px",
    border: "2px solid transparent",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease",
    whiteSpace: "nowrap",
    padding: size === "lg" ? "20px 36px" : "14px 26px",
    fontSize: size === "lg" ? "17px" : "14px",
  };

  const variants: Record<string, CSSProperties> = {
    accent: {
      backgroundColor: LANDING_COLORS.accent,
      color: LANDING_COLORS.white,
      boxShadow: "0 14px 30px rgba(255, 140, 0, 0.35)",
    },
    white: {
      backgroundColor: LANDING_COLORS.white,
      color: LANDING_COLORS.navy,
      boxShadow: "0 14px 30px rgba(0, 0, 0, 0.2)",
    },
    outline: {
      backgroundColor: "transparent",
      color: LANDING_COLORS.white,
      borderColor: "rgba(255,255,255,0.4)",
    },
  };

  return (
    <a
      href={href}
      className="landing-cta-btn"
      onClick={() => trackEvent(eventName)}
      style={{ ...base, ...variants[variant], ...style }}
    >
      {children}
      <ArrowRight size={size === "lg" ? 20 : 16} strokeWidth={2.5} />
    </a>
  );
};

export default LandingCtaButton;
