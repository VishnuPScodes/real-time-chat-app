import { body } from 'express-validator'

export const regValidator = () => {
    return body('email').notEmpty()

}