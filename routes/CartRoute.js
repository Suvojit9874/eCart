const express= require('express');
const { addToCart, getCartDetails, removeProductFromCart, removeWholeCart } = require('../controllers/Cart.controller');
const router = express.Router();

router.post('/user/:userId/product/:productId',addToCart) //**** */
router.get('/user/:userId/getall/cart',getCartDetails)
router.delete('/user/:userId/remove/product/:productId',removeProductFromCart)
router.delete('/user/:userId/delete/all/cart',removeWholeCart)


module.exports = router


// Cart -> all product which are added in cart    -> Place order button
// CartCard - >  quantity , productImage , price , title , button to remove product from cart



