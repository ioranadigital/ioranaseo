"use client";
import { useState } from "react";
import LandingHeader from "@/app/Components/Landing/LandingHeader";
import LandingHero from "@/app/Components/Landing/LandingHero";
import LandingPainPoints from "@/app/Components/Landing/LandingPainPoints";
import LandingServices from "@/app/Components/Landing/LandingServices";
import LandingGoalSelector, {
  type LandingGoalId,
} from "@/app/Components/Landing/LandingGoalSelector";
import LandingMethodology from "@/app/Components/Landing/LandingMethodology";
import LandingPricing from "@/app/Components/Landing/LandingPricing";
import LandingTrust from "@/app/Components/Landing/LandingTrust";
import LandingCTA from "@/app/Components/Landing/LandingCTA";
import LandingLeadForm from "@/app/Components/Landing/LandingLeadForm";
import LandingFaq from "@/app/Components/Landing/LandingFaq";
import LandingFooter from "@/app/Components/Landing/LandingFooter";
import { LANDING_COLORS } from "@/app/Components/Landing/landingTheme";

export default function LandingClient() {
  const [selectedGoal, setSelectedGoal] = useState<LandingGoalId | null>(null);
  const [selectedGoalLabel, setSelectedGoalLabel] = useState<string | null>(null);

  return (
    <div className="landing-page-root" style={{ overflowX: "hidden", backgroundColor: LANDING_COLORS.white }}>
      <LandingHeader />
      <LandingHero />
      <LandingPainPoints />
      <LandingServices />
      <LandingGoalSelector
        selectedGoal={selectedGoal}
        onSelect={(id, label) => {
          setSelectedGoal(id);
          setSelectedGoalLabel(label);
        }}
      />
      <LandingMethodology />
      <LandingPricing />
      <LandingTrust />
      <LandingCTA
        title="Tu próximo cliente ya está buscando."
        text="Haz que te encuentre a ti y no a tu competencia."
        buttonText="QUIERO MI INFORME GRATUITO"
        eventName="landing_central_cta_click"
      />

      <section style={{ padding: "80px 20px", backgroundColor: LANDING_COLORS.bgLight }}>
        <div style={{ maxWidth: "620px", margin: "0 auto" }}>
          <LandingLeadForm goalLabel={selectedGoalLabel} />
        </div>
      </section>

      <LandingFaq />
      <LandingCTA
        title="Deja de perseguir clientes. Haz que te encuentren."
        text="Solicita tu análisis gratuito y descubre qué te está frenando hoy."
        buttonText="ANALIZAR MI NEGOCIO GRATIS"
        eventName="landing_final_cta_click"
      />
      <LandingFooter />

      <style>{`
        .landing-cta-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.05);
        }
        .landing-goal-card:hover {
          border-color: ${LANDING_COLORS.primary};
        }
        .landing-header-phone-text {
          line-height: 1.2;
        }
        .landing-header-cta-text-short { display: none; }

        .landing-hero-grid { grid-template-columns: 1fr; }
        .landing-hero-visual { position: relative; }
        .landing-hero-stat-card {
          margin-top: -36px;
          margin-left: 36px;
          max-width: 230px;
        }
        .landing-grid-2 { grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
        .landing-grid-3 { grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); }
        .landing-grid-4 { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
        .landing-grid-6 { grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); }
        .landing-form-row { grid-template-columns: 1fr 1fr; }
        .landing-footer-row { justify-content: space-between; }

        .landing-h1 { font-size: clamp(30px, 6vw, 54px); }
        .landing-h2 { font-size: clamp(26px, 4vw, 36px); }
        .landing-h2-sm { font-size: clamp(20px, 3.2vw, 28px); }

        @media (min-width: 960px) {
          .landing-hero-grid { grid-template-columns: 1.05fr 0.95fr; }
        }

        @media (max-width: 640px) {
          .landing-hero-stat-card {
            margin-top: -22px;
            margin-left: 16px;
            max-width: 190px;
          }
        }

        @media (max-width: 480px) {
          .landing-header-phone-text { display: none; }
          .landing-header-cta-text { display: none; }
          .landing-header-cta-text-short { display: inline; }
          .landing-form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
