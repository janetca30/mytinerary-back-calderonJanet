import { Router } from 'express';
import { usersAll, signUp, signIn, authenticated, signOut } from '../controllers/userController.js';
import { verifyAuthData } from '../middleware/verifications.js';
import { verifySignInData } from '../middleware/verifications.js';
import { generateToken, hashPassword, verifyPassword, verifyUserExists } from '../middleware/auth.js';
import { passportVerificator } from '../middleware/auth.js';

const authRouter = Router();

authRouter.get('/usersAll', usersAll);
authRouter.post('/signUp', verifyAuthData, hashPassword, signUp);
authRouter.post('/signIn', verifySignInData, verifyUserExists, verifyPassword, generateToken, signIn);
authRouter.post('/auth', passportVerificator.authenticate("jwt", {session: false}), generateToken, authenticated);
authRouter.post('/signOut', passportVerificator.authenticate("jwt", {session: false}), signOut);


export default authRouter;
