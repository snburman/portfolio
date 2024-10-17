import { type NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(req: NextRequest) {;
    const origin = req.headers.get('origin');
    if (origin !== process.env.NEXT_PUBLIC_APP_URL) {
        return NextResponse.json({ success: false });
    }

    const { email, message } = await req.json();

    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.GOOGLE_APP_USERNAME,
            pass: process.env.GOOGLE_APP_PASSWORD,
        },
    })

    const mailOptions: Mail.Options = {
        from: process.env.GOOGLE_APP_USERNAME,
        to: process.env.GOOGLE_APP_USERNAME,
        subject: `Contact Form Submission from: ${email}`,
        text: message,
    }

    const sendMail = () => new Promise((resolve, reject) => {
        transport.sendMail({ ...mailOptions},(err, info) => {
            if (err) {
                reject(err);
            }
            resolve(info);
        });
    });

    try {
        await sendMail();
        return NextResponse.json({ success: true });
    }
    catch {
        return NextResponse.json({ success: false });
    }
}