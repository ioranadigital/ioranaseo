"use client";

import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react";

const STORAGE_KEY = "iorana-cookie-consent";
const CONSENT_VERSION = "1";
export const OPEN_COOKIE_PREFERENCES_EVENT = "iorana:open-cookie-preferences";

interface ConsentPreferences {
  analytics: boolean;
  version: string;
  timestamp: number;
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences | null>(
    null
  );
  // Defaults to OFF: a first-time visitor who opens "Configurar preferencias"
  // directly (without Accept/Reject first) must see Analytics unticked —
  // no prior consent means no assumed consent. Reopening after a real
  // decision (handleOpenPreferences / handleEditPreferences below) always
  // overwrites this with the actually-stored value.
  const [tempAnalytics, setTempAnalytics] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  // Accessibility: focus trap + Escape-to-close + scroll lock + focus
  // restoration while the preferences dialog is open (role="dialog").
  useEffect(() => {
    if (!showPreferences) return;

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const getFocusable = () =>
      modalRef.current
        ? Array.from(
            modalRef.current.querySelectorAll<HTMLElement>(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            )
          ).filter((el) => !el.hasAttribute("disabled"))
        : [];

    const focusable = getFocusable();
    focusable[0]?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setShowPreferences(false);
        return;
      }
      if (e.key !== "Tab") return;
      const items = getFocusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocusedRef.current?.focus();
    };
  }, [showPreferences]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as ConsentPreferences;
      if (parsed.version === CONSENT_VERSION) {
        setPreferences(parsed);
        // Initialize GA4 if analytics consent given
        if (parsed.analytics && typeof window !== "undefined") {
          initializeGA4();
        }
      } else {
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  // Allow other components (e.g. Footer "Preferencias de cookies") to
  // reopen the preference center without routing to a dedicated page.
  useEffect(() => {
    const handleOpenPreferences = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as ConsentPreferences;
        setTempAnalytics(parsed.analytics);
      }
      setShowPreferences(true);
    };

    window.addEventListener(
      OPEN_COOKIE_PREFERENCES_EVENT,
      handleOpenPreferences
    );
    return () =>
      window.removeEventListener(
        OPEN_COOKIE_PREFERENCES_EVENT,
        handleOpenPreferences
      );
  }, []);

  const initializeGA4 = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  // Counterpart to initializeGA4(): revokes analytics consent so a running
  // GA instance (present or future) stops sending events immediately when
  // the user rejects or turns Analytics back off. No-op today since gtag
  // isn't loaded anywhere in the site yet (see LEGAL_COOKIE_SYSTEM.md).
  const revokeGA4 = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  };

  const handleAcceptAll = () => {
    const prefs: ConsentPreferences = {
      analytics: true,
      version: CONSENT_VERSION,
      timestamp: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowPreferences(false);
    initializeGA4();
  };

  const handleRejectAll = () => {
    const prefs: ConsentPreferences = {
      analytics: false,
      version: CONSENT_VERSION,
      timestamp: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowPreferences(false);
    revokeGA4();
  };

  const handleSavePreferences = () => {
    const prefs: ConsentPreferences = {
      analytics: tempAnalytics,
      version: CONSENT_VERSION,
      timestamp: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowPreferences(false);
    if (tempAnalytics) {
      initializeGA4();
    } else {
      revokeGA4();
    }
  };

  const handleEditPreferences = () => {
    setTempAnalytics(preferences?.analytics ?? false);
    setShowPreferences(true);
  };

  // Don't render on server
  if (!showBanner && !showPreferences) {
    return null;
  }

  const cookieButtonStyle: CSSProperties = {
    backgroundColor: "white",
    border: "1px solid var(--io-border)",
    color: "var(--io-text)",
    padding: "10px 20px",
    borderRadius: "var(--io-radius-sm)",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 600,
    fontFamily: "inherit",
    transition: "all 0.2s",
  };

  const handleCookieButtonEnter = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.borderColor = "var(--io-action)";
    e.currentTarget.style.color = "var(--io-action)";
  };

  const handleCookieButtonLeave = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.borderColor = "var(--io-border)";
    e.currentTarget.style.color = "var(--io-text)";
  };

  return (
    <>
      {showBanner && (
        <div
          role="region"
          aria-labelledby="cookie-banner-title"
          className="cookie-consent-card"
          style={{
            fontFamily: 'var(--io-font)',
            position: "fixed",
            zIndex: 9999,
            backgroundColor: "white",
            color: "var(--io-text)",
            padding: "20px",
            borderRadius: "var(--io-radius-lg)",
            border: "1px solid var(--io-border)",
            boxShadow: "0 12px 32px rgba(15, 23, 42, 0.14)",
          }}
        >
          <style>
            {`
              @keyframes cookie-consent-in {
                from { opacity: 0; transform: translateY(16px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .cookie-consent-card {
                animation: cookie-consent-in 300ms ease-out;
                /* Mobile: tarjeta flotante casi a ancho completo, anclada abajo */
                left: 16px;
                right: 16px;
                bottom: 16px;
              }
              @media (min-width: 768px) {
                .cookie-consent-card {
                  /* Desktop/tablet: flota junto al borde derecho, NO cubre todo el ancho inferior */
                  left: auto;
                  right: 24px;
                  bottom: 24px;
                  width: 100%;
                  max-width: 420px;
                }
              }
              @media (prefers-reduced-motion: reduce) {
                .cookie-consent-card { animation: none; }
              }
              .cookie-consent-actions { display: flex; gap: 10px; }
              @media (max-width: 430px) {
                .cookie-consent-actions { flex-direction: column; }
              }
            `}
          </style>

          <h2
            id="cookie-banner-title"
            style={{ margin: "0 0 8px 0", fontSize: "15px", fontWeight: 700, color: "var(--io-text)" }}
          >
            Tu privacidad
          </h2>
          <p style={{ margin: "0 0 16px 0", fontSize: "13.5px", lineHeight: 1.55, color: "var(--io-text)" }}>
            Utilizamos cookies necesarias para el funcionamiento del sitio y, si lo aceptas, cookies de
            analítica para mejorar tu experiencia. Puedes cambiar tu elección cuando quieras desde
            &quot;Configurar preferencias&quot;.
          </p>

          <div className="cookie-consent-actions" style={{ marginBottom: "14px" }}>
            <button
              onClick={handleRejectAll}
              style={{ ...cookieButtonStyle, flex: 1 }}
              onMouseEnter={handleCookieButtonEnter}
              onMouseLeave={handleCookieButtonLeave}
            >
              Rechazar todas
            </button>

            <button
              onClick={handleAcceptAll}
              style={{
                flex: 1,
                backgroundColor: "var(--io-action)",
                border: "1px solid var(--io-action)",
                color: "white",
                padding: "10px 20px",
                borderRadius: "var(--io-radius-sm)",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--io-action-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--io-action)";
              }}
            >
              Aceptar todas
            </button>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              onClick={() => setShowPreferences(true)}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                fontFamily: "inherit",
                cursor: "pointer",
                fontSize: "12.5px",
                fontWeight: 600,
                color: "var(--io-text)",
                textDecoration: "underline",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--io-action)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--io-text)";
              }}
            >
              Configurar preferencias
            </button>

            <div style={{ display: "flex", gap: "12px" }}>
              <a
                href="/legal/privacidad"
                style={{ fontSize: "12px", color: "var(--io-text-muted)", textDecoration: "none" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--io-action)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--io-text-muted)";
                }}
              >
                Privacidad
              </a>
              <a
                href="/legal/cookies"
                style={{ fontSize: "12px", color: "var(--io-text-muted)", textDecoration: "none" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--io-action)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--io-text-muted)";
                }}
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      )}

      {showPreferences && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10000,
            fontFamily: "var(--io-font)",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowPreferences(false);
            }
          }}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-preferences-title"
            style={{
              backgroundColor: "white",
              border: "1px solid var(--io-border)",
              borderRadius: "var(--io-radius-md)",
              padding: "30px",
              maxWidth: "500px",
              width: "90%",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            <h2
              id="cookie-preferences-title"
              style={{ margin: "0 0 8px 0", fontSize: "20px", color: "var(--io-text)" }}
            >
              Preferencias de Cookies
            </h2>
            <p style={{ margin: "0 0 20px 0", fontSize: "13px", lineHeight: 1.5, color: "var(--io-text-muted)" }}>
              Controla qué cookies opcionales quieres permitir. Puedes modificar tu elección en
              cualquier momento.
            </p>

            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3 style={{ margin: "0 0 4px 0", fontSize: "14px", color: "var(--io-text)" }}>
                  Necesarias — Siempre activas
                </h3>
                <p style={{ margin: 0, fontSize: "12px", color: "var(--io-text-muted)" }}>
                  Necesarias para el funcionamiento básico del sitio.
                </p>
              </div>
              <input
                type="checkbox"
                checked={true}
                disabled
                aria-label="Cookies necesarias, siempre activas"
                style={{ cursor: "not-allowed" }}
              />
            </div>

            <div
              style={{
                marginBottom: "20px",
                paddingBottom: "20px",
                borderBottom: "1px solid var(--io-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3 style={{ margin: "0 0 4px 0", fontSize: "14px", color: "var(--io-text)" }}>
                  Analítica
                </h3>
                <p style={{ margin: 0, fontSize: "12px", color: "var(--io-text-muted)" }}>
                  Nos ayuda a comprender cómo se utiliza el sitio y mejorar su funcionamiento.
                </p>
              </div>
              <input
                type="checkbox"
                checked={tempAnalytics}
                aria-label="Cookies de analítica"
                onChange={(e) => setTempAnalytics(e.target.checked)}
                style={{ cursor: "pointer" }}
              />
            </div>

            <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
              <button
                onClick={handleRejectAll}
                style={cookieButtonStyle}
                onMouseEnter={handleCookieButtonEnter}
                onMouseLeave={handleCookieButtonLeave}
              >
                Rechazar opcionales
              </button>

              <button
                onClick={handleSavePreferences}
                style={{
                  backgroundColor: "var(--io-action)",
                  border: "1px solid var(--io-action)",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "var(--io-radius-md)",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 600,
                  fontFamily: "inherit",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--io-action-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--io-action)";
                }}
              >
                Guardar Preferencias
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
