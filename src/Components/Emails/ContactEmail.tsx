import * as React from 'react';

interface ContactEmailProps {
    name: string;
    email: string;
    phone: string;
    services: string;
    budget: string;
    project: string;
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({
    name,
    email,
    phone,
    services,
    budget,
    project,
}) => (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', color: '#333', lineHeight: '1.6' }}>
        <h2 style={{ color: '#0070f3', borderBottom: '2px solid #0070f3', paddingBottom: '10px' }}>
            New Contact Form Submission
        </h2>
        <div style={{ marginTop: '20px' }}>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Services:</strong> {services}</p>
            <p><strong>Budget:</strong> {budget}</p>
            <div style={{ marginTop: '15px', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '5px', borderLeft: '4px solid #0070f3' }}>
                <strong>Project Details:</strong>
                <p style={{ whiteSpace: 'pre-wrap', marginTop: '5px' }}>{project}</p>
            </div>
        </div>
        <p style={{ marginTop: '30px', fontSize: '12px', color: '#999' }}>
            This email was sent from the Plutohub contact form.
        </p>
    </div>
);
