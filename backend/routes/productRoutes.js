const express = require('express');
const router = express.Router();
const validationMiddleware = require('../middleware/validationMiddleware');
const productController = require('../controllers/productController');
const schemas = require('../utils/validationSchemas');

// Get all products
router.get(
    '/',
    productController.getAllProducts
);

// Get a single product by ID
router.get(
    '/:productId',
    validationMiddleware(schemas.getProductByIdSchema),
    productController.getProductById
);

// Create a new product
router.put(
    '/create',
    // validationMiddleware(schemas.createProductSchema),
    productController.createProduct
);

module.exports = router;
