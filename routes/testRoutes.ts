import {Router} from 'express'
import schemaValidateMiddleware from "../middlewares/schemaMiddleware.js";
import { schemaTest } from '../schemas/schemas.js';
import { createTest } from '../controllers/testControllers.js';

const testRouter=Router();

testRouter.post('/signup',schemaValidateMiddleware(schemaTest),createTest)

export default testRouter