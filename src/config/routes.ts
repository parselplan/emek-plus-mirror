/**
 * Planlanan modül rotaları — henüz aktif değil, büyüme için referans.
 */
export const APP_ROUTES = {
  splash: "/",
  login: "/login",
  otp: "/otp",
  home: "/home",
  /** @planned */ salary: "/maas",
  /** @planned */ rights: "/haklarim",
  /** @planned */ documents: "/belgeler",
  /** @planned */ assistant: "/asistan",
  /** @planned */ profile: "/profil",
} as const;

export type AppRouteKey = keyof typeof APP_ROUTES;

export const PLANNED_MODULE_ROUTES = [
  { key: "home", path: APP_ROUTES.home, label: "Dashboard / Home", status: "active" },
  { key: "salary", path: APP_ROUTES.salary, label: "Maaş", status: "planned" },
  { key: "rights", path: APP_ROUTES.rights, label: "Haklarım", status: "planned" },
  { key: "documents", path: APP_ROUTES.documents, label: "Belgeler", status: "planned" },
  { key: "assistant", path: APP_ROUTES.assistant, label: "AI Asistan", status: "planned" },
  { key: "profile", path: APP_ROUTES.profile, label: "Profil", status: "planned" },
] as const;
