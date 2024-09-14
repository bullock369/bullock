import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

// Define MongoDB URI and database name
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const dbName = "bullock";

// Define the POST method handler
export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Parse the request body

    // Connect to MongoDB
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('contacts');

    // Insert form data into the MongoDB collection
    await collection.insertOne(body);

    // Close the database connection
    await client.close();

    return NextResponse.json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Failed to submit form' }, { status: 500 });
  }
}
