import { Router } from 'express';

const router = Router();

// Simple placeholder endpoint
router.get('/', (req, res) => {
  res.json([{ id: 'user1', name: 'Alice' }, { id: 'user2', name: 'Bob' }]);
});

export default router;
