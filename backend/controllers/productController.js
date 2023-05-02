const Product = require("../models/productModel");

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving product data.', error: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving product data.', error: error.message });
    }
};

const createProduct = async (req, res) => {
    try {
        const newProduct = new Product({
            name: req.body.name,
            category: req.body.category,
            type: req.body.type,
            description: req.body.description,
            allergens: req.body.allergens,
            ingredients: req.body.ingredients,
            priceKg: req.body.priceKg,
            price: req.body.price,
            discount: req.body.discount,
            size: req.body.size
        });

        console.log(newProduct);

        await newProduct.save();
        res.status(201).json({ message: 'Created product successfully.', product: newProduct });
    } catch (error) {
        res.status(500).json({ message: 'Error creating product.', error: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (updatedProduct) {
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Product not found.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating product.', error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (deletedProduct) {
            res.status(200).json({ message: 'Product deleted.' });
        } else {
            res.status(404).json({ message: 'Product not found.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product.', error: error.message });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
