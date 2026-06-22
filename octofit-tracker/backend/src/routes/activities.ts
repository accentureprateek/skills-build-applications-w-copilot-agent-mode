import { Router } from 'express';
import Activity from '../models/activity';

const router = Router();

// GET /api/activities - list activities
router.get('/', async (req, res) => {
  const activities = await Activity.find().limit(50).lean();
  res.json(activities);
});

export default router;
