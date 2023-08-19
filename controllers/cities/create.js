import City from '../../models/City.js'

const create = async(req, res)=>{
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
}

export default create