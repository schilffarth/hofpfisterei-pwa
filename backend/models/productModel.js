const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        allergens: {
            type: [String],
            required: true,
        },
        ingredients: {
            type: [String],
            required: true,
        },
        priceKg: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        discount: {
            type: Number,
            required: true,
        },
        size: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
