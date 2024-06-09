const express= require('express');
const { getAllProduct, getOneProduct, deleteProduct, updateProduct } = require('../controllers/product');
const router = express.Router();

router.get('/get/product',getAllProduct);
router.get('/get/one/product',getOneProduct);
router.delete('/delete/product',deleteProduct)
router.put('/product/update',updateProduct)

module.exports = router