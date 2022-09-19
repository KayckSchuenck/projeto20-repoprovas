import {faker} from '@faker-js/faker'

export async function createSignUpBodyFactory(){
    const password=faker.datatype.string()
    return {
        name:faker.name.fullName(),
        password,
        confirmPassword:password
    }
}
