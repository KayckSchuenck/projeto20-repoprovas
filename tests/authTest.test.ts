import app from '../index';
import supertest from 'supertest';
import { createSignUpBodyFactory } from '../factories/authFactory'

describe("POST /signup", async () => {
    it("given a valid email and password it should return 201", async () => {
        const body = await createSignUpBodyFactory()

        const result = await supertest(app).post("/signup").send(body);
        const status = result.status;
        
        expect(status).toEqual(201);
    });
    it("given a already used email it should return 409", async () => {
        const body = await createSignUpBodyFactory()

        await supertest(app).post("/signup").send(body);
        const result = await supertest(app).post("/signup").send(body);
        const status = result.status;
        
        expect(status).toEqual(409);
    });
    it("if confirm password isn't the same as password it should return 401", async () => {
        const body = await createSignUpBodyFactory()
        const testBody={...body, confirmPassword:"TestingPassword"}

        const result = await supertest(app).post("/signup").send(body);
        const status = result.status;
        
        expect(status).toEqual(401);
    });
});

describe("POST /login", async () => {
    it("given an existing email and password it should return 200", async () => {
        const body = await createSignUpBodyFactory()
        await supertest(app).post("/signup").send(body);

        delete body.confirmPassword

        const result = await supertest(app).post("/login").send(body);
        const status = result.status;
        
        expect(status).toEqual(200);
    });
    it("trying to login with an unregistered email should return 404", async () => {
        const body = await createSignUpBodyFactory()
        delete body.confirmPassword

        const result = await supertest(app).post("/login").send(body);
        const status = result.status;
        
        expect(status).toEqual(404);
    })
    it("trying to login with wrong password should return 401", async () => {
        const body = await createSignUpBodyFactory()
        await supertest(app).post("/signup").send(body);

        delete body.confirmPassword
        const testBody={...body, password:"TestingPassword"}

        const result = await supertest(app).post("/login").send(testBody);
        const status = result.status;
        
        expect(status).toEqual(401);
    })
})


