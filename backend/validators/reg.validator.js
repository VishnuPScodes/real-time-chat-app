import { body, validationResult } from 'express-validator'
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';

export const validateRequest = [xss(), mongoSanitize(), async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({
            error: errors.array()[0].msg,
        });
    }
    else {
        next();
    }
}];

export const regValidator = [
    body('email').notEmpty(),
    ...validateRequest
]



