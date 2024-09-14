
// import mongoose from 'mongoose';
// import dbConnect from '../lib/db';

// dbConnect();

// const FormSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   message: String,
//   subject: Number,
// });

// const FormModel = mongoose.models.Post || mongoose.model('Post', FormSchema);

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//        const { name, email, message, subject } = req.body;

      
//       await FormModel.create({ name, email, message, subject });

//       res.status(200).json({ message: 'Form submitted successfully' });
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       res.status(500).json({ message: `Failed to submit form: ${error.message}` });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }
