import { Router } from 'express';
import { getProfileByUsername } from '../controllers/profileController';
const router = Router();
router.get('/:username', getProfileByUsername);
export default router;
