import { setCookie } from 'cookies-next'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import { cookies } from 'next/headers'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const user = request.nextUrl.searchParams.get('user');
  const res = NextResponse.next();
  res.cookies.set("user",user);
  // return NextResponse.redirect(new URL('/', request.url))
  return res;
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/peter',
}