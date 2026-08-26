"use client";
import { FC } from "react";
import LandingCtaButton from "./LandingCtaButton";
import { LANDING_COLORS, LANDING_FONT } from "./landingTheme";

interface LandingCTAProps {
  title: string;
  text: string;
  buttonText: string;
  eventName: string;
}

const LandingCTA: FC<LandingCTAProps> = ({ title, text, buttonText, eventName }) => {
  return (
    <section
      style={{
        background: `linear-gradient(135deg, ${LANDING_COLORS.navyDeep} 0%, ${LANDING_COLORS.navy} 60%, ${LANDING_COLORS.primary} 130%)`,
        padding: "76px 20px",
        textAlign: "center" as const,
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <h2
          className="landing-h2"
          style={{
            fontFamily: LANDING_FONT,
            fontWeight: 800,
            color: LANDING_COLORS.white,
            margin: "0 0 16px",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h2>
        <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.78)", lineHeight: 1.6, margin: "0 0 32px" }}>
          {text}
        </p>
        <LandingCtaButton eventName={eventName} size="lg">
          {buttonText}
        </LandingCtaButton>
      </div>
    </section>
  );
};

export default LandingCTA;
