import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';

const uri = process.env.MONGODB_URI;
const dbName = "bullock";

// Email config
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,       // Your Gmail address
    pass: process.env.EMAIL_PASS        // App password (not your real password)
  }
});

export async function POST(req: NextRequest) {
  try {
    if (!uri) {
      console.error("Missing MONGODB_URI");
      return NextResponse.json({ message: 'Missing MongoDB URI' }, { status: 500 });
    }

    console.log("Parsing body...");
    const body = await req.json();

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@bullockindia.com', // ✅ Change this to your recipient
      subject: `New Contact Form Submission: ${body.subject}`,
      text: `
Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone}
Address: ${body.address}
Subject: ${body.subject}
Message: ${body.message}
      `
    };

    console.log("Sending email...");
    await transporter.sendMail(mailOptions);

    console.log("Connecting to MongoDB...");
    const client = new MongoClient(uri);
    await client.connect();

    console.log("Connected. Accessing DB...");
    const db = client.db(dbName);
    const collection = db.collection('contacts');

    console.log("Inserting data...");
    await collection.insertOne(body);

    console.log("Closing connection...");
    await client.close();

    return NextResponse.json({ message: 'Form submitted and email sent successfully' });

  } catch (error: any) {
    console.error("FULL ERROR:", error?.message || error);
    return NextResponse.json({ message: 'Failed to submit form or send email' }, { status: 500 });
  }
}
