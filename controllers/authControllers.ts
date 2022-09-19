import { Request,Response } from "express";
import { serviceLogin,serviceSignUp } from "../services/authService";

export async function signUp(req:Request, res:Response) {
    const {  email, password, confirmPassword } = req.body;
    await serviceSignUp(email,password,confirmPassword)
    res.sendStatus(201);
}
  

export async function login(req:Request, res:Response) {
    const { email, password } = req.body;
    const token=await serviceLogin(email,password)
    res.status(200).send(token);
}