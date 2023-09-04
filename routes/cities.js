import { Router } from 'express';
import cityController from '../controllers/cityController.js'

const citiesRouter = Router();

citiesRouter.post('/', cityController.create);
citiesRouter.get('/', cityController.read);
citiesRouter.get('/:id', cityController.readOne);
citiesRouter.put('/:id', cityController.update);
citiesRouter.delete('/:id', cityController.destroy);

export default citiesRouter;