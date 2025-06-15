import axios from 'axios'
import locationModel from '@/models/userLocation'
import { NextResponse } from 'next/server'

export async function GET(req, res){
    const allUserCoords = await locationModel.find()
    return NextResponse.json({allUserCoords}, {status : 200})
}