 import express from 'express';
 import authRoutes from './routes/auth.route.js';
 import dotenv from 'dotenv';
import connectDB from './db/connection.db.js';

 dotenv.config();
 
 const app = express();

 const PORT = process.env.PORT || 3000;

 app.use('/api/auth', authRoutes);

 app.listen(PORT, () => {
     console.log('Server is running on port 3000');
     connectDB();
 });