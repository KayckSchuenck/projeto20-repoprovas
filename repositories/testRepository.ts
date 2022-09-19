import prisma from "../database.js";
import {CreateTestsData} from '../types/types.js'

export async function getCategoryIdByName(name:string){
    const {id}=await prisma.category.findUnique({
        where:{
            name
        },
        select:{
            id:true
        }
    })
    return id
}

export async function getIdByNames(teacher:string,discipline:string) {

 const {id:teacherId}=await prisma.teacher.findUnique({
    where:{name:teacher}
 })
 const {id:disciplineId}=await prisma.discipline.findUnique({
    where:{name:discipline}
 })
 
 const teachersDisciplines=await prisma.teacherDiscipline.findFirst({
     where:{
         teacherId:teacherId,
         disciplineId:disciplineId
     }
 })
 return teachersDisciplines.id
}

export async function getAllUsers(){
    const users=await prisma.user.findMany({
        select:{
            email:true,
        }
    })
    return users
}

export async function insertTest(createTest:CreateTestsData) {
    await prisma.test.create({
        data:createTest
    })
}


export async function getTestsByDiscipline(){
    const tests = await prisma.term.findMany({
        select: {
            number:true,
            Discipline: {
                select:{
                    name:true,
                    TeacherDiscipline: {
                        select: {
                            Teacher:{
                                select:{
                                    name:true
                                }
                            },
                            Test: {
                                select: {
                                    name: true,
                                    pdfUrl: true,
                                    Category:{
                                        select:{
                                            name:true,                                           
                                        }
                                    }
                                }
                            },
                        }
                    }
                }
            }
        }
    });
    return tests
}

export async function getTestsByTeacher(){
    const tests = await prisma.teacherDiscipline.findMany({
        select: {
                    Test: {
                        select: {
                            name: true,
                            pdfUrl: true,
                            Category:{
                                select:{
                                    name:true,                                           
                                }
                            }
                        }
                    },
                    Teacher:{
                        select:{
                            name:true
                        }
                    },
                    Discipline:{
                        select:{
                            name:true
                        }
                    }
                }
            });
    return tests
}