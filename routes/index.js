import { Router } from 'express';
import userRouter from './users.js'
import citiesRouter from '../routes/cities.js'

const router = Router();

router.use('/auth', userRouter)
router.use('/cities', citiesRouter)
//router.use('/products', productsRouter)

export default router;
