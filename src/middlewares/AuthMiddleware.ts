import { Request, Response, NextFunction } from 'express';
import { verifyJwt } from '../utils/jwt';

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const userId = verifyJwt(token);
    req.userId = userId;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid Token' });
  }
};
