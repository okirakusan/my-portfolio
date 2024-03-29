import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  if (req.nextUrl.pathname.startsWith("/")) {
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

    const url = req.nextUrl;
    url.pathname = "/api/auth";

    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
};
