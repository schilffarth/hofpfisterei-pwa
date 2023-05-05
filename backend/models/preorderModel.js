const mongoose = require("mongoose");
const { Schema } = mongoose;

const PreorderSchema = new Schema(
    {
        store: {
            type: String,
            required: true,
        },
        pickup: {
            type: Date,
            required: true,
        },
        products: {
            type: [{}],
            required: true,
        },
        customerName: {
            type: String,
            required: true,
        },
        customerEmail: {
            type: String,
            required: true,
        },
        customerPhone: {
            type: String,
            required: true,
        },
        confirmed: {
            type: Boolean,
            required: false,
        },
        paid: {
            type: Boolean,
            required: false,
        },
        collected: {
            type: Boolean,
            required: false,
        }
    },
    {
        timestamps: true,
    },
);

const PreorderModel = mongoose.model("Preorder", PreorderSchema);

module.exports = PreorderModel;
