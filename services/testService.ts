import {insertTest} from '../repositories/testReposiroty.js'

export async function serviceCreateTest(name:string,discipline:string,teacher:string,link:string,category:string){
    await insertTest()
}