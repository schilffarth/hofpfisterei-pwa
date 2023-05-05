const PreorderModel = require("../models/preorderModel");

const getAllPreorders = async (req, res) => {
    try {
        const preorders = await PreorderModel.find({});
        res.status(200).json(preorders);
    } catch (error) {
        res.status(500).json({ message: "Error getting preorders", error });
    }
};

const getPreorderById = async (req, res) => {
    try {
        const preorder = await PreorderModel.findById(req.params.preorderId);
        if (preorder) {
            res.status(200).json(preorder);
        } else {
            res.status(404).json({ message: "Preorder not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error getting preorder", error });
    }
};

const createPreorder = async (req, res) => {
    try {
        const newPreorder = new PreorderModel(req.body);
        await newPreorder.save();
        res.status(201).json(newPreorder);
    } catch (error) {
        res.status(500).json({ message: "Error creating preorder", error });
    }
};

const updatePreorder = async (req, res) => {
    try {
        const updatedPreorder = await PreorderModel.findByIdAndUpdate(
            req.body._id,
            req.body,
            { new: true }
        );
        if (updatedPreorder) {
            res.status(200).json(updatedPreorder);
        } else {
            res.status(404).json({ message: "Preorder not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating preorder", error });
    }
};

module.exports = {
    getAllPreorders,
    getPreorderById,
    createPreorder,
    updatePreorder,
};
