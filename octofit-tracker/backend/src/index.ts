import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('OctoFit Tracker backend running');
});

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/octofit';

mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error', err);
  });
