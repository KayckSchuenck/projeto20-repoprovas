import {Router} from 'express'
import schemaValidateMiddleware from "../middlewares/schemaMiddleware.js";
import { schemaLoginSignUp } from '../schemas/schemas.js';
import { login,signUp } from '../controllers/authControllers.js';

const authRouter=Router();

authRouter.post('/signup',schemaValidateMiddleware(schemaLoginSignUp),signUp)
authRouter.post('/login',schemaValidateMiddleware(schemaLoginSignUp),login)

export default authRouter