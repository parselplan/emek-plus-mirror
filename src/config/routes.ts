/**
 * Planlanan modül rotaları — henüz aktif değil, büyüme için referans.
 */
export const APP_ROUTES = {
  splash: "/",
  login: "/login",
  otp: "/otp",
  home: "/home",
  salary: "/maas",
  rights: "/haklarim",
  /** @planned */ documents: "/belgeler",
  assistant: "/asistan",
  profile: "/profil",
} as const;

export type AppRouteKey = keyof typeof APP_ROUTES;

export const PLANNED_MODULE_ROUTES = [
  { key: "home", path: APP_ROUTES.home, label: "Dashboard / Home", status: "active" },
  { key: "salary", path: APP_ROUTES.salary, label: "Maaş", status: "active" },
  { key: "rights", path: APP_ROUTES.rights, label: "Haklarım", status: "active" },
  { key: "documents", path: APP_ROUTES.documents, label: "Belgeler", status: "planned" },
  { key: "assistant", path: APP_ROUTES.assistant, label: "AI Asistan", status: "active" },
  { key: "profile", path: APP_ROUTES.profile, label: "Profil", status: "active" },
] as const;
