import { Router } from 'express';
import { getRankingsByCategory } from '../controllers/rankingController';
const router = Router();
router.get('/:category', getRankingsByCategory);
export default router;
