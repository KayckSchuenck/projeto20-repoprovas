import {insertTest,getCategoryIdByName,getIdByNames,getTestsByDiscipline,getTestsByTeacher} from '../repositories/testRepository.js'

export async function serviceCreateTest(name:string,discipline:string,teacher:string,link:string,category:string){
    const categoryId:number=await getCategoryIdByName(category)
    const teacherDisciplineId:number=await getIdByNames(teacher,discipline)
    await insertTest({name,pdfUrl:link,categoryId,teacherDisciplineId})
}

export async function serviceGetTestsByDiscipline(){
    const tests=await getTestsByDiscipline()
    return tests
}

export async function serviceGetTestsByTeacher(){
    const tests=await getTestsByTeacher()
    return tests
}

