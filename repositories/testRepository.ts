import prisma from "../database";
import {CreateTestsData} from '../types/types'

export async function getCategoryIdByName(name:string){
    const category=await prisma.category.findUnique({
        where:{
            name
        },
        select:{
            id:true
        }
    })
    if(category.id) return category.id
    else return undefined
}

export async function getIdByNames(teacher:string,discipline:string) {

 const teacherId=await prisma.teacher.findUnique({
    where:{name:teacher}
 })
 const disciplineId=await prisma.discipline.findUnique({
    where:{name:discipline}
 })

 if(!disciplineId.id||!teacherId.id) return undefined

 const teachersDisciplines=await prisma.teacherDiscipline.findFirst({
     where:{
         teacherId:teacherId.id,
         disciplineId:disciplineId.id
     }
 })

 if(teachersDisciplines.id) return teachersDisciplines.id
 else return undefined
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