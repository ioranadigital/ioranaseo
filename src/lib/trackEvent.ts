type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

export function trackEvent(name: string, params?: Record<string, string>) {
  const gtag = typeof window !== "undefined" ? (window as GtagWindow).gtag : undefined;
  if (gtag) {
    gtag("event", name, params ?? {});
  }
}
