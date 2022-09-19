import {faker} from '@faker-js/faker'

export async function createPostTestBodyFactory(){
    return {
        link:faker.internet.url(),
        name:faker.name.fullName(),
        teacher:faker.name.fullName(),
        category:faker.word.adjective(),
        discipline:faker.word.noun()
    }
}