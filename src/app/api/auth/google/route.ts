import { NextResponse } from "next/server";
import { createSessionToken, sessionCookieName } from "@/shared/infrastructure/auth/session";

export async function GET(request: Request) {
  const url = new URL(request.url);
  if (process.env.NODE_ENV === "development") {
    const response = NextResponse.redirect(new URL("/tasks", url.origin));
    response.cookies.set(sessionCookieName, createSessionToken({ sub: "local-user", email: "dev@localhost", name: "Pessoa desenvolvedora" }), {
      httpOnly: true, sameSite: "lax", secure: false, path: "/", maxAge: 7 * 86400,
    });
    return response;
  }

  const clientId = process.env.GOOGLE_CLIENT_ID;
  const redirectUri = process.env.GOOGLE_REDIRECT_URI ?? `${url.origin}/api/auth/callback`;
  if (!clientId || !process.env.GOOGLE_CLIENT_SECRET || !process.env.SESSION_SECRET) {
    return NextResponse.json({ error: "Google OAuth is not configured." }, { status: 503 });
  }

  const state = crypto.randomUUID();
  const googleUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  googleUrl.searchParams.set("client_id", clientId);
  googleUrl.searchParams.set("redirect_uri", redirectUri);
  googleUrl.searchParams.set("response_type", "code");
  googleUrl.searchParams.set("scope", "openid email profile");
  googleUrl.searchParams.set("state", state);
  googleUrl.searchParams.set("prompt", "select_account");

  const response = NextResponse.redirect(googleUrl);
  response.cookies.set("tarefa_oauth_state", state, {
    httpOnly: true, sameSite: "lax", secure: true, path: "/api/auth/callback", maxAge: 600,
  });
  return response;
}