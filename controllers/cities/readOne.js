import City from '../../models/City.js';

async function readOne (req, res, next) {
  try {
    let { id } = req.params
    let one = await City.findOne({_id:id},'name -_id')
    return res.status(200).json({
      success: true,
      message: one
    })
  } catch (error) {
    next(next)
  }
}

export default readOne