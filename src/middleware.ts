import Cookies from "cookies";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
	const url = request.nextUrl.clone();

	let cookie = request.cookies.get("uss");
	if (url.pathname === "/") {
		if (cookie) {
			const response = await fetch(
				process.env.NEXT_PUBLIC_API_URL + "/api/v1/test/verify",
				{
					method: "GET",
					headers: {
						Authorization: "Bearer " + cookie.value,
					},
				}
			);
			if (response.status === 200) {
				url.pathname = "/home";
				return NextResponse.redirect(url);
			}
			if (response.status === 403) {
				return NextResponse.next();
			}
		}
		return;
	}

	url.pathname = "/auth/signin";
	if (!cookie) {
		return NextResponse.redirect(url);
	} else {
		console.log(cookie.value);
		const response = await fetch(
			process.env.NEXT_PUBLIC_API_URL + "/api/v1/test/verify",
			{
				method: "GET",
				headers: {
					Authorization: "Bearer " + cookie.value,
				},
			}
		);
		if (response.status === 200) {
			return NextResponse.next();
		}
		if (response.status === 403) {
			return NextResponse.redirect(url);
		}
	}
}

export const config = {
	matcher: ["/", "/home/:path*", "/setting/:path*", "/profile"],
};
