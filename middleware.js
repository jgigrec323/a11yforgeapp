import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("allyforge-token");

  if (!token) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
}

// Apply the middleware only to onboarding pages
export const config = {
  matcher: "/onboarding/:path*",
};
