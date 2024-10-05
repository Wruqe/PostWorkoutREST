// src/index.ts
import express from 'express';
import authRoutes from './routes/auth';
import protectedRoutes from './routes/protectedRoutes';
import dotenv from 'dotenv';
import cors from 'cors'; 






dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:4200',  // Allow requests from this origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(express.json()); // Middleware to parse JSON


// Use authentication routes (registration and login)
app.use('/auth', authRoutes);

// Use protected routes (any routes that need authorization)
app.use('/protected', protectedRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
