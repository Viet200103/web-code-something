const Product = require("../model/product.model");


const getProducts = async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const product = await Product.findById(productId)
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateProduct = async (req, res) => {
    try {
        const { productId } = req.params;

        const product = await  Product.findByIdAndUpdate(productId, req.body)

        if (!product) {
            return res.status(404).json({message: 'Product not found'});
        }

        const productUpdate = await Product.findById(productId);
        res.status(200).json(productUpdate);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
}