import User from '../../models/User.js'

export default async(req, res)=>{
  //logica necesaria para poder crear un usuario
  //con los metodos de mongoose .create()
  try {
    await User.create(req.body)
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
