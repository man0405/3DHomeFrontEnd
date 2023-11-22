import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest, response: NextResponse) {
	const url = request.nextUrl.clone();
	url.pathname = "/auth/signin";
	let cookie = request.cookies.get("uss");
	if (!cookie) {
		return NextResponse.redirect(url);
	}
}

export const config = {
	matcher: ["/home/:path*", "/setting/:path*", "/profile"],
};
