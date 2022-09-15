import prisma from "../database.js";
import { CreateUsersData } from "../types/types.js";

export async function findByEmail(email:string){
    return prisma.users.findUnique({
        where: { email },
    });
}

export async function insertUser(createUser:CreateUsersData){
    await prisma.users.create({
        data:createUser
      });
}
