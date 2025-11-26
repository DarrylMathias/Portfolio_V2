import { configDotenv } from 'dotenv';
import { Resend } from 'resend';

configDotenv()

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendInfoMail(name, message, email) {
    const { data, error } = await resend.emails.send({
        from: 'Darryl <help@darrylmathias.tech>',
        to: process.env.EMAIL_USER, // You receive this yourself
        subject: `📨 New Query from ${name} via Darryl's Portfolio`,
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2>🚀 New Portfolio Feedback Received</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #7c3aed; margin-top: 10px;">
                <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
            <hr style="margin: 30px 0;" />
            </div>
        `,
    });

    if (error) {
        console.log(error);
    }

    console.log(data);
};
