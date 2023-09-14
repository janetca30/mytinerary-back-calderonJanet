import { Router } from 'express';
import citiesRouter from '../routes/cities.js';
import itinerariesRouter from '../routes/itineraries.js'
import authRouter from './auth.js';

const router = Router();


router.use('/cities', citiesRouter)
router.use('/itineraries', itinerariesRouter)
router.use('/user', authRouter)

export default router;
