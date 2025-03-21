import { NextResponse } from "next/server";

export function middleware(req) {
  const tokenCookie = req.cookies.get("allyforge-token");

  // Ensure tokenCookie exists and extract its value
  const token = tokenCookie?.value;

  if (!token || token === "undefined") {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
}

// Apply the middleware only to onboarding pages
export const config = {
  matcher: "/onboarding/:path*",
};
