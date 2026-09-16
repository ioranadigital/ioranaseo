"use client";
import { FC } from "react";
import { Users, Eye, LayoutTemplate, MessageSquare, Workflow, HelpCircle } from "lucide-react";
import { trackEvent } from "@/lib/trackEvent";
import { LANDING_COLORS, LANDING_FONT } from "./landingTheme";

export const GOALS = [
  { id: "clientes", label: "Más clientes", icon: Users },
  { id: "visibilidad", label: "Más visibilidad en Google", icon: Eye },
  { id: "web", label: "Una web que convierta", icon: LayoutTemplate },
  { id: "contactos", label: "Más contactos", icon: MessageSquare },
  { id: "automatizar", label: "Automatizar mi negocio", icon: Workflow },
  { id: "no-se", label: "No sé por dónde empezar", icon: HelpCircle },
] as const;

export type LandingGoalId = (typeof GOALS)[number]["id"];

interface LandingGoalSelectorProps {
  selectedGoal: LandingGoalId | null;
  onSelect: (goal: LandingGoalId, label: string) => void;
}

const LandingGoalSelector: FC<LandingGoalSelectorProps> = ({ selectedGoal, onSelect }) => {
  return (
    <section style={{ padding: "80px 20px", backgroundColor: LANDING_COLORS.white }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <h2
          className="landing-h2"
          style={{
            fontFamily: LANDING_FONT,
            fontWeight: 800,
            color: LANDING_COLORS.ink,
            textAlign: "center",
            margin: "0 0 12px",
            letterSpacing: "-0.01em",
          }}
        >
          ¿Qué quieres conseguir?
        </h2>
        <p style={{ textAlign: "center", color: LANDING_COLORS.inkSoft, fontSize: "15px", margin: "0 0 40px" }}>
          Elige tu objetivo y lo tendremos en cuenta en tu análisis gratuito.
        </p>

        <div className="landing-grid-3" style={{ display: "grid", gap: "18px" }}>
          {GOALS.map(({ id, label, icon: Icon }) => {
            const active = selectedGoal === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => {
                  onSelect(id, label);
                  trackEvent("landing_goal_select", { goal: id });
                }}
                className="landing-goal-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  textAlign: "left" as const,
                  padding: "22px 20px",
                  borderRadius: "16px",
                  border: `2px solid ${active ? LANDING_COLORS.primary : LANDING_COLORS.border}`,
                  backgroundColor: active ? "rgba(77, 50, 165, 0.06)" : LANDING_COLORS.white,
                  cursor: "pointer",
                  fontFamily: LANDING_FONT,
                }}
              >
                <span
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: active ? LANDING_COLORS.primary : LANDING_COLORS.bgLight,
                    color: active ? LANDING_COLORS.white : LANDING_COLORS.primary,
                  }}
                >
                  <Icon size={20} />
                </span>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "15px",
                    color: LANDING_COLORS.ink,
                  }}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LandingGoalSelector;
