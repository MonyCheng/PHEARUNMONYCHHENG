import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
    const ip = req.headers.get('x-forwarded-for') || ''
    const blockedIps = ['1.2.3.4', '5.6.7.8']
    if (blockedIps.includes(ip)) {
        return new NextResponse('Forbidden', { status: 403 })
    }

    return NextResponse.next()
}
