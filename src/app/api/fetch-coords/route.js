import axios from 'axios'
import locationModel from '@/models/userLocation'
import { NextResponse } from 'next/server'
import connect from "@/config/mongoose";

export async function GET(req, res) {
    try {
        await connect()
        const allUserCoords = await locationModel.find().select('-ip')
        return NextResponse.json({ allUserCoords }, { status: 200 })
    } catch (error) {
        console.log(`Error : ${error}`);
    }
}