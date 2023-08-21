import City from '../../models/City.js';

const updateCity = {
  update: async (req, res, next) => {
    try {
      let city = await City.findOne({ _id: req.params.id });
      if (city) {
        // Actualizamos los datos de la ciudad con los nuevos datos de la solicitud
        city.name = req.body.name || city.name;
        city.country = req.body.country || city.country;
        city.description = req.body.description || city.description;
        city.image = req.body.image || city.image;

        // Guardamos los cambios en la base de datos
        await city.save();

        // Devolvemos una respuesta HTTP con un mensaje indicando que la ciudad se actualizó correctamente
        return res.status(200).json({
          message: 'City updated successfully'
        });
      } else {
        // Si no se encuentra la ciudad en la base de datos, devolvemos una respuesta HTTP con un código de estado 404 y un mensaje indicando que la ciudad no se encontró
        return res.status(404).json({
          message: 'City not found'
        });
      }
    } catch (error) {
      // Si ocurre un error durante el procesamiento de la solicitud, llamamos a la función next con el error para que Express pueda manejarlo
      next(error);
    }
  }
};


export default updateCity;