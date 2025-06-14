import nodemailer from 'nodemailer';
import dotenv from 'dotenv';


dotenv.config();
export default async function aiMessageInfo(name, message, reply) {
    try {

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.APP_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
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
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('❌ Email error:', error);
            } else {
                console.log('✅ Email sent:', info.response);
            }
        });

    } catch (err) {
        console.error("❌ Failed to generate AI response or send email:", err);
    }
}


