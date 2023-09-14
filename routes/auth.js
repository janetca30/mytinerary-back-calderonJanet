import { Router } from 'express';
import userController from '../controllers/userController.js';
import { verifyAuthData } from '../middleware/verifications.js';
import { verifySignInData } from '../middleware/verifications.js';
import { generateToken, hashPassword, verifyPassword, verifyUserExists } from '../middleware/auth.js';
import { passportVerificator } from '../middleware/auth.js';

const authRouter = Router();

authRouter.get('/usersAll', userController.usersAll);
authRouter.post('/signUp', verifyAuthData, hashPassword, userController.signUp);
authRouter.post('/signIn', verifySignInData, verifyUserExists, verifyPassword, generateToken, userController.signIn);
authRouter.post('/authenticated', passportVerificator.authenticate("jwt", {session: false}), generateToken, userController.authenticated);
authRouter.post('/signOut', passportVerificator.authenticate("jwt", {session: false}), userController.signOut);


export default authRouter;
