import Joi from 'joi';

const userSchema = Joi.object({
  name: Joi.string().min(4).max(20).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
    'string.min': "Name must be at least 4 characters",
    'string.max': "Name must be at least 20 characters",
    'string.empty': "Please enter your name",
    'string.pattern.base':'the name can only have letters',
    'any.required': "Please enter your name"
  }), 
  lastName: Joi.string().min(4).max(20).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
    'string.min': "Lastname must be at least 4 characters",
    'string.max': "Lastname must be at least 20 characters",
    'string.empty': "Please enter your lastname",
    'string.pattern.base':'the name can only have letters',
    'any.required': "Please enter your lastname"
  }), 
  email: Joi.string().email().min(8).max(30).required().messages({
    'string.email': "Please enter a valid email",
    'string.min': "Email must be at least 8 characters",
    'string.max': "Email must be at least 30 characters",
    'string.empty': "Please enter your email",
    'any.required': "Please enter your email"
  }),
  imageUrl: Joi.string().uri().messages({
    'string.uri': "Enter your photo URL",
    'string.empty': "Please enter your photo",
    
  }), 
  password: Joi.string().alphanum().min(6).max(30).required().messages({
    'string.alphanum': "Password must contain only letters and numbers",
    'string.min': "Paswoord must be at least 6 characters",
    'string.max': "Paswoord must be at least 30 characters",
    'string.empty': "Please enter your password",
    'any.required': "Please enter your password",
  }),
  country: Joi.string().messages({
    'string.empty' : "Select a Country",
    
  }), 
  googleUser: Joi.boolean(),
  }) 


const verifyAuthData = (req, res, next) => {
  const payload = req.body;
    const userValidated = userSchema.validate(payload, {abortEarly: false});

    if(userValidated.error){
      return res.status (400).json({
        message: userValidated.error.details.map((err) => err.message)
      })
    }
  next()
};


const signInSchema = Joi.object({
  email: Joi.string().email().min(8).max(30).required().messages({
    'string.email': "Please enter a valid email",
    'string.min': "Email must be at least 8 characters",
    'string.max': "Email must be at least 30 characters",
    'string.empty': "Please enter your email",
    'any.required': "Please enter your email"
  }),
  password: Joi.string().alphanum().min(6).max(30).required().messages({
    'string.alphanum': "Password must contain only letters and numbers",
    'string.min': "Paswoord must be at least 6 characters",
    'string.max': "Paswoord must be at least 30 characters",
    'string.empty': "Please enter your password",
    'any.required': "Please enter your password",
  }),
});

const verifySignInData = (req, res, next) => {
  const payload = req.body;
  const signInValidated = signInSchema.validate(payload, {abortEarly: false});

  if (signInValidated.error) {
    return res.status(400).json({
      message: signInValidated.error.details.map((err) => err.message),
    });
  }
  next();
};


export { verifyAuthData, verifySignInData } 