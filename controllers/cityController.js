import mongoose from 'mongoose'
import City from '../models/City.js'

const cityController = {
  
  create: async(req, res)=>{
    try {
      await City.create(req.body)
      return res.status(201).json({
        success: true,
        message: 'created!'
      })
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: 'error'
      })
    }
  },

  read: async(req, res, next) =>{
    try {
      let queries = {}
      if (req.query.name){
        queries.name = new RegExp(req.query.name, 'i')
      }
      let all = await City.find(queries)
      return res.status(200).json({
        success: true,
        message: all
      })
    } catch (error) {
      next(next)
    }
  },

  readOne: async(req, res, next) =>{
    try {
      let { id } = req.params
      let one = await City.findOne({_id:id})
      return res.status(200).json({
        success: true,
        message: one
      })
    } catch (error) {
      next(next)
    }
  },

  update: async (req, res, next) => {
    try {
      let city = await City.findOne({ _id: req.params.id });
      if (city) {
        
        city.name = req.body.name || city.name;
        city.country = req.body.country || city.country;
        city.description = req.body.description || city.description;
        city.photo = req.body.photo || city.photo;

        
        await city.save();
        
        return res.status(200).json({
          message: 'City updated successfully'
        });
      } else {
        
        return res.status(404).json({
          message: 'City not found'
        });
      }
    } catch (error) {
        next(error);
    }
  },

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

export default cityController