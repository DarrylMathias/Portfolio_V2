'use server'

import connect from "@/config/mongoose";
import feedbackModel from "@/models/feedback";
import sendInfoMail from "@/utils/sendInfoMail";
import z from 'zod'

export async function fetchForm(formData) {
    try {
        await connect(); // => Just connect
        const FeedbackForm = z.object({
            name: z.string(),
            email : z.string().email(),
            message : z.string()
        });
        const { name, email, message } = FeedbackForm.parse(formData);
        await feedbackModel.create({
            name,
            email,
            message,
        });
        sendInfoMail(name, message, email);
         return { success: true };
    } catch (error) {
        // Returns a next response throwing error
        console.log(`Error in feedback ${error}`);
        return { success: false, error: error.message };
    }
}
