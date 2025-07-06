import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export default async function sparkConfirmation(name, email, id) {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.APP_PASSWORD,
            },
        });

        const mailOptions = {
            from: `${process.env.EMAIL_USER}`,
            to: email,
            subject: `Welcome to Daily Spark - Please confirm your subscription`,
            html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Daily Spark</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background-color: #f8fafc;
            color: #334155;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
        }
        
        .header h1 {
            margin: 0;
            font-size: 32px;
            font-weight: 700;
            letter-spacing: -0.5px;
        }
        
        .header p {
            margin: 10px 0 0 0;
            font-size: 16px;
            opacity: 0.9;
            font-weight: 300;
        }
        
        .content {
            padding: 40px 30px;
            line-height: 1.6;
        }
        
        .content h2 {
            color: #1e293b;
            font-size: 24px;
            margin: 0 0 20px 0;
            font-weight: 600;
        }
        
        .content p {
            margin: 0 0 20px 0;
            font-size: 16px;
            color: #475569;
        }
        
        .highlight {
            background-color: #f1f5f9;
            border-left: 4px solid #667eea;
            padding: 20px;
            margin: 30px 0;
            border-radius: 0 8px 8px 0;
        }
        
        .highlight p {
            margin: 0;
            font-style: italic;
            color: #334155;
        }
        
        .button-container {
            text-align: center;
            margin: 40px 0;
        }
        
        .button {
            display: inline-block;
            padding: 16px 32px;
            margin: 0 10px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
            transition: all 0.2s ease;
            cursor: pointer;
            border: none;
        }
        
        .button-confirm {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            box-shadow: 0 4px 14px 0 rgba(16, 185, 129, 0.3);
        }
        
        .button-confirm:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px 0 rgba(16, 185, 129, 0.4);
        }
        
        .button-reject {
            background-color: #f8fafc;
            color: #64748b;
            border: 2px solid #e2e8f0;
        }
        
        .button-reject:hover {
            background-color: #f1f5f9;
            border-color: #cbd5e1;
        }
        
        .footer {
            background-color: #1e293b;
            padding: 30px;
            text-align: center;
            color: #94a3b8;
        }
        
        .footer p {
            margin: 0 0 10px 0;
            font-size: 14px;
        }
        
        .footer a {
            color: #667eea;
            text-decoration: none;
        }
        
        .footer a:hover {
            text-decoration: underline;
        }
        
        .divider {
            height: 1px;
            background-color: #e2e8f0;
            margin: 30px 0;
        }
        
        @media (max-width: 600px) {
            .container {
                margin: 0;
                box-shadow: none;
            }
            
            .header, .content {
                padding: 30px 20px;
            }
            
            .header h1 {
                font-size: 28px;
            }
            
            .button {
                display: block;
                margin: 10px 0;
                padding: 14px 24px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>⚡ Daily Spark</h1>
            <p>Your daily motivation dose</p>
        </div>
        
        <div class="content">
            <h2>Welcome aboard, ${name}! 🎉</h2>
            <p>Thank you for subscribing to Daily Spark! You're now part of a community that believes in starting each day with purpose and positivity.</p>
            
            <div class="highlight">
                <p>"Every morning we are born again. What we do today is what matters most."</p>
            </div>
            
            <p>Starting tomorrow, you'll receive:</p>
            <ul style="margin: 20px 0; padding-left: 20px;">
                <li style="margin-bottom: 8px;">🌅 Daily motivational quotes to kickstart your morning</li>
                <li style="margin-bottom: 8px;">🌤️ Weather updates for your city</li>
                <li style="margin-bottom: 8px;">💡 Actionable tips for personal growth</li>
                <li style="margin-bottom: 8px;">🎯 Weekly challenges to keep you motivated</li>
            </ul>
            
            <p>To complete your subscription and start receiving your daily dose of motivation, please confirm your email address below:</p>
            
            <div class="button-container">
                <a href="http://localhost:3000/api/confirm/${id}" class="button button-confirm">✅ Confirm Subscription</a>
                <a href="http://localhost:3000/api/deleteUser/${id}" class="button button-reject">❌ Unsubscribe</a>
            </div>
            
            <div class="divider"></div>
            
            <p style="font-size: 14px; color: #64748b;">
                <strong>Note:</strong> If you didn't sign up for Daily Spark, you can safely ignore this email or click the unsubscribe button above.
            </p>
        </div>
    </div>
</body>
</html>`,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully:', info.response);
        return info;
    } catch (err) {
        console.error("❌ Failed to generate AI response or send email:", err);
    }
}

