import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define protected routes for each role
const protectedRoutes = {
  admin: ['/admin'],
  companyOwner: ['/company'],
  branchManager: ['/branch'],
  teamLeader: ['/team-leader'],
  employee: ['/employee-dashboard']
};

// Public routes that don't require authentication
const publicRoutes = ['/', '/login', '/jobs', '/register', '/forgot-password'];

// Check if a path is protected
function isProtectedRoute(pathname: string): boolean {
  return Object.values(protectedRoutes).some(routes => 
    routes.some(route => pathname.startsWith(route))
  );
}

// Check if user has access to the route based on role
function hasAccess(pathname: string, userRole: string): boolean {
  const userRoutes = protectedRoutes[userRole as keyof typeof protectedRoutes];
  return userRoutes ? userRoutes.some(route => pathname.startsWith(route)) : false;
}

// Mock JWT verification (in real implementation, use a proper JWT library)
function verifyToken(token: string): any {
  try {
    // Decode JWT token
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const payload = JSON.parse(jsonPayload);
    
    // Check if token is expired
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    
    return payload;
  } catch {
    return null;
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Allow public routes
  if (publicRoutes.includes(pathname) || pathname.startsWith('/api/') || pathname.startsWith('/_next/')) {
    return NextResponse.next();
  }
  
  // Check if route is protected
  if (isProtectedRoute(pathname)) {
    // For client-side routes, we'll handle authentication in the component
    // The middleware will just pass through and let the client handle it
    return NextResponse.next();
  }
  
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
