import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/database.js';
import authRoute from './routes/authroute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/auth', authRoute);
app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
});

