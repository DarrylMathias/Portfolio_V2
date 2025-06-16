import axios from 'axios'
import locationModel from '@/models/userLocation'
import { NextResponse } from 'next/server'
import connect from "@/config/mongoose";

export async function GET(req, res) {
    const url = new URL(req.url);
    const secret = url.searchParams.get("secret");

    if (secret !== process.env.INTERNAL_SECRET) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    try {
        await connect()
        const allUserCoords = await locationModel.find().select('-ip')
        return NextResponse.json({ allUserCoords }, { status: 200 })
    } catch (error) {
        console.log(`Error : ${error}`);
    }
}