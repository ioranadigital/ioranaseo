"use client";

import { useEffect, useState, type CSSProperties, type MouseEvent } from "react";

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
  const [tempAnalytics, setTempAnalytics] = useState(true);

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
    }
  };

  const handleEditPreferences = () => {
    setTempAnalytics(preferences?.analytics ?? true);
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
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "white",
            color: "var(--io-text)",
            padding: "20px",
            zIndex: 9999,
            borderTop: "1px solid var(--io-border)",
            boxShadow: "0 -4px 20px rgba(15, 23, 42, 0.08)",
          }}
        >
          <style>
            {`
              @media (max-width: 640px) {
                .cookie-consent-inner {
                  flex-direction: column !important;
                  align-items: stretch !important;
                }
                .cookie-consent-actions {
                  flex-direction: column !important;
                  width: 100% !important;
                }
                .cookie-consent-actions button {
                  width: 100% !important;
                }
              }
            `}
          </style>
          <div
            className="cookie-consent-inner"
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: "250px" }}>
              <p style={{ margin: "0 0 12px 0", fontSize: "14px", color: "var(--io-text)" }}>
                Utilizamos cookies para mejorar tu experiencia. Puedes aceptar
                todas o configurar tus preferencias.
              </p>
              <a
                href="/legal/cookies"
                style={{
                  fontSize: "12px",
                  color: "var(--io-action)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--io-action-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--io-action)";
                }}
              >
                Política de Cookies
              </a>
            </div>

            <div className="cookie-consent-actions" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <button
                onClick={handleRejectAll}
                style={cookieButtonStyle}
                onMouseEnter={handleCookieButtonEnter}
                onMouseLeave={handleCookieButtonLeave}
              >
                Rechazar
              </button>

              <button
                onClick={() => setShowPreferences(true)}
                style={cookieButtonStyle}
                onMouseEnter={handleCookieButtonEnter}
                onMouseLeave={handleCookieButtonLeave}
              >
                Configurar
              </button>

              <button
                onClick={handleAcceptAll}
                style={cookieButtonStyle}
                onMouseEnter={handleCookieButtonEnter}
                onMouseLeave={handleCookieButtonLeave}
              >
                Aceptar
              </button>
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
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowPreferences(false);
            }
          }}
        >
          <div
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
            <h2 style={{ margin: "0 0 20px 0", fontSize: "20px", color: "var(--io-text)" }}>
              Preferencias de Cookies
            </h2>

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
                  Cookies Necesarias
                </h3>
                <p style={{ margin: 0, fontSize: "12px", color: "var(--io-text-muted)" }}>
                  Siempre activas. Permiten funcionalidad básica.
                </p>
              </div>
              <input
                type="checkbox"
                checked={true}
                disabled
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
                  Nos ayuda a mejorar tu experiencia.
                </p>
              </div>
              <input
                type="checkbox"
                checked={tempAnalytics}
                onChange={(e) => setTempAnalytics(e.target.checked)}
                style={{ cursor: "pointer" }}
              />
            </div>

            <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
              <button
                onClick={() => setShowPreferences(false)}
                style={cookieButtonStyle}
                onMouseEnter={handleCookieButtonEnter}
                onMouseLeave={handleCookieButtonLeave}
              >
                Cancelar
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
