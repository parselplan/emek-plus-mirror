export class AuthError extends Error {
  constructor(
    message: string,
    readonly status = 400,
  ) {
    super(message);
    this.name = "AuthError";
  }
}

export function toAuthMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  return "Bir hata oluştu. Lütfen tekrar dene.";
}
