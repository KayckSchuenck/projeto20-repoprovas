import prisma from "../database";
import { CreateUsersData } from "../types/types";

export async function findByEmail(email:string){
    return prisma.user.findUnique({
        where: { email },
    });
}

export async function insertUser(createUser:CreateUsersData){
    await prisma.user.create({
        data:createUser
      });
}
