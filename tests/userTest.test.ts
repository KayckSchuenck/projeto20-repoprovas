import app from '../index';
import supertest from 'supertest';
import {createPostTestBodyFactory} from '../factories/testFactory'

describe("POST /tests", async () => {
    it("given a correct body it should return 201", async () => {
        const body=await createPostTestBodyFactory()

        const result = await supertest(app).post("/tests").send(body);
        const status = result.status;
        
        expect(status).toEqual(201);
    })
})

describe("GET /testsDiscipline", async () => {
    it("given an existing token it should return 200", async () => {
        const body=await createPostTestBodyFactory()
        await supertest(app).post("/tests").send(body);

        const result = await supertest(app).get("/tests")
        const status = result.status;
        
        expect(status).toEqual(201);
        expect(result).toBeInstanceOf(Array)
    })
})

describe("GET /testsTeacher", async () => {
    it("given an existing token it should return 200", async () => {
        const body=await createPostTestBodyFactory()
        await supertest(app).post("/tests").send(body);

        const result = await supertest(app).get("/tests")
        const status = result.status;
        
        expect(status).toEqual(201);
        expect(result).toBeInstanceOf(Array)
    })
})