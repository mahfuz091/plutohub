import { resend } from '@/lib/resend';
import { CreateEmailOptions } from 'resend';

/**
 * Service to handle email sending via Resend.
 */
export const sendEmail = async (options: Omit<CreateEmailOptions, 'from'> & { from?: string }) => {
    try {
        const { data, error } = await resend.emails.send({
            from: options.from || process.env.RESEND_DEFAULT_FROM || 'onboarding@resend.dev',
            ...options,
        } as CreateEmailOptions);

        if (error) {
            console.error('RESEND ERROR 👉', error);
            throw new Error(error.message);
        }

        return data;
    } catch (err: any) {
        console.error('RESEND EXCEPTION 👉', err.message);
        throw err;
    }
};


export const ResendService = {
    sendEmail,
};
