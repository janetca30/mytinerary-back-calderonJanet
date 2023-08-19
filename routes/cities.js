import { Router } from 'express';
import create from '../controllers/cities/create.js';
import read from '../controllers/cities/read.js';
import readOne from '../controllers/cities/readOne.js';

const citiesRouter = Router();

citiesRouter.post('/', create);
citiesRouter.get('/', read);
citiesRouter.get('/:id', readOne);

export default citiesRouter;