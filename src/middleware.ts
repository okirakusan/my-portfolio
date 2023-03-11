import { NextRequest, NextResponse } from "next/server";

/*
matcher : middleware.jsを適用する（呼び出す）パスを指定する
*/
export const config = {
  matcher: ["/:path*"],
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  if (!url.pathname.startsWith("/")) return;

  const basicAuth = req.headers.get("authorization");

  if (basicAuth) {
    const auth = basicAuth.split(" ")[1];
    const [user, pwd] = atob(auth).split(":");

    if (
      user === process.env.BASIC_AUTH_USER &&
      pwd === process.env.BASIC_AUTH_PASSWORD
    ) {
      return NextResponse.next();
    }
  }
  url.pathname = "/api/auth";

  return NextResponse.rewrite(url);
}
