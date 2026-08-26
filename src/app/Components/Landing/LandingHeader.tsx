"use client";
import { FC } from "react";
import { Phone } from "lucide-react";
import { OptimizedImage } from "@/components";
import { trackEvent } from "@/lib/trackEvent";
import LandingCtaButton from "./LandingCtaButton";
import {
  LANDING_COLORS,
  LANDING_FONT,
  LANDING_PHONE_DISPLAY,
  LANDING_PHONE_HREF,
} from "./landingTheme";

const LandingHeader: FC = () => {
  return (
    <header
      className="landing-header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: `1px solid ${LANDING_COLORS.border}`,
      }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <a
          href="#landing-hero"
          aria-label="IoranaSEO"
          style={{ display: "flex", alignItems: "center" }}
        >
          <OptimizedImage
            src="/assets/img/logo/iorana-logo.svg"
            alt="IoranaSEO"
            width={130}
            height={44}
            priority
          />
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a
            href={LANDING_PHONE_HREF}
            onClick={() => trackEvent("landing_phone_click")}
            className="landing-header-phone"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              color: LANDING_COLORS.ink,
              fontFamily: LANDING_FONT,
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            <span
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                backgroundColor: LANDING_COLORS.bgLight,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: LANDING_COLORS.primary,
                flexShrink: 0,
              }}
            >
              <Phone size={16} />
            </span>
            <span className="landing-header-phone-text">
              ¿Hablamos?
              <br />
              <span style={{ color: LANDING_COLORS.primary }}>
                {LANDING_PHONE_DISPLAY}
              </span>
            </span>
          </a>

          <LandingCtaButton eventName="landing_header_cta_click" size="md">
            <span className="landing-header-cta-text">
              QUIERO MI ANÁLISIS GRATUITO
            </span>
            <span className="landing-header-cta-text-short">ANÁLISIS GRATIS</span>
          </LandingCtaButton>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
