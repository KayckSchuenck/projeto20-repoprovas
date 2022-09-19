import {faker} from '@faker-js/faker'

export async function createSignUpBodyFactory(){
    const password=faker.datatype.string()
    return {
        email:faker.internet.email(),
        password,
        confirmPassword:password
    }
}
