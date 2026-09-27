import { createSessionToken } from "@/shared/infrastructure/auth/session";

export const googleOAuthStateCookieName = "tarefa_oauth_state";

type GoogleOAuthStartResult =
  | { kind: "local"; sessionToken: string }
  | { kind: "redirect"; authorizationUrl: URL; state: string }
  | { kind: "unavailable" };

type GoogleOAuthCallbackInput = {
  origin: string;
  state: string | null;
  stateCookie: string | undefined;
  code: string | null;
};

type GoogleOAuthCallbackResult =
  | { kind: "failure" }
  | { kind: "success"; sessionToken: string };

export function startGoogleOAuth(origin: string): GoogleOAuthStartResult {
  if (process.env.NODE_ENV === "development") {
    return {
      kind: "local",
      sessionToken: createSessionToken({
        sub: "local-user",
        email: "dev@localhost",
        name: "Pessoa desenvolvedora",
      }),
    };
  }

  const clientId = process.env.GOOGLE_CLIENT_ID;
  if (!clientId || !process.env.GOOGLE_CLIENT_SECRET || !process.env.SESSION_SECRET) {
    return { kind: "unavailable" };
  }

  const redirectUri = process.env.GOOGLE_REDIRECT_URI ?? `${origin}/api/auth/callback`;
  const state = crypto.randomUUID();
  const authorizationUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  authorizationUrl.searchParams.set("client_id", clientId);
  authorizationUrl.searchParams.set("redirect_uri", redirectUri);
  authorizationUrl.searchParams.set("response_type", "code");
  authorizationUrl.searchParams.set("scope", "openid email profile");
  authorizationUrl.searchParams.set("state", state);
  authorizationUrl.searchParams.set("prompt", "select_account");

  return { kind: "redirect", authorizationUrl, state };
}

export async function completeGoogleOAuth({
  origin,
  state,
  stateCookie,
  code,
}: GoogleOAuthCallbackInput): Promise<GoogleOAuthCallbackResult> {
  if (!state || !stateCookie || stateCookie !== state || !code) {
    return { kind: "failure" };
  }

  const redirectUri = process.env.GOOGLE_REDIRECT_URI ?? `${origin}/api/auth/callback`;

  try {
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID ?? "",
        client_secret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      }),
    });
    if (!tokenResponse.ok) return { kind: "failure" };

    const tokens = await tokenResponse.json() as { access_token?: string };
    if (!tokens.access_token) return { kind: "failure" };

    const userResponse = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    });
    if (!userResponse.ok) return { kind: "failure" };

    const user = await userResponse.json() as {
      sub?: string;
      email?: string;
      name?: string;
      email_verified?: boolean;
    };
    if (!user.sub || !user.email || user.email_verified !== true) {
      return { kind: "failure" };
    }

    return {
      kind: "success",
      sessionToken: createSessionToken({
        sub: user.sub,
        email: user.email,
        name: user.name ?? user.email,
      }),
    };
  } catch {
    return { kind: "failure" };
  }
}