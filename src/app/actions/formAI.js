'use server'

import connect from "@/config/mongoose";
import feedbackModel from "@/models/feedback";
import aiMailer from "@/utils/aiResponse";
import aiMessageInfo from "@/utils/aiMessageInfo";
import z from 'zod'

// We create functions like these for treating each case of a route (like POST signup, GET signup)
export async function fetchFormAI(formData) {
    try {
        await connect(); // => Just connect
        const FeedbackForm = z.object({
            name: z.string(),
            email: z.string().email(),
            message: z.string()
        });
        const { name, email, message } = FeedbackForm.parse(formData);
        const aiReply = await aiMailer(message, email);
        await feedbackModel.create({ name, email, message, aiReply });
        await aiMessageInfo(name, message, aiReply);
         return { success: true };
    } catch (error) {
        console.log(`Error in feedback ${error}`);
        return { success: false, error: error.message };
    }
}
