import connect from "@/config/mongoose";
import { NextResponse } from "next/server";
import axios from "axios";
import locationModel from "@/models/userLocation";

export async function GET(request, response) {

    connect()

    const ipString = request.headers.get('x-forwarded-for')
    const ip = ipString ? ipString.split(',')[0].trim() : 'Ip not found';
    console.log(ip);
    await axios.get(`https://ipapi.co/${ip}/json/`)
                .then(async (res) => {
                    const findDuplicate = await locationModel.findOne({ ip: res.data.ip })
                    if (!findDuplicate) {
                        await locationModel.create({
                            ip: res.data.ip,
                            lat: res.data.latitude,
                            lon: res.data.longitude,
                            city: res.data.city,
                            country: res.data.country_name
                        })
                        console.log(`Stored IP: ${ip}, Location: ${res.data.city}, ${res.data.country_name}`);
                    }else{
                        console.log('IP Address already exists');
                    }
                })
                .catch((err) => {
                    console.log(`Error in fetch, ${err}`);
                })
    return NextResponse.json({ip : ip}, {status : 200})
}