import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const url = request.nextUrl.clone();

  // Token varsa ve kullanıcı dashboard'a gitmiyorsa, yönlendir
  if (token && url.pathname !== '/dashboard') {
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  // Token yoksa ve dashboard'a gitmeye çalışıyorsa, ana sayfaya yönlendir
  if (!token && url.pathname.startsWith('/dashboard')) {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/'], // Ana sayfayı da matcher'a ekledik
};