// api/verify.js
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export default function handler(req, res) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).end();

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.status(200).json({ authenticated: true, user: decoded.user });
  } catch {
    res.status(403).end();
  }
}
