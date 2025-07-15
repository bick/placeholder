import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Handle docs routes - serve from the static docs build
  if (pathname.startsWith('/docs')) {
    // Check if this is a placeholder route that was redirected from docs
    const placeholderMatch = pathname.match(/^\/docs\/(\d+x\d+(?:&[^\/]*)*)\/?$/);
    
    if (placeholderMatch) {
      // Redirect placeholder routes to the dynamic route handler
      const placeholderParams = placeholderMatch[1];
      const url = request.nextUrl.clone();
      url.pathname = `/${placeholderParams}`;
      return NextResponse.redirect(url);
    }

    // For regular docs routes, serve the static files
    // Rewrite to serve from public/docs directory
    const url = request.nextUrl.clone();
    url.pathname = pathname;
    return NextResponse.rewrite(url);
  }

  // Handle placeholder image routes (e.g., /300x180&text=Hello)
  // Make sure it's not 'docs' being treated as a placeholder
  const pathWithoutSlash = pathname.substring(1);
  const isDynamicRoute = /^\d+x\d+/.test(pathWithoutSlash) && pathWithoutSlash !== 'docs';
  
  if (isDynamicRoute) {
    // Let Next.js handle this through the [placeholder] route
    return NextResponse.next();
  }

  // For all other routes, continue normally
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 