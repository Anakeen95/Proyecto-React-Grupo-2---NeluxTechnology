const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductController);
router.put('/:id', productController.updateProductController);
router.post('/', productController.createProductController);
router.delete('/:id', productController.deleteProductController);

// Nuevas rutas para actualizar y devolver stock
router.put('/:id/updateStock', productController.updateStockController);
router.put('/:id/returnStock', productController.returnStockController);

module.exports = router;
