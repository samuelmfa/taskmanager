import { NextRequest, NextResponse } from "next/server";
import { sessionCookieName, verifySessionToken } from "@/shared/infrastructure/auth/session";

export function proxy(request: NextRequest) {
  if (process.env.NODE_ENV === "development") return NextResponse.next();
  if (request.nextUrl.pathname === "/api/tasks/public") return NextResponse.next();

  const session = verifySessionToken(request.cookies.get(sessionCookieName)?.value);
  if (session) return NextResponse.next();

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("next", request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/tasks/:path*", "/api/tasks/:path*"],
};