import { NextResponse } from "next/server";
import { createSessionToken, sessionCookieName } from "@/shared/infrastructure/auth/session";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const cookies = request.headers.get("cookie") ?? "";
  const stateCookie = cookies.match(/(?:^|;\s*)tarefa_oauth_state=([^;]+)/)?.[1];
  const state = url.searchParams.get("state");
  const code = url.searchParams.get("code");
  const redirectUri = process.env.GOOGLE_REDIRECT_URI ?? `${url.origin}/api/auth/callback`;
  const failure = NextResponse.redirect(new URL("/login?error=google", url.origin));
  failure.cookies.delete("tarefa_oauth_state");

  if (!state || !stateCookie || decodeURIComponent(stateCookie) !== state || !code) return failure;

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
    if (!tokenResponse.ok) return failure;
    const tokens = await tokenResponse.json() as { access_token?: string };
    if (!tokens.access_token) return failure;

    const userResponse = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    });
    if (!userResponse.ok) return failure;
    const user = await userResponse.json() as { sub?: string; email?: string; name?: string; email_verified?: boolean };
    if (!user.sub || !user.email || user.email_verified !== true) return failure;

    const response = NextResponse.redirect(new URL("/tasks", url.origin));
    response.cookies.set(sessionCookieName, createSessionToken({
      sub: user.sub, email: user.email, name: user.name ?? user.email,
    }), { httpOnly: true, sameSite: "lax", secure: true, path: "/", maxAge: 7 * 86400 });
    response.cookies.delete("tarefa_oauth_state");
    return response;
  } catch {
    return failure;
  }
}