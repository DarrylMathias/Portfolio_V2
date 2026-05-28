import { configDotenv } from 'dotenv';
import { Resend } from 'resend';

configDotenv()

import React from 'react';
import SparkConfirmationEmail from '../emails/SparkConfirmationEmail.jsx';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sparkConfirmation(name, email, id) {
    const { data, error } = await resend.emails.send({
        from: 'Darryl <help@darrylmathias.tech>',
        to: email,
        subject: `Welcome to Daily Spark - Please confirm your subscription`,
        react: React.createElement(SparkConfirmationEmail, { name, id }),
    });

    if (error) {
        console.log(error);
    }

    console.log(data);
};


