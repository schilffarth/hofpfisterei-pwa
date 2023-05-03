// Helper functions

const createValidationSchema = (field, validationOptions) => {
    const { type, location, required, min, errorMessage, customValidation } = validationOptions;
    let commonValidation = {
        in: location,
        trim: true,
    };

    if (required) commonValidation.notEmpty = true;

    if (type) commonValidation[type] = true;

    if (min) commonValidation.isLength = { options: { min: min } };

    if (customValidation) commonValidation.custom = customValidation;

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
    ...createValidationSchema('image', {
        location: 'body',
        type: 'isString',
        required: true,
        errorMessage: 'Image link is required.',
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
        customValidation: {
            options: (value) => {
                return Array.isArray(JSON.parse(value));
            },
            errorMessage: 'Allergens should be an array.',
        },
    }),
    ...createValidationSchema('ingredients', {
        location: 'body',
        type: 'isString',
        required: true,
        errorMessage: 'Ingredients are required.',
        customValidation: {
            options: (value) => {
                return Array.isArray(JSON.parse(value));
            },
            errorMessage: 'Ingredients should be an array.',
        },
    }),
    ...createValidationSchema('priceKg', {
        location: 'body',
        type: 'isString',
        required: true,
        errorMessage: 'Price per kg is required.',
        customValidation: {
            options: (value) => {
                return !isNaN(parseFloat(value));
            },
            errorMessage: 'Price per kg should be a numeric value.',
        },
    }),
    ...createValidationSchema('price', {
        location: 'body',
        type: 'isString',
        required: true,
        errorMessage: 'Price per whole piece is required.',
        customValidation: {
            options: (value) => {
                return !isNaN(parseFloat(value));
            },
            errorMessage: 'Price per whole piece should be a numeric value.',
        },
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
