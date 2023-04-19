import { withClerkMiddleware } from "@clerk/nextjs/server";
// import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default withClerkMiddleware(() => {
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!static|.*\\..*|_next|favicon.ico).*)", "/"],
};
