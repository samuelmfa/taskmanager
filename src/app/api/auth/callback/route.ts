import { NextResponse, type NextRequest } from "next/server";
import { sessionCookieName } from "@/shared/infrastructure/auth/session";
import {
  completeGoogleOAuth,
  googleOAuthStateCookieName,
} from "@/features/auth/api/googleOAuth";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const result = await completeGoogleOAuth({
    origin: url.origin,
    state: url.searchParams.get("state"),
    stateCookie: request.cookies.get(googleOAuthStateCookieName)?.value,
    code: url.searchParams.get("code"),
  });
  const failure = NextResponse.redirect(
    new URL("/login?error=google", url.origin),
  );
  failure.cookies.delete(googleOAuthStateCookieName);
  if (result.kind === "failure") return failure;

  const response = NextResponse.redirect(new URL("/tasks", url.origin));
  response.cookies.set(sessionCookieName, result.sessionToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: 7 * 86400,
  });
  response.cookies.delete(googleOAuthStateCookieName);
  return response;
}
