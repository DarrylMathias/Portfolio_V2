import { configDotenv } from 'dotenv';
import { Resend } from 'resend';

configDotenv()

import React from 'react';
import InfoMailEmail from '../emails/InfoMailEmail.jsx';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendInfoMail(name, message, email) {
    const { data, error } = await resend.emails.send({
        from: 'Darryl <help@darrylmathias.tech>',
        to: process.env.EMAIL_USER, // You receive this yourself
        subject: `📨 New Query from ${name} via Darryl's Portfolio`,
        react: React.createElement(InfoMailEmail, { name, message, email }),
    });

    if (error) {
        console.log(error);
    }

    console.log(data);
};
