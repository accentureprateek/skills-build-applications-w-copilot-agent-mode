import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/database';
import usersRouter from './routes/users';
import activitiesRouter from './routes/activities';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

// Mount API routes
app.use('/api/users', usersRouter);
app.use('/api/activities', activitiesRouter);

app.get('/', (req, res) => {
  res.send('OctoFit Tracker backend running');
});

// Export app, port and connectDB for a separate server entrypoint
export { app, port, connectDB };
