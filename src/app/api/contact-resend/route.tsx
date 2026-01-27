import { NextResponse } from 'next/server';
import { ResendService } from '@/services/resendService';
import { ContactEmail } from '@/Components/Emails/ContactEmail';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, services, budget, project } = body;

        if (!name || !email || !phone || !services || !budget || !project) {
            return NextResponse.json(
                { message: 'All fields are required' },
                { status: 400 }
            );
        }

        const data = await ResendService.sendEmail({
            to: [process.env.EMAIL_TO || 'hello@plutohub.agency'],
            replyTo: email,
            subject: `New Project Inquiry from ${name}`,
            react: <ContactEmail name={name} email={email} phone={phone} services={services} budget={budget} project={project} />,
        });

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        console.error('RESEND CONTACT ERROR ', error.message);
        return NextResponse.json(
            { message: 'Failed to send email via Resend', error: error.message },
            { status: 500 }
        );
    }
}
