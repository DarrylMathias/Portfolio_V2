import connect from "@/config/mongoose";
// Are nexts own req and response
import { NextRequest, NextResponse } from "next/server";
import feedbackModel from "@/models/feedback";
import aiMailer from "@/utils/aiResponse";
import aiMessageInfo from "@/utils/aiMessageInfo";

// We create functions like these for treating each case of a route (like POST signup, GET signup)
export async function POST(request) {
  try {
    await connect(); // => Just connect
    const { name, email, message } = await request.json();
    const aiReply = await aiMailer(message, email);
    await feedbackModel.create({ name, email, message, aiReply });
    await aiMessageInfo(name, message, aiReply);

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
