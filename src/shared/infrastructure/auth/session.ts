import { createHmac, timingSafeEqual } from "node:crypto";

export const sessionCookieName = "tarefa_session";

type SessionPayload = { sub: string; email: string; name: string; exp: number };

function sessionSecret() {
  const secret = process.env.SESSION_SECRET;
  if (!secret && process.env.NODE_ENV === "production") {
    throw new Error("SESSION_SECRET must be configured in production.");
  }
  return secret ?? "local-development-session-secret-change-me";
}

export function createSessionToken(user: Omit<SessionPayload, "exp">) {
  const payload = Buffer.from(JSON.stringify({ ...user, exp: Date.now() + 7 * 86400000 })).toString("base64url");
  const signature = createHmac("sha256", sessionSecret()).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

export function verifySessionToken(token: string | undefined): SessionPayload | null {
  if (!token) return null;
  const [payload, signature, extra] = token.split(".");
  if (!payload || !signature || extra) return null;
  const expected = createHmac("sha256", sessionSecret()).update(payload).digest();
  let actual: Buffer;
  try {
    actual = Buffer.from(signature, "base64url");
  } catch {
    return null;
  }
  if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) return null;
  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as SessionPayload;
    return session.exp > Date.now() && session.sub && session.email ? session : null;
  } catch {
    return null;
  }
}