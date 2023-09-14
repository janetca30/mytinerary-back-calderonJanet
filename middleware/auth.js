import bcrypt from 'bcrypt';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

export function hashPassword (req, res, next) {
  try {
    const passwordPlain = req.body.password
    const hashPassword = bcrypt.hashSync(passwordPlain, 10)
    req.body.password = hashPassword
    next ()
  } catch (err) {
    res.status(500).json({ error: err})
  }
}

export function verifyPassword (req, res, next) {
  const passwordPlain = req.body.password;
  const hashPassword = req.user.password;
  const isValid = bcrypt.compareSync(passwordPlain, hashPassword)
    
  
  if(isValid){
    next()
  }else{
    res.status(400).json({message: 'wrong password'})
  }
  
}

export async function verifyUserExists (req, res, next) {
  const { email } = req.body;
  try {
    const userFounded = await User.findOne({ email: email });
    if (userFounded){
      req.user = userFounded;
      next();
    } else {
      res.status(400).json ({ message: "user not found"})
    }
  } catch (error){
    res.status(500).json({ message: "error searching for user" })
  }
}

export function generateToken (req, res, next)  {
  try {

    const secretKey = "superSecretKey"

    const token = jwt.sign({ email:req.user.email }, secretKey, { expiresIn: 60*3} )

    req.token = token
    next();

  } catch (error) {
    res.status(500).json({ message: error.message})
  }
}

const passportVerificator = passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "superSecretKey"
    },
    async (payload, done) => {
      try {
        const userFounded = await User.findOne({ email: payload.email });

        if (userFounded) {
          return done(null, userFounded);
        } else {
          return done(null, false, { message: 'User no founded' });
        }
      } catch (error) {
        return done(error, false, { message: 'Authentication error' });
      }
    }
  )
);
export { passportVerificator };


