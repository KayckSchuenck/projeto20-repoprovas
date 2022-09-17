import joi from 'joi'

export const schemaSignUp=joi.object({
    email:joi.string().email().required(),
    password:joi.string().required(),
    confirmPassword:joi.string().required()
})

export const schemaLogin=joi.object({
    email:joi.string().email().required(),
    password:joi.string().required()
})

export const schemaTest=joi.object({
    link:joi.string().uri().required(),
    category:joi.string().required(),
    name:joi.string().required(),
    discipline:joi.string().required(),
    teacher:joi.string().required()
})
