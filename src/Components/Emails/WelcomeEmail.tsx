import * as React from 'react';

interface WelcomeEmailProps {
    name: string;
    otp?: string;
}

export const WelcomeEmail: React.FC<Readonly<WelcomeEmailProps>> = ({
    name,
    otp,
}) => (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', color: '#333' }}>
        <h1 style={{ color: '#0070f3' }}>Welcome to Plutohub, {name}!</h1>
        <p>We're excited to have you on board.</p>
        {otp && (
            <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f4f4f4', borderRadius: '5px' }}>
                <p style={{ margin: 0, fontWeight: 'bold' }}>Your Verification Code:</p>
                <p style={{ margin: '10px 0 0 0', fontSize: '24px', letterSpacing: '2px', color: '#000' }}>{otp}</p>
            </div>
        )}
        <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
            If you did not request this email, please ignore it.
        </p>
    </div>
);
