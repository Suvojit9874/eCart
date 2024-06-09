const express= require('express');
const { createOrder, getOrderDetails } = require('../controllers/Order');
const router = express.Router();


router.post('/order/create',createOrder)
router.get('/get/orderdetails',getOrderDetails)
module.exports = router