import { configDotenv } from 'dotenv';
import { Resend } from 'resend';

configDotenv()

import React from 'react';
import AiMessageInfoEmail from '../emails/AiMessageInfoEmail.jsx';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function aiMessageInfo(name, message, reply) {
    const { data, error } = await resend.emails.send({
        from: 'Darryl <help@darrylmathias.tech>',
        to: process.env.EMAIL_USER,
        subject: "Gemini's response to query",
        react: React.createElement(AiMessageInfoEmail, { name, message, reply }),
    });

    if (error) {
        console.log(error);
    }

    console.log(data);
};