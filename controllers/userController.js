import User from "../models/User.js"

export const usersAll = async (req, res) => {
    let error = null
    let result = []
    try {
      const users = await User.find()
      users.map(e =>{
        return result.push({name: e.name, lastName: e.lastName, email: e.email, imageUrl: e.imageUrl, id: e._id, country: e.country})
      })
      res.json({success:true, response: result})
    } catch (error) {
      res.json({success: false, response: null })
    }
  }

export const signUp = async (req, res) => {

    try {
      const { name, lastName, email, imageUrl, password, country, googleUser } = req.body;
      const payload = req.body
      const userExists = await User.findOne({email: payload.email})

        if (userExists){
          return res.status(403).json({message: "User already exists"},)
        }

        const userCreated = await User.create(payload) 

        console.log("User Created");

        res.status(200).json({
        message: "User created successfully",
        userCreated
      })

    } catch (e) {
      res.status(400).json({ message: e.message})
    }
  }

export const signIn = async (req, res) => {
    
    try {  
      
      res.status(200).json({
        message: 'Successfully logged in',
        token: req.token,
        user: {
          email: req.user.email,
          _id: req.user._id,
          name: req.user.name,
          lastName: req.user.lastName,
          imagenUrl: req.user.imagenUrl,
          
          
        }
      })
    } catch (e) {
      res.status(400).json({ message: e.message});
    }
  }

export const authenticated = async (req, res) => {
    
    try {  
      
      res.status(200).json({
        message: 'Successfully authenticated',
        token: req.token,
        user: {
          email: req.user.email,
          _id: req.user._id,
        }
      });
    } catch (error) {
      res.status(400).json({ message: error.message});
    }
  }

export const signOut = async (req, res) => {
     try {
      res.status(200).json({ message: 'logged out', token: req.token})
     } catch (error) {
      res.status(500).json({ message: error.message })
     }
  }
  






