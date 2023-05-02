const { validationResult, checkSchema } = require('express-validator');

const validationMiddleware = (schema) => {
    return [
        checkSchema(schema),
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                console.log(errors);
                return res.status(400).json({ message: 'Validation failed', errors: errors.array() });
            }
            next();
        },
    ];
};

module.exports = validationMiddleware;
