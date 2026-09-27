import { NextResponse } from "next/server";
import { sessionCookieName } from "@/shared/infrastructure/auth/session";
import {
  googleOAuthStateCookieName,
  startGoogleOAuth,
} from "@/features/auth/api/googleOAuth";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const result = startGoogleOAuth(url.origin);

  if (result.kind === "local") {
    const response = NextResponse.redirect(new URL("/tasks", url.origin));
    response.cookies.set(sessionCookieName, result.sessionToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      path: "/",
      maxAge: 7 * 86400,
    });
    return response;
  }

  if (result.kind === "unavailable") {
    return NextResponse.json(
      { error: "Google OAuth is not configured." },
      { status: 503 },
    );
  }

  const response = NextResponse.redirect(result.authorizationUrl);
  response.cookies.set(googleOAuthStateCookieName, result.state, {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/api/auth/callback",
    maxAge: 600,
  });
  return response;
}
