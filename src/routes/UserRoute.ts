import { Router } from 'express';
import { getUser } from '../controllers/UserController';

const router = Router();

router.get('/:id', getUser);

export default router;
