import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, services, budget, project } = body;

    if (!name || !email || !phone || !services || !budget || !project) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error("Email env variables missing");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
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
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Services:</b> ${services}</p>
        <p><b>Budget:</b> ${budget}</p>
        <p><b>Project:</b> ${project}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("EMAIL ERROR 👉", error.message);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
