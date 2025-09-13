import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { supportedLanguages } from "./lib/i18n"

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip API routes, static files, and internal Next.js paths
  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml")
  ) {
    return NextResponse.next()
  }

  // Check if pathname already has a language prefix
  const pathnameHasLocale = Object.keys(supportedLanguages).some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // For all paths, serve English content without any redirects
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc.)
    "/((?!_next/static|_next/image|api|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
}
