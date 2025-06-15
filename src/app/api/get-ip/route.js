import connect from "@/config/mongoose";
import { NextResponse } from "next/server";
import axios from "axios";
import locationModel from "@/models/userLocation";
import viewCountModel from '@/models/viewCount'

export async function GET(request, response) {

    await connect()
    const ipString = request.headers.get('x-forwarded-for')
    const ip = ipString ? ipString.split(',')[0].trim() : 'Ip not found';
    console.log(ip);
    await axios.get(`https://ipapi.co/${ip}/json/`)
        .then(async (res) => {
            const findDuplicateIp = await locationModel.findOne({ ip: res.data.ip })
            const findDuplicateLat = await locationModel.findOne({ lat: res.data.latitude })
            const findDuplicateLon = await locationModel.findOne({ lon: res.data.longitude })
            const updatedViews = await viewCountModel.findOneAndUpdate(
                {},
                { $inc: { views: 1 } },
                { new: true, upsert: true }
            );
            
            if (!findDuplicateIp && !findDuplicateLat && !findDuplicateLon) {
                await locationModel.create({
                    ip: res.data.ip,
                    lat: res.data.latitude,
                    lon: res.data.longitude,
                    city: res.data.city,
                    country: res.data.country_name
                })
                console.log(`Stored IP: ${ip}, Location: ${res.data.city}, ${res.data.country_name} : ${res.data?.org}`);
            } else {
                console.log('IP Address already exists');
            }
        })
        .catch((err) => {
            console.log(`Error in fetch, ${err}`);
        })
    return NextResponse.json({ ip: ip }, { status: 200 })
}