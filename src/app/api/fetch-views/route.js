import { NextRequest, NextResponse } from 'next/server'
import viewCountModel from '@/models/viewCount'
import connect from "@/config/mongoose";

export async function GET() {
    try {
        await connect()
        const doc = await viewCountModel.findOne();
        const totalViews = doc?.views || 0;
        return NextResponse.json({ views : totalViews }, { status: 200 })
    } catch (err) {
        console.log(`Error : ${err}`);

    }
}