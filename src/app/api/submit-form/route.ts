import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = "bullock";

export async function POST(req: NextRequest) {
  try {
    if (!uri) {
      console.error("Missing MONGODB_URI");
      return NextResponse.json({ message: 'Missing MongoDB URI' }, { status: 500 });
    }

    console.log("Parsing body...");
    const body = await req.json();

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

    return NextResponse.json({ message: 'Form submitted successfully' });

  } catch (error: any) {
    console.error("FULL ERROR:", error?.message || error);
    return NextResponse.json({ message: 'Failed to submit form' }, { status: 500 });
  }
}
