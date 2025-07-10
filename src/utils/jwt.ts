import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

export function verifyJwt(token: string): number {
  const decoded = jwt.verify(token, JWT_SECRET) as { id: number };
  return decoded.id;
}

export function signJwt(payload: object): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}
