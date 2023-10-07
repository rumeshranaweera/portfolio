import { emailSchema } from "@/lib/schemas";
import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function POST(req: Response) {
  const data: unknown = await req.json();
  try {
    const { email, message, name, subject } = emailSchema.parse(data);

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL, // Your Gmail email address
        pass: process.env.EMAIL_PASSWORD, // Your Gmail password or an App Password if using 2-factor authentication
      },
    });
    const mailOptions = {
      from: process.env.EMAIL, // Your Gmail email address
      to: process.env.EMAIL, // Your Gmail email address (to send the email to yourself)
      subject: "🚨🚨 " + subject,
      text: `
        Name: ${name}
        Email: ${email}
        Subject:${subject}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json("message sent", { status: 200 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.log(err);
      return NextResponse.json("Data invalid", { status: 400 });
    }
  }
}
