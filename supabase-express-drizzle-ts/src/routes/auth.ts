import { Request, Response, Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { SupabaseClient } from '@supabase/supabase-js';
dotenv.config();

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

const { SUPABASE_URL, SUPABASE_KEY } = process.env;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error('Supabase URL and Key must be provided');
}

const supabase = new SupabaseClient(SUPABASE_URL, SUPABASE_KEY);


// Register route
router.post('/register', async (req: Request, res: Response): Promise<void> => {



    const { email, password } = req.body;
  
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
  
    if (error) {
      res.status(400).json({ message: 'Registration failed', error: error.message });
      return;
    }
  
    res.status(201).json({ message: 'User registered successfully', user: data.user });
  });



// Login endpoint using Supabase Auth
router.post('/login', async (req: Request, res: Response): Promise<void> => {

    const { email, password } = req.body;
  
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
  
    if (error) {
      res.status(401).json({ message: 'Login failed', error: error.message });
      return;
    }
  
    // Supabase returns the access token, which can be used for future requests
    const { session } = data;
  
    // Send the access token to the client
    res.json({ token: session?.access_token });
  });
  

export default router;
