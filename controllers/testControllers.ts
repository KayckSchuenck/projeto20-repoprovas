import { Request,Response } from "express";
import {serviceCreateTest} from "../services/testService.js";

export async function createTest(req:Request, res:Response) {
    const {name,discipline,teacher,link,category}=req.body
    await serviceCreateTest(name,discipline,teacher,link,category)
    
    res.sendStatus(201)
}