import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Use octofit_db as the default database name to match exercise checks
export const DB_NAME = process.env.DB_NAME || 'octofit_db';
export const MONGO_URI = process.env.MONGO_URI || `mongodb://localhost:27017/${DB_NAME}`;

export async function connectDB() {
  await mongoose.connect(MONGO_URI);
  console.log('Connected to MongoDB:', MONGO_URI);
}

export async function disconnectDB() {
  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');
}

export default mongoose;
