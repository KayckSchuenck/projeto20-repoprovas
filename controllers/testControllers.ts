import { Request,Response } from "express";
import {serviceCreateTest,serviceGetTestsByDiscipline,serviceGetTestsByTeacher} from "../services/testService";

export async function createTest(req:Request, res:Response) {
    const {name,discipline,teacher,category}=req.body
    // const pdf=req.file
    const {link:pdf}=req.body
    await serviceCreateTest(name,discipline,teacher,pdf,category)
    res.sendStatus(201)
}


export async function getTestsByDiscipline(req:Request, res:Response) {
    const tests=await serviceGetTestsByDiscipline()
    res.status(200).send(tests)
}

export async function getTestsByTeacher(req:Request, res:Response) {
    const tests=await serviceGetTestsByTeacher()
    res.status(200).send(tests)
}