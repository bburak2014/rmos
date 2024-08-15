// app/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // İstekteki cookie'leri al
  const cookieStore = request.cookies;
  const token = cookieStore.get("token")?.value;
  const url = request.nextUrl.clone();

  // Eğer token yoksa veya geçersizse, kullanıcıyı login sayfasına yönlendir
  if (!token && url.pathname !== "/login") {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Token varsa, isteği devam ettir (dashboard'a erişim izni ver)
  return NextResponse.next();
}

// Hangi yolların middleware tarafından korunacağını belirt
export const config = {
  matcher: ["/dashboard", "/login"], // Örnek: /dashboard ve altındaki tüm sayfalar
};
