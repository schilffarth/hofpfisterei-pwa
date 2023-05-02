// Helper functions

const createValidationSchema = (field, validationOptions) => {
    const { type, location, required, min, errorMessage } = validationOptions;
    let commonValidation = {
        in: location,
        trim: true,
    };

    if (required) commonValidation.notEmpty = true;

    if (type) commonValidation[type] = true;

    if (min) commonValidation.isLength = { options: { min: min } };

    commonValidation.errorMessage = errorMessage;

    return {
        [field]: commonValidation,
    };
};

const createEmailSchema = (location, required = true) =>
    createValidationSchema('email', {
        type: 'isEmail',
        location,
        required,
        errorMessage: 'Email is required and should be a valid email address.',
    });

// Schemas

const getProductByIdSchema = {
    ...createValidationSchema('productId', {
        location: 'body',
        type: 'isString',
        required: true,
        errorMessage: 'Product ID is required.',
    }),
};

const createProductSchema = {
    ...createValidationSchema('name', {
        location: 'body',
        type: 'isString',
        required: true,
        errorMessage: 'Name is required.',
    }),
    ...createValidationSchema('category', {
        location: 'body',
        type: 'isString',
        required: true,
        errorMessage: 'Category is required.',
    }),
    ...createValidationSchema('type', {
        location: 'body',
        type: 'isString',
        required: true,
        errorMessage: 'Type is required.',
    }),
    ...createValidationSchema('description', {
        location: 'body',
        type: 'isString',
        required: true,
        errorMessage: 'Description is required.',
    }),
    ...createValidationSchema('allergens', {
        location: 'body',
        type: 'isString',
        required: true,
        errorMessage: 'Allergens are required.',
    }),
    ...createValidationSchema('ingredients', {
        location: 'body',
        type: 'isString',
        required: true,
        errorMessage: 'Ingredients are required.',
    }),
    ...createValidationSchema('priceKg', {
        location: 'body',
        type: 'isString',
        required: true,
        errorMessage: 'Price per kg is required.',
    }),
    ...createValidationSchema('price', {
        location: 'body',
        type: 'isString',
        required: true,
        errorMessage: 'Price per whole piece is required.',
    }),
    ...createValidationSchema('discount', {
        location: 'body',
        type: 'isNumeric',
        required: true,
        errorMessage: 'Discount is required.',
    }),
    ...createValidationSchema('size', {
        location: 'body',
        type: 'isNumeric',
        required: true,
        errorMessage: 'Size is required.',
    }),
};

// Export schemas

module.exports = {
    getProductByIdSchema,
    createProductSchema,
    // Export other schemas here
};
