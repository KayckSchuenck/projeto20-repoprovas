import {Router} from 'express'
import multer from 'multer'
import schemaValidateMiddleware from "../middlewares/schemaMiddleware";
import { schemaTest } from '../schemas/schemas';
import { createTest, getTestsByDiscipline,getTestsByTeacher } from '../controllers/testControllers';
import { validateToken } from '../middlewares/tokenValidation';

// const upload = multer({ dest: 'uploads/' })
const testRouter=Router();

// testRouter.post('/tests',upload.single('pdf'),schemaValidateMiddleware(schemaTest),validateToken,createTest)
testRouter.post('/tests',schemaValidateMiddleware(schemaTest),validateToken,createTest)
testRouter.get('/testsDiscipline',validateToken,getTestsByDiscipline)
testRouter.get('/testsTeacher',validateToken,getTestsByTeacher)

export default testRouter