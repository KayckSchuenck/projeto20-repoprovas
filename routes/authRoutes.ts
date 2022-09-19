import {Router} from 'express'
import schemaValidateMiddleware from "../middlewares/schemaMiddleware";
import { schemaLogin,schemaSignUp } from '../schemas/schemas';
import { login,signUp } from '../controllers/authControllers';

const authRouter=Router();

authRouter.post('/signup',schemaValidateMiddleware(schemaSignUp),signUp)
authRouter.post('/login',schemaValidateMiddleware(schemaLogin),login)

export default authRouter