const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.post('/create', productController.createProduct);

router.get('/', productController.listProducts);

router.delete('/:id', productController.deleteProduct);

router.post('/:id/update_quantity', productController.updateProductQuantity);

module.exports = router;
