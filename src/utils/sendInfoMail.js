import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export default async function sendInfoMail(name, message, email) {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.APP_PASSWORD,
            },
        });

        const mailOptions = {
            from: `"Portfolio Bot" <${process.env.EMAIL_USER}>`,
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

