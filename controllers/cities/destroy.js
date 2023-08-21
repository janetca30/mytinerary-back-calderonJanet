import City from '../../models/City.js';

const deleteCity = {

  destroy: async (req, res, next) => {
    try {
      let destroyed = await City.deleteOne(
        {_id : req.params.id}
      )
      return res.status(200).json({ 
        message:'Deleted successfully'
      });
    } catch (error) {
      next (error)      
    }
  }
}

export default deleteCity;