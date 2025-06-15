import { NextResponse } from "next/server";
export async function GET(request, response) {
    const ipString = request.headers.get('x-forwarded-for')
    const ip = ipString ? ipString.split(',')[0].trim() : 'Ip not found';
    console.log(ip);
    return NextResponse.json({ip : ip}, {status : 200})
}