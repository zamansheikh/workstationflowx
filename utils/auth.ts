// Authentication utility functions
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  avatar?: string | null;
  company?: {
    _id: string;
    name: string;
    logo?: string | null;
    subscriptionStatus: string;
    utilizationPercentage: {
      branches: number | null;
      employees: number | null;
    };
    id: string;
  } | null;
  branch?: {
    _id: string;
    name: string;
    id: string;
  } | null;
  team?: {
    _id: string;
    name: string;
    id: string;
  } | null;
  preferences: {
    notifications: {
      email: boolean;
      push: boolean;
      sms: boolean;
    };
    theme: string;
    language: string;
    timezone: string;
  };
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthState {
  user: User | null;
  tokens: AuthTokens | null;
  isAuthenticated: boolean;
}

// Get stored authentication data
export function getAuthState(): AuthState {
  if (typeof window === 'undefined') {
    return { user: null, tokens: null, isAuthenticated: false };
  }

  try {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const userStr = localStorage.getItem('user');

    if (!accessToken || !refreshToken || !userStr) {
      return { user: null, tokens: null, isAuthenticated: false };
    }

    const user = JSON.parse(userStr);
    const tokens = { accessToken, refreshToken };

    return { user, tokens, isAuthenticated: true };
  } catch (error) {
    console.error('Error getting auth state:', error);
    return { user: null, tokens: null, isAuthenticated: false };
  }
}

// Store authentication data
export function setAuthState(user: User, tokens: AuthTokens): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem('accessToken', tokens.accessToken);
    localStorage.setItem('refreshToken', tokens.refreshToken);
    localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    console.error('Error setting auth state:', error);
  }
}

// Clear authentication data
export function clearAuthState(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  } catch (error) {
    console.error('Error clearing auth state:', error);
  }
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
  return getAuthState().isAuthenticated;
}

// Get current user
export function getCurrentUser(): User | null {
  return getAuthState().user;
}

// Get access token
export function getAccessToken(): string | null {
  return getAuthState().tokens?.accessToken || null;
}

// Get user role
export function getUserRole(): string | null {
  return getCurrentUser()?.role || null;
}

// Check if user has specific role
export function hasRole(role: string): boolean {
  return getUserRole() === role;
}

// Check if user has any of the specified roles
export function hasAnyRole(roles: string[]): boolean {
  const userRole = getUserRole();
  return userRole ? roles.includes(userRole) : false;
}

// Get role redirect path
export function getRoleRedirectPath(role: string): string {
  switch (role) {
    case 'admin': return '/admin';
    case 'companyOwner': return '/company';
    case 'branchManager': return '/branch';
    case 'teamLeader': return '/team-leader';
    case 'employee': return '/employee-dashboard';
    default: return '/';
  }
}

// Logout function
export function logout(): void {
  clearAuthState();
  
  // Redirect to login page
  if (typeof window !== 'undefined') {
    window.location.href = '/login';
  }
}

// API call helper with authentication
export async function authenticatedFetch(url: string, options: RequestInit = {}): Promise<Response> {
  const token = getAccessToken();
  
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
    ...options.headers,
  };

  // Use full URL for backend API
  const fullUrl = url.startsWith('http') ? url : `http://localhost:3000${url}`;

  return fetch(fullUrl, {
    ...options,
    headers,
  });
}

// Verify token is still valid (real JWT implementation)
export function isTokenValid(): boolean {
  const token = getAccessToken();
  if (!token) return false;

  try {
    // Decode JWT token to check expiration
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const payload = JSON.parse(jsonPayload);
    
    // Check if token is expired
    return payload.exp && payload.exp > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}
