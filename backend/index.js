import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db/database.js';
import authRoute from './routes/authroute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend origin
  credentials: true // Allow cookies if needed
}));

app.use(express.json());
app.use('/api/auth', authRoute);
app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
});

