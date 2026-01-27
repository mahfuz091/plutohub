import { NextResponse } from 'next/server';
import { ResendService } from '@/services/resendService';
import { WelcomeEmail } from '@/Components/Emails/WelcomeEmail';

export async function POST(req: Request) {
    try {
        const { email, name } = await req.json();

        if (!email || !name) {
            return NextResponse.json(
                { message: 'Email and name are required' },
                { status: 400 }
            );
        }

        const data = await ResendService.sendEmail({
            to: [email],
            subject: 'Welcome to Plutohub!',
            react: <WelcomeEmail name={name} otp="123456" />,
        });

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        return NextResponse.json(
            { message: 'Failed to send email via Resend', error: error.message },
            { status: 500 }
        );
    }
}
