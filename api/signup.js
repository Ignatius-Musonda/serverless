// api/signup.js
import dbConnect from '../utils/dbConnect';
import User from '../models/User';
import cors from '../middleware/cors';

export default async function handler(req, res) {
  cors(req, res, async () => {
    await dbConnect();

    if (req.method === 'POST') {
      const { email, password } = req.body;
      if (!email || !password) return res.status(400).json({ message: 'All fields are required' });

      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(409).json({ message: 'User already exists' });

        const newUser = new User({ email, password });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
      }
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  });
}
