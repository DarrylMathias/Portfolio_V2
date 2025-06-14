import connect from "@/config/mongoose";
// Are nexts own req and response
import { NextRequest, NextResponse } from "next/server";
import feedbackModel from "@/models/feedback";
import sendInfoMail from "@/utils/sendInfoMail";

connect(); // => Just connect

// We create functions like these for treating each case of a route (like POST signup, GET signup)
export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();
    await feedbackModel.create({
      name,
      email,
      message,
    });
    sendInfoMail(name, message, email);

    return NextResponse.json(
      {
        message: "Successful",
        success: true,
      },
      { status: 201 }
    );
  } catch (error) {
    // Returns a next response throwing error
    console.log(`Error in feedback ${error}`);
    return NextResponse.json({ error }, { status: 500 });
  }
}
