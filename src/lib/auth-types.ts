export interface AuthUser {
  id: string;
  phone: string;
}

/** Client-visible session (token is kept in HttpOnly encrypted cookie only). */
export interface PublicSession {
  user: AuthUser;
  expiresAt: number;
}

/** Full server-side session including API token. */
export interface AuthSession extends PublicSession {
  token: string;
}

export interface EmekSessionData {
  user?: AuthUser;
  expiresAt?: number;
  token?: string;
}

/** @deprecated Legacy localStorage key — cleared on hydrate/login. */
export const AUTH_STORAGE_KEY = "emek-auth-session";
