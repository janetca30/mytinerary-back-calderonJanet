import { Router } from 'express';
import itineraryController from '../controllers/itineraryController.js'

const itinerariesRouter = Router();

itinerariesRouter.post('/', itineraryController.create);
itinerariesRouter.post('/:id', itineraryController.addItinerary);
itinerariesRouter.get('/', itineraryController.read);
itinerariesRouter.get('/byId/:id', itineraryController.readOne);
itinerariesRouter.get('/byCity/:cityId', itineraryController.readByCity);
itinerariesRouter.put('/:id', itineraryController.update);
itinerariesRouter.delete('/:id', itineraryController.destroy);


export default itinerariesRouter;