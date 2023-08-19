import City from '../../models/City.js';

async function read (req, res, next) {
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
}

export default read