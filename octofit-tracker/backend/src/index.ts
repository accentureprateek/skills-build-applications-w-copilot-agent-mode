import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/database';
import { getApiBaseUrl } from './config/api';
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

(async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      const base = getApiBaseUrl();
      console.log(`Server running on port ${port}`);
      console.log(`API base URL: ${base}`);
    });
  } catch (err) {
    console.error('Failed to start server', err);
  }
})();
