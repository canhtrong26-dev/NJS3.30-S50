import { NextResponse } from 'next/server';

export function middleware(request) {
    const url = request.nextUrl.clone();

    const preferredLanguage = request.cookies.get('preferredLanguage')?.value;

    let language = 'en';

    if (preferredLanguage) {
        language = preferredLanguage;
    } else {
        const acceptLanguage = request.headers.get('accept-language');
        if (acceptLanguage && acceptLanguage.includes('vi')) {
            language = 'vi';
        }
    }

    if (!url.pathname.startsWith(`/${language}`)) {
        url.pathname = `/${language}${url.pathname}`;
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next|favicon.ico).*)'],
};