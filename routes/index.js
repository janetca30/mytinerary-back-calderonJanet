import { Router } from 'express';
import citiesRouter from '../routes/cities.js';
import itinerariesRouter from '../routes/itineraries.js'

const router = Router();


router.use('/cities', citiesRouter)
router.use('/itineraries', itinerariesRouter)


export default router;
