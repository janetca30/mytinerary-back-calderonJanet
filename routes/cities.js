import { Router } from 'express';
import create from '../controllers/cities/create.js';
import read from '../controllers/cities/read.js';
import readOne from '../controllers/cities/readOne.js';
import updateCity from '../controllers/cities/update.js';
import deleteCity from '../controllers/cities/destroy.js';

const citiesRouter = Router();

citiesRouter.post('/', create);
citiesRouter.get('/', read);
citiesRouter.get('/:id', readOne);
citiesRouter.put('/:id', updateCity.update);
citiesRouter.delete('/:id', deleteCity.destroy);

export default citiesRouter;