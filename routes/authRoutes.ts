import {Router} from 'express'
import schemaValidateMiddleware from "../middlewares/schemaMiddleware.js";
import { schemaLogin,schemaSignUp } from '../schemas/schemas.js';
import { login,signUp } from '../controllers/authControllers.js';

const authRouter=Router();

authRouter.post('/signup',schemaValidateMiddleware(schemaSignUp),signUp)
authRouter.post('/login',schemaValidateMiddleware(schemaLogin),login)

export default authRouter