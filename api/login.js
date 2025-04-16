import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const STORED_HASH = process.env.ADMIN_PASSWORD_HASH;
const JWT_SECRET = process.env.JWT_SECRET;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'POST') return res.status(405).end();

  const { password } = req.body;

  const match = await bcrypt.compare(password, STORED_HASH);
  if (!match) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  const token = jwt.sign({ user: 'admin' }, JWT_SECRET, { expiresIn: '2h' });
  return res.status(200).json({ token });
}
