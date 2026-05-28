'use server'

import connect from "@/config/mongoose";
import feedbackModel from "@/models/feedback";
import sendInfoMail from "@/utils/sendInfoMail";
import z from 'zod'
import { isManualSpam } from "@/utils/manualSpam";
import { headers } from "next/headers";
import { checkRateLimit } from "@/utils/rateLimiter";

export async function fetchForm(formData) {
    try {
        const h = await headers();
        const ip =
            h.get("x-forwarded-for")?.split(",")[0] ||
            h.get("x-real-ip") ||
            "unknown";

        if (!checkRateLimit(ip)) {
            return { success: false, error: "Too many submissions from your IP. Please wait." };
        }
        const MAX_AGE = 30 * 1000;
        if (!formData.ts || Date.now() - formData.ts > MAX_AGE) {
            return { success: false, error: "Form expired. Please resubmit." };
        }

        if (formData.company) return { success: true }; // honeypot

        await connect();

        const FeedbackForm = z.object({
            name: z.string().min(2).max(50),
            email: z.string().email(),
            message: z.string().min(20).max(1500),
            ts: z.number(),
        });
        const { name, email, message } = FeedbackForm.parse(formData);

        if (isManualSpam({ name, email, message })) {
            return { success: false, error: "Low‑quality submission detected." };
        }
        await feedbackModel.create({ name, email, message });
        await sendInfoMail(name, message, email);
        return { success: true };
    } catch (error) {
        console.log(`Error in feedback ${error}`);
        return { success: false, error: error.message };
    }
}
