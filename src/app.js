import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config({ path: './src/.env' });

const app = express();

app.use(cors());
app.use(express.json());

// Database connection settings

const MONGODB_URI = process.env.MONGODB_URI;
const connection = mongoose.connection;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

connection.once('open', () => {
  console.log('Database connection established successfully');
});

export default app;
