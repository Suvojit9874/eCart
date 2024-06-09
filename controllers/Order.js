const mongoose = require('mongoose');
const Order = require('../models/Orders')
const User=require('../models/User')
exports.createOrder = async (req, res) => {
    try {
        const {user,totalAmount,items} = req.body;
        const createdOrder= await Order.create({user,totalAmount,items});
        const updatedUser=await User.findOneAndUpdate({_id:user},{$push:{order:createdOrder._id}})
        return res.status(200).json({
            status:true,
            message:'Order created successfully'
        })
    } catch (error) {
        console.log(error);
        return res.status(500), json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}

exports.getOrderDetails = async (req, res) => {
    try {
        const userId=req.body.userId;
        const userData = await User.findOne({_id:userId}).populate('order').exec();
        return res.status(200).json({
            success:true,
            data:userData
        })
    } catch (error) {
        console.log(error);
        return res.status(500), json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}