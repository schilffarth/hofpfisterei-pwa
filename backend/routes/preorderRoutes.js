const express = require('express');
const router = express.Router();
const validationMiddleware = require('../middleware/validationMiddleware');
const preorderController = require('../controllers/preorderController');
const schemas = require('../utils/validationSchemas');

// Get all preorders
router.get(
    '/',
    preorderController.getAllPreorders
);

// Get a single preorder by ID
router.get(
    '/:preorderId',
    validationMiddleware(schemas.getPreorderByIdSchema),
    preorderController.getPreorderById
);

// Create a new preorder
router.put(
    '/create',
    // todo validationMiddleware(schemas.createPreorderSchema),
    preorderController.createPreorder
);

// Create a new preorder
router.post(
    '/update',
    preorderController.updatePreorder
);

module.exports = router;
