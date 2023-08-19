import { Router } from 'express';
import create from '../controllers/users/create.js'

const router = Router();

router.post('/', create)

router.get('/', (req, res)=>{
  //logica necesaria para poder leer todos los usuarios
  //mongoose .find() .findOne() .findById() o con .populate('rol')
})
router.put('/:id', (req, res)=>{
  //logica necesaria para poder actualizar un usuario cuyo id es id
  //mongoose findByIdAndUpdate() o con updateOne().updateMany()
})
router.delete('/:id', (req, res)=>{
  //logica necesaria para eliminar un usuario cuyo id es id
  //mongoose .finByIdAndDelete()
})

export default router;
