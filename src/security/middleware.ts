import { NextResponse } from "next/server"

export function middleware(req: { headers: { get: (arg0: string) => string } }) {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    const blockedIps = ['123.45.67.89']

    if (blockedIps.includes(ip)) {
        return new Response('Forbidden', { status: 403 })
    }

    return NextResponse.next()
}
