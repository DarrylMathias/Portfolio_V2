import { configDotenv } from 'dotenv';
import { Resend } from 'resend';

configDotenv()

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function aiMessageInfo(name, message, reply) {
    const { data, error } = await resend.emails.send({
        from: 'Darryl <help@darrylmathias.tech>',
        to: ['darrylnevmat@gmail.com'],
        subject: "Gemini's response to query",
        html: `
            <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333;">
                <p><strong>Name:</strong><br>${name}</p>
                <br>
                <p><strong>Query:</strong><br>${message.replace(/\n/g, '<br>')}</p>
                <br>
                <p><strong>Response:</strong><br>${reply.replace(/\n/g, '<br>')}</p>
            </div>
        `
    });

    if (error) {
        console.log(error);
    }

    console.log(data);
};