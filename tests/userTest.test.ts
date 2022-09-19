import app from '../index';
import supertest from 'supertest';
import prisma from '../database';
import {createPostTestBodyFactory,tokenFactory} from '../factories/testFactory'

afterAll(async () => {
    await prisma.$transaction([
      prisma.$executeRaw`TRUNCATE TABLE users`,
      prisma.$executeRaw`TRUNCATE TABLE categories CASCADE`,
      prisma.$executeRaw`TRUNCATE TABLE tests CASCADE`,
      prisma.$executeRaw`TRUNCATE TABLE disciplines CASCADE`,
      prisma.$executeRaw`TRUNCATE TABLE "teachersDisciplines" CASCADE`,
      prisma.$executeRaw`TRUNCATE TABLE terms CASCADE`,
      prisma.$executeRaw`TRUNCATE TABLE teachers CASCADE`,
    ]);
    await prisma.$disconnect();
  });

describe("POST /tests", () => {
    it("given a correct body it should return 201", async () => {
        const body=await createPostTestBodyFactory()
        const token=await tokenFactory()

        const result = await supertest(app).post("/tests").send(body).set("Authorization",`Bearer ${token}`);
        const status = result.status;
        
        expect(status).toEqual(201);
    })
})

describe("GET /testsDiscipline", () => {
    it("given an existing token it should return 200", async () => {
        const body=await createPostTestBodyFactory()
        const token=await tokenFactory()
        await supertest(app).post("/tests").send(body).set("Authorization",`Bearer ${token}`);

        const result = await supertest(app).get("/testsDiscipline").set("Authorization",`Bearer ${token}`)
        const status = result.status;
        
        expect(status).toEqual(200);
        expect(result.body).toBeInstanceOf(Array)
    })
})

describe("GET /testsTeacher", () => {
    it("given an existing token it should return 200", async () => {
        const body=await createPostTestBodyFactory()
        const token=await tokenFactory()
        await supertest(app).post("/tests").send(body).set("Authorization",`Bearer ${token}`);

        const result = await supertest(app).get("/testsTeacher").set("Authorization",`Bearer ${token}`)
        const status = result.status;
        
        expect(status).toEqual(200);
        expect(result.body).toBeInstanceOf(Array)
    })
})