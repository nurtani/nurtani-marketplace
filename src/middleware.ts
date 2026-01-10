import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const locales = ["id", "en"];
const defaultLocale = "en";
const ignoredExtensions = [".jpg", ".png", ".css", ".js", ".svg", ".ico"];

export function middleware(request: NextRequest): void | NextResponse {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathname.startsWith("/images/")) {
    return NextResponse.next(); // Bypass locale processing
  }
  if (pathname.startsWith("/docs/")) {
    return NextResponse.next(); // Bypass locale processing
  }

  if (ignoredExtensions.some((ext) => pathname.endsWith(ext))) {
    return NextResponse.next(); // Bypass the middleware
  }

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = request.cookies.get("locale")?.value ?? defaultLocale;
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
