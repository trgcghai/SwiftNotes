import type { NextAuthConfig } from "next-auth";
import { NextURL } from "next/dist/server/web/next-url";

export const authConfig = {
    pages: {
        signIn: '/login'
    },
    callbacks: {
        authorized({auth , request: {nextUrl} } : {auth: any, request: {nextUrl: NextURL}}) {
            const isLoggedIn = !!auth?.next
            const isOnMain = nextUrl.pathname.startsWith('/')
            if (isOnMain) {
                if (isLoggedIn) return true
                return false
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/', nextUrl))
            }
            return true
        }
    },
    providers: []
} satisfies NextAuthConfig