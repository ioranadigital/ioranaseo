"use client";
import { FC } from "react";
import { OptimizedImage } from "@/components";
import { trackEvent } from "@/lib/trackEvent";
import { LANDING_COLORS, LANDING_FONT, LANDING_PHONE_DISPLAY, LANDING_PHONE_HREF } from "./landingTheme";

const LandingFooter: FC = () => {
  return (
    <footer style={{ backgroundColor: LANDING_COLORS.navyDeep, padding: "36px 20px" }}>
      <div
        className="landing-footer-row"
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <OptimizedImage
            src="/assets/img/logo/iorana-logo.svg"
            alt="IoranaSEO"
            width={100}
            height={40}
            style={{ borderRadius: "8px" }}
          />
          <a
            href={LANDING_PHONE_HREF}
            onClick={() => trackEvent("landing_phone_click")}
            style={{
              fontFamily: LANDING_FONT,
              fontSize: "13px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.7)",
              textDecoration: "none",
            }}
          >
            {LANDING_PHONE_DISPLAY}
          </a>
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            fontSize: "13px",
          }}
        >
          <a href="/legal/aviso-legal" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
            Aviso legal
          </a>
          <a href="/legal/privacidad" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
            Privacidad
          </a>
          <a href="/legal/cookies" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
            Cookies
          </a>
        </div>
      </div>
      <div
        style={{
          maxWidth: "1180px",
          margin: "20px auto 0",
          paddingTop: "20px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          fontSize: "12px",
          color: "rgba(255,255,255,0.4)",
        }}
      >
        © {new Date().getFullYear()} IoranaSEO. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default LandingFooter;
