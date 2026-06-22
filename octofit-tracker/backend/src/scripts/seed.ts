"Seed the octofit_db database with test data"

import { connectDB, disconnectDB, MONGO_URI } from '../config/database';
import Activity from '../models/activity';

async function run() {
  console.log('Seed the octofit_db database with test data');
  await connectDB();

  await Activity.deleteMany({});

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

  await Activity.insertMany(sampleActivities as any);
  await disconnectDB();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
