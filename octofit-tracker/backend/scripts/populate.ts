import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Activity from '../src/models/activity';

dotenv.config();

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/octofit';

const sampleActivities = [
  {
    userId: 'user1',
    type: 'running',
    durationMinutes: 30,
    calories: 300,
    date: new Date('2026-06-01T07:00:00Z')
  },
  {
    userId: 'user1',
    type: 'cycling',
    durationMinutes: 45,
    calories: 450,
    date: new Date('2026-06-02T07:00:00Z')
  },
  {
    userId: 'user2',
    type: 'yoga',
    durationMinutes: 60,
    calories: 200,
    date: new Date('2026-06-03T07:00:00Z')
  }
];

async function run() {
  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB', mongoUri);

    // Clear existing activities (for idempotent seed)
    await Activity.deleteMany({});
    console.log('Cleared activities collection');

    const created = await Activity.insertMany(sampleActivities as any);
    console.log(`Inserted ${created.length} activities`);
  } catch (err) {
    console.error('Error populating DB', err);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit(0);
  }
}

run();
