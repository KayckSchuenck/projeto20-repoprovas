import sgMail from '@sendgrid/mail'
import { createClient } from '@supabase/supabase-js'
import {insertTest,getCategoryIdByName,getIdByNames,getTestsByDiscipline,getTestsByTeacher,getAllUsers} from '../repositories/testRepository.js'
import notFoundError from '../middlewares/notFoundError.js'

const supabase = createClient(
  'https://mouyviysfrdgaxvriwzz.supabase.co',
  process.env.SUPABASE_KEY
)

async function sendEmail(data:string){
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    try{
        const users=await getAllUsers()
        const msg = {
            to: users, 
            from: 'ycferreiras@gmail.com',
            subject: 'Prova Adicionada Repoprovas',
            text: data,
            html: `<em>${data}</em>`,
        }
        await sgMail.send(msg)
    } catch(e){
        console.log(e)
    }
}

// async function storagePdf(pdf:Express.Multer.File){
//     await supabase.storage
//     .from('tests')
//     .upload(`links/test${number}.pdf`, pdf,{
//     upsert:true
// })
//     const { publicURL, error } = await supabase.storage
//     .from('tests')
//     .getPublicUrl(`links/test${number}.pdf`)

//     return publicURL
// }

export async function serviceCreateTest(name:string,discipline:string,teacher:string,pdf,category:string){
    const categoryId:number=await getCategoryIdByName(category)
    if(!categoryId) notFoundError('categoria')

    const teacherDisciplineId:number=await getIdByNames(teacher,discipline)
    if(!teacherDisciplineId) notFoundError('disciplina ou professor')
    // const link= await storagePdf(pdf)
    const link=pdf

    await insertTest({name,pdfUrl:link,categoryId,teacherDisciplineId})

    const emailData=`A seguinte prova foi adicionada: ${teacher}  ${category} - ${name}  (${discipline})`
    await sendEmail(emailData)
}

export async function serviceGetTestsByDiscipline(){
    const tests=await getTestsByDiscipline()
    return tests
}

export async function serviceGetTestsByTeacher(){
    const tests=await getTestsByTeacher()
    return tests
}

