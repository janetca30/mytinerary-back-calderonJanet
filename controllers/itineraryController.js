import mongoose from 'mongoose';
import City from '../models/City.js'
import Itinerary from '../models/Itinerary.js';

const itineraryController = {
  
  addItinerary: async(req, res)=>{
    try {
      let { id } = req.params
      console.log("entrega a itinerary")
      let cityFound = await City.findById(id)

      let newItinerary = await Itinerary.create({  city: cityFound})

      await cityFound.updateOne({itineraries:[...cityFound.itineraries, newItinerary]})

      let cityFoundUpdated = await City.findById(id).populate('itineraries')

      res.status(200).json({
      
      message: 'City has been updated successfully',
      city : cityFoundUpdated

    });
    } catch (error) {
    res.status(400).json({message: error.message}); 
    }
  },

  create: async(req, res) => {
  try {
    await Itinerary.create(req.body)
    return res.status(201).json({ 
      sucess: true,
      message: "Created successfully"
    })
  } catch (error) {
    console.log("Error in creating itinerary");
    return res.status(500).json({
      success: false,
      message: 'error'
    })
    }
  },

  read: async (req, res, next) =>{
    try {
      let queries = {}
      if (req.query.name){
        queries.name = new RegExp(req.query.name, 'i')
      }
      let all = await Itinerary.find(queries)
      return res.status(200).json({
        success: true,
        message: all
      })
    } catch (error) {
      next(next)
    }
  },

  readOne: async (req, res, next) => {
    try {
      let { id } = req.params;
      let one = await Itinerary.findOne({ _id: id });
  
      if (!one) {
        return res.status(404).json({
          success: false,
          message: 'Itinerary not found'
        });
      }
  
      return res.status(200).json({
        success: true,
        message: one
      });
    } catch (error) {
      next(error);
    }
  },
  
  readByCity: async(req, res, next) =>{
    try {
      let { cityId } = req.params;
      let itineraries = await Itinerary.find({ city: cityId });
      return res.status(200).json({
        success: true,
        message: itineraries,
      });
    } catch (error) {
      next(error); 
    }
  },

  update: async (req, res, next) => {
    try {
      let itinerary = await Itinerary.findOne({ _id: req.params.id });
      if (itinerary) {
        
        itinerary.name = req.body.name || itinerary.name;
        itinerary.photo = req.body.photo || itinerary.photo;
        itinerary.author = req.body.author || itinerary.author;
        itinerary.price = req.body.price || itinerary.price;
        itinerary.duration = req.body.duration || itinerary.duration;
        itinerary.likes = req.body.likes || itinerary.likes;
        itinerary.hashtags = req.body.hashtags || itinerary.hashtags;
        itinerary.comments = req.body.comments || itinerary.comments;

        // Guardamos los cambios en la base de datos
        await itinerary.save();

        // Devolvemos una respuesta HTTP con un mensaje indicando se actualizó correctamente
        return res.status(200).json({
          message: 'Itinerary updated successfully'
        });
      } else {
        // Si no se encuentra el itinerary en la base de datos
        return res.status(404).json({
          message: 'Itinerary not found'
        });
      }
    } catch (error) {
    
      next(error);
    }
  },

  destroy: async (req, res, next) => {
    try {
      let destroyed = await Itinerary.deleteOne(
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

export default itineraryController