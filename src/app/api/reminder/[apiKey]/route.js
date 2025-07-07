import connect from "@/config/mongoose"
import setReminder from "@/utils/reminderScript";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const { apiKey } = await params

        if (apiKey !== process.env.API_KEY) {
            return NextResponse.json({ error: 'Unauthorized: Invalid API key' }, { status: 401 });
        }
        setReminder()
            .then(() => {
                console.log('Script executed successfully');
            })
            .catch((err) => {
                console.error('Script error:', err);
                console.log('Script failed');
            });
        return NextResponse.json({
            success: true,
            message: 'Started reminder function..',
            timestamp: new Date().toISOString()
        }, {
            status: 200,
        });
    } catch (err) {
        console.error('Script error:', err);
        console.log('Script failed');
        return NextResponse.json({
            success: false,
            error: 'Script execution failed',
            message: err.message,
            timestamp: new Date().toISOString()
        }, {
            status: 500,
        })
    }
}