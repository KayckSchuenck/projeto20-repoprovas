import {faker} from '@faker-js/faker'
import supertest from 'supertest';
import app from '../index.js';
import { createSignUpBodyFactory } from './authFactory';

export async function createPostTestBodyFactory(){
    return {
        link:faker.internet.url(),
        name:faker.name.fullName(),
        teacher:faker.name.fullName(),
        category:"Projeto",
        discipline:faker.word.noun()
    }
}

export async function tokenFactory(){
    const result = await createSignUpBodyFactory()
    await supertest(app).post("/signup").send(result);

    delete result.confirmPassword
    const {text:token}= await supertest(app).post("/login").send(result);

    return token
}