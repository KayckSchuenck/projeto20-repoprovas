import {Router} from 'express'
import schemaValidateMiddleware from "../middlewares/schemaMiddleware.js";
import { schemaTest } from '../schemas/schemas.js';
import { createTest, getTestsByDiscipline,getTestsByTeacher } from '../controllers/testControllers.js';
import { validateToken } from '../middlewares/tokenValidation.js';

const testRouter=Router();

testRouter.post('/tests',schemaValidateMiddleware(schemaTest),validateToken,createTest)
testRouter.get('/testsDiscipline',validateToken,getTestsByDiscipline)
testRouter.get('/testsTeacher',validateToken,getTestsByTeacher)

export default testRouter