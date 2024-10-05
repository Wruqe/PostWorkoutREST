import { Router, Request, Response } from 'express';
import { authenticateSupabaseToken } from '../middleware/middleware'; 
import { JwtPayload } from 'jsonwebtoken';

const router = Router();

// Protected route example
router.get('/:id', authenticateSupabaseToken, (req: Request, res: Response) => {
  const user = req.user as JwtPayload;
  
  res.send(`Hello ${user.email}, this is a protected route.`);
});



export default router;
