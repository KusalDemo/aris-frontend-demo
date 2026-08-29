function readPublic(name: string, fallback = ""): string {
  const value = process.env[name];
  return value === undefined || value === null ? fallback : value;
}

/** Prefix for browser fetch. Empty = same-origin (Next rewrite → gateway). */
export const API_BASE_URL = readPublic("NEXT_PUBLIC_API_BASE_URL", "").replace(
  /\/$/,
  "",
);

export const DEMO_EMAIL = readPublic(
  "NEXT_PUBLIC_DEMO_EMAIL",
  "demo@aris.local",
);

export const BURST_SIZE = (() => {
  const raw = Number(readPublic("NEXT_PUBLIC_BURST_SIZE", "10"));
  return Number.isFinite(raw) && raw > 0 ? Math.floor(raw) : 10;
})();

export const GATEWAY_PUBLIC_URL = readPublic(
  "NEXT_PUBLIC_GATEWAY_URL",
  "http://localhost:8080",
).replace(/\/$/, "");

export const PROMETHEUS_PUBLIC_URL = readPublic(
  "NEXT_PUBLIC_PROMETHEUS_URL",
  "http://localhost:9090",
).replace(/\/$/, "");

export const POLICY_PUBLIC_URL = readPublic(
  "NEXT_PUBLIC_POLICY_URL",
  "http://localhost:18080",
).replace(/\/$/, "");

export const DOCKER_HUB_ARIS_POLICY_URL = readPublic(
  "NEXT_PUBLIC_DOCKER_HUB_ARIS_POLICY_URL",
  "https://hub.docker.com/r/kusalgunasekara/aris-policy",
);

export function apiUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${normalized}`;
}
