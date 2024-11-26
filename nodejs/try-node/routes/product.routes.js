const express = require('express');
const router = express.Router();
const productController = require("../controllers/product.controller");

router.get('/', productController.getProducts);
router.get('/:productId', productController.getProduct)
router.post('/', productController.createProduct)
router.put("/:productId", productController.updateProduct)

module.exports = router;