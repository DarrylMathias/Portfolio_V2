import { generateText } from "ai";
import { groq } from "@ai-sdk/groq";
import { configDotenv } from 'dotenv';
import { Resend } from 'resend';
import { SYSTEM_PROMPT } from './prompts.js';

configDotenv()

async function aiResponse(message) {
    const { text } = await generateText({
        model: groq("openai/gpt-oss-120b"),
        system: SYSTEM_PROMPT,
        prompt: message,
    });
    console.log("Text generation by Groq successful.");
    return text;
}

import React from 'react';
import AiResponseEmail from '../emails/AiResponseEmail.jsx';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function aiMailer(message, email) {
    const aiReply = await aiResponse(message);
    const { data, error } = await resend.emails.send({
        from: 'Darryl <help@darrylmathias.tech>',
        to: [email],
        subject: '💬 Response to your query on Darryl Mathias’ Portfolio',
        react: React.createElement(AiResponseEmail, { userQuery: message, aiResponse: aiReply }),
    });

    if (error) {
        console.log(error);
    }

    console.log(data);
    return aiReply;
};
