import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, services, budget, project } = await req.json();

    if (!name || !email || !phone || !services || !budget || !project) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Plutohub Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Services:</strong> ${services}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Project Details:</strong> ${project}</p>
         
          
        </div>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
